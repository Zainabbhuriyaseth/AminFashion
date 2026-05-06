const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// ✅ GET all orders (for testing)
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ POST create order
router.post("/", async (req, res) => {
  try {
    const { name, address, items, total } = req.body;

    if (!name || !address || !items || !total) {
      return res.status(400).json({ error: "All fields required" });
    }

    const newOrder = new Order({
      name,
      address,
      items,
      total,
    });

    await newOrder.save();

    res.status(201).json({
      message: "Order placed successfully",
      order: newOrder,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;