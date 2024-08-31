// src/pages/Cliente.js
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const Cliente = () => {
  const { user } = useContext(AuthContext);
  const [downloads, setDownloads] = useState([]);

  useEffect(() => {
    const fetchDownloads = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get('http://localhost:5000/api/purchases/downloads', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setDownloads(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDownloads();
  }, []);

  return (
    <div>
      <h2>Área do Cliente</h2>
      <h3>Histórico de Compras</h3>
      <ul>
        {downloads.map(purchase => (
          <li key={purchase._id}>
            {purchase.product.name} - Comprado em: {new Date(purchase.purchaseDate).toLocaleDateString()}
            <a href={purchase.product.downloadLink} download> Baixar</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cliente;
