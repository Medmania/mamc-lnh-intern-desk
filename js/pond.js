/**
 * MAMC-LNH Intern Portal — Header Water Engine
 * Build: v19-water-sim
 *
 * Drop-in replacement for the old ring-sum engine. Same canvas id, same
 * init function name, same look. Drop it in as js/pond.js.
 *
 * Why dragging died at 1-2 mm before:
 *   1. No touch-action on the canvas, so the browser claimed the gesture for
 *      page scrolling and fired pointercancel after ~10 CSS px. The old
 *      stopDrag() then ended the drag.
 *   2. pointerleave also called stopDrag(), ending desktop drags at the edge.
 *   3. MAX_RIPPLES = 45 with STEP = 5 evicted the oldest ripples during a
 *      fast drag, truncating the trail even when the drag survived.
 *
 * What this engine does instead:
 *   - Two-buffer height-field simulation. Waves interfere, disperse and
 *      persist like water instead of being summed expanding rings.
 *   - touch-action:none + setPointerCapture, so one drag runs as far as you
 *      push it, in any direction, even outside the header.
 *   - The stroke is injected as a capsule along the segment between pointer
 *      events, so the wake is one smooth ridge, not a row of cones.
 *   - Fixed 60 Hz simulation steps, so the water behaves the same at 30, 60
 *      and 120 Hz.
 *   - Shading comes from the surface normal (specular glints + shaded
 *      troughs), which is what actually reads as wet.
 *   - Only tiles with visible displacement are re-blitted, so a calm frame
 *      costs one drawImage instead of thousands.
 *   - DPR aware, pauses off-screen, honours prefers-reduced-motion.
 *
 * Tuning without editing this file:
 *   window.POND_OPTIONS = { tile: 12, refract: 3.6, brush: 10 };
 *   then load pond.js. window.__pond exposes live stats and a stroke() hook.
 */
