const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    items: Array,
    total: Number,
    name: String,
    address: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);