// src/pages/Produtos.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Produtos = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Produtos</h2>
      <div>
        {products.map(product => (
          <div key={product._id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Preço: R${product.price}</p>
            <a href={`/compra/${product._id}`}>Comprar</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produtos;
