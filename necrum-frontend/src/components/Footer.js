// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#742ba9', color: '#fff', padding: '20px', textAlign: 'center' }}>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#fff' }}>
        Facebook
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#fff' }}>
        Twitter
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#fff' }}>
        Instagram
      </a>
      <p>&copy; 2024 Meu Site de Vendas</p>
    </footer>
  );
};

export default Footer;
