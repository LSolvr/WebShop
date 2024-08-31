// routes/paymentRoutes.js
const express = require('express');
const { createCharge } = require('../controllers/paymentController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/coinbase', protect, createCharge);

module.exports = router;
