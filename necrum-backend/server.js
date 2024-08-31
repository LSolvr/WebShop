// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado ao MongoDB'))
.catch(err => console.error(err));

// Rotas
app.get('/', (req, res) => {
  res.send('API está funcionando!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Adicione após as outras importações
const authRoutes = require('./routes/authRoutes');

// Use as rotas
app.use('/api/auth', authRoutes);

// Adicione após as outras rotas
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

// Adicione após as outras rotas
const purchaseRoutes = require('./routes/purchaseRoutes');
app.use('/api/purchases', purchaseRoutes);

// Integrar no server.js
const paymentRoutes = require('./routes/paymentRoutes');
app.use('/api/payments', paymentRoutes);

