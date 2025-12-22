import React from 'react';

export default function ContactCard({ lang }) {
  return (
    <div style={{
      display: 'flex',
      gap: '1rem',
      marginBottom: '2rem',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }}>
      {/* 邮箱 */}
      <a
        href="mailto:1148822984@qq.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#a0c0ff',
          textShadow: '0 0 10px rgba(90,143,255,0.7)',
          fontSize: '1.1rem',
          fontWeight: '500',
          textDecoration: 'none',
          padding: '0.6rem 1.2rem',
          borderRadius: '20px',
          background: 'rgba(30,30,50,0.5)',
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(5px)',
          border: '1px solid rgba(90,143,255,0.3)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(50,50,80,0.7)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(30,30,50,0.5)'}
      >
        📧 1148822984@qq.com
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/MumuBB21"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#a0c0ff',
          textShadow: '0 0 10px rgba(90,143,255,0.7)',
          fontSize: '1.1rem',
          fontWeight: '500',
          textDecoration: 'none',
          padding: '0.6rem 1.2rem',
          borderRadius: '20px',
          background: 'rgba(30,30,50,0.5)',
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(5px)',
          border: '1px solid rgba(90,143,255,0.3)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(50,50,80,0.7)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(30,30,50,0.5)'}
      >
        🐙 GitHub: MumuBB21
      </a>
    </div>
  );
}