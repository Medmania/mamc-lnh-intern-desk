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

  // --- RIPPLES ---
  const ripples = [];
  function addRipple(x, y, strength = 1.0) {
    // Primary ring
    ripples.push({ x, y, r: 2, maxR: 110 * strength, alpha: 0.85, speed: 2.6, width: 2.4 });
    // Secondary delayed ring
    setTimeout(() => {
      ripples.push({ x, y, r: 2, maxR: 80 * strength, alpha: 0.55, speed: 2.0, width: 1.8 });
    }, 90);
    // Tertiary soft ring
    setTimeout(() => {
      ripples.push({ x, y, r: 2, maxR: 55 * strength, alpha: 0.35, speed: 1.5, width: 1.3 });
    }, 180);

    // Scatter nearby fish
    koiPond.forEach(fish => {
      const dx = fish.x - x;
      const dy = fish.y - y;
      const dist = Math.hypot(dx, dy);
      if (dist < 160) {
        const force = (1 - dist / 160) * 6.2;
        fish.vx += (dx / (dist || 1)) * force;
        fish.vy += (dy / (dist || 1)) * force;
        fish.spurt = 38;
      }
    });
  }

  // --- KOI BODY CONFIGURATION ---
  const NUM_JOINTS = 12;
  const BODY_RADII = [12.5, 14.5, 15.8, 15.2, 13.8, 12, 10, 8, 6.2, 4.5, 3, 1.8];

  class Koi {
    constructor(isKohaku = true) {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.angle = Math.random() * Math.PI * 2;
      this.speed = 1.15 + Math.random() * 0.55;
      this.vx = Math.cos(this.angle) * this.speed;
      this.vy = Math.sin(this.angle) * this.speed;
      this.spurt = 0;
      this.wiggleCycle = Math.random() * 100;
      this.isKohaku = isKohaku;
      this.depth = 0.6 + Math.random() * 0.4; // 0.6–1.0 for parallax & shadow
      this.bobPhase = Math.random() * Math.PI * 2;

      this.spine = [];
      for (let i = 0; i < NUM_JOINTS; i++) {
        this.spine.push({
          x: this.x - i * 5.8 * Math.cos(this.angle),
          y: this.y - i * 5.8 * Math.sin(this.angle)
        });
      }
    }

    update(time) {
      const currentMaxSpeed = this.spurt > 0 ? 4.1 : 1.55;
      if (this.spurt > 0) this.spurt--;

      // Gentle wandering + occasional sharper turns
      this.angle += (Math.random() - 0.5) * 0.09;
      if (Math.random() < 0.008) this.angle += (Math.random() - 0.5) * 0.6;

      this.vx = this.vx * 0.965 + Math.cos(this.angle) * (this.speed * 0.045);
      this.vy = this.vy * 0.965 + Math.sin(this.angle) * (this.speed * 0.045);

      const curSpeed = Math.hypot(this.vx, this.vy);
      if (curSpeed > currentMaxSpeed) {
        this.vx = (this.vx / curSpeed) * currentMaxSpeed;
        this.vy = (this.vy / curSpeed) * currentMaxSpeed;
      }

      // Soft border repulsion
      const pad = 40;
      if (this.x < pad) this.vx += 0.09;
      if (this.x > width - pad) this.vx -= 0.09;
      if (this.y < pad) this.vy += 0.09;
      if (this.y > height - pad) this.vy -= 0.09;

      this.x += this.vx;
      this.y += this.vy;

      // Subtle vertical bob for life
      this.bobPhase += 0.035;
      this.y += Math.sin(this.bobPhase) * 0.18;

      this.angle = Math.atan2(this.vy, this.vx);

      // Spine kinematics with progressive wave
      this.wiggleCycle += (curSpeed > 2.1 ? 0.48 : 0.23);
      this.spine[0] = { x: this.x, y: this.y };
      const segmentLen = 5.8;

      for (let i = 1; i < NUM_JOINTS; i++) {
        const prev = this.spine[i - 1];
        const cur = this.spine[i];
        let dx = cur.x - prev.x;
        let dy = cur.y - prev.y;
        const d = Math.hypot(dx, dy) || 1;
        cur.x = prev.x + (dx / d) * segmentLen;
        cur.y = prev.y + (dy / d) * segmentLen;

        const wave = Math.sin(this.wiggleCycle - i * 0.38) * (i * 0.65);
        const normAngle = Math.atan2(dy, dx) + Math.PI / 2;
        cur.x += Math.cos(normAngle) * wave * 0.22;
        cur.y += Math.sin(normAngle) * wave * 0.22;
      }
    }

    draw(isShadow = false) {
      ctx.save();

      if (isShadow) {
        const offset = 12 + this.depth * 8;
        ctx.translate(offset * 0.7, offset);
        ctx.globalAlpha = 0.22 * this.depth;
        ctx.fillStyle = "rgba(0, 20, 50, 1)";
      }

      // Body contours
      const leftPts = [];
      const rightPts = [];

      for (let i = 0; i < NUM_JOINTS; i++) {
        const pt = this.spine[i];
        let ang = this.angle;
        if (i < NUM_JOINTS - 1) {
          const next = this.spine[i + 1];
          ang = Math.atan2(next.y - pt.y, next.x - pt.x) + Math.PI / 2;
        } else {
          ang = Math.atan2(pt.y - this.spine[i - 1].y, pt.x - this.spine[i - 1].x) + Math.PI / 2;
        }
        const r = BODY_RADII[i] * (0.92 + this.depth * 0.1);
        leftPts.push({ x: pt.x + Math.cos(ang) * r, y: pt.y + Math.sin(ang) * r });
        rightPts.push({ x: pt.x - Math.cos(ang) * r, y: pt.y - Math.sin(ang) * r });
      }

      // Pectoral fins
      const finJoint = this.spine[2];
      const finAngle = this.angle;
      const finFlutter = Math.sin(this.wiggleCycle * 1.35) * 0.28;

      for (let side of [-1, 1]) {
        ctx.beginPath();
        const baseX = finJoint.x + Math.cos(finAngle + side * 1.35) * 11;
        const baseY = finJoint.y + Math.sin(finAngle + side * 1.35) * 11;
        const tipX = baseX + Math.cos(finAngle + side * (1.75 + finFlutter)) * 24;
        const tipY = baseY + Math.sin(finAngle + side * (1.75 + finFlutter)) * 24;
        ctx.moveTo(baseX, baseY);
        ctx.quadraticCurveTo(
          tipX + side * 3, tipY + 2,
          baseX + Math.cos(finAngle + side * 2.3) * 9,
          baseY + Math.sin(finAngle + side * 2.3) * 9
        );
        ctx.fillStyle = isShadow
          ? "rgba(0, 15, 40, 0.25)"
          : (this.isKohaku ? "rgba(255,255,255,0.72)" : "rgba(251,146,60,0.7)");
        ctx.fill();
      }

      // Main body path
      ctx.beginPath();
      ctx.moveTo(leftPts[0].x, leftPts[0].y);
      for (let i = 1; i < leftPts.length; i++) ctx.lineTo(leftPts[i].x, leftPts[i].y);
      const tailEnd = this.spine[NUM_JOINTS - 1];
      ctx.lineTo(tailEnd.x, tailEnd.y);
      for (let i = rightPts.length - 1; i >= 0; i--) ctx.lineTo(rightPts[i].x, rightPts[i].y);

      // Rounded snout
      ctx.bezierCurveTo(
        this.x + Math.cos(this.angle + 0.55) * 17,
        this.y + Math.sin(this.angle + 0.55) * 17,
        this.x + Math.cos(this.angle - 0.55) * 17,
        this.y + Math.sin(this.angle - 0.55) * 17,
        leftPts[0].x, leftPts[0].y
      );
      ctx.closePath();

      if (isShadow) {
        ctx.fill();
        ctx.restore();
        return;
      }

      // Body gradient
      const bodyGrad = ctx.createRadialGradient(this.x, this.y, 3, this.x, this.y, 38);
      if (this.isKohaku) {
        bodyGrad.addColorStop(0, '#ffffff');
        bodyGrad.addColorStop(0.55, '#f8fafc');
        bodyGrad.addColorStop(0.85, '#e2e8f0');
        bodyGrad.addColorStop(1, '#cbd5e1');
      } else {
        bodyGrad.addColorStop(0, '#fdba74');
        bodyGrad.addColorStop(0.45, '#fb923c');
        bodyGrad.addColorStop(0.8, '#ea580c');
        bodyGrad.addColorStop(1, '#9a3412');
      }
      ctx.fillStyle = bodyGrad;
      ctx.fill();

      // Soft outline for definition
      ctx.strokeStyle = this.isKohaku ? "rgba(148,163,184,0.25)" : "rgba(154,52,18,0.3)";
      ctx.lineWidth = 1.1;
      ctx.stroke();

      // Hi patterns (Kohaku only)
      if (this.isKohaku) {
        ctx.save();
        ctx.clip();
        // Head mark
        const hPt = this.spine[1];
        ctx.beginPath();
        ctx.ellipse(hPt.x, hPt.y, 8.5, 6, this.angle, 0, Math.PI * 2);
        ctx.fillStyle = "#dc2626";
        ctx.fill();
        // Mid saddle
        const mPt = this.spine[4];
        ctx.beginPath();
        ctx.ellipse(mPt.x, mPt.y, 10.5, 7, this.angle - 0.18, 0, Math.PI * 2);
        ctx.fillStyle = "#ea580c";
        ctx.fill();
        // Rear spot
        const bPt = this.spine[7];
        ctx.beginPath();
        ctx.ellipse(bPt.x, bPt.y, 6.5, 4.2, this.angle + 0.12, 0, Math.PI * 2);
        ctx.fillStyle = "#dc2626";
        ctx.fill();
        ctx.restore();
      }

      // Eye
      const eyeOffset = 9;
      const eyeX = this.x + Math.cos(this.angle) * eyeOffset + Math.cos(this.angle + Math.PI / 2) * 4.5;
      const eyeY = this.y + Math.sin(this.angle) * eyeOffset + Math.sin(this.angle + Math.PI / 2) * 4.5;
      ctx.beginPath();
      ctx.arc(eyeX, eyeY, 2.4, 0, Math.PI * 2);
      ctx.fillStyle = "#1e293b";
      ctx.fill();
      // Eye highlight
      ctx.beginPath();
      ctx.arc(eyeX - 0.7, eyeY - 0.7, 0.9, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.85)";
      ctx.fill();

      // Tail fin (translucent + flutter)
      const last = this.spine[NUM_JOINTS - 1];
      const secondLast = this.spine[NUM_JOINTS - 2];
      const tailAngle = Math.atan2(last.y - secondLast.y, last.x - secondLast.x);
      const finFlare = Math.sin(this.wiggleCycle) * 5.5;

      ctx.beginPath();
      ctx.moveTo(last.x, last.y);
      ctx.quadraticCurveTo(
        last.x + Math.cos(tailAngle - 0.75) * 22,
        last.y + Math.sin(tailAngle - 0.75) * 22 + finFlare,
        last.x + Math.cos(tailAngle - 0.28) * 30,
        last.y + Math.sin(tailAngle - 0.28) * 30 + finFlare
      );
      ctx.quadraticCurveTo(
        last.x + Math.cos(tailAngle) * 24,
        last.y + Math.sin(tailAngle) * 24,
        last.x + Math.cos(tailAngle + 0.28) * 30,
        last.y + Math.sin(tailAngle + 0.28) * 30 - finFlare
      );
      ctx.quadraticCurveTo(
        last.x + Math.cos(tailAngle + 0.75) * 22,
        last.y + Math.sin(tailAngle + 0.75) * 22 - finFlare,
        last.x, last.y
      );
      ctx.fillStyle = this.isKohaku
        ? "rgba(255,255,255,0.68)"
        : "rgba(249,115,22,0.68)";
      ctx.fill();

      ctx.restore();
    }
  }

  // 5 fish – mix of Kohaku & Yamabuki Ogon
  const koiPond = [
    new Koi(true),
    new Koi(true),
    new Koi(false),
    new Koi(true),
    new Koi(false)
  ];

  // Interaction
  canvas.addEventListener('pointerdown', (e) => {
    const rect = canvas.getBoundingClientRect();
    addRipple(e.clientX - rect.left, e.clientY - rect.top, 1.25);
  });

  // --- MAIN LOOP ---
  let causticOffset = 0;
  let particles = [];

  // Soft underwater particles
  for (let i = 0; i < 18; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 0.6 + Math.random() * 1.4,
      speed: 0.15 + Math.random() * 0.25,
      phase: Math.random() * Math.PI * 2
    });
  }

  function loop(time) {
    ctx.clearRect(0, 0, width, height);

    // Soft underwater gradient base
    const waterGrad = ctx.createLinearGradient(0, 0, 0, height);
    waterGrad.addColorStop(0, "rgba(14, 116, 144, 0.15)");
    waterGrad.addColorStop(0.5, "rgba(8, 145, 178, 0.08)");
    waterGrad.addColorStop(1, "rgba(6, 78, 110, 0.18)");
    ctx.fillStyle = waterGrad;
    ctx.fillRect(0, 0, width, height);

    // Animated multi-layer caustics
    causticOffset += 0.012;
    ctx.save();
    for (let c = 0; c < 4; c++) {
      ctx.beginPath();
      const waveY = height * (0.18 + c * 0.22) + Math.sin(causticOffset + c * 1.7) * 18;
      const waveX = width * 0.5 + Math.cos(causticOffset * 0.7 + c) * 30;
      ctx.ellipse(waveX, waveY, width * (0.38 + c * 0.04), 16 + c * 3, (c * Math.PI) / 7, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${0.035 - c * 0.005})`;
      ctx.fill();
    }
    ctx.restore();

    // Floating particles
    particles.forEach(p => {
      p.phase += 0.02;
      p.y -= p.speed;
      p.x += Math.sin(p.phase) * 0.3;
      if (p.y < -5) {
        p.y = height + 5;
        p.x = Math.random() * width;
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.18)";
      ctx.fill();
    });

    // Shadows first
    koiPond.forEach(fish => {
      fish.update(time);
      fish.draw(true);
    });

    // Bodies
    koiPond.forEach(fish => fish.draw(false));

    // Surface ripples (light crest + dark trough)
    for (let i = ripples.length - 1; i >= 0; i--) {
      const rp = ripples[i];
      // Outer light crest
      ctx.beginPath();
      ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 255, 255, ${rp.alpha})`;
      ctx.lineWidth = rp.width;
      ctx.stroke();
      // Inner trough
      ctx.beginPath();
      ctx.arc(rp.x, rp.y, Math.max(1, rp.r - 2.5), 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(3, 105, 161, ${rp.alpha * 0.4})`;
      ctx.lineWidth = rp.width * 0.6;
      ctx.stroke();

      rp.r += rp.speed;
      rp.alpha -= 0.012;
      if (rp.alpha <= 0 || rp.r >= rp.maxR) ripples.splice(i, 1);
    }

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
})();
