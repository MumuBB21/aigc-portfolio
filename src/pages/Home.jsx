import React, { useEffect, useRef } from 'react';
import DynamicCanvasBackground from '../components/DynamicCanvasBackground.jsx';
import GenerativeHead from '../components/GenerativeHead.jsx';
import ContactCard from '../components/ContactCard.jsx';

export default function Home({ onNavigate, lang }) {
  const containerRef = useRef();
  const headRef = useRef();

  // 鼠标跟随仅作用于头像
  useEffect(() => {
    const head = headRef.current;
    if (!head) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const rect = head.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (clientX - centerX) / 10;
      const deltaY = (clientY - centerY) / 10;
      head.style.transform = `rotateY(${deltaX}deg) rotateX(${-deltaY}deg) scale(1.05)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Canvas 背景 */}
      <DynamicCanvasBackground />

      {/* 主容器（位置上抬） */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start', // 上移内容
        paddingTop: '8rem', // 上抬内容
        paddingBottom: '4rem',
        padding: '2rem',
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}>
        {/* 抽象头像（放大 + 专属鼠标跟随） */}
        <div
          ref={headRef}
          style={{
            marginBottom: '2.5rem',
            filter: 'drop-shadow(0 0 20px rgba(90,143,255,0.4))',
            transform: 'translateZ(50px)',
            transition: 'transform 0.3s ease'
          }}
        >
          <GenerativeHead />
        </div>

        {/* 联系信息 */}
        <ContactCard lang={lang} />

        {/* 作品入口（放大 + 更多空间） */}
        <div style={{
          marginTop: '3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          maxWidth: '900px',
          width: '100%'
        }}>
          {[
            { 
              id: 'characters', 
              label: lang === 'en' ? 'Character Design' : '人物设计图',
              desc: lang === 'en' 
                ? 'AI-generated portraits with pose control & style consistency' 
                : 'AIGC生成人像，支持姿态控制与风格一致性'
            },
            { 
              id: 'architecture', 
              label: lang === 'en' ? 'Architecture Concepts' : '建筑概念 / 效果图',
              desc: lang === 'en' 
                ? '3D projection + PBR materials for architectural visualization' 
                : '3D投影+物理材质渲染，用于建筑可视化'
            },
            { 
              id: 'posters', 
              label: lang === 'en' ? 'Poster & Illustration' : '海报底图 / 插画',
              desc: lang === 'en' 
                ? 'Text-to-image composition with layer blending & vector tracing' 
                : '文生图构图，支持图层混合与矢量描边'
            }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              style={{
                padding: '1.5rem 1rem',
                background: 'rgba(30,30,50,0.6)',
                border: '1px solid rgba(90,143,255,0.3)',
                borderRadius: '16px',
                color: '#a0c0ff',
                fontSize: '1.1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                transform: 'translateZ(20px)',
                textAlign: 'center',
                fontFamily: 'PingFang SC, Microsoft YaHei, sans-serif' // 圆润中文字体
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(50,50,80,0.7)';
                e.currentTarget.style.transform = 'scale(1.05) translateZ(30px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(30,30,50,0.6)';
                e.currentTarget.style.transform = 'scale(1) translateZ(20px)';
              }}
            >
              <h3 style={{
                color: item.id === 'characters' ? '#ff7eb9' : 
                       item.id === 'architecture' ? '#5a8fff' : '#ff9e5a',
                fontSize: '1.4rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                fontFamily: 'PingFang SC, Microsoft YaHei, sans-serif' // 圆润中文字体
              }}>
                {item.label}
              </h3>
              <p style={{
                fontSize: '0.95rem',
                opacity: 0.9,
                lineHeight: 1.5,
                fontFamily: 'PingFang SC, Microsoft YaHei, sans-serif' // 圆润中文字体
              }}>
                {item.desc}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}