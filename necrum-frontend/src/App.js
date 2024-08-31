// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Produtos from './pages/Produtos';
import FAQ from './pages/FAQ';
import Discord from './pages/Discord';
import Cliente from './pages/Cliente';
import Admin from './pages/Admin';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/discord" element={<Discord />} />
          <Route path="/cliente" element={<Cliente />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
