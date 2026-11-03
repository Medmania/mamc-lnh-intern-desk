/**
 * Photorealistic Glowing Water Surface Engine
 * Inspired by high-end medical app headers (e.g., Marrow Clinical Edge)
 * 
 * Features:
 * - Volumetric cyan light shafts & animated caustics
 * - Analytical 3D wave height-field with spatial normals (nx, ny)
 * - Tiled optical refraction pass warping the offscreen scene
 * - Luminous wave crests, dark troughs & cyan halo glow
 * - Touch/pointer tracking with velocity-scaled trailing ripples
 */
function initPhotorealisticWaterSurface() {
  const canvas = document.getElementById('pondCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  // --- Offscreen Buffers ---
  const offscreen = document.createElement('canvas');
  const offCtx = offscreen.getContext('2d');
  
  const heightMap = document.createElement('canvas');
  const hmCtx = heightMap.getContext('2d');

  let width = 0, height = 0;

  function resize() {
    if (!canvas.parentElement) return;
    width = canvas.width = offscreen.width = heightMap.width = canvas.parentElement.offsetWidth;
    height = canvas.height = offscreen.height = heightMap.height = canvas.parentElement.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // --- Water Ripple Physics State ---
  const ripples = [];
  const MAX_RIPPLES = 40; // Performance safeguard for mobile
  let isPointerDown = false;
  let lastX = 0, lastY = 0, lastTime = 0;
  let tapTimer = 0;

  function addRipple(x, y, strength = 1.0, forwardAngle = null) {
    if (ripples.length >= MAX_RIPPLES) {
      ripples.shift(); // Evict oldest ripple when cap is reached
    }

    ripples.push({
      x, y,
      r: 3,
      maxR: Math.min(260, 100 + strength * 80),
      alpha: Math.min(1.0, 0.75 + strength * 0.25),
      speed: 2.2 + Math.min(1.8, strength * 0.8),
      wavelength: 18 + strength * 6,
      height: 0.8 + strength * 1.1, // Amplitude peak
      forwardAngle,
      strength
    });

    // Interactively push koi fish away on strong impacts
    if (strength > 1.1) {
      koiPond.forEach(fish => {
        const dx = fish.x - x;
        const dy = fish.y - y;
        const dist = Math.hypot(dx, dy);
        if (dist < 180) {
          const force = (1 - dist / 180) * (6.0 + strength * 3.0);
          fish.vx += (dx / (dist || 1)) * force;
          fish.vy += (dy / (dist || 1)) * force;
          fish.spurt = 45;
        }
      });
    }
  }

  // --- Interactive Elements (Food & Bubbles) ---
  const foodPellets = [];
  function dropFood(x, y) {
    for (let i = 0; i < 3; i++) {
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
    addRipple(x, y, 0.95);
  }

  const bubbles = [];
  function spawnBubbles(x, y, count = 4) {
    for (let i = 0; i < count; i++) {
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

  // --- Pointer & Touch Listeners ---
  canvas.addEventListener('pointerdown', (e) => {
    isPointerDown = true;
    const rect = canvas.getBoundingClientRect();
    lastX = e.clientX - rect.left;
    lastY = e.clientY - rect.top;
    lastTime = performance.now();

    const now = Date.now();
    if (now - tapTimer < 300) {
      dropFood(lastX, lastY);
      tapTimer = 0;
    } else {
      tapTimer = now;
      addRipple(lastX, lastY, 1.25);
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

    const STEP = 8;
    if (dist >= STEP) {
      const steps = Math.floor(dist / STEP);
      const dragSpeed = dist / dt;
      const moveAngle = Math.atan2(dy, dx);
      const dynamicStrength = Math.min(1.85, 0.5 + dragSpeed * 0.65);

      for (let s = 1; s <= steps; s++) {
        const interpX = lastX + (dx / steps) * s;
        const interpY = lastY + (dy / steps) * s;
        addRipple(interpX, interpY, dynamicStrength * 0.7, moveAngle);
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

  // --- Scene Components: Lily Pads & Koi ---
  const leaves = Array.from({ length: 6 }, () => ({
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
  }));

  function drawLilyPad(tCtx, l, isShadow = false) {
    tCtx.save();
    tCtx.translate(l.x, l.y);
    tCtx.rotate(l.angle);

    if (isShadow) {
      tCtx.translate(8 + l.depth * 6, 12 + l.depth * 8);
      tCtx.fillStyle = `rgba(1, 15, 32, ${0.22 * l.depth})`;
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

    const leafGrad = tCtx.createRadialGradient(-l.size * 0.2, -l.size * 0.2, 1, 0, 0, l.size);
    leafGrad.addColorStop(0, '#34d399');
    leafGrad.addColorStop(0.6, '#059669');
    leafGrad.addColorStop(1, '#064e3b');
    tCtx.fillStyle = leafGrad;
    tCtx.fill();

    tCtx.strokeStyle = 'rgba(167, 243, 208, 0.45)';
    tCtx.lineWidth = 0.8;
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 1.7 + l.notch;
      tCtx.beginPath();
      tCtx.moveTo(0, 0);
      tCtx.lineTo(Math.cos(a) * l.size * 0.85, Math.sin(a) * l.size * 0.85);
      tCtx.stroke();
    }
    tCtx.restore();
  }

  const NUM_JOINTS = 14;
  const BODY_RADII = [11, 14, 16.5, 17, 16.2, 14.8, 13, 11, 9, 7.2, 5.4, 3.8, 2.4, 1.4];

  class Koi {
    constructor(type = 'kohaku', sizeScale = 1.0) {
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

      this.spine = Array.from({ length: NUM_JOINTS }, (_, i) => ({
        x: this.x - i * 5.8 * this.size * Math.cos(this.angle),
        y: this.y - i * 5.8 * this.size * Math.sin(this.angle)
      }));
    }

    update() {
      const maxSpeed = this.spurt > 0 ? 5.0 : this.speed * 1.35;
      if (this.spurt > 0) this.spurt--;

      let targetFood = null;
      let minDist = 190;
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
        this.angle += (Math.random() - 0.5) * 0.07;
      }

      if (this.mouthOpen > 0) this.mouthOpen -= 0.04;

      this.vx = this.vx * 0.96 + Math.cos(this.angle) * (this.speed * 0.045);
      this.vy = this.vy * 0.96 + Math.sin(this.angle) * (this.speed * 0.045);

      const curSpeed = Math.hypot(this.vx, this.vy);
      if (curSpeed > maxSpeed) {
        this.vx = (this.vx / curSpeed) * maxSpeed;
        this.vy = (this.vy / curSpeed) * maxSpeed;
      }

      const pad = 50;
      if (this.x < pad) this.vx += 0.14;
      if (this.x > width - pad) this.vx -= 0.14;
      if (this.y < pad) this.vy += 0.14;
      if (this.y > height - pad) this.vy -= 0.14;

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

        const wave = Math.sin(this.wiggleCycle - i * 0.36) * (i * 0.55) * this.size;
        const normAngle = Math.atan2(dy, dx) + Math.PI / 2;
        cur.x += Math.cos(normAngle) * wave * 0.15;
        cur.y += Math.sin(normAngle) * wave * 0.15;
      }
    }

    draw(tCtx, isShadow = false) {
      tCtx.save();

      if (isShadow) {
        const offset = 12 + this.depth * 14;
        tCtx.translate(offset * 0.5, offset);
        tCtx.fillStyle = `rgba(0, 10, 28, ${0.22 * this.depth})`;
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
      const pFlutter = Math.sin(this.wiggleCycle * 1.35) * 0.3;
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
        tCtx.fillStyle = isShadow ? 'rgba(0,10,28,0.25)' :
          (this.type === 'yamabuki' ? 'rgba(251, 146, 60, 0.75)' : 'rgba(255, 255, 255, 0.8)');
        tCtx.fill();
      }

      // Main Body Mesh
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
        bodyGrad.addColorStop(0.5, '#f97316');
        bodyGrad.addColorStop(1, '#9a3412');
      } else {
        bodyGrad.addColorStop(0, '#ffffff');
        bodyGrad.addColorStop(0.55, '#f1f5f9');
        bodyGrad.addColorStop(1, '#64748b');
      }
      tCtx.fillStyle = bodyGrad;
      tCtx.fill();

      // Distinct Kohaku/Sanke Patches
      tCtx.save();
      tCtx.clip();
      if (this.type === 'kohaku' || this.type === 'sanke') {
        tCtx.fillStyle = '#ef4444';
        const h = this.spine[1];
        tCtx.beginPath();
        tCtx.ellipse(h.x, h.y, 8.5 * scale, 6 * scale, this.angle, 0, Math.PI * 2);
        tCtx.fill();

        tCtx.fillStyle = '#f97316';
        const m = this.spine[4];
        tCtx.beginPath();
        tCtx.ellipse(m.x, m.y, 11 * scale, 7.5 * scale, this.angle - 0.15, 0, Math.PI * 2);
        tCtx.fill();
      }
      if (this.type === 'sanke') {
        tCtx.fillStyle = '#0f172a';
        const s1 = this.spine[3];
        tCtx.beginPath();
        tCtx.ellipse(s1.x + 3, s1.y, 5 * scale, 3.5 * scale, this.angle + 0.4, 0, Math.PI * 2);
        tCtx.fill();
      }
      tCtx.restore();

      // Tail Fin
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
      tCtx.fillStyle = this.type === 'yamabuki' ? 'rgba(251, 146, 60, 0.75)' : 'rgba(255, 255, 255, 0.8)';
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

  // ==========================================
  // 3. WAVE PHYSICS (Height Field & Normals)
  // ==========================================
  /**
   * Evaluates wave height (h) and analytical normal slopes (nx, ny) at (px, py).
   * Models 3D sine-wave cross sections (crests & troughs).
   */
  function sampleWave(px, py) {
    let h = 0, nx = 0, ny = 0;

    for (let i = 0; i < ripples.length; i++) {
      const rp = ripples[i];
      const dx = px - rp.x;
      const dy = py - rp.y;
      const dist = Math.hypot(dx, dy);

      // Distance envelope check
      if (dist > rp.r + 4 || dist < rp.r - rp.wavelength * 1.5 - 4) continue;

      const phase = (dist - (rp.r - rp.wavelength)) / rp.wavelength;
      if (phase < 0 || phase > 1) continue;

      // Sine wave profile: bright crest (h > 0) + dark trough (h < 0)
      const wave = Math.sin(phase * Math.PI * 2) * rp.height * rp.alpha;
      h += wave;

      // Analytical spatial derivative of the sine wave
      const dPhase = (1 / rp.wavelength) * Math.PI * 2;
      const dWave = Math.cos(phase * Math.PI * 2) * rp.height * rp.alpha * dPhase;

      if (dist > 0.001) {
        nx += (dx / dist) * dWave;
        ny += (dy / dist) * dWave;
      }
    }

    return { h, nx, ny };
  }

  // ==========================================
  // 4. RENDERING PIPELINE & RENDERING ORDER
  // ==========================================
  let time = 0;

  function loop() {
    time += 0.016;

    // --- STEP 1: Render Scene Base to Offscreen Canvas ---
    offCtx.clearRect(0, 0, width, height);

    // 1a. Deep radial turquoise & cyan water gradient
    const waterGrad = offCtx.createRadialGradient(
      width * 0.5, height * 0.35, width * 0.05,
      width * 0.5, height * 0.5, width * 0.85
    );
    waterGrad.addColorStop(0, '#06b6d4');   // Vibrant Cyan
    waterGrad.addColorStop(0.35, '#0891b2'); // Deep Cyan
    waterGrad.addColorStop(0.7, '#0e7490');  // Dark Turquoise
    waterGrad.addColorStop(1, '#083344');    // Deepest Teal
    offCtx.fillStyle = waterGrad;
    offCtx.fillRect(0, 0, width, height);

    // 1b. Soft Volumetric Light Shafts (Diagonal glowing beams)
    offCtx.save();
    offCtx.globalCompositeOperation = 'screen';
    for (let i = 0; i < 4; i++) {
      const angle = 0.35 + Math.sin(time * 0.4 + i) * 0.05;
      const beamX = width * (0.2 + i * 0.22) + Math.sin(time * 0.5 + i * 2) * 40;

      const beamGrad = offCtx.createLinearGradient(beamX, 0, beamX + Math.tan(angle) * height, height);
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

    // 1c. Multi-layer Animated Caustics (High saturation cyan)
    offCtx.save();
    offCtx.globalCompositeOperation = 'lighter';
    for (let layer = 0; layer < 2; layer++) {
      const speedScale = layer === 0 ? 0.7 : 1.1;
      const opacity = layer === 0 ? 0.07 : 0.05;

      for (let i = 0; i < 6; i++) {
        const cx = (width * 0.18 * i + Math.sin(time * speedScale + i * 1.5) * 45 + width) % width;
        const cy = (height * 0.22 * i + Math.cos(time * 0.8 * speedScale + i) * 35 + height) % height;
        const radius = width * (0.2 + (i % 3) * 0.08);

        const cGrad = offCtx.createRadialGradient(cx, cy, 5, cx, cy, radius);
        cGrad.addColorStop(0, `rgba(6, 182, 212, ${opacity * 1.8})`);
        cGrad.addColorStop(0.4, `rgba(34, 211, 238, ${opacity})`);
        cGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        offCtx.fillStyle = cGrad;
        offCtx.beginPath();
        offCtx.ellipse(cx, cy, radius, radius * 0.45, i * 0.4 + time * 0.1, 0, Math.PI * 2);
        offCtx.fill();
      }
    }
    offCtx.restore();

    // 1d. Render Scene Elements (Fish shadows, Fish bodies, Lily shadows)
    const sortedFish = [...koiPond].sort((a, b) => a.depth - b.depth);
    sortedFish.forEach(fish => {
      fish.update();
      fish.draw(offCtx, true); // Shadow pass
    });
    sortedFish.forEach(fish => fish.draw(offCtx, false)); // Body pass

    leaves.forEach(l => {
      l.x += l.driftX + Math.sin(l.phase) * 0.15;
      l.y += l.driftY + Math.cos(l.phase * 0.7) * 0.11;
      l.angle += l.rotSpeed;
      l.phase += 0.006;
      if (l.x < -60) l.x = width + 60;
      if (l.x > width + 60) l.x = -60;
      if (l.y < -60) l.y = height + 60;
      if (l.y > height + 60) l.y = -60;
      drawLilyPad(offCtx, l, true); // Shadow pass
    });

    // --- STEP 2: Main Canvas Refraction Pass ---
    ctx.clearRect(0, 0, width, height);

    if (ripples.length === 0) {
      // Direct pass-through when surface is completely still
      ctx.drawImage(offscreen, 0, 0);
    } else {
      // Tile-based optical distortion via surface normal displacement
      const TILE = 8;
      const refScale = 11.0; // Refractive bending magnitude

      for (let ty = 0; ty < height; ty += TILE) {
        for (let tx = 0; tx < width; tx += TILE) {
          const { nx, ny } = sampleWave(tx + TILE * 0.5, ty + TILE * 0.5);
          const dispX = nx * refScale;
          const dispY = ny * refScale;

          ctx.drawImage(
            offscreen,
            tx, ty, TILE, TILE,
            tx + dispX, ty + dispY, TILE, TILE
          );
        }
      }
    }

    // --- STEP 3: Luminous Wave Highlights & Depth Overlay ---
    ctx.save();
    
    // 3a. Soft Outer Cyan Glow
    ctx.globalCompositeOperation = 'screen';
    for (let i = 0; i < ripples.length; i++) {
      const rp = ripples[i];
      const fade = Math.max(0, 1 - rp.r / rp.maxR);
      const alpha = rp.alpha * fade;

      ctx.beginPath();
      ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(34, 211, 238, ${alpha * 0.45})`;
      ctx.lineWidth = Math.max(2, 6 * fade * rp.strength);
      ctx.stroke();
    }

    // 3b. Dark Troughs (Positioned slightly inside the crest for 3D depth)
    ctx.globalCompositeOperation = 'multiply';
    for (let i = 0; i < ripples.length; i++) {
      const rp = ripples[i];
      const fade = Math.max(0, 1 - rp.r / rp.maxR);
      const alpha = rp.alpha * fade;
      const troughRadius = Math.max(1, rp.r - rp.wavelength * 0.28);

      ctx.beginPath();
      ctx.arc(rp.x, rp.y, troughRadius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(2, 44, 34, ${alpha * 0.55})`;
      ctx.lineWidth = Math.max(1.5, 3.5 * fade);
      ctx.stroke();
    }

    // 3c. Bright Luminous Crests
    ctx.globalCompositeOperation = 'lighter';
    for (let i = 0; i < ripples.length; i++) {
      const rp = ripples[i];
      const fade = Math.max(0, 1 - rp.r / rp.maxR);
      const alpha = rp.alpha * fade;

      ctx.beginPath();
      ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.85})`;
      ctx.lineWidth = Math.max(0.8, 2.2 * fade * rp.strength);
      ctx.stroke();
    }
    ctx.restore();

    // --- STEP 4: Foreground Elements (Food, Bubbles & Surface Lily Pads) ---
    // Floating food pellets
    for (let i = foodPellets.length - 1; i >= 0; i--) {
      const fp = foodPellets[i];
      fp.bobPhase += 0.05;
      fp.x += fp.vx;
      fp.y += fp.vy;
      fp.life--;

      const bob = Math.sin(fp.bobPhase) * 0.8;
      ctx.save();
      ctx.beginPath();
      ctx.arc(fp.x, fp.y + bob, fp.r, 0, Math.PI * 2);
      const pelGrad = ctx.createRadialGradient(fp.x - 1, fp.y + bob - 1, 0, fp.x, fp.y + bob, fp.r);
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

    // Floating Bubbles with specular highlights
    for (let i = bubbles.length - 1; i >= 0; i--) {
      const b = bubbles[i];
      b.y += b.vy;
      b.wobble += 0.12;
      b.x += Math.sin(b.wobble) * 0.35 + b.vx;
      b.alpha -= 0.012;

      ctx.save();
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(207, 250, 254, ${b.alpha * 0.35})`;
      ctx.fill();
      ctx.strokeStyle = `rgba(255, 255, 255, ${b.alpha * 0.8})`;
      ctx.lineWidth = 1.0;
      ctx.stroke();

      // Specular Glint
      ctx.beginPath();
      ctx.arc(b.x - b.r * 0.3, b.y - b.r * 0.3, b.r * 0.25, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${b.alpha * 0.95})`;
      ctx.fill();
      ctx.restore();

      if (b.alpha <= 0) bubbles.splice(i, 1);
    }

    // Top layer lily pads (floating unrefracted on top of surface)
    leaves.forEach(l => drawLilyPad(ctx, l, false));

    // --- STEP 5: Advance Ripple Simulation State ---
    for (let i = ripples.length - 1; i >= 0; i--) {
      const rp = ripples[i];
      rp.r += rp.speed;
      rp.alpha -= 0.012;
      if (rp.alpha <= 0 || rp.r >= rp.maxR) {
        ripples.splice(i, 1);
      }
    }

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}

// Auto-initialize when document is ready
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  initPhotorealisticWaterSurface();
} else {
  document.addEventListener('DOMContentLoaded', initPhotorealisticWaterSurface);
}
