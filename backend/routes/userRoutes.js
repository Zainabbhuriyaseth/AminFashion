const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const protect = require("../middleware/authMiddleware");

/* 🔑 GENERATE TOKEN */
const generateToken = (id) => {
  return jwt.sign({ id }, "SECRET_KEY", { expiresIn: "7d" });
};



// ================= REGISTER =================
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: "User already exists" });
    }

    const user = await User.create({ name, email, password });

    res.json({
      token: generateToken(user._id),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// ================= LOGIN =================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        token: generateToken(user._id),
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// ================= GET PROFILE =================
router.get("/me", protect, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
});



// ================= UPDATE PROFILE =================
router.put("/me", protect, async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  user.name = req.body.name || user.name;

  if (req.body.password) {
    user.password = req.body.password;
  }

  await user.save();

  res.json({ message: "Profile updated successfully" });
});



module.exports = router;