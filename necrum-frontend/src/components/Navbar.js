// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Verifique se o arquivo CSS está correto

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-logo">
      <img src="../images/logo.png" alt="Logo" className="logo-image" />
    </div>
    <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Início</Link>
        </li>
        <li className="navbar-item">
          <Link to="/produtos" className="navbar-link">Produtos</Link>
        </li>
        <li className="navbar-item">
          <Link to="/faq" className="navbar-link">FAQ</Link>
        </li>
        <li className="navbar-item">
          <a href="https://discord.gg/necrum" className="navbar-link" target="_blank" rel="noopener noreferrer">Discord</a></li>
        <li className="navbar-item">
            <Link to="/register" className="navbar-button">Registrar</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
