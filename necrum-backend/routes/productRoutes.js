// routes/productRoutes.js
const express = require('express');
const { getProducts, addProduct } = require('../controllers/productController');
const { protect, admin } = require('../middleware/authMiddleware.js');
const router = express.Router();

router.get('/', getProducts);
router.post('/', protect, admin, addProduct);

module.exports = router;
