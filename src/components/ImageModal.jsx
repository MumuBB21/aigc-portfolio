import React from 'react';

export default function ImageModal({ image, onClose }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.92)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1001,
        cursor: 'pointer'
      }}
    >
      <img
        src={image}
        alt="Preview"
        style={{
          maxWidth: '95vw',
          maxHeight: '95vh',
          objectFit: 'contain',
          borderRadius: '4px',
          boxShadow: '0 0 40px rgba(90,143,255,0.3)'
        }}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}