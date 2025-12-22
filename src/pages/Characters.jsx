import React, { useState, useEffect, useRef } from 'react';
import ImageModal from '../components/ImageModal.jsx';
import ProductionNotes from '../components/ProductionNotes.jsx';
import { works } from '../data/works.js';

export default function Characters({ lang, onBack }) {
  const { title, ratio, images, notes } = works.characters;
  const [selectedImage, setSelectedImage] = useState(null);
  const [notesVisible, setNotesVisible] = useState(false);
  const notesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setNotesVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (notesRef.current) observer.observe(notesRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    const particles = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.5 + 0.2
    }));

    const animate = () => {
      ctx.fillStyle = 'rgba(12,12,18,0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,126,185,${p.opacity})`;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    animate();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      document.body.removeChild(canvas);
    };
  }, []);

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem' }}>
      {/* 返回主页按钮 - 斜黑体 */}
      <button
        onClick={onBack}
        style={{
          marginBottom: '2rem',
          background: 'transparent',
          border: 'none',
          fontSize: '1.5rem',
          fontWeight: '900',
          cursor: 'pointer',
          padding: '0.4rem 0',
          fontFamily: '"Arial Black", "STHeiti", "SimHei", "华文黑体", sans-serif',
          color: '#ffffff',
          textShadow: '0 0 10px rgba(255,126,185,0.7)',
          textDecoration: 'underline',
          textDecorationColor: 'rgba(255,126,185,0.8)',
          textDecorationThickness: '3px',
          textUnderlineOffset: '10px',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.08)';
          e.currentTarget.style.textDecorationColor = '#ff7eb9';
          e.currentTarget.style.textShadow = '0 0 20px rgba(255,126,185,1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.textDecorationColor = 'rgba(255,126,185,0.8)';
          e.currentTarget.style.textShadow = '0 0 10px rgba(255,126,185,0.7)';
        }}
      >
        {lang === 'en' ? 'Back to Home' : '返回主页'}
      </button>

      <h1 style={{
        fontSize: '2.3rem',
        marginBottom: '2.6rem',
        background: 'linear-gradient(90deg, #ff7eb9, #ffb3d1)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        fontWeight: '700'
      }}>
        {title[lang]}
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: '2.1rem',
        marginBottom: '6rem'
      }}>
        {images.map((img, i) => (
          <div
            key={img.id}
            onClick={() => setSelectedImage(img.placeholder)}
            style={{
              aspectRatio: ratio,
              borderRadius: '12px',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.4s ease, box-shadow 0.35s ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.25)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
          >
            <img
              src={img.placeholder}
              alt={`Work ${i + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>

      <div ref={notesRef}>
        <ProductionNotes notes={notes} lang={lang} visible={notesVisible} />
      </div>

      {selectedImage && (
        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
}