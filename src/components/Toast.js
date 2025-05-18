import React, { useEffect } from 'react';

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      backgroundColor: '#d32f2f',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      zIndex: 1000,
    }}>
      {message}
    </div>
  );
};

export default Toast;
