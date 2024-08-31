// controllers/purchaseController.js
const Purchase = require('../models/Purchase');
const Product = require('../models/Product');

// Realizar uma compra
exports.createPurchase = async (req, res) => {
  const { productId } = req.body;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    const purchase = await Purchase.create({
      user: req.user._id,
      product: product._id,
    });

    res.status(201).json(purchase);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obter downloads disponíveis para o usuário
exports.getUserDownloads = async (req, res) => {
  try {
    const purchases = await Purchase.find({ user: req.user._id }).populate('product');
    res.json(purchases);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
