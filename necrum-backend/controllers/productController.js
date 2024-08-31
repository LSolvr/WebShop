// controllers/productController.js
const Product = require('../models/Product');

// Obter todos os produtos
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Adicionar um novo produto (apenas admin)
exports.addProduct = async (req, res) => {
  const { name, description, price, downloadLink } = req.body;
  try {
    const product = await Product.create({ name, description, price, downloadLink });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
