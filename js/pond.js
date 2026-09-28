(function initRealisticKoiPond() {
  const canvas = document.getElementById('pondCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = canvas.parentElement.offsetWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight);

  window.addEventListener('resize', () => {
    if (!canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  });

  // ---------- REALISTIC RIPPLES ----------
  const ripples = [];
  let isPointerDown = false;
  let lastRippleX = 0;
  let lastRippleY = 0;
  const MIN_DIST = 18; // minimum distance before spawning new ripple while dragging

  function addRipple(x, y, strength = 1.0) {
    // Main ripple with multiple sine-wave rings for depth
    ripples.push({
      x, y,
      r: 3,
      maxR: 140 * strength,
      alpha: 0.95,
      speed: 2.9,
      strength,
      // for sine-wave look
      rings: [
        { offset: 0,   width: 3.2, bright: true },
        { offset: 5,   width: 2.4, bright: false },
        { offset: 11,  width: 2.0, bright: true },
        { offset: 18,  width: 1.5, bright: false }
      ]
    });
  }

  // Pointer events for tap + continuous slide
  canvas.addEventListener('pointerdown', (e) => {
    isPointerDown = true;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    lastRippleX = x;
    lastRippleY = y;
    addRipple(x, y, 1.3);

    // Startle fish
    koiPond.forEach(fish => {
      const dx = fish.x - x;
      const dy = fish.y - y;
      const dist = Math.hypot(dx, dy);
      if (dist < 180) {
        const force = (1 - dist / 180) * 7.5;
        fish.vx += (dx / (dist || 1)) * force;
        fish.vy += (dy / (dist || 1)) * force;
        fish.spurt = 48;
      }
    });
  });

  canvas.addEventListener('pointermove', (e) => {
    if (!isPointerDown) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dist = Math.hypot(x - lastRippleX, y - lastRippleY);
    if (dist >= MIN_DIST) {
      // Strength depends on how fast you slide
      const strength = Math.min(1.4, 0.7 + dist / 60);
      addRipple(x, y, strength);
      lastRippleX = x;
      lastRippleY = y;
    }
  });

  canvas.addEventListener('pointerup', () => { isPointerDown = false; });
  canvas.addEventListener('pointerleave', () => { isPointerDown = false; });
  canvas.addEventListener('pointercancel', () => { isPointerDown = false; });

  // ---------- FLOATING LEAVES ----------
  const leaves = [];
  for (let i = 0; i < 7; i++) {
    leaves.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 13 + Math.random() * 17,
      angle: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.007,
      driftX: (Math.random() - 0.5) * 0.22,
      driftY: (Math.random() - 0.5) * 0.13,
      phase: Math.random() * Math.PI * 2,
      opacity: 0.22 + Math.random() * 0.22
    });
  }

  function drawLeaf(l) {
    ctx.save();
    ctx.translate(l.x, l.y);
    ctx.rotate(l.angle);
    ctx.globalAlpha = l.opacity;

    ctx.beginPath();
    ctx.moveTo(0, -l.size * 0.6);
    ctx.quadraticCurveTo(l.size * 0.55, -l.size * 0.25, l.size * 0.45, l.size * 0.35);
    ctx.quadraticCurveTo(0, l.size * 0.15, -l.size * 0.45, l.size * 0.35);
    ctx.quadraticCurveTo(-l.size * 0.55, -l.size * 0.25, 0, -l.size * 0.6);
    ctx.fillStyle = "rgba(34, 197, 94, 0.75)";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(0, -l.size * 0.5);
    ctx.quadraticCurveTo(l.size * 0.08, 0, 0, l.size * 0.25);
    ctx.strokeStyle = "rgba(22, 101, 52, 0.45)";
    ctx.lineWidth = 1.1;
    ctx.stroke();

    ctx.restore();
  }

  // ---------- KOI (kept from previous good version) ----------
  const NUM_JOINTS = 13;
  const BODY_RADII = [10.5, 13, 14.8, 15.2, 14.5, 13, 11.2, 9.2, 7.2, 5.3, 3.6, 2.3, 1.3];

  class Koi {
    constructor(type = 'kohaku', personality = 'cruiser') {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.angle = Math.random() * Math.PI * 2;
      this.personality = personality;
      this.type = type;

      if (personality === 'cruiser') {
        this.baseSpeed = 0.9 + Math.random() * 0.25;
        this.turnRate = 0.038;
        this.wiggleSpeed = 0.18;
      } else if (personality === 'explorer') {
        this.baseSpeed = 1.2 + Math.random() * 0.35;
        this.turnRate = 0.065;
        this.wiggleSpeed = 0.25;
      } else {
        this.baseSpeed = 1.45 + Math.random() * 0.4;
        this.turnRate = 0.1;
        this.wiggleSpeed = 0.33;
      }

      this.speed = this.baseSpeed;
      this.vx = Math.cos(this.angle) * this.speed;
      this.vy = Math.sin(this.angle) * this.speed;
      this.spurt = 0;
      this.wiggleCycle = Math.random() * 200;
      this.depth = 0.55 + Math.random() * 0.45;
      this.bobPhase = Math.random() * Math.PI * 2;
      this.noiseOffset = Math.random() * 1000;
      this.pauseTimer = 0;
      this.size = 0.82 + Math.random() * 0.38;

      this.spine = [];
      for (let i = 0; i < NUM_JOINTS; i++) {
        this.spine.push({
          x: this.x - i * 5.5 * Math.cos(this.angle),
          y: this.y - i * 5.5 * Math.sin(this.angle)
        });
      }
    }

    noise(t) {
      return Math.sin(t * 0.7 + this.noiseOffset) * 0.5 +
             Math.sin(t * 1.3 + this.noiseOffset * 1.7) * 0.3 +
             Math.sin(t * 2.1 + this.noiseOffset * 0.4) * 0.2;
    }

    update(time) {
      if (this.pauseTimer > 0) {
        this.pauseTimer--;
        this.vx *= 0.91;
        this.vy *= 0.91;
      } else if (Math.random() < 0.0028) {
        this.pauseTimer = 20 + Math.random() * 45;
      }

      const maxSpeed = this.spurt > 0 ? 4.3 : this.baseSpeed * 1.15;
      if (this.spurt > 0) this.spurt--;

      const noiseVal = this.noise(time * 0.001 + this.noiseOffset);
      this.angle += noiseVal * this.turnRate;

      if (Math.random() < (this.personality === 'darter' ? 0.011 : 0.0045)) {
        this.angle += (Math.random() - 0.5) * 0.85;
      }

      this.vx = this.vx * 0.96 + Math.cos(this.angle) * (this.speed * 0.038);
      this.vy = this.vy * 0.96 + Math.sin(this.angle) * (this.speed * 0.038);

      const curSpeed = Math.hypot(this.vx, this.vy);
      if (curSpeed > maxSpeed) {
        this.vx = (this.vx / curSpeed) * maxSpeed;
        this.vy = (this.vy / curSpeed) * maxSpeed;
      }

      const pad = 48;
      if (this.x < pad) this.vx += 0.11;
      if (this.x > width - pad) this.vx -= 0.11;
      if (this.y < pad) this.vy += 0.11;
      if (this.y > height - pad) this.vy -= 0.11;

      this.x += this.vx;
      this.y += this.vy;

      this.bobPhase += 0.027 + (this.personality === 'darter' ? 0.009 : 0);
      this.y += Math.sin(this.bobPhase) * 0.13;

      this.angle = Math.atan2(this.vy, this.vx);

      this.wiggleCycle += this.wiggleSpeed * (curSpeed > 1.7 ? 1.55 : 1);
      this.spine[0] = { x: this.x, y: this.y };
      const segmentLen = 5.5 * this.size;

      for (let i = 1; i < NUM_JOINTS; i++) {
        const prev = this.spine[i - 1];
        const cur = this.spine[i];
        let dx = cur.x - prev.x;
        let dy = cur.y - prev.y;
        const d = Math.hypot(dx, dy) || 1;
        cur.x = prev.x + (dx / d) * segmentLen;
        cur.y = prev.y + (dy / d) * segmentLen;

        const wave = Math.sin(this.wiggleCycle - i * 0.33) * (i * 0.55);
        const normAngle = Math.atan2(dy, dx) + Math.PI / 2;
        cur.x += Math.cos(normAngle) * wave * 0.18 * this.size;
        cur.y += Math.sin(normAngle) * wave * 0.18 * this.size;
      }
    }

    draw(isShadow = false) {
      ctx.save();

      if (isShadow) {
        const offset = 10 + this.depth * 11;
        ctx.translate(offset * 0.55, offset);
        ctx.globalAlpha = 0.17 * this.depth;
        ctx.fillStyle = "rgba(0, 14, 38, 1)";
      } else {
        ctx.globalAlpha = 0.72 + this.depth * 0.28;
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
        const r = BODY_RADII[i] * scale * (0.91 + this.depth * 0.1);
        leftPts.push({ x: pt.x + Math.cos(ang) * r, y: pt.y + Math.sin(ang) * r });
        rightPts.push({ x: pt.x - Math.cos(ang) * r, y: pt.y - Math.sin(ang) * r });
      }

      // Pectoral fins
      const finJoint = this.spine[2];
      const finFlutter = Math.sin(this.wiggleCycle * 1.42) * 0.34;
      for (let side of [-1, 1]) {
        ctx.beginPath();
        const baseX = finJoint.x + Math.cos(this.angle + side * 1.28) * 9 * scale;
        const baseY = finJoint.y + Math.sin(this.angle + side * 1.28) * 9 * scale;
        const tipX = baseX + Math.cos(this.angle + side * (1.78 + finFlutter)) * 24 * scale;
        const tipY = baseY + Math.sin(this.angle + side * (1.78 + finFlutter)) * 24 * scale;
        ctx.moveTo(baseX, baseY);
        ctx.quadraticCurveTo(tipX + side * 3.5, tipY + 2.5,
          baseX + Math.cos(this.angle + side * 2.35) * 8 * scale,
          baseY + Math.sin(this.angle + side * 2.35) * 8 * scale);
        ctx.fillStyle = isShadow ? "rgba(0,12,32,0.28)" :
          (this.type === 'ogon' ? "rgba(251,146,60,0.78)" : "rgba(255,255,255,0.82)");
        ctx.fill();
      }

      // Body
      ctx.beginPath();
      ctx.moveTo(leftPts[0].x, leftPts[0].y);
      for (let i = 1; i < leftPts.length; i++) ctx.lineTo(leftPts[i].x, leftPts[i].y);
      ctx.lineTo(this.spine[NUM_JOINTS - 1].x, this.spine[NUM_JOINTS - 1].y);
      for (let i = rightPts.length - 1; i >= 0; i--) ctx.lineTo(rightPts[i].x, rightPts[i].y);
      ctx.bezierCurveTo(
        this.x + Math.cos(this.angle + 0.55) * 14.5 * scale,
        this.y + Math.sin(this.angle + 0.55) * 14.5 * scale,
        this.x + Math.cos(this.angle - 0.55) * 14.5 * scale,
        this.y + Math.sin(this.angle - 0.55) * 14.5 * scale,
        leftPts[0].x, leftPts[0].y
      );
      ctx.closePath();

      if (isShadow) {
        ctx.fill();
        ctx.restore();
        return;
      }

      const grad = ctx.createLinearGradient(
        this.x + Math.cos(this.angle + Math.PI/2) * 15,
        this.y + Math.sin(this.angle + Math.PI/2) * 15,
        this.x + Math.cos(this.angle - Math.PI/2) * 15,
        this.y + Math.sin(this.angle - Math.PI/2) * 15
      );

      if (this.type === 'kohaku') {
        grad.addColorStop(0, '#ffffff');
        grad.addColorStop(0.5, '#f1f5f9');
        grad.addColorStop(1, '#cbd5e1');
      } else if (this.type === 'ogon') {
        grad.addColorStop(0, '#fdba74');
        grad.addColorStop(0.45, '#fb923c');
        grad.addColorStop(1, '#c2410c');
      } else {
        grad.addColorStop(0, '#f8fafc');
        grad.addColorStop(0.55, '#e2e8f0');
        grad.addColorStop(1, '#94a3b8');
      }
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.strokeStyle = this.type === 'ogon' ? "rgba(154,52,18,0.22)" : "rgba(148,163,184,0.18)";
      ctx.lineWidth = 0.9;
      ctx.stroke();

      // Patterns
      ctx.save();
      ctx.clip();
      if (this.type === 'kohaku') {
        const h = this.spine[1];
        ctx.beginPath();
        ctx.ellipse(h.x, h.y, 8.2 * scale, 5.6 * scale, this.angle, 0, Math.PI * 2);
        ctx.fillStyle = "#dc2626";
        ctx.fill();
        const m = this.spine[4];
        ctx.beginPath();
        ctx.ellipse(m.x, m.y, 10.2 * scale, 6.6 * scale, this.angle - 0.12, 0, Math.PI * 2);
        ctx.fillStyle = "#ea580c";
        ctx.fill();
        const r = this.spine[7];
        ctx.beginPath();
        ctx.ellipse(r.x, r.y, 6.3 * scale, 4.1 * scale, this.angle + 0.1, 0, Math.PI * 2);
        ctx.fillStyle = "#dc2626";
        ctx.fill();
      } else if (this.type === 'showa') {
        const p1 = this.spine[2];
        ctx.beginPath();
        ctx.ellipse(p1.x, p1.y, 9.2 * scale, 6.3 * scale, this.angle, 0, Math.PI * 2);
        ctx.fillStyle = "#1e293b";
        ctx.fill();
        const p2 = this.spine[6];
        ctx.beginPath();
        ctx.ellipse(p2.x, p2.y, 7.3 * scale, 4.9 * scale, this.angle + 0.14, 0, Math.PI * 2);
        ctx.fillStyle = "#0f172a";
        ctx.fill();
      }
      ctx.restore();

      // Eye
      const eyeX = this.x + Math.cos(this.angle) * 7.8 * scale + Math.cos(this.angle + Math.PI/2) * 3.9 * scale;
      const eyeY = this.y + Math.sin(this.angle) * 7.8 * scale + Math.sin(this.angle + Math.PI/2) * 3.9 * scale;
      ctx.beginPath();
      ctx.arc(eyeX, eyeY, 2.2 * scale, 0, Math.PI * 2);
      ctx.fillStyle = "#0f172a";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(eyeX - 0.65 * scale, eyeY - 0.55 * scale, 0.85 * scale, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.fill();

      // Tail
      const last = this.spine[NUM_JOINTS - 1];
      const second = this.spine[NUM_JOINTS - 2];
      const tailAng = Math.atan2(last.y - second.y, last.x - second.x);
      const flare = Math.sin(this.wiggleCycle) * 6 * scale;

      ctx.beginPath();
      ctx.moveTo(last.x, last.y);
      ctx.quadraticCurveTo(
        last.x + Math.cos(tailAng - 0.72) * 22 * scale,
        last.y + Math.sin(tailAng - 0.72) * 22 * scale + flare,
        last.x + Math.cos(tailAng - 0.26) * 30 * scale,
        last.y + Math.sin(tailAng - 0.26) * 30 * scale + flare
      );
      ctx.quadraticCurveTo(
        last.x + Math.cos(tailAng) * 24 * scale,
        last.y + Math.sin(tailAng) * 24 * scale,
        last.x + Math.cos(tailAng + 0.26) * 30 * scale,
        last.y + Math.sin(tailAng + 0.26) * 30 * scale - flare
      );
      ctx.quadraticCurveTo(
        last.x + Math.cos(tailAng + 0.72) * 22 * scale,
        last.y + Math.sin(tailAng + 0.72) * 22 * scale - flare,
        last.x, last.y
      );
      ctx.fillStyle = this.type === 'ogon' ? "rgba(249,115,22,0.76)" : "rgba(255,255,255,0.76)";
      ctx.fill();

      ctx.restore();
    }
  }

  const koiPond = [
    new Koi('kohaku', 'cruiser'),
    new Koi('ogon', 'explorer'),
    new Koi('showa', 'darter'),
    new Koi('kohaku', 'explorer'),
    new Koi('ogon', 'cruiser'),
    new Koi('showa', 'explorer')
  ];

  // ---------- WATER + LOOP ----------
  let causticOffset = 0;
  const particles = Array.from({ length: 18 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: 0.5 + Math.random() * 1.4,
    speed: 0.11 + Math.random() * 0.22,
    phase: Math.random() * Math.PI * 2,
    alpha: 0.1 + Math.random() * 0.12
  }));

  function loop(time) {
    ctx.clearRect(0, 0, width, height);

    // Deep water base
    const waterGrad = ctx.createLinearGradient(0, 0, 0, height);
    waterGrad.addColorStop(0, "rgba(7, 89, 133, 0.22)");
    waterGrad.addColorStop(0.35, "rgba(12, 120, 160, 0.13)");
    waterGrad.addColorStop(0.7, "rgba(8, 100, 140, 0.16)");
    waterGrad.addColorStop(1, "rgba(4, 60, 95, 0.28)");
    ctx.fillStyle = waterGrad;
    ctx.fillRect(0, 0, width, height);

    // Soft light shafts
    ctx.save();
    for (let i = 0; i < 5; i++) {
      const sx = width * (0.15 + i * 0.18) + Math.sin(causticOffset * 0.4 + i) * 40;
      ctx.beginPath();
      ctx.moveTo(sx - 25, 0);
      ctx.lineTo(sx + 35, 0);
      ctx.lineTo(sx + 10, height);
      ctx.lineTo(sx - 50, height);
      ctx.closePath();
      ctx.fillStyle = `rgba(255, 255, 255, ${0.018 - i * 0.002})`;
      ctx.fill();
    }
    ctx.restore();

    // Multi-layer caustics
    causticOffset += 0.0095;
    for (let c = 0; c < 5; c++) {
      const wy = height * (0.12 + c * 0.17) + Math.sin(causticOffset * (0.9 + c * 0.15) + c * 1.4) * (12 + c * 3);
      const wx = width * 0.5 + Math.cos(causticOffset * 0.55 + c * 0.8) * (30 + c * 8);
      ctx.beginPath();
      ctx.ellipse(wx, wy, width * (0.32 + c * 0.04), 13 + c * 2.8, c * 0.35, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 240, 255, ${0.028 - c * 0.0035})`;
      ctx.fill();
    }

    // Secondary sparkles
    for (let c = 0; c < 6; c++) {
      const wx = (width * 0.1 + (c * width * 0.16) + Math.sin(causticOffset * 1.2 + c) * 50) % width;
      const wy = height * 0.25 + Math.cos(causticOffset * 0.9 + c * 1.1) * height * 0.35;
      ctx.beginPath();
      ctx.ellipse(wx, wy, 28 + c * 4, 8, c * 0.5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.015)";
      ctx.fill();
    }

    // Particles
    particles.forEach(p => {
      p.phase += 0.015;
      p.y -= p.speed;
      p.x += Math.sin(p.phase) * 0.22;
      if (p.y < -8) {
        p.y = height + 8;
        p.x = Math.random() * width;
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
      ctx.fill();
    });

    // Leaves
    leaves.forEach(l => {
      l.x += l.driftX + Math.sin(l.phase) * 0.15;
      l.y += l.driftY + Math.cos(l.phase * 0.7) * 0.1;
      l.angle += l.rotSpeed;
      l.phase += 0.008;
      if (l.x < -40) l.x = width + 40;
      if (l.x > width + 40) l.x = -40;
      if (l.y < -40) l.y = height + 40;
      if (l.y > height + 40) l.y = -40;
      drawLeaf(l);
    });

    // Fish
    koiPond.forEach(f => { f.update(time); f.draw(true); });
    koiPond.forEach(f => f.draw(false));

    // ===== REALISTIC SINE-WAVE RIPPLES =====
    for (let i = ripples.length - 1; i >= 0; i--) {
      const rp = ripples[i];

      rp.rings.forEach((ring, idx) => {
        const ringR = rp.r - ring.offset;
        if (ringR < 2) return;

        const fade = Math.max(0, 1 - (rp.r / rp.maxR));
        const alpha = rp.alpha * fade * (1 - idx * 0.12);

        ctx.beginPath();
        ctx.arc(rp.x, rp.y, ringR, 0, Math.PI * 2);

        if (ring.bright) {
          // Crest – bright white
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.95})`;
        } else {
          // Trough – darker blue for depth
          ctx.strokeStyle = `rgba(3, 70, 120, ${alpha * 0.55})`;
        }
        ctx.lineWidth = ring.width * fade;
        ctx.stroke();
      });

      // Soft outer glow for extra realism
      ctx.beginPath();
      ctx.arc(rp.x, rp.y, rp.r + 4, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(180, 230, 255, ${rp.alpha * 0.12 * (1 - rp.r / rp.maxR)})`;
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Expand & fade
      rp.r += rp.speed;
      rp.alpha -= 0.0095;

      if (rp.alpha <= 0 || rp.r >= rp.maxR) {
        ripples.splice(i, 1);
      }
    }

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
})();
