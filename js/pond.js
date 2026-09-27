(function initHeaderPond() {
  const canvas = document.getElementById('pondCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = canvas.parentElement.offsetWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  });

  // --- RIPPLE SYSTEM ---
  const ripples = [];
  function addRipple(x, y) {
    ripples.push({ x, y, radius: 2, maxRadius: 70, alpha: 0.8 });

    // Make nearby fish react and flee
    fishes.forEach(fish => {
      const dx = fish.x - x;
      const dy = fish.y - y;
      const dist = Math.hypot(dx, dy);
      if (dist < 120) {
        fish.vx = (dx / (dist || 1)) * 4.5;
        fish.vy = (dy / (dist || 1)) * 4.5;
      }
    });
  }

  // --- FISH OBJECTS ---
  const fishes = Array.from({ length: 4 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 1.5,
    vy: (Math.random() - 0.5) * 1.5,
    size: 16 + Math.random() * 8,
    color: Math.random() > 0.4 ? '#f97316' : '#ffffff', // Orange or White Koi
    spotColor: '#ef4444',
    wiggle: Math.random() * 10
  }));

  // --- INTERACTION LISTENERS ---
  canvas.addEventListener('pointerdown', (e) => {
    const rect = canvas.getBoundingClientRect();
    addRipple(e.clientX - rect.left, e.clientY - rect.top);
  });

  // --- ANIMATION LOOP ---
  function render() {
    ctx.clearRect(0, 0, width, height);

    // 1. Render & Update Ripples
    for (let i = ripples.length - 1; i >= 0; i--) {
      const r = ripples[i];
      ctx.beginPath();
      ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 255, 255, ${r.alpha})`;
      ctx.lineWidth = 2.5;
      ctx.stroke();

      r.radius += 1.8;
      r.alpha -= 0.02;
      if (r.alpha <= 0 || r.radius >= r.maxRadius) ripples.splice(i, 1);
    }

    // 2. Render & Update Fish
    fishes.forEach(fish => {
      fish.wiggle += 0.18;
      fish.x += fish.vx;
      fish.y += fish.vy;

      // Friction toward natural cruising speed
      fish.vx = fish.vx * 0.97 + (Math.sign(fish.vx || 1) * 0.02);
      fish.vy = fish.vy * 0.97 + (Math.sign(fish.vy || 1) * 0.02);

      // Bounce off borders
      if (fish.x < 20) fish.vx = Math.abs(fish.vx);
      if (fish.x > width - 20) fish.vx = -Math.abs(fish.vx);
      if (fish.y < 20) fish.vy = Math.abs(fish.vy);
      if (fish.y > height - 20) fish.vy = -Math.abs(fish.vy);

      // Draw Fish Shape
      const angle = Math.atan2(fish.vy, fish.vx);
      ctx.save();
      ctx.translate(fish.x, fish.y);
      ctx.rotate(angle);

      // Fish Body
      ctx.fillStyle = fish.color;
      ctx.beginPath();
      ctx.ellipse(0, 0, fish.size, fish.size * 0.45, 0, 0, Math.PI * 2);
      ctx.fill();

      // Distinct Koi Spot
      ctx.fillStyle = fish.spotColor;
      ctx.beginPath();
      ctx.ellipse(-2, 0, fish.size * 0.4, fish.size * 0.25, 0, 0, Math.PI * 2);
      ctx.fill();

      // Tail with dynamic wiggle
      const tailAngle = Math.sin(fish.wiggle) * 0.35;
      ctx.beginPath();
      ctx.moveTo(-fish.size + 2, 0);
      ctx.lineTo(-fish.size - 10, Math.sin(fish.wiggle) * 7 - 5);
      ctx.lineTo(-fish.size - 10, Math.sin(fish.wiggle) * 7 + 5);
      ctx.closePath();
      ctx.fillStyle = fish.color;
      ctx.fill();

      ctx.restore();
    });

    requestAnimationFrame(render);
  }

  render();
})();
