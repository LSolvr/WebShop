// src/pages/Home.js
import React from 'react';
import './Home.css'; // Importando o arquivo de estilo

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Bem-vindo ao Necrum</h1>
        <p>O melhor lugar para adquirir produtos únicos</p>
        <img src="/images/welcome-image.jpg" alt="Bem-vindo" className="welcome-image" />
      </header>
      <section className="highlight-section">
        <h2>Destaques</h2>
        <div className="highlight-content">
          <p>Confira nossos produtos mais populares e em promoção!</p>
          {/* Adicione aqui o conteúdo destacado */}
        </div>
      </section>
      <section className="products-section">
        <h2>Produtos</h2>
        <div className="products-list">
          {/* Adicione uma lista de produtos aqui */}
          <p>Em breve, nossos produtos estarão disponíveis aqui.</p>
        </div>
      </section>
      <section className="contact-section">
        <h2>Contato</h2>
        <p>Se tiver alguma dúvida, entre em contato conosco!</p>
        {/* Adicione aqui um formulário de contato ou informações de contato */}
      </section>
      <footer className="home-footer">
        <p>&copy; 2024 Necrum. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;

