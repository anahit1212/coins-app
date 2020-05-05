const mongoose = require("mongoose");

const CoinSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
});

const Coins = mongoose.model("coins", CoinSchema);
module.exports = Coin;
