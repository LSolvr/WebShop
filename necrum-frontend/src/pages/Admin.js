// src/pages/Admin.js
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const Admin = () => {
  const [form, setForm] = useState({ name: '', description: '', price: '', downloadLink: '' });
  const { user } = useContext(AuthContext);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const res = await axios.post('http://localhost:5000/api/products', form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Produto adicionado com sucesso!');
    } catch (error) {
      console.error(error);
      alert('Erro ao adicionar produto');
    }
  };

  if (!user || user.role !== 'admin') {
    return <p>Acesso negado</p>;
  }

  return (
    <div>
      <h2>Adicionar Produto</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nome do Produto" onChange={handleChange} required />
        <textarea name="description" placeholder="Descrição" onChange={handleChange} required></textarea>
        <input type="number" name="price" placeholder="Preço" onChange={handleChange} required />
        <input type="text" name="downloadLink" placeholder="Link de Download" onChange={handleChange} required />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default Admin;