(function () {
  'use strict';

  var ENGINE_VERSION = 'v19-water-sim';

  function initPhotorealisticWaterSurface(userOptions) {
    var canvas = document.getElementById('pondCanvas');
    if (!canvas) return null;
    var ctx = canvas.getContext('2d');
    if (!ctx) return null;
    var host = canvas.parentElement || document.body;

    var CFG = {
      cell: 3,            // simulation grid cell, CSS px
      damping: 0.978,     // energy retained per step
      amp: 1.45,          // hard cap on surface height (stops drag accumulation)
      tile: 12,           // refraction tile, CSS px
      refract: 3.6,       // refraction displacement strength
      maxDisp: 2.6,       // displacement clamp, CSS px
      refraction: true,   // set false to skip scene displacement entirely
      specGain: 3.4,      // highlight gain
      specClamp: 0.46,    // max highlight alpha
      brush: 10,          // brush radius, in cells
      brushPower: 1.0,    // master gain for drag strength
      maxDpr: 2,
      reducedMotion: null
    };
    var opts = userOptions || window.POND_OPTIONS || null;
    if (opts) {
      for (var k in opts) {
        if (Object.prototype.hasOwnProperty.call(opts, k)) CFG[k] = opts[k];
      }
    }

    // ---------------------------------------------------------------------
    // Canvas sizing (DPR aware)
    // ---------------------------------------------------------------------
    var width = 0, height = 0, dpr = 1;
    var offscreen = document.createElement('canvas');
    var offCtx = offscreen.getContext('2d');

    // ---------------------------------------------------------------------
    // Simulation state
    // ---------------------------------------------------------------------
    var gw = 0, gh = 0;          // grid dimensions in cells
    var cur = null, prev = null; // height buffers
    var dspX = null, dspY = null;// per-cell displacement, rebuilt each frame

    // Specular layer
    var specCanvas = document.createElement('canvas');
    var specCtx = specCanvas.getContext('2d');
    var specImg = null;

    // trough shading (darkens the dips so crests read as raised)
    var troughCanvas = document.createElement('canvas');
    var troughCtx = troughCanvas.getContext('2d');
    var troughImg = null;

    function resize() {
      // Size from the canvas's own box so whatever your CSS says about its
      // width/height keeps winning. Only the backing store is scaled by DPR.
      var r = canvas.getBoundingClientRect();
      var w = Math.max(1, Math.round(r.width || host.offsetWidth || 1));
      var h = Math.max(1, Math.round(r.height || host.offsetHeight || 1));
      dpr = Math.min(window.devicePixelRatio || 1, CFG.maxDpr);

      width = w; height = h;
      canvas.width = offscreen.width = Math.round(w * dpr);
      canvas.height = offscreen.height = Math.round(h * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      offCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = true;
      offCtx.imageSmoothingEnabled = true;

      // grid: +2 so we always have a dead border of cells
      var ngw = Math.ceil(w / CFG.cell) + 2;
      var ngh = Math.ceil(h / CFG.cell) + 2;
      if (ngw !== gw || ngh !== gh) {
        gw = ngw; gh = ngh;
        cur = new Float32Array(gw * gh);
        prev = new Float32Array(gw * gh);
        dspX = new Float32Array(gw * gh);
        dspY = new Float32Array(gw * gh);
        specCanvas.width = troughCanvas.width = gw;
        specCanvas.height = troughCanvas.height = gh;
        specImg = specCtx.createImageData(gw, gh);
        troughImg = troughCtx.createImageData(gw, gh);
      } else {
        cur.fill(0); prev.fill(0);
      }
      rebuildScene();
    }

    // ---------------------------------------------------------------------
    // Surface interaction: inject a brush into the height field
    // ---------------------------------------------------------------------
    function inject(px, py, power) {
      var cx = px / CFG.cell + 1;
      var cy = py / CFG.cell + 1;
      var R = CFG.brush;
      var x0 = Math.max(1, Math.floor(cx - R));
      var x1 = Math.min(gw - 2, Math.ceil(cx + R));
      var y0 = Math.max(1, Math.floor(cy - R));
      var y1 = Math.min(gh - 2, Math.ceil(cy + R));
      var R2 = R * R;
      for (var y = y0; y <= y1; y++) {
        var dy = y - cy;
        for (var x = x0; x <= x1; x++) {
          var dx = x - cx;
          var d2 = dx * dx + dy * dy;
          if (d2 > R2) continue;
          var f = 1 - Math.sqrt(d2) / R;
          cur[y * gw + x] += power * f * f;
        }
      }
    }

    // Drag along a segment. Distance is measured to the whole segment, not to
    // a row of points, so one pointer event deposits one smooth ridge instead
    // of a line of overlapping cones (which scalloped the wake).
    function injectStroke(x0, y0, x1, y1, power) {
      var ax = x0 / CFG.cell + 1, ay = y0 / CFG.cell + 1;
      var bx = x1 / CFG.cell + 1, by = y1 / CFG.cell + 1;
      var abx = bx - ax, aby = by - ay;
      var abLen2 = abx * abx + aby * aby;
      var R = CFG.brush;
      var x0i = Math.max(1, Math.floor(Math.min(ax, bx) - R));
      var x1i = Math.min(gw - 2, Math.ceil(Math.max(ax, bx) + R));
      var y0i = Math.max(1, Math.floor(Math.min(ay, by) - R));
      var y1i = Math.min(gh - 2, Math.ceil(Math.max(ay, by) + R));

      for (var y = y0i; y <= y1i; y++) {
        var py = y - ay;
        var row = y * gw;
        for (var x = x0i; x <= x1i; x++) {
          var px = x - ax;
          var t = 0;
          if (abLen2 > 0.0001) {
            t = (px * abx + py * aby) / abLen2;
            if (t < 0) t = 0; else if (t > 1) t = 1;
          }
          var dx = px - abx * t;
          var dy = py - aby * t;
          var d2 = dx * dx + dy * dy;
          if (d2 > R * R) continue;
          var f = 1 - Math.sqrt(d2) / R;
          cur[row + x] += power * f * f;
        }
      }
    }

    function sampleHeight(px, py) {
      var gx = Math.min(gw - 2, Math.max(1, Math.round(px / CFG.cell) + 1));
      var gy = Math.min(gh - 2, Math.max(1, Math.round(py / CFG.cell) + 1));
      return cur[gy * gw + gx] || 0;
    }

    // ---------------------------------------------------------------------
    // Physics step
    // ---------------------------------------------------------------------
    function step() {
      var damp = CFG.damping;
      var amp = CFG.amp;
      for (var y = 1; y < gh - 1; y++) {
        var row = y * gw;
        for (var x = 1; x < gw - 1; x++) {
          var i = row + x;
          var v = (cur[i - 1] + cur[i + 1] + cur[i - gw] + cur[i + gw]) * 0.5 - prev[i];
          v *= damp;
          // soft knee: compresses hard peaks instead of clipping them flat
          var av = v < 0 ? -v : v;
          if (av > amp) {
            var over = av - amp;
            av = amp + over / (1 + over * 2.5);
            v = v < 0 ? -av : av;
          }
          if (av < 0.0006) v = 0;
          prev[i] = v;
        }
      }
      var t = cur; cur = prev; prev = t;
    }

    // ---------------------------------------------------------------------
    // Scene: koi, lily pads (unchanged design language)
    // ---------------------------------------------------------------------
    var leaves = [];
    var koiPond = [];
    var NUM_JOINTS = 14;
    var BODY_RADII = [11, 14, 16.5, 17, 16.2, 14.8, 13, 11, 9, 7.2, 5.4, 3.8, 2.4, 1.4];

    function drawLilyPad(tCtx, l, isShadow) {
      tCtx.save();
      tCtx.translate(l.x, l.y);
      tCtx.rotate(l.angle);

      if (isShadow) {
        tCtx.translate(8 + l.depth * 6, 12 + l.depth * 8);
        tCtx.fillStyle = 'rgba(1, 15, 32, ' + (0.22 * l.depth) + ')';
        tCtx.beginPath();
        tCtx.arc(0, 0, l.size, l.notch, Math.PI * 2 - l.notch * 0.5);
        tCtx.lineTo(0, 0);
        tCtx.closePath();
        tCtx.fill();
        tCtx.restore();
        return;
      }

      tCtx.beginPath();
      tCtx.arc(0, 0, l.size, l.notch, Math.PI * 2 - l.notch * 0.5);
      tCtx.lineTo(0, 0);
      tCtx.closePath();

      var leafGrad = tCtx.createRadialGradient(-l.size * 0.2, -l.size * 0.2, 1, 0, 0, l.size);
      leafGrad.addColorStop(0, '#34d399');
      leafGrad.addColorStop(0.6, '#059669');
      leafGrad.addColorStop(1, '#064e3b');
      tCtx.fillStyle = leafGrad;
      tCtx.fill();

      tCtx.strokeStyle = 'rgba(167, 243, 208, 0.45)';
      tCtx.lineWidth = 0.8;
      for (var i = 0; i < 6; i++) {
        var a = (i / 6) * Math.PI * 1.7 + l.notch;
        tCtx.beginPath();
        tCtx.moveTo(0, 0);
        tCtx.lineTo(Math.cos(a) * l.size * 0.85, Math.sin(a) * l.size * 0.85);
        tCtx.stroke();
      }
      tCtx.restore();
    }

    function Koi(type, sizeScale) {
      this.x = Math.random() * (width || 800);
      this.y = Math.random() * (height || 600);
      this.angle = Math.random() * Math.PI * 2;
      this.type = type;
      this.size = sizeScale * (0.85 + Math.random() * 0.3);
      this.speed = 1.1 + Math.random() * 0.4;
      this.vx = Math.cos(this.angle) * this.speed;
      this.vy = Math.sin(this.angle) * this.speed;
      this.spurt = 0;
      this.wiggleCycle = Math.random() * 200;
      this.depth = 0.4 + Math.random() * 0.55;
      this.mouthOpen = 0;
      this.surf = 0;
      this.spine = [];
      for (var i = 0; i < NUM_JOINTS; i++) {
        this.spine.push({
          x: this.x - i * 5.8 * this.size * Math.cos(this.angle),
          y: this.y - i * 5.8 * this.size * Math.sin(this.angle)
        });
      }
    }

    Koi.prototype.update = function (dtScale) {
      var maxSpeed = this.spurt > 0 ? 5.0 : this.speed * 1.35;
      if (this.spurt > 0) this.spurt--;

      var targetFood = null, minDist = 190;
      for (var i = 0; i < foodPellets.length; i++) {
        var fp = foodPellets[i];
        var dist = Math.hypot(fp.x - this.x, fp.y - this.y);
        if (dist < minDist) { minDist = dist; targetFood = fp; }
      }

      if (targetFood) {
        var targetAngle = Math.atan2(targetFood.y - this.y, targetFood.x - this.x);
        var diff = targetAngle - this.angle;
        while (diff < -Math.PI) diff += Math.PI * 2;
        while (diff > Math.PI) diff -= Math.PI * 2;
        this.angle += diff * 0.085;

        if (minDist < 16) {
          this.mouthOpen = 1.0;
          var idx = foodPellets.indexOf(targetFood);
          if (idx !== -1) foodPellets.splice(idx, 1);
          inject(this.x, this.y, -0.20);  // feeding splash goes into the sim
          spawnBubbles(this.x, this.y, 3);
        }
      } else {
        this.angle += (Math.random() - 0.5) * 0.07;
      }

      if (this.mouthOpen > 0) this.mouthOpen -= 0.04;

      this.vx = this.vx * 0.96 + Math.cos(this.angle) * (this.speed * 0.045);
      this.vy = this.vy * 0.96 + Math.sin(this.angle) * (this.speed * 0.045);

      var curSpeed = Math.hypot(this.vx, this.vy);
      if (curSpeed > maxSpeed) {
        this.vx = (this.vx / curSpeed) * maxSpeed;
        this.vy = (this.vy / curSpeed) * maxSpeed;
      }

      var pad = 50;
      if (this.x < pad) this.vx += 0.14;
      if (this.x > width - pad) this.vx -= 0.14;
      if (this.y < pad) this.vy += 0.14;
      if (this.y > height - pad) this.vy -= 0.14;

      this.x += this.vx * dtScale;
      this.y += this.vy * dtScale;
      this.angle = Math.atan2(this.vy, this.vx);

      // ride the surface
      var target = sampleHeight(this.x, this.y);
      this.surf += (target - this.surf) * 0.12;

      this.wiggleCycle += (curSpeed > 2.0 ? 0.38 : 0.22) * dtScale;
      this.spine[0].x = this.x;
      this.spine[0].y = this.y;
      var segmentLen = 5.8 * this.size;

      for (var j = 1; j < NUM_JOINTS; j++) {
        var p = this.spine[j - 1];
        var c = this.spine[j];
        var dx = c.x - p.x, dy = c.y - p.y;
        var d = Math.hypot(dx, dy) || 1;
        c.x = p.x + (dx / d) * segmentLen;
        c.y = p.y + (dy / d) * segmentLen;

        var wave = Math.sin(this.wiggleCycle - j * 0.36) * (j * 0.55) * this.size;
        var normAngle = Math.atan2(dy, dx) + Math.PI / 2;
        c.x += Math.cos(normAngle) * wave * 0.15;
        c.y += Math.sin(normAngle) * wave * 0.15;
      }
    };

    Koi.prototype.draw = function (tCtx, isShadow) {
      tCtx.save();

      if (isShadow) {
        var offset = 12 + this.depth * 14;
        tCtx.translate(offset * 0.5, offset);
        tCtx.fillStyle = 'rgba(0, 10, 28, ' + (0.22 * this.depth) + ')';
      } else {
        tCtx.translate(0, this.surf * 2.2);
      }

      var leftPts = [], rightPts = [];
      var scale = this.size;
      var i, pt, ang;

      for (i = 0; i < NUM_JOINTS; i++) {
        pt = this.spine[i];
        if (i < NUM_JOINTS - 1) {
          var next = this.spine[i + 1];
          ang = Math.atan2(next.y - pt.y, next.x - pt.x) + Math.PI / 2;
        } else {
          ang = Math.atan2(pt.y - this.spine[i - 1].y, pt.x - this.spine[i - 1].x) + Math.PI / 2;
        }
        var r = BODY_RADII[i] * scale;
        leftPts.push({ x: pt.x + Math.cos(ang) * r, y: pt.y + Math.sin(ang) * r });
        rightPts.push({ x: pt.x - Math.cos(ang) * r, y: pt.y - Math.sin(ang) * r });
      }

      // Pectoral fins
      var pFinJoint = this.spine[2];
      var pFlutter = Math.sin(this.wiggleCycle * 1.35) * 0.3;
      for (var s = 0; s < 2; s++) {
        var side = s === 0 ? -1 : 1;
        tCtx.beginPath();
        var baseX = pFinJoint.x + Math.cos(this.angle + side * 1.32) * 11 * scale;
        var baseY = pFinJoint.y + Math.sin(this.angle + side * 1.32) * 11 * scale;
        var tipX = baseX + Math.cos(this.angle + side * (1.82 + pFlutter)) * 28 * scale;
        var tipY = baseY + Math.sin(this.angle + side * (1.82 + pFlutter)) * 28 * scale;
        tCtx.moveTo(baseX, baseY);
        tCtx.bezierCurveTo(tipX, tipY, tipX - side * 5, tipY + 8,
          baseX + Math.cos(this.angle + side * 2.3) * 10 * scale,
          baseY + Math.sin(this.angle + side * 2.3) * 10 * scale);
        tCtx.fillStyle = isShadow ? 'rgba(0,10,28,0.25)' :
          (this.type === 'yamabuki' ? 'rgba(251, 146, 60, 0.75)' : 'rgba(255, 255, 255, 0.8)');
        tCtx.fill();
      }

      // Body
      tCtx.beginPath();
      tCtx.moveTo(leftPts[0].x, leftPts[0].y);
      for (i = 1; i < leftPts.length; i++) tCtx.lineTo(leftPts[i].x, leftPts[i].y);
      tCtx.lineTo(this.spine[NUM_JOINTS - 1].x, this.spine[NUM_JOINTS - 1].y);
      for (i = rightPts.length - 1; i >= 0; i--) tCtx.lineTo(rightPts[i].x, rightPts[i].y);
      tCtx.bezierCurveTo(
        this.x + Math.cos(this.angle + 0.55) * 15 * scale,
        this.y + Math.sin(this.angle + 0.55) * 15 * scale,
        this.x + Math.cos(this.angle - 0.55) * 15 * scale,
        this.y + Math.sin(this.angle - 0.55) * 15 * scale,
        leftPts[0].x, leftPts[0].y
      );
      tCtx.closePath();

      if (isShadow) {
        tCtx.fill();
        tCtx.restore();
        return;
      }

      var dorsalNorm = this.angle + Math.PI / 2;
      var bodyGrad = tCtx.createLinearGradient(
        this.x + Math.cos(dorsalNorm) * 18 * scale,
        this.y + Math.sin(dorsalNorm) * 18 * scale,
        this.x - Math.cos(dorsalNorm) * 18 * scale,
        this.y - Math.sin(dorsalNorm) * 18 * scale
      );

      if (this.type === 'yamabuki') {
        bodyGrad.addColorStop(0, '#fef08a');
        bodyGrad.addColorStop(0.5, '#f97316');
        bodyGrad.addColorStop(1, '#9a3412');
      } else {
        bodyGrad.addColorStop(0, '#ffffff');
        bodyGrad.addColorStop(0.55, '#f1f5f9');
        bodyGrad.addColorStop(1, '#64748b');
      }
      tCtx.fillStyle = bodyGrad;
      tCtx.fill();

      // Markings
      tCtx.save();
      tCtx.clip();
      if (this.type === 'kohaku' || this.type === 'sanke') {
        tCtx.fillStyle = '#ef4444';
        var hd = this.spine[1];
        tCtx.beginPath();
        tCtx.ellipse(hd.x, hd.y, 8.5 * scale, 6 * scale, this.angle, 0, Math.PI * 2);
        tCtx.fill();

        tCtx.fillStyle = '#f97316';
        var md = this.spine[4];
        tCtx.beginPath();
        tCtx.ellipse(md.x, md.y, 11 * scale, 7.5 * scale, this.angle - 0.15, 0, Math.PI * 2);
        tCtx.fill();
      }
      if (this.type === 'sanke') {
        tCtx.fillStyle = '#0f172a';
        var s1 = this.spine[3];
        tCtx.beginPath();
        tCtx.ellipse(s1.x + 3, s1.y, 5 * scale, 3.5 * scale, this.angle + 0.4, 0, Math.PI * 2);
        tCtx.fill();
      }
      tCtx.restore();

      // Tail
      var last = this.spine[NUM_JOINTS - 1];
      var second = this.spine[NUM_JOINTS - 2];
      var tailAng = Math.atan2(last.y - second.y, last.x - second.x);
      var flare = Math.sin(this.wiggleCycle) * 7 * scale;

      tCtx.beginPath();
      tCtx.moveTo(last.x, last.y);
      tCtx.quadraticCurveTo(
        last.x + Math.cos(tailAng - 0.75) * 24 * scale,
        last.y + Math.sin(tailAng - 0.75) * 24 * scale + flare,
        last.x + Math.cos(tailAng - 0.28) * 34 * scale,
        last.y + Math.sin(tailAng - 0.28) * 34 * scale + flare
      );
      tCtx.quadraticCurveTo(
        last.x + Math.cos(tailAng) * 26 * scale,
        last.y + Math.sin(tailAng) * 26 * scale,
        last.x + Math.cos(tailAng + 0.28) * 34 * scale,
        last.y + Math.sin(tailAng + 0.28) * 34 * scale - flare
      );
      tCtx.quadraticCurveTo(
        last.x + Math.cos(tailAng + 0.75) * 24 * scale,
        last.y + Math.sin(tailAng + 0.75) * 24 * scale - flare,
        last.x, last.y
      );
      tCtx.fillStyle = this.type === 'yamabuki' ? 'rgba(251, 146, 60, 0.75)' : 'rgba(255, 255, 255, 0.8)';
      tCtx.fill();

      tCtx.restore();
    };

    function rebuildScene() {
      leaves = [];
      for (var i = 0; i < 6; i++) {
        leaves.push({
          x: Math.random() * (width || 800),
          y: Math.random() * (height || 600),
          size: 16 + Math.random() * 18,
          angle: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.003,
          driftX: (Math.random() - 0.5) * 0.12,
          driftY: (Math.random() - 0.5) * 0.08,
          phase: Math.random() * Math.PI * 2,
          notch: 0.32 + Math.random() * 0.25,
          depth: 0.3 + Math.random() * 0.5
        });
      }
      if (koiPond.length === 0) {
        koiPond = [
          new Koi('kohaku', 1.05),
          new Koi('yamabuki', 1.15),
          new Koi('sanke', 0.95),
          new Koi('kohaku', 0.9),
          new Koi('yamabuki', 1.0)
        ];
      } else {
        koiPond.forEach(function (f) {
          f.x = Math.min(Math.max(50, f.x), Math.max(51, width - 50));
          f.y = Math.min(Math.max(50, f.y), Math.max(51, height - 50));
        });
      }
    }

    // ---------------------------------------------------------------------
    // Food & bubbles
    // ---------------------------------------------------------------------
    var foodPellets = [];
    var bubbles = [];

    function dropFood(x, y) {
      for (var i = 0; i < 3; i++) {
        foodPellets.push({
          x: x + (Math.random() - 0.5) * 26,
          y: y + (Math.random() - 0.5) * 26,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: 2.2 + Math.random() * 0.8,
          life: 600,
          bobPhase: Math.random() * Math.PI * 2
        });
      }
      inject(x, y, -0.26);
      spawnBubbles(x, y, 4);
    }

    function spawnBubbles(x, y, count) {
      for (var i = 0; i < count; i++) {
        bubbles.push({
          x: x + (Math.random() - 0.5) * 14,
          y: y + (Math.random() - 0.5) * 14,
          r: 1.5 + Math.random() * 2.8,
          vy: -(0.5 + Math.random() * 0.9),
          vx: (Math.random() - 0.5) * 0.4,
          alpha: 0.9,
          wobble: Math.random() * Math.PI * 2
        });
      }
    }

    // ---------------------------------------------------------------------
    // Pointer handling — the part that makes dragging continuous
    // ---------------------------------------------------------------------
    // Without this the browser steals the gesture for page scroll and fires
    // pointercancel after ~10 CSS px. That was the "1-2 mm" limit.
    canvas.style.touchAction = 'none';
    canvas.style.webkitUserSelect = 'none';
    canvas.style.userSelect = 'none';
    canvas.style.cursor = 'crosshair';

    var activePointer = null;
    var lastX = 0, lastY = 0, downX = 0, downY = 0;
    var downTime = 0, moved = 0, lastTapTime = 0;

    function localPoint(e) {
      var r = canvas.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    }

    function onDown(e) {
      if (activePointer !== null) return;
      activePointer = e.pointerId;
      if (canvas.setPointerCapture) {
        try { canvas.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
      }
      var p = localPoint(e);
      lastX = downX = p.x;
      lastY = downY = p.y;
      downTime = performance.now();
      moved = 0;
      inject(p.x, p.y, -0.16 * CFG.brushPower);
      if (e.cancelable) e.preventDefault();
    }

    function onMove(e) {
      if (e.pointerId !== activePointer) return;
      var p = localPoint(e);
      var dx = p.x - lastX, dy = p.y - lastY;
      var dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 0.5) return;

      moved += dist;
      // Strength tracks distance travelled, so a slow drag and a fast drag
      // deposit the same wake per centimetre. The cap stops a single huge
      // jump (e.g. a stalled frame) from blasting a crater.
      var power = Math.min(0.85, dist * 0.026) * CFG.brushPower;
      injectStroke(lastX, lastY, p.x, p.y, -power);

      lastX = p.x;
      lastY = p.y;
      if (e.cancelable) e.preventDefault();
    }

    function onUp(e) {
      if (e.pointerId !== activePointer) return;
      activePointer = null;
      if (canvas.releasePointerCapture) {
        try { canvas.releasePointerCapture(e.pointerId); } catch (err) { /* ignore */ }
      }

      var elapsed = performance.now() - downTime;
      var p = localPoint(e);
      var tapDist = Math.hypot(p.x - downX, p.y - downY);

      if (elapsed < 260 && tapDist < 9 && moved < 9) {
        var now = performance.now();
        if (now - lastTapTime < 340) {
          dropFood(p.x, p.y);      // double tap feeds
          lastTapTime = 0;
        } else {
          lastTapTime = now;
          inject(p.x, p.y, -0.30); // single tap: solid plop
        }
      }
    }

    function onCancel(e) {
      if (e.pointerId !== activePointer) return;
      activePointer = null;
    }

    canvas.addEventListener('pointerdown', onDown);
    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerup', onUp);
    canvas.addEventListener('pointercancel', onCancel);

    // ---------------------------------------------------------------------
    // Per-frame field pass: displacement + specular ImageData
    // ---------------------------------------------------------------------
    var LX = -0.45, LY = -0.89;   // light from upper-left

    function buildFields() {
      var data = specImg.data;
      var tdata = troughImg.data;
      var gain = CFG.specGain;
      var clamp = CFG.specClamp;
      var p = 0;
      var gwL = gw;

      for (var y = 0; y < gh; y++) {
        var row = y * gwL;
        for (var x = 0; x < gwL; x++) {
          var i = row + x;

          if (x === 0 || y === 0 || x === gwL - 1 || y === gh - 1) {
            dspX[i] = 0; dspY[i] = 0;
            data[p + 3] = 0;
            tdata[p + 3] = 0;
            p += 4;
            continue;
          }

          var hL = cur[i - 1], hR = cur[i + 1];
          var hU = cur[i - gwL], hD = cur[i + gwL];
          var nx = (hL - hR);
          var ny = (hU - hD);
          var h = cur[i];

          // --- displacement ---
          var dxp = nx * CFG.refract;
          var dyp = ny * CFG.refract;
          var md = CFG.maxDisp;
          if (dxp > md) dxp = md; else if (dxp < -md) dxp = -md;
          if (dyp > md) dyp = md; else if (dyp < -md) dyp = -md;
          dspX[i] = dxp;
          dspY[i] = dyp;

          // --- highlight: slope facing the light + raised crest ---
          var slope = nx * LX + ny * LY;
          var a = 0;
          if (slope > 0) {
            a = Math.pow(slope, 1.4) * gain;
          }
          if (h > 0) a += h * 0.10;
          if (a > clamp) a = clamp;
          if (a > 0.004) {
            var t = a / clamp;
            data[p] = 236 + 19 * t;
            data[p + 1] = 250 + 5 * t;
            data[p + 2] = 255;
            data[p + 3] = (a * 255) | 0;
          } else {
            data[p + 3] = 0;
          }

          // --- trough: dips go darker, giving the surface depth ---
          var d = 0;
          if (h < 0) d = -h * 0.30;
          var dslope = -slope;               // back-facing slopes sit in shadow
          if (dslope > 0) d += Math.pow(dslope, 1.4) * 0.42;
          if (d > 0.42) d = 0.42;
          if (d > 0.004) {
            tdata[p] = 2;
            tdata[p + 1] = 42;
            tdata[p + 2] = 62;
            tdata[p + 3] = (d * 255) | 0;
          } else {
            tdata[p + 3] = 0;
          }

          p += 4;
        }
      }
      specCtx.putImageData(specImg, 0, 0);
      troughCtx.putImageData(troughImg, 0, 0);
    }

    // ---------------------------------------------------------------------
    // Render
    // ---------------------------------------------------------------------
    var time = 0;

    function drawSceneBase() {
      offCtx.clearRect(0, 0, width, height);

      var waterGrad = offCtx.createRadialGradient(
        width * 0.5, height * 0.35, width * 0.05,
        width * 0.5, height * 0.5, width * 0.85
      );
      waterGrad.addColorStop(0, '#06b6d4');
      waterGrad.addColorStop(0.35, '#0891b2');
      waterGrad.addColorStop(0.7, '#0e7490');
      waterGrad.addColorStop(1, '#083344');
      offCtx.fillStyle = waterGrad;
      offCtx.fillRect(0, 0, width, height);

      // Light shafts
      offCtx.save();
      offCtx.globalCompositeOperation = 'screen';
      for (var i = 0; i < 4; i++) {
        var angle = 0.35 + Math.sin(time * 0.4 + i) * 0.05;
        var beamX = width * (0.2 + i * 0.22) + Math.sin(time * 0.5 + i * 2) * 40;
        var beamGrad = offCtx.createLinearGradient(beamX, 0, beamX + Math.tan(angle) * height, height);
        beamGrad.addColorStop(0, 'rgba(165, 243, 252, 0.28)');
        beamGrad.addColorStop(0.5, 'rgba(34, 211, 238, 0.12)');
        beamGrad.addColorStop(1, 'rgba(6, 182, 212, 0.0)');
        offCtx.fillStyle = beamGrad;
        offCtx.beginPath();
        offCtx.moveTo(beamX - 35, 0);
        offCtx.lineTo(beamX + 65, 0);
        offCtx.lineTo(beamX + Math.tan(angle) * height + 140, height);
        offCtx.lineTo(beamX + Math.tan(angle) * height - 70, height);
        offCtx.closePath();
        offCtx.fill();
      }
      offCtx.restore();

      // Caustics
      offCtx.save();
      offCtx.globalCompositeOperation = 'lighter';
      for (var layer = 0; layer < 2; layer++) {
        var speedScale = layer === 0 ? 0.7 : 1.1;
        var opacity = layer === 0 ? 0.07 : 0.05;
        for (var c = 0; c < 6; c++) {
          var cx = (width * 0.18 * c + Math.sin(time * speedScale + c * 1.5) * 45 + width) % width;
          var cy = (height * 0.22 * c + Math.cos(time * 0.8 * speedScale + c) * 35 + height) % height;
          var radius = width * (0.2 + (c % 3) * 0.08);
          var cGrad = offCtx.createRadialGradient(cx, cy, 5, cx, cy, radius);
          cGrad.addColorStop(0, 'rgba(6, 182, 212, ' + (opacity * 1.8) + ')');
          cGrad.addColorStop(0.4, 'rgba(34, 211, 238, ' + opacity + ')');
          cGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
          offCtx.fillStyle = cGrad;
          offCtx.beginPath();
          offCtx.ellipse(cx, cy, radius, radius * 0.45, c * 0.4 + time * 0.1, 0, Math.PI * 2);
          offCtx.fill();
        }
      }
      offCtx.restore();
    }

    function drawKoi(dtScale) {
      var sorted = koiPond.slice().sort(function (a, b) { return a.depth - b.depth; });
      var i;
      for (i = 0; i < sorted.length; i++) sorted[i].update(dtScale);
      for (i = 0; i < sorted.length; i++) sorted[i].draw(offCtx, true);
      for (i = 0; i < sorted.length; i++) sorted[i].draw(offCtx, false);
    }

    function drawRefraction() {
      ctx.clearRect(0, 0, width, height);

      // The scene is drawn once, unrefracted. That single blit is all a calm
      // frame costs. Only tiles where the surface is actually displaced get
      // redrawn on top, so idle = 1 drawImage instead of thousands.
      ctx.drawImage(offscreen, 0, 0, offscreen.width, offscreen.height, 0, 0, width, height);

      if (CFG.refraction === false) { timings.activeTiles = 0; return; }

      var T = CFG.tile;
      var cols = Math.ceil(width / T);
      var rows = Math.ceil(height / T);
      var cell = CFG.cell;
      var half = T * 0.5;
      var active = 0;

      for (var ry = 0; ry < rows; ry++) {
        var ty = ry * T;
        var gcy = Math.min(gh - 2, Math.max(1, Math.round((ty + half) / cell) + 1));
        var rowBase = gcy * gw;

        for (var rx = 0; rx < cols; rx++) {
          var tx = rx * T;
          var gcx = Math.min(gw - 2, Math.max(1, Math.round((tx + half) / cell) + 1));
          var i = rowBase + gcx;

          var dx = dspX[i];
          var dy = dspY[i];

          // below half a pixel the displacement is invisible; skip the blit
          if (dx * dx + dy * dy < 0.25) continue;

          active++;
          // Sample a 1px-larger source into the same destination box. The
          // half-pixel compression hides the seam between shifted tiles
          // without the double-sampled banding that an oversized
          // destination causes.
          ctx.drawImage(
            offscreen,
            tx * dpr, ty * dpr, (T + 1) * dpr, (T + 1) * dpr,
            tx + dx, ty + dy, T, T
          );
        }
      }
      timings.activeTiles = active;
    }

    function drawSpecular() {
      ctx.save();
      ctx.imageSmoothingEnabled = true;
      var dw = gw * CFG.cell, dh = gh * CFG.cell;

      // darken dips first, then add light on top
      ctx.globalCompositeOperation = 'source-over';
      ctx.drawImage(troughCanvas, 0, 0, gw, gh, 0, 0, dw, dh);

      ctx.globalCompositeOperation = 'lighter';
      ctx.drawImage(specCanvas, 0, 0, gw, gh, 0, 0, dw, dh);
      ctx.restore();
    }

    function drawForeground() {
      var i, fp, b;

      for (i = foodPellets.length - 1; i >= 0; i--) {
        fp = foodPellets[i];
        fp.bobPhase += 0.05;
        fp.x += fp.vx;
        fp.y += fp.vy;
        fp.vx *= 0.985;
        fp.vy *= 0.985;
        fp.life--;

        var bob = Math.sin(fp.bobPhase) * 0.8;
        ctx.save();
        ctx.beginPath();
        ctx.arc(fp.x, fp.y + bob, fp.r, 0, Math.PI * 2);
        var pelGrad = ctx.createRadialGradient(fp.x - 1, fp.y + bob - 1, 0, fp.x, fp.y + bob, fp.r);
        pelGrad.addColorStop(0, '#fbbf24');
        pelGrad.addColorStop(1, '#b45309');
        ctx.fillStyle = pelGrad;
        ctx.fill();
        ctx.strokeStyle = 'rgba(254, 243, 199, 0.6)';
        ctx.lineWidth = 0.6;
        ctx.stroke();
        ctx.restore();

        if (fp.life <= 0) foodPellets.splice(i, 1);
      }

      for (i = bubbles.length - 1; i >= 0; i--) {
        b = bubbles[i];
        b.y += b.vy;
        b.wobble += 0.12;
        b.x += Math.sin(b.wobble) * 0.35 + b.vx;
        b.alpha -= 0.012;

        ctx.save();
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(207, 250, 254, ' + (b.alpha * 0.35) + ')';
        ctx.fill();
        ctx.strokeStyle = 'rgba(255, 255, 255, ' + (b.alpha * 0.8) + ')';
        ctx.lineWidth = 1.0;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(b.x - b.r * 0.3, b.y - b.r * 0.3, b.r * 0.25, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, ' + (b.alpha * 0.95) + ')';
        ctx.fill();
        ctx.restore();

        if (b.alpha <= 0) bubbles.splice(i, 1);
      }

      for (i = 0; i < leaves.length; i++) drawLilyPad(ctx, leaves[i], false);
    }

    function updateLeaves(dtScale) {
      for (var i = 0; i < leaves.length; i++) {
        var l = leaves[i];
        l.x += (l.driftX + Math.sin(l.phase) * 0.15) * dtScale;
        l.y += (l.driftY + Math.cos(l.phase * 0.7) * 0.11) * dtScale;
        l.angle += l.rotSpeed * dtScale;
        l.phase += 0.006 * dtScale;
        if (l.x < -60) l.x = width + 60;
        if (l.x > width + 60) l.x = -60;
        if (l.y < -60) l.y = height + 60;
        if (l.y > height + 60) l.y = -60;
      }
    }

    // ---------------------------------------------------------------------
    // Loop
    // ---------------------------------------------------------------------
    var rafId = 0;
    var lastT = 0;
    var frameCount = 0;
    var accum = 0;
    var STEP_MS = 1000 / 60;
    var timings = { step: 0, fields: 0, scene: 0, refract: 0, overlay: 0, total: 0, activeTiles: 0 };
    var running = false;
    var reduced = false;

    var mq = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
    reduced = CFG.reducedMotion !== null ? !!CFG.reducedMotion : !!(mq && mq.matches);

    function frame(now) {
      rafId = requestAnimationFrame(frame);

      frameCount++;
      if (!lastT) lastT = now;
      var dtMs = now - lastT;
      lastT = now;
      if (dtMs > 100) dtMs = 100;          // tab returned after a stall
      var dtScale = dtMs / 16.667;          // 1.0 at 60fps
      if (reduced) dtScale = 0;             // ambient motion frozen, ripples still work
      else time += dtMs * 0.001;

      var t0 = performance.now();
      // Fixed 60Hz simulation steps. Without this the water settles twice as
      // fast on a 120Hz screen and half as fast on a struggling phone.
      accum += dtMs;
      if (accum > 50) accum = 50;
      var steps = 0;
      while (accum >= STEP_MS && steps < 3) {
        step();
        accum -= STEP_MS;
        steps++;
      }
      var t1 = performance.now();
      buildFields();
      var t2 = performance.now();
      drawSceneBase();
      drawKoi(dtScale);
      for (var i = 0; i < leaves.length; i++) drawLilyPad(offCtx, leaves[i], true);
      updateLeaves(dtScale);
      var t3 = performance.now();
      drawRefraction();
      var t4 = performance.now();
      drawSpecular();
      drawForeground();
      var t5 = performance.now();

      // rolling averages, for tuning only
      timings.step = timings.step * 0.9 + (t1 - t0) * 0.1;
      timings.fields = timings.fields * 0.9 + (t2 - t1) * 0.1;
      timings.scene = timings.scene * 0.9 + (t3 - t2) * 0.1;
      timings.refract = timings.refract * 0.9 + (t4 - t3) * 0.1;
      timings.overlay = timings.overlay * 0.9 + (t5 - t4) * 0.1;
      timings.total = timings.total * 0.9 + (t5 - t0) * 0.1;
    }

    function start() {
      if (running) return;
      running = true;
      lastT = 0;
      rafId = requestAnimationFrame(frame);
    }

    function stop() {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = 0;
    }

    // Pause when the header scrolls out of view or the tab is hidden
    var visible = true;
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        if (visible && !document.hidden) start(); else stop();
      }, { threshold: 0 });
      io.observe(canvas);
    }
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stop(); else if (visible) start();
    });

    // Debounced resize via ResizeObserver
    var resizeTimer = 0;
    function scheduleResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        resize();
        drawSceneBase();
        drawRefraction();
      }, 120);
    }
    if ('ResizeObserver' in window) {
      var ro = new ResizeObserver(scheduleResize);
      ro.observe(host);
      ro.observe(canvas);
    } else {
      window.addEventListener('resize', scheduleResize);
    }

    // ---------------------------------------------------------------------
    // Boot
    // ---------------------------------------------------------------------
    resize();

    start();

    if (window.console && console.info) {
      console.info('[pond] water engine ' + ENGINE_VERSION + ' — grid ' + gw + 'x' + gh + ', cell ' + CFG.cell + 'px, tile ' + CFG.tile + 'px');
    }

    // Debug hook (harmless in production, useful for testing)
    window.__pond = {
      version: ENGINE_VERSION,
      stroke: function (x0, y0, x1, y1, power) { injectStroke(x0, y0, x1, y1, power || 0.12); },
      plop: function (x, y, p) { inject(x, y, p || -0.30); },
      probe: function (x, y) { return sampleHeight(x, y); },
      dumpField: function (scale) {
        scale = scale || 4;
        var c = document.createElement('canvas');
        c.width = gw * scale; c.height = gh * scale;
        var x2 = c.getContext('2d');
        var img = x2.createImageData(gw, gh);
        for (var i = 0; i < cur.length; i++) {
          var v = cur[i];
          var g = 128 + Math.max(-127, Math.min(127, v * 110));
          img.data[i*4] = g; img.data[i*4+1] = g; img.data[i*4+2] = g; img.data[i*4+3] = 255;
        }
        var t = document.createElement('canvas');
        t.width = gw; t.height = gh;
        t.getContext('2d').putImageData(img, 0, 0);
        x2.imageSmoothingEnabled = false;
        x2.drawImage(t, 0, 0, c.width, c.height);
        return c.toDataURL();
      },
      energy: function () {
        var sum = 0, peak = 0;
        for (var i = 0; i < cur.length; i++) {
          var a = Math.abs(cur[i]);
          sum += a;
          if (a > peak) peak = a;
        }
        return { sum: sum, peak: peak, cells: cur.length };
      },
      stats: function () {
        return {
          gw: gw, gh: gh, width: width, height: height, dpr: dpr,
          running: running, frames: frameCount, dragging: activePointer !== null,
          timings: {
            step: +timings.step.toFixed(2), fields: +timings.fields.toFixed(2),
            scene: +timings.scene.toFixed(2), refract: +timings.refract.toFixed(2),
            overlay: +timings.overlay.toFixed(2), total: +timings.total.toFixed(2)
          },
          tiles: Math.ceil(width / CFG.tile) * Math.ceil(height / CFG.tile),
          activeTiles: timings.activeTiles
        };
      }
    };

    return window.__pond;
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initPhotorealisticWaterSurface();
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      initPhotorealisticWaterSurface();
    });
  }

  window.initPhotorealisticWaterSurface = initPhotorealisticWaterSurface;
})();
