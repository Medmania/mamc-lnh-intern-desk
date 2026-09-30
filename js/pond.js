(function initPhotorealisticKoiPond() {
  const canvas = document.getElementById('pondCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  // Offscreen buffers
  const offscreen = document.createElement('canvas');
  const offCtx = offscreen.getContext('2d');
  const heightMap = document.createElement('canvas'); // wave-height field
  const hmCtx = heightMap.getContext('2d');

  let width = (canvas.width = offscreen.width = heightMap.width = canvas.parentElement.offsetWidth);
  let height = (canvas.height = offscreen.height = heightMap.height = canvas.parentElement.offsetHeight);

  window.addEventListener('resize', () => {
    if (!canvas.parentElement) return;
    width = canvas.width = offscreen.width = heightMap.width = canvas.parentElement.offsetWidth;
    height = canvas.height = offscreen.height = heightMap.height = canvas.parentElement.offsetHeight;
  });

  // ---------- WATER RIPPLES (height-field) ----------
  const ripples = [];
  let isPointerDown = false;
  let lastX = 0, lastY = 0, lastTime = 0;
  let tapTimer = 0;

  function addRipple(x, y, strength = 1.0, forwardAngle = null) {
    ripples.push({
      x, y,
      r: 2,
      maxR: Math.min(220, 90 + strength * 70),
      alpha: Math.min(1.0, 0.7 + strength * 0.3),
      speed: 2.1 + Math.min(1.8, strength * 0.8),
      wavelength: 16 + strength * 5,
      height: 0.6 + strength * 0.9,   // peak wave amplitude
      forwardAngle,
      strength
    });

    if (strength > 1.15) {
      koiPond.forEach(fish => {
        const dx = fish.x - x;
        const dy = fish.y - y;
        const dist = Math.hypot(dx, dy);
        if (dist < 170) {
          const force = (1 - dist / 170) * (5.8 + strength * 3.2);
          fish.vx += (dx / (dist || 1)) * force;
          fish.vy += (dy / (dist || 1)) * force;
          fish.spurt = 50;
        }
      });
    }
  }

  // ---------- FOOD & BUBBLES (unchanged logic, better lighting later) ----------
  const foodPellets = [];
  function dropFood(x, y) {
    for (let i = 0; i < 3; i++) {
      foodPellets.push({
        x: x + (Math.random() - 0.5) * 26,
        y: y + (Math.random() - 0.5) * 26,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 2.1 + Math.random() * 0.9,
        life: 650,
        bobPhase: Math.random() * Math.PI * 2
      });
    }
    addRipple(x, y, 0.9);
  }

  const bubbles = [];
  function spawnBubbles(x, y, count = 4) {
    for (let i = 0; i < count; i++) {
      bubbles.push({
        x: x + (Math.random() - 0.5) * 14,
        y: y + (Math.random() - 0.5) * 14,
        r: 1.6 + Math.random() * 2.8,
        vy: -(0.55 + Math.random() * 1.0),
        vx: (Math.random() - 0.5) * 0.45,
        alpha: 0.9,
        wobble: Math.random() * Math.PI * 2
      });
    }
  }

  // ---------- POINTER EVENTS ----------
  canvas.addEventListener('pointerdown', (e) => {
    isPointerDown = true;
    const rect = canvas.getBoundingClientRect();
    lastX = e.clientX - rect.left;
    lastY = e.clientY - rect.top;
    lastTime = performance.now();

    const now = Date.now();
    if (now - tapTimer < 320) {
      dropFood(lastX, lastY);
      tapTimer = 0;
    } else {
      tapTimer = now;
      addRipple(lastX, lastY, 1.15);
    }
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

    const STEP = 7;
    if (dist >= STEP) {
      const steps = Math.floor(dist / STEP);
      const dragSpeed = dist / dt;
      const moveAngle = Math.atan2(dy, dx);
      const dynamicStrength = Math.min(1.9, 0.45 + dragSpeed * 0.7);

      for (let s = 1; s <= steps; s++) {
        const interpX = lastX + (dx / steps) * s;
        const interpY = lastY + (dy / steps) * s;
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

  // ---------- LILY PADS ----------
  const leaves = Array.from({ length: 7 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: 15 + Math.random() * 20,
    angle: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.004,
    driftX: (Math.random() - 0.5) * 0.14,
    driftY: (Math.random() - 0.5) * 0.09,
    phase: Math.random() * Math.PI * 2,
    notch: 0.32 + Math.random() * 0.28,
    depth: 0.35 + Math.random() * 0.4
  }));

  function drawLilyPad(tCtx, l, isShadow = false) {
    tCtx.save();
    tCtx.translate(l.x, l.y);
    tCtx.rotate(l.angle);

    if (isShadow) {
      tCtx.translate(7 + l.depth * 6, 10 + l.depth * 8);
      tCtx.fillStyle = `rgba(1, 12, 30, ${0.18 * l.depth})`;
      tCtx.beginPath();
      tCtx.arc(0, 0, l.size, l.notch, Math.PI * 2 - l.notch * 0.5);
      tCtx.lineTo(0, 0);
      tCtx.closePath();
      tCtx.fill();
      tCtx.restore();
      return;
    }

    // soft underside tint for depth
    tCtx.beginPath();
    tCtx.arc(0, 0, l.size * 1.05, l.notch, Math.PI * 2 - l.notch * 0.5);
    tCtx.lineTo(0, 0);
    tCtx.closePath();
    tCtx.fillStyle = `rgba(6, 40, 20, ${0.25 * l.depth})`;
    tCtx.fill();

    tCtx.beginPath();
    tCtx.arc(0, 0, l.size, l.notch, Math.PI * 2 - l.notch * 0.5);
    tCtx.lineTo(0, 0);
    tCtx.closePath();

    const leafGrad = tCtx.createRadialGradient(-l.size * 0.25, -l.size * 0.25, 1, 0, 0, l.size);
    leafGrad.addColorStop(0, '#4ade80');
    leafGrad.addColorStop(0.55, '#16a34a');
    leafGrad.addColorStop(1, '#14532d');
    tCtx.fillStyle = leafGrad;
    tCtx.fill();

    // veins
    tCtx.strokeStyle = 'rgba(187, 247, 208, 0.4)';
    tCtx.lineWidth = 0.9;
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 1.7 + l.notch;
      tCtx.beginPath();
      tCtx.moveTo(0, 0);
      tCtx.lineTo(Math.cos(a) * l.size * 0.82, Math.sin(a) * l.size * 0.82);
      tCtx.stroke();
    }
    tCtx.restore();
  }

  // ---------- KOI (kept almost identical – already looks 3-D) ----------
  const NUM_JOINTS = 14;
  const BODY_RADII = [11, 14, 16.5, 17, 16.2, 14.8, 13, 11, 9, 7.2, 5.4, 3.8, 2.4, 1.4];

  class Koi {
    constructor(type = 'kohaku', sizeScale = 1.0) {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.angle = Math.random() * Math.PI * 2;
      this.type = type;
      this.size = sizeScale * (0.85 + Math.random() * 0.32);
      this.speed = 1.05 + Math.random() * 0.35;
      this.vx = Math.cos(this.angle) * this.speed;
      this.vy = Math.sin(this.angle) * this.speed;
      this.spurt = 0;
      this.wiggleCycle = Math.random() * 200;
      this.depth = 0.45 + Math.random() * 0.5;

      this.mouthOpen = 0;
      this.breatheCooldown = 180 + Math.random() * 320;
      this.isBreathing = false;

      this.spine = [];
      for (let i = 0; i < NUM_JOINTS; i++) {
        this.spine.push({
          x: this.x - i * 5.8 * this.size * Math.cos(this.angle),
          y: this.y - i * 5.8 * this.size * Math.sin(this.angle)
        });
      }
    }

    update() {
      const maxSpeed = this.spurt > 0 ? 4.9 : this.speed * 1.35;
      if (this.spurt > 0) this.spurt--;

      let targetFood = null;
      let minDist = 185;
      for (let i = 0; i < foodPellets.length; i++) {
        const fp = foodPellets[i];
        const dist = Math.hypot(fp.x - this.x, fp.y - this.y);
        if (dist < minDist) {
          minDist = dist;
          targetFood = fp;
        }
      }

      if (targetFood) {
        const targetAngle = Math.atan2(targetFood.y - this.y, targetFood.x - this.x);
        let diff = targetAngle - this.angle;
        while (diff < -Math.PI) diff += Math.PI * 2;
        while (diff > Math.PI) diff -= Math.PI * 2;
        this.angle += diff * 0.085;

        if (minDist < 16) {
          this.mouthOpen = 1.0;
          const idx = foodPellets.indexOf(targetFood);
          if (idx !== -1) foodPellets.splice(idx, 1);
          addRipple(this.x, this.y, 0.5);
          spawnBubbles(this.x, this.y, 3);
        }
      } else {
        this.angle += (Math.random() - 0.5) * 0.075;
      }

      this.breatheCooldown--;
      if (this.breatheCooldown <= 0 && !this.isBreathing) {
        this.isBreathing = true;
        this.depth = 0.12;
        this.mouthOpen = 0.95;
        spawnBubbles(this.x + Math.cos(this.angle) * 13, this.y + Math.sin(this.angle) * 13, 5);
        addRipple(this.x, this.y, 0.55);

        setTimeout(() => {
          this.isBreathing = false;
          this.depth = 0.45 + Math.random() * 0.5;
          this.breatheCooldown = 280 + Math.random() * 480;
        }, 1300);
      }

      if (this.mouthOpen > 0) this.mouthOpen -= 0.038;

      this.vx = this.vx * 0.962 + Math.cos(this.angle) * (this.speed * 0.042);
      this.vy = this.vy * 0.962 + Math.sin(this.angle) * (this.speed * 0.042);

      const curSpeed = Math.hypot(this.vx, this.vy);
      if (curSpeed > maxSpeed) {
        this.vx = (this.vx / curSpeed) * maxSpeed;
        this.vy = (this.vy / curSpeed) * maxSpeed;
      }

      const pad = 48;
      if (this.x < pad) this.vx += 0.13;
      if (this.x > width - pad) this.vx -= 0.13;
      if (this.y < pad) this.vy += 0.13;
      if (this.y > height - pad) this.vy -= 0.13;

      this.x += this.vx;
      this.y += this.vy;
      this.angle = Math.atan2(this.vy, this.vx);

      this.wiggleCycle += (curSpeed > 2.0 ? 0.4 : 0.22);
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
        cur.x += Math.cos(normAngle) * wave * 0.15;
        cur.y += Math.sin(normAngle) * wave * 0.15;
      }
    }

    draw(tCtx, isShadow = false) {
      tCtx.save();

      if (isShadow) {
        const offset = 11 + this.depth * 15;
        tCtx.translate(offset * 0.55, offset);
        tCtx.fillStyle = `rgba(0, 12, 32, ${0.2 * this.depth})`;
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

      // pectoral fins
      const pFinJoint = this.spine[2];
      const pFlutter = Math.sin(this.wiggleCycle * 1.35) * 0.32;
      for (let side of [-1, 1]) {
        tCtx.beginPath();
        const baseX = pFinJoint.x + Math.cos(this.angle + side * 1.32) * 11 * scale;
        const baseY = pFinJoint.y + Math.sin(this.angle + side * 1.32) * 11 * scale;
        const tipX = baseX + Math.cos(this.angle + side * (1.82 + pFlutter)) * 28 * scale;
        const tipY = baseY + Math.sin(this.angle + side * (1.82 + pFlutter)) * 28 * scale;
        tCtx.moveTo(baseX, baseY);
        tCtx.bezierCurveTo(tipX, tipY, tipX - side * 5, tipY + 8,
          baseX + Math.cos(this.angle + side * 2.3) * 10 * scale,
          baseY + Math.sin(this.angle + side * 2.3) * 10 * scale);
        tCtx.fillStyle = isShadow ? 'rgba(0,10,28,0.28)' :
          (this.type === 'yamabuki' ? 'rgba(251, 146, 60, 0.7)' : 'rgba(255, 255, 255, 0.75)');
        tCtx.fill();
      }

      // body
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

      // patterns
      tCtx.save();
      tCtx.clip();
      if (this.type === 'kohaku' || this.type === 'sanke') {
        tCtx.fillStyle = '#dc2626';
        const h = this.spine[1];
        tCtx.beginPath();
        tCtx.ellipse(h.x, h.y, 8.5 * scale, 6 * scale, this.angle, 0, Math.PI * 2);
        tCtx.fill();

        tCtx.fillStyle = '#ea580c';
        const m = this.spine[4];
        tCtx.beginPath();
        tCtx.ellipse(m.x, m.y, 11 * scale, 7.5 * scale, this.angle - 0.15, 0, Math.PI * 2);
        tCtx.fill();

        tCtx.fillStyle = '#dc2626';
        const r = this.spine[8];
        tCtx.beginPath();
        tCtx.ellipse(r.x, r.y, 7 * scale, 4.5 * scale, this.angle + 0.15, 0, Math.PI * 2);
        tCtx.fill();
      }
      if (this.type === 'sanke') {
        tCtx.fillStyle = '#090d16';
        const s1 = this.spine[3];
        tCtx.beginPath();
        tCtx.ellipse(s1.x + 3, s1.y, 5 * scale, 3.5 * scale, this.angle + 0.4, 0, Math.PI * 2);
        tCtx.fill();
      }
      tCtx.restore();

      // mouth
      if (this.mouthOpen > 0.05) {
        const mx = this.x + Math.cos(this.angle) * 11 * scale;
        const my = this.y + Math.sin(this.angle) * 11 * scale;
        tCtx.beginPath();
        tCtx.ellipse(mx, my, 3.5 * this.mouthOpen * scale, 2.2 * this.mouthOpen * scale, this.angle, 0, Math.PI * 2);
        tCtx.fillStyle = '#1e1b4b';
        tCtx.fill();
      }

      // tail
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
      tCtx.fillStyle = this.type === 'yamabuki' ? 'rgba(251, 146, 60, 0.72)' : 'rgba(255, 255, 255, 0.75)';
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

  // ---------- HEIGHT-FIELD HELPERS ----------
  // Sample wave height + approximate normal at a point (cheap analytic sum)
  function sampleWave(px, py) {
    let h = 0, nx = 0, ny = 0;
    for (let i = 0; i < ripples.length; i++) {
      const rp = ripples[i];
      const dx = px - rp.x;
      const dy = py - rp.y;
      const dist = Math.hypot(dx, dy);
      if (dist > rp.r + 4 || dist < rp.r - rp.wavelength - 4) continue;

      const phase = (dist - (rp.r - rp.wavelength)) / rp.wavelength;
      if (phase < 0 || phase > 1) continue;

      const wave = Math.sin(phase * Math.PI * 2) * rp.height * rp.alpha;
      h += wave;

      // normal contribution (derivative of the wave)
      const dPhase = (1 / rp.wavelength) * Math.PI * 2;
      const dWave = Math.cos(phase * Math.PI * 2) * rp.height * rp.alpha * dPhase;
      if (dist > 0.1) {
        nx += (dx / dist) * dWave;
        ny += (dy / dist) * dWave;
      }
    }
    return { h, nx, ny };
  }

  // ---------- MAIN RENDER LOOP ----------
  let causticTime = 0;

  function loop() {
    // 1. Clear height map & build a low-res wave visualisation for caustics
    hmCtx.clearRect(0, 0, width, height);
    hmCtx.fillStyle = 'rgba(0,0,0,0.55)';
    hmCtx.fillRect(0, 0, width, height);

    // draw wave crests as bright rings on the height map (used later for caustics)
    for (let i = 0; i < ripples.length; i++) {
      const rp = ripples[i];
      const fade = Math.max(0, 1 - rp.r / rp.maxR);
      const a = rp.alpha * fade * 0.7;
      hmCtx.beginPath();
      hmCtx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
      hmCtx.strokeStyle = `rgba(255,255,255,${a})`;
      hmCtx.lineWidth = Math.max(1.5, 4 * fade * rp.strength);
      hmCtx.stroke();
    }

    // 2. Deep water base
    offCtx.clearRect(0, 0, width, height);
    const pondGrad = offCtx.createRadialGradient(
      width * 0.5, height * 0.38, 15,
      width * 0.5, height * 0.55, width * 0.9
    );
    pondGrad.addColorStop(0, 'rgba(12, 110, 140, 0.28)');
    pondGrad.addColorStop(0.55, 'rgba(3, 90, 150, 0.38)');
    pondGrad.addColorStop(1, 'rgba(1, 30, 60, 0.62)');
    offCtx.fillStyle = pondGrad;
    offCtx.fillRect(0, 0, width, height);

    // 3. Dynamic caustics modulated by the height map
    causticTime += 0.013;
    offCtx.save();
    offCtx.globalCompositeOperation = 'lighter';
    offCtx.fillStyle = 'rgba(180, 230, 255, 0.045)';
    for (let i = 0; i < 5; i++) {
      const cy = (height * 0.22 * i + Math.sin(causticTime + i * 1.4) * 28) % height;
      const cx = width * 0.5 + Math.cos(causticTime * 0.75 + i) * 70;
      offCtx.beginPath();
      offCtx.ellipse(cx, cy, width * 0.4, 14 + i * 4, i * 0.28, 0, Math.PI * 2);
      offCtx.fill();
    }
    // multiply by height-map intensity for living caustics
    offCtx.globalCompositeOperation = 'source-over';
    offCtx.globalAlpha = 0.35;
    offCtx.drawImage(heightMap, 0, 0);
    offCtx.globalAlpha = 1;
    offCtx.restore();

    // 4. Fish shadows then bodies (depth-sorted by .depth)
    const sortedFish = [...koiPond].sort((a, b) => a.depth - b.depth);
    sortedFish.forEach(fish => {
      fish.update();
      fish.draw(offCtx, true);
    });
    sortedFish.forEach(fish => fish.draw(offCtx, false));

    // 5. Lily shadows
    leaves.forEach(l => {
      l.x += l.driftX + Math.sin(l.phase) * 0.15;
      l.y += l.driftY + Math.cos(l.phase * 0.7) * 0.11;
      l.angle += l.rotSpeed;
      l.phase += 0.0065;
      if (l.x < -60) l.x = width + 60;
      if (l.x > width + 60) l.x = -60;
      if (l.y < -60) l.y = height + 60;
      if (l.y > height + 60) l.y = -60;
      drawLilyPad(offCtx, l, true);
    });

    // 6. Optical refraction pass – full 2-D displacement from normals
    ctx.clearRect(0, 0, width, height);

    if (ripples.length === 0) {
      ctx.drawImage(offscreen, 0, 0);
    } else {
      // sample a coarse grid and warp each tile
      const TILE = 8;
      for (let ty = 0; ty < height; ty += TILE) {
        for (let tx = 0; tx < width; tx += TILE) {
          const { nx, ny } = sampleWave(tx + TILE * 0.5, ty + TILE * 0.5);
          const dispX = nx * 9;
          const dispY = ny * 9;
          ctx.drawImage(
            offscreen,
            tx, ty, TILE, TILE,
            tx + dispX, ty + dispY, TILE, TILE
          );
        }
      }
    }

    // 7. Surface lighting + foam on the live canvas
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    for (let i = 0; i < ripples.length; i++) {
      const rp = ripples[i];
      const fade = Math.max(0, 1 - rp.r / rp.maxR);
      const a = rp.alpha * fade;

      // main wavefront
      ctx.beginPath();
      ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 255, 255, ${a * 0.55})`;
      ctx.lineWidth = Math.max(0.8, 2.8 * fade * rp.strength);
      ctx.stroke();

      // secondary trough
      ctx.beginPath();
      ctx.arc(rp.x, rp.y, Math.max(1, rp.r - 5), 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(4, 50, 90, ${a * 0.35})`;
      ctx.lineWidth = Math.max(0.6, 1.6 * fade);
      ctx.stroke();

      // foam on high-energy crests
      if (rp.strength > 1.1 && fade > 0.4) {
        ctx.beginPath();
        ctx.arc(rp.x, rp.y, rp.r - 1.5, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${a * 0.25})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
    }
    ctx.restore();

    // 8. Floating pellets
    for (let i = foodPellets.length - 1; i >= 0; i--) {
      const fp = foodPellets[i];
      fp.bobPhase += 0.048;
      fp.x += fp.vx;
      fp.y += fp.vy;
      fp.life--;

      const bob = Math.sin(fp.bobPhase) * 0.7;
      ctx.save();
      ctx.beginPath();
      ctx.arc(fp.x, fp.y + bob, fp.r, 0, Math.PI * 2);
      const pelGrad = ctx.createRadialGradient(fp.x - 1, fp.y + bob - 1, 0, fp.x, fp.y + bob, fp.r);
      pelGrad.addColorStop(0, '#d97706');
      pelGrad.addColorStop(1, '#78350f');
      ctx.fillStyle = pelGrad;
      ctx.fill();
      ctx.strokeStyle = 'rgba(254, 215, 170, 0.45)';
      ctx.lineWidth = 0.7;
      ctx.stroke();
      ctx.restore();

      if (fp.life <= 0) foodPellets.splice(i, 1);
    }

    // 9. Bubbles with specular
    for (let i = bubbles.length - 1; i >= 0; i--) {
      const b = bubbles[i];
      b.y += b.vy;
      b.wobble += 0.13;
      b.x += Math.sin(b.wobble) * 0.38 + b.vx;
      b.alpha -= 0.011;

      ctx.save();
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 235, 255, ${b.alpha * 0.3})`;
      ctx.fill();
      ctx.strokeStyle = `rgba(255, 255, 255, ${b.alpha * 0.75})`;
      ctx.lineWidth = 1.1;
      ctx.stroke();

      // specular glint
      ctx.beginPath();
      ctx.arc(b.x - b.r * 0.32, b.y - b.r * 0.32, b.r * 0.28, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${b.alpha * 0.95})`;
      ctx.fill();
      ctx.restore();

      if (b.alpha <= 0) bubbles.splice(i, 1);
    }

    // 10. Surface lily pads (after water so they sit on top)
    leaves.forEach(l => drawLilyPad(ctx, l, false));

    // advance ripples
    for (let i = ripples.length - 1; i >= 0; i--) {
      const rp = ripples[i];
      rp.r += rp.speed;
      rp.alpha -= 0.014;
      if (rp.alpha <= 0 || rp.r >= rp.maxR) ripples.splice(i, 1);
    }

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
})();
