const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
console.log("✅ userRoutes loaded");

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

const hashedPassword = await bcrypt.hash(password, 10);

const user = new User({
    name,
    email,
    password: hashedPassword
});

await user.save();
    res.status(201).json({ message: "User Registered Successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

  
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

   const token = jwt.sign(
  { id: user._id },
  process.env.JWT_SECRET,
  { expiresIn: "1d" }
);

res.json({
  message: "Login Successful",
  token: token
});

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get("/profile", auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");

        res.json(user);

    } catch (err) {
        res.status(500).json({
            message: "Server Error"
        });
    }
});

module.exports = router;