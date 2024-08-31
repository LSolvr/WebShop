// models/Purchase.js
const mongoose = require('mongoose');

const PurchaseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  purchaseDate: { type: Date, default: Date.now },
  downloadCount: { type: Number, default: 0 },
  // Outros campos relevantes, como status de pagamento
});

module.exports = mongoose.model('Purchase', PurchaseSchema);
