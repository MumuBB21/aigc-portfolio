// src/App.jsx
import React, { useState } from 'react';
import Home from './pages/Home.jsx';
import Characters from './pages/Characters.jsx';
import Architecture from './pages/Architecture.jsx';
import Posters from './pages/Posters.jsx';

export default function App() {
  const [page, setPage] = useState('home');
  const [lang, setLang] = useState('en');

  const toggleLang = () => setLang(lang === 'en' ? 'zh' : 'en');

  const renderPage = () => {
    switch (page) {
      case 'characters': return <Characters lang={lang} onBack={() => setPage('home')} />;
      case 'architecture': return <Architecture lang={lang} onBack={() => setPage('home')} />;
      case 'posters': return <Posters lang={lang} onBack={() => setPage('home')} />;
      default: return <Home onNavigate={setPage} lang={lang} />;
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {page === 'home' && (
        <header style={{ padding: '1.5rem 2rem', textAlign: 'right' }}>
          <button
            onClick={toggleLang}
            style={{
              background: 'transparent',
              border: 'none',
              fontSize: '1.3rem',
              fontWeight: '700',
              cursor: 'pointer',
              padding: '0.6rem 1.2rem',
              backgroundImage: 'linear-gradient(90deg, #ff7eb9, #5a8fff, #ff9e5a)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              borderRadius: '30px',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 15px rgba(90,143,255,0.4)',
              fontFamily: 'PingFang SC, Microsoft YaHei, sans-serif'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.08)';
              e.currentTarget.style.boxShadow = '0 0 25px rgba(90,143,255,0.7)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 0 15px rgba(90,143,255,0.4)';
            }}
          >
            {lang === 'en' ? 'EN' : '中文'}
          </button>
        </header>
      )}
      {renderPage()}
    </div>
  );
}