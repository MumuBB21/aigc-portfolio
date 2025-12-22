import React, { useEffect, useRef } from 'react';

export default function DynamicCanvasBackground() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    // 动态生成多层轨道（直到接近边界）
    const maxRadius = Math.sqrt(width * width + height * height) * 0.55;
    const orbits = [];
    let radius = 80;
    let layer = 0;
    const baseColor = ['#ff7eb9', '#5a8fff', '#ff9e5a', '#7abaff', '#b08cff'];

    while (radius < maxRadius) {
      orbits.push({
        radius,
        // 速度整体减慢（原 1.0 - layer*0.08 → 现 0.6 - layer*0.05）
        speed: Math.max(0.03, 0.6 - layer * 0.05),
        color: baseColor[layer % baseColor.length],
        points: 6 + layer * 2,
        // 尾迹显著缩短（原 10+layer*3 → 现 4~8）
        trailLength: Math.min(8, 4 + layer * 1)
      });
      radius += 60 + layer * 8;
      layer++;
    }

    const trails = orbits.map((orbit) =>
      Array.from({ length: orbit.points }, () => ({ positions: [] }))
    );

    let time = 0;
    const animate = () => {
      time += 0.012; // 时间步长减小 → 整体更慢

      // 覆盖率略提，使尾迹更快淡出
      ctx.fillStyle = 'rgba(12, 12, 18, 0.12)';
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      orbits.forEach((orbit, orbitIndex) => {
        const trailGroup = trails[orbitIndex];
        for (let i = 0; i < orbit.points; i++) {
          const angle = time * orbit.speed + (i * Math.PI * 2) / orbit.points;
          const x = centerX + Math.cos(angle) * orbit.radius;
          const y = centerY + Math.sin(angle) * orbit.radius;

          trailGroup[i].positions.push({ x, y });
          if (trailGroup[i].positions.length > orbit.trailLength) {
            trailGroup[i].positions.shift();
          }

          // 绘制尾迹（更短、更干净）
          if (trailGroup[i].positions.length > 1) {
            ctx.strokeStyle = orbit.color;
            ctx.lineWidth = 1;
            ctx.lineCap = 'round';
            ctx.beginPath();
            for (let j = 1; j < trailGroup[i].positions.length; j++) {
              const prev = trailGroup[i].positions[j - 1];
              const curr = trailGroup[i].positions[j];
              const progress = j / trailGroup[i].positions.length;
              const alpha = progress * 0.5; // 降低透明度强度
              ctx.globalAlpha = alpha;
              if (j === 1) ctx.moveTo(prev.x, prev.y);
              ctx.lineTo(curr.x, curr.y);
            }
            ctx.stroke();
          }

          // 光点（略小、略暗）
          const blur = Math.min(25, 15 + orbitIndex * 1.5);
          const size = Math.min(5, 2.5 + orbitIndex * 0.2);
          ctx.globalAlpha = 0.85;
          ctx.fillStyle = orbit.color;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.shadowColor = orbit.color;
          ctx.shadowBlur = blur;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1
      }}
    />
  );
}