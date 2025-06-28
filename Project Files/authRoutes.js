const express = require("express");
const bcrypt  = require("bcryptjs");
const User    = require("../models/User");
const router  = express.Router();

// POST  /api/auth/register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // 1. basic validation
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 2. duplicate-email guard
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // 3. hash & save
    const hashed = await bcrypt.hash(password, 10);
    await new User({ name, email, password: hashed, role }).save();

    res.status(201).json({ message: "User registered" });
  } catch (err) {
    console.error("REGISTER →", err);          // <-- see full stack trace
    res.status(500).json({ message: "Server error (register)" });
  }
});

module.exports = router;