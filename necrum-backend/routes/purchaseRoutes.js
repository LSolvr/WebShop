// routes/purchaseRoutes.js
const express = require('express');
const { createPurchase, getUserDownloads } = require('../controllers/purchaseController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, createPurchase);
router.get('/downloads', protect, getUserDownloads);

module.exports = router;
