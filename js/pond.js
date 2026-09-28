(function initPhotorealisticKoiPond() {
  const canvas = document.getElementById('pondCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  // Offscreen canvas for optical refraction & wave rendering
  const offscreen = document.createElement('canvas');
  const offCtx = offscreen.getContext('2d');

  let width = (canvas.width = offscreen.width = canvas.parentElement.offsetWidth);
  let height = (canvas.height = offscreen.height = canvas.parentElement.offsetHeight);

  window.addEventListener('resize', () => {
    if (!canvas.parentElement) return;
    width = canvas.width = offscreen.width = canvas.parentElement.offsetWidth;
    height = canvas.height = offscreen.height = canvas.parentElement.offsetHeight;
  });

  // ---------- HYDRODYNAMIC RIPPLE & CONTINUOUS WAKE SYSTEM ----------
  const ripples = [];
  let isPointerDown = false;
  let lastX = 0, lastY = 0;
  let lastTime = 0;

  // Spawns physical expanding wave rings
  function addRipple(x, y, strength = 1.0, forwardAngle = null) {
    ripples.push({
      x, y,
      r: 3,
      maxR: Math.min(180, 85 + strength * 60),
      alpha: Math.min(1.0, 0.65 + strength * 0.25),
      speed: 2.4 + Math.min(1.6, strength * 0.8),
      wavelength: 18 + strength * 4,
      forwardAngle: forwardAngle, // Directional bow-wave bias
      strength
    });

    // Startle nearby fish based on proximity and motion
    koiPond.forEach(fish => {
      const dx = fish.x - x;
      const dy = fish.y - y;
      const dist = Math.hypot(dx, dy);
      if (dist < 180) {
        const force = (1 - dist / 180) * (6.5 + strength * 4.0);
        fish.vx += (dx / (dist || 1)) * force;
        fish.vy += (dy / (dist || 1)) * force;
        fish.spurt = Math.min(65, 30 + Math.round(strength * 25));
      }
    });
  }

  // Pointer event listeners with continuous interpolation for smooth drag
  canvas.addEventListener('pointerdown', (e) => {
    isPointerDown = true;
    const rect = canvas.getBoundingClientRect();
    lastX = e.clientX - rect.left;
    lastY = e.clientY - rect.top;
    lastTime = performance.now();
    addRipple(lastX, lastY, 1.2);
  });

  canvas.addEventListener('pointermove', (e) => {
    if (!isPointerDown) return;
    const rect = canvas.getBoundingClientRect();
    const curX = e.clientX - rect.left;
    const curY = e.clientY - rect.top;
    const curTime = performance.now();

    const dx = curX - lastX;
    const dy = curY - lastY;
    const dist = Math.hypot(dx, dy);
    const dt = Math.max(8, curTime - lastTime);

    // Continuous hydrodynamic interpolation: drop micro-ripples along drag line
    const STEP = 8; // Drop sub-ripples every 8px for gap-free wave continuity
    if (dist >= STEP) {
      const steps = Math.floor(dist / STEP);
      const dragSpeed = dist / dt; // px per ms
      const moveAngle = Math.atan2(dy, dx);
      const dynamicStrength = Math.min(2.0, 0.45 + dragSpeed * 0.75);

      for (let s = 1; s <= steps; s++) {
        const interpX = lastX + (dx / steps) * s;
        const interpY = lastY + (dy / steps) * s;
        // Sub-ripples form continuous surface displacement
        addRipple(interpX, interpY, dynamicStrength * 0.65, moveAngle);
      }

      lastX = curX;
      lastY = curY;
      lastTime = curTime;
    }
  });

  const stopDrag = () => { isPointerDown = false; };
  canvas.addEventListener('pointerup', stopDrag);
  canvas.addEventListener('pointerleave', stopDrag);
  canvas.addEventListener('pointercancel', stopDrag);

  // ---------- WATER SURFACE LILY PADS ----------
  const leaves = Array.from({ length: 7 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: 16 + Math.random() * 18,
    angle: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.005,
    driftX: (Math.random() - 0.5) * 0.16,
    driftY: (Math.random() - 0.5) * 0.1,
    phase: Math.random() * Math.PI * 2,
    notch: 0.35 + Math.random() * 0.25
  }));

  function drawLilyPad(tCtx, l, isShadow = false) {
    tCtx.save();
    tCtx.translate(l.x, l.y);
    tCtx.rotate(l.angle);

    if (isShadow) {
      tCtx.translate(8, 12);
      tCtx.fillStyle = "rgba(1, 14, 34, 0.22)";
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

    const leafGrad = tCtx.createRadialGradient(-l.size * 0.2, -l.size * 0.2, 2, 0, 0, l.size);
    leafGrad.addColorStop(0, '#4ade80');
    leafGrad.addColorStop(0.65, '#16a34a');
    leafGrad.addColorStop(1, '#14532d');
    tCtx.fillStyle = leafGrad;
    tCtx.fill();

    // Veins
    tCtx.strokeStyle = "rgba(187, 247, 208, 0.35)";
    tCtx.lineWidth = 1.0;
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 1.7 + l.notch;
      tCtx.beginPath();
      tCtx.moveTo(0, 0);
      tCtx.lineTo(Math.cos(a) * l.size * 0.85, Math.sin(a) * l.size * 0.85);
      tCtx.stroke();
    }
    tCtx.restore();
  }

  // ---------- KINEMATIC KOI FISH MODEL ----------
  const NUM_JOINTS = 14;
  const BODY_RADII = [11, 14, 16.5, 17, 16.2, 14.8, 13, 11, 9, 7.2, 5.4, 3.8, 2.4, 1.4];

  class Koi {
    constructor(type = 'kohaku', sizeScale = 1.0) {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.angle = Math.random() * Math.PI * 2;
      this.type = type;
      this.size = sizeScale * (0.85 + Math.random() * 0.35);
      this.speed = 1.0 + Math.random() * 0.35;
      this.vx = Math.cos(this.angle) * this.speed;
      this.vy = Math.sin(this.angle) * this.speed;
      this.spurt = 0;
      this.wiggleCycle = Math.random() * 200;
      this.depth = 0.5 + Math.random() * 0.5;

      this.spine = [];
      for (let i = 0; i < NUM_JOINTS; i++) {
        this.spine.push({
          x: this.x - i * 5.8 * this.size * Math.cos(this.angle),
          y: this.y - i * 5.8 * this.size * Math.sin(this.angle)
        });
      }
    }

    update() {
      const maxSpeed = this.spurt > 0 ? 4.8 : this.speed * 1.35;
      if (this.spurt > 0) this.spurt--;

      this.angle += (Math.random() - 0.5) * 0.08;
      this.vx = this.vx * 0.965 + Math.cos(this.angle) * (this.speed * 0.04);
      this.vy = this.vy * 0.965 + Math.sin(this.angle) * (this.speed * 0.04);

      const curSpeed = Math.hypot(this.vx, this.vy);
      if (curSpeed > maxSpeed) {
        this.vx = (this.vx / curSpeed) * maxSpeed;
        this.vy = (this.vy / curSpeed) * maxSpeed;
      }

      const pad = 50;
      if (this.x < pad) this.vx += 0.12;
      if (this.x > width - pad) this.vx -= 0.12;
      if (this.y < pad) this.vy += 0.12;
      if (this.y > height - pad) this.vy -= 0.12;

      this.x += this.vx;
      this.y += this.vy;
      this.angle = Math.atan2(this.vy, this.vx);

      this.wiggleCycle += (curSpeed > 2.0 ? 0.38 : 0.22);
      this.spine[0] = { x: this.x, y: this.y };
      const segmentLen = 5.8 * this.size;

      for (let i = 1; i < NUM_JOINTS; i++) {
        const prev = this.spine[i - 1];
        const cur = this.spine[i];
        let dx = cur.x - prev.x;
        let dy = cur.y - prev.y;
        const d = Math.hypot(dx, dy) || 1;
        cur.x = prev.x + (dx / d) * segmentLen;
        cur.y = prev.y + (dy / d) * segmentLen;

        const wave = Math.sin(this.wiggleCycle - i * 0.36) * (i * 0.58) * this.size;
        const normAngle = Math.atan2(dy, dx) + Math.PI / 2;
        cur.x += Math.cos(normAngle) * wave * 0.16;
        cur.y += Math.sin(normAngle) * wave * 0.16;
      }
    }

    draw(tCtx, isShadow = false) {
      tCtx.save();

      if (isShadow) {
        const offset = 14 + this.depth * 14;
        tCtx.translate(offset * 0.6, offset);
        tCtx.fillStyle = `rgba(0, 15, 38, ${0.18 * this.depth})`;
      }

      const leftPts = [], rightPts = [];
      const scale = this.size;

      for (let i = 0; i < NUM_JOINTS; i++) {
        const pt = this.spine[i];
        let ang = this.angle;
        if (i < NUM_JOINTS - 1) {
          const next = this.spine[i + 1];
          ang = Math.atan2(next.y - pt.y, next.x - pt.x) + Math.PI / 2;
        } else {
          ang = Math.atan2(pt.y - this.spine[i - 1].y, pt.x - this.spine[i - 1].x) + Math.PI / 2;
        }
        const r = BODY_RADII[i] * scale;
        leftPts.push({ x: pt.x + Math.cos(ang) * r, y: pt.y + Math.sin(ang) * r });
        rightPts.push({ x: pt.x - Math.cos(ang) * r, y: pt.y - Math.sin(ang) * r });
      }

      // Pectoral Fins
      const pFinJoint = this.spine[2];
      const pFlutter = Math.sin(this.wiggleCycle * 1.35) * 0.32;
      for (let side of [-1, 1]) {
        tCtx.beginPath();
        const baseX = pFinJoint.x + Math.cos(this.angle + side * 1.32) * 11 * scale;
        const baseY = pFinJoint.y + Math.sin(this.angle + side * 1.32) * 11 * scale;
        const tipX = baseX + Math.cos(this.angle + side * (1.82 + pFlutter)) * 28 * scale;
        const tipY = baseY + Math.sin(this.angle + side * (1.82 + pFlutter)) * 28 * scale;
        tCtx.moveTo(baseX, baseY);
        tCtx.bezierCurveTo(tipX, tipY, tipX - side * 5, tipY + 8, baseX + Math.cos(this.angle + side * 2.3) * 10 * scale, baseY + Math.sin(this.angle + side * 2.3) * 10 * scale);
        tCtx.fillStyle = isShadow ? "rgba(0,12,32,0.3)" : (this.type === 'yamabuki' ? "rgba(251, 146, 60, 0.65)" : "rgba(255, 255, 255, 0.72)");
        tCtx.fill();
      }

      // Pelvic Fins
      const vFinJoint = this.spine[6];
      for (let side of [-1, 1]) {
        tCtx.beginPath();
        const baseX = vFinJoint.x + Math.cos(this.angle + side * 1.4) * 8 * scale;
        const baseY = vFinJoint.y + Math.sin(this.angle + side * 1.4) * 8 * scale;
        const tipX = baseX + Math.cos(this.angle + side * 1.85) * 14 * scale;
        const tipY = baseY + Math.sin(this.angle + side * 1.85) * 14 * scale;
        tCtx.moveTo(baseX, baseY);
        tCtx.lineTo(tipX, tipY);
        tCtx.lineTo(baseX + Math.cos(this.angle + side * 2.2) * 6 * scale, baseY + Math.sin(this.angle + side * 2.2) * 6 * scale);
        tCtx.fillStyle = isShadow ? "rgba(0,12,32,0.25)" : "rgba(255, 255, 255, 0.55)";
        tCtx.fill();
      }

      // Torso
      tCtx.beginPath();
      tCtx.moveTo(leftPts[0].x, leftPts[0].y);
      for (let i = 1; i < leftPts.length; i++) tCtx.lineTo(leftPts[i].x, leftPts[i].y);
      tCtx.lineTo(this.spine[NUM_JOINTS - 1].x, this.spine[NUM_JOINTS - 1].y);
      for (let i = rightPts.length - 1; i >= 0; i--) tCtx.lineTo(rightPts[i].x, rightPts[i].y);
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

      // 3D Dorsal Volumetric Gradient
      const dorsalNorm = this.angle + Math.PI / 2;
      const bodyGrad = tCtx.createLinearGradient(
        this.x + Math.cos(dorsalNorm) * 18 * scale,
        this.y + Math.sin(dorsalNorm) * 18 * scale,
        this.x - Math.cos(dorsalNorm) * 18 * scale,
        this.y - Math.sin(dorsalNorm) * 18 * scale
      );

      if (this.type === 'yamabuki') {
        bodyGrad.addColorStop(0, '#fef08a');
        bodyGrad.addColorStop(0.5, '#ea580c');
        bodyGrad.addColorStop(1, '#7c2d12');
      } else {
        bodyGrad.addColorStop(0, '#ffffff');
        bodyGrad.addColorStop(0.5, '#f8fafc');
        bodyGrad.addColorStop(1, '#94a3b8');
      }
      tCtx.fillStyle = bodyGrad;
      tCtx.fill();

      // Patterns
      tCtx.save();
      tCtx.clip();
      if (this.type === 'kohaku' || this.type === 'sanke') {
        tCtx.fillStyle = "#dc2626";
        const h = this.spine[1];
        tCtx.beginPath();
        tCtx.ellipse(h.x, h.y, 8.5 * scale, 6 * scale, this.angle, 0, Math.PI * 2);
        tCtx.fill();

        tCtx.fillStyle = "#ea580c";
        const m = this.spine[4];
        tCtx.beginPath();
        tCtx.ellipse(m.x, m.y, 11 * scale, 7.5 * scale, this.angle - 0.15, 0, Math.PI * 2);
        tCtx.fill();

        tCtx.fillStyle = "#dc2626";
        const r = this.spine[8];
        tCtx.beginPath();
        tCtx.ellipse(r.x, r.y, 7 * scale, 4.5 * scale, this.angle + 0.15, 0, Math.PI * 2);
        tCtx.fill();
      }

      if (this.type === 'sanke') {
        tCtx.fillStyle = "#090d16";
        const s1 = this.spine[3];
        tCtx.beginPath();
        tCtx.ellipse(s1.x + 3, s1.y, 5 * scale, 3.5 * scale, this.angle + 0.4, 0, Math.PI * 2);
        tCtx.fill();

        const s2 = this.spine[7];
        tCtx.beginPath();
        tCtx.ellipse(s2.x - 3, s2.y, 5.5 * scale, 4 * scale, this.angle - 0.3, 0, Math.PI * 2);
        tCtx.fill();
      }
      tCtx.restore();

      // Eyes
      for (let side of [-1, 1]) {
        const eyeX = this.x + Math.cos(this.angle) * 8.5 * scale + Math.cos(this.angle + side * 1.55) * 6.5 * scale;
        const eyeY = this.y + Math.sin(this.angle) * 8.5 * scale + Math.sin(this.angle + side * 1.55) * 6.5 * scale;
        tCtx.beginPath();
        tCtx.arc(eyeX, eyeY, 2.0 * scale, 0, Math.PI * 2);
        tCtx.fillStyle = "#020617";
        tCtx.fill();

        tCtx.beginPath();
        tCtx.arc(eyeX - 0.6, eyeY - 0.6, 0.7 * scale, 0, Math.PI * 2);
        tCtx.fillStyle = "#ffffff";
        tCtx.fill();
      }

      // Tail
      const last = this.spine[NUM_JOINTS - 1];
      const second = this.spine[NUM_JOINTS - 2];
      const tailAng = Math.atan2(last.y - second.y, last.x - second.x);
      const flare = Math.sin(this.wiggleCycle) * 7 * scale;

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
      tCtx.fillStyle = this.type === 'yamabuki' ? "rgba(251, 146, 60, 0.7)" : "rgba(255, 255, 255, 0.72)";
      tCtx.fill();

      tCtx.restore();
    }
  }

  const koiPond = [
    new Koi('kohaku', 1.05),
    new Koi('yamabuki', 1.15),
    new Koi('sanke', 0.95),
    new Koi('kohaku', 0.9),
    new Koi('yamabuki', 1.0)
  ];

  // ---------- ANIMATION LOOP WITH OPTICAL REFRACTION ----------
  let causticTime = 0;

  function loop() {
    // 1. RENDER SUBMERGED ELEMENTS TO OFFSCREEN BUFFER
    offCtx.clearRect(0, 0, width, height);

    // Deep water illumination gradient
    const pondGrad = offCtx.createRadialGradient(width * 0.5, height * 0.4, 20, width * 0.5, height * 0.5, width * 0.85);
    pondGrad.addColorStop(0, "rgba(14, 116, 144, 0.24)");
    pondGrad.addColorStop(0.6, "rgba(3, 105, 161, 0.35)");
    pondGrad.addColorStop(1, "rgba(2, 44, 74, 0.52)");
    offCtx.fillStyle = pondGrad;
    offCtx.fillRect(0, 0, width, height);

    // Dynamic sunlight caustic network
    causticTime += 0.012;
    offCtx.save();
    offCtx.fillStyle = "rgba(255, 255, 255, 0.035)";
    for (let i = 0; i < 4; i++) {
      offCtx.beginPath();
      const cy = (height * 0.25 * i + Math.sin(causticTime + i * 1.5) * 22) % height;
      const cx = (width * 0.5 + Math.cos(causticTime * 0.8 + i) * 60);
      offCtx.ellipse(cx, cy, width * 0.42, 16 + i * 3, i * 0.32, 0, Math.PI * 2);
      offCtx.fill();
    }
    offCtx.restore();

    // Render Koi Shadows
    koiPond.forEach(fish => {
      fish.update();
      fish.draw(offCtx, true);
    });

    // Render Koi Bodies
    koiPond.forEach(fish => fish.draw(offCtx, false));

    // Render Lily Pad Shadows
    leaves.forEach(l => {
      l.x += l.driftX + Math.sin(l.phase) * 0.16;
      l.y += l.driftY + Math.cos(l.phase * 0.7) * 0.12;
      l.angle += l.rotSpeed;
      l.phase += 0.007;
      if (l.x < -50) l.x = width + 50;
      if (l.x > width + 50) l.x = -50;
      if (l.y < -50) l.y = height + 50;
      if (l.y > height + 50) l.y = -50;
      drawLilyPad(offCtx, l, true);
    });

    // 2. OPTICAL WAVE REFRACTION ON MAIN CANVAS
    ctx.clearRect(0, 0, width, height);

    if (ripples.length === 0) {
      ctx.drawImage(offscreen, 0, 0);
    } else {
      // Sliced optical displacement mapping with continuous drag wave support
      const SLICE_H = 6;
      for (let y = 0; y < height; y += SLICE_H) {
        let dispX = 0;
        for (let j = 0; j < ripples.length; j++) {
          const rp = ripples[j];
          const dy = y - rp.y;
          const dist = Math.abs(dy);
          if (dist < rp.r && dist > rp.r - rp.wavelength) {
            const phase = (dist - (rp.r - rp.wavelength)) / rp.wavelength;
            dispX += Math.sin(phase * Math.PI * 2) * (4.5 * rp.strength) * rp.alpha;
          }
        }
        ctx.drawImage(offscreen, 0, y, width, SLICE_H, dispX, y, width, SLICE_H);
      }
    }

    // 3. RENDER SURFACE WAVES (CREST & TROUGH LENS HIGHLIGHTS)
    for (let i = ripples.length - 1; i >= 0; i--) {
      const rp = ripples[i];
      const fade = Math.max(0, 1 - (rp.r / rp.maxR));
      const curAlpha = rp.alpha * fade;

      // Bright specular crest
      ctx.beginPath();
      ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 255, 255, ${curAlpha * 0.85})`;
      ctx.lineWidth = Math.max(0.8, 2.2 * fade * rp.strength);
      ctx.stroke();

      // Refractive shadow ring
      ctx.beginPath();
      ctx.arc(rp.x, rp.y, Math.max(1, rp.r - 4), 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(2, 60, 105, ${curAlpha * 0.45})`;
      ctx.lineWidth = Math.max(0.6, 1.8 * fade);
      ctx.stroke();

      rp.r += rp.speed;
      rp.alpha -= 0.016; // Fast natural wave dissipation for smooth drag trails
      if (rp.alpha <= 0 || rp.r >= rp.maxR) {
        ripples.splice(i, 1);
      }
    }

    // 4. SURFACE LILY PADS
    leaves.forEach(l => drawLilyPad(ctx, l, false));

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
})();
