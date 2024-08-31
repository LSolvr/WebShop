// src/pages/Compra.js
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Compra = () => {
  const { productId } = useParams();
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${productId}`);
        setProduct(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleCompra = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await axios.post('http://localhost:5000/api/purchases', { productId }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Compra realizada com sucesso!');
      // Redirecionar para página de downloads ou outra ação
    } catch (error) {
      console.error(error);
      alert('Erro ao realizar compra');
    }
  };

  if (!product) return <p>Carregando...</p>;

  return (
    <div>
      <h2>Comprar {product.name}</h2>
      <p>{product.description}</p>
      <p>Preço: R${product.price}</p>
      <button onClick={handleCompra}>Comprar</button>
    </div>
  );
};

export default Compra;
