import React from 'react';

export default function ProductionNotes({ notes, lang, visible }) {
  const labels = {
    tools: lang === 'en' ? 'Tools' : '所用工具',
    tech: lang === 'en' ? 'Tech Focus' : '技术重点',
    workflow: lang === 'en' ? 'Workflow' : '生成流程'
  };

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
        marginTop: '4rem',
        padding: '2.5rem',
        background: 'rgba(18,18,28,0.7)',
        backdropFilter: 'blur(15px)',
        borderRadius: '20px',
        border: '1px solid rgba(90,143,255,0.2)',
        boxShadow: '0 15px 40px rgba(0,0,0,0.4)',
        fontSize: '0.95rem',
        lineHeight: 1.6,
        fontFamily: 'PingFang SC, Microsoft YaHei, sans-serif' // 圆润中文字体
      }}
    >
      <h2 style={{
        fontSize: '1.6rem',
        color: '#6ab0ff',
        marginBottom: '1.5rem',
        fontWeight: '600',
        fontFamily: 'PingFang SC, Microsoft YaHei, sans-serif' // 圆润中文字体
      }}>
        {lang === 'en' ? 'Production Notes' : '制作笔记'}
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.6rem'
      }}>
        {Object.entries(notes).map(([key, list]) => (
          <div key={key}>
            <h3 style={{
              color: '#a0c0ff',
              fontSize: '1.1rem',
              marginBottom: '0.8rem',
              fontWeight: '500',
              fontFamily: 'PingFang SC, Microsoft YaHei, sans-serif' // 圆润中文字体
            }}>
              {labels[key]}
            </h3>
            <ul style={{
              listStyle: 'none',
              opacity: 0.95
            }}>
              {list.map((item, i) => (
                <li key={i} style={{
                  marginBottom: '0.5rem',
                  padding: '0.3rem 0.6rem',
                  background: 'rgba(30,30,50,0.3)',
                  borderRadius: '6px',
                  color: '#ffffff' // 白字
                }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}