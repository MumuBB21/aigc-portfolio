import React, { useEffect, useRef } from 'react';

export default function GenerativeHead() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 200;
    canvas.height = 200;

    const draw = () => {
      ctx.clearRect(0, 0, 200, 200);
      ctx.fillStyle = '#0c0c12';
      ctx.fillRect(0, 0, 200, 200);

      // 抽象人脸轮廓（用圆和曲线）
      ctx.strokeStyle = '#ff7eb9';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(100, 100, 80, 0, Math.PI * 2);
      ctx.stroke();

      // 额头光斑
      ctx.fillStyle = 'rgba(255,255,255,0.3)';
      ctx.beginPath();
      ctx.arc(80, 70, 15, 0, Math.PI * 2);
      ctx.fill();

      // 下巴高光
      ctx.fillStyle = 'rgba(255,255,255,0.2)';
      ctx.beginPath();
      ctx.arc(120, 130, 10, 0, Math.PI * 2);
      ctx.fill();

      // 眼睛点
      ctx.fillStyle = '#5a8fff';
      ctx.beginPath();
      ctx.arc(75, 90, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(125, 90, 4, 0, Math.PI * 2);
      ctx.fill();

      // 嘴巴线
      ctx.strokeStyle = '#ff7eb9';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(85, 120);
      ctx.quadraticCurveTo(100, 130, 115, 120);
      ctx.stroke();
    };

    draw();
    const interval = setInterval(draw, 1000); // 每秒刷新一次

    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        border: '2px solid rgba(90,143,255,0.5)',
        boxShadow: '0 0 30px rgba(90,143,255,0.3)'
      }}
    />
  );
}