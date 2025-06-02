// Placeholder for Authentication Routes (Login, Register, Role Check)
const express = require("express");
const router = express.Router();
// const authController = require("../controllers/authController");
// const { protect, authorize } = require("../middleware/authMiddleware");

// @route   POST api/auth/login
// @desc    Authenticate user & get token
// @access  Public
// router.post("/login", authController.loginUser);

// @route   POST api/auth/register
// @desc    Register a new user (potentially for initial setup or specific roles)
// @access  Private/Admin (example)
// router.post("/register", protect, authorize("Admin"), authController.registerUser);

// @route   GET api/auth/me
// @desc    Get current logged in user
// @access  Private
// router.get("/me", protect, authController.getMe);

module.exports = router;

