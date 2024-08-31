// controllers/paymentController.js
const CoinbaseCommerce = require('@coinbase/commerce-node');
const { Charge } = CoinbaseCommerce.resources;

CoinbaseCommerce.Client.init(process.env.COINBASE_COMMERCE_API_KEY);

exports.createCharge = async (req, res) => {
  const { name, description, pricing } = req.body;
  try {
    const chargeData = {
      name,
      description,
      pricing_type: 'fixed_price',
      local_price: {
        amount: pricing.amount,
        currency: pricing.currency,
      },
      metadata: {
        userId: req.user._id,
      },
    };
    const charge = await Charge.create(chargeData);
    res.json(charge);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
