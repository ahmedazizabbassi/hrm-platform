const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// const User = require('../models/userModel');

/**
 * @desc    Login user & get token
 * @route   POST /api/auth/login
 * @access  Public
 */
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate email & password
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password'
      });
    }

    // Check for user
    // In a real implementation, this would query the database
    // const user = await User.findOne({ email }).select('+password');
    
    // For placeholder purposes, mock a user
    const mockUsers = {
      'recruiter@example.com': {
        id: '1',
        name: 'John Recruiter',
        email: 'recruiter@example.com',
        password: '$2a$10$XHrO7Pnq43xAJ.rP.Xde6O2pTJ2oBcgOR9yrOqYoNfr/Yk4AhzRbW', // 'password123'
        role: 'Recruiter'
      },
      'officer@example.com': {
        id: '2',
        name: 'Jane Officer',
        email: 'officer@example.com',
        password: '$2a$10$XHrO7Pnq43xAJ.rP.Xde6O2pTJ2oBcgOR9yrOqYoNfr/Yk4AhzRbW', // 'password123'
        role: 'Relationship Officer'
      },
      'cashier@example.com': {
        id: '3',
        name: 'Bob Cashier',
        email: 'cashier@example.com',
        password: '$2a$10$XHrO7Pnq43xAJ.rP.Xde6O2pTJ2oBcgOR9yrOqYoNfr/Yk4AhzRbW', // 'password123'
        role: 'Cashier'
      },
      'employee@example.com': {
        id: '4',
        name: 'Alice Employee',
        email: 'employee@example.com',
        password: '$2a$10$XHrO7Pnq43xAJ.rP.Xde6O2pTJ2oBcgOR9yrOqYoNfr/Yk4AhzRbW', // 'password123'
        role: 'Employee'
      }
    };

    const user = mockUsers[email];

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Check if password matches
    // In a real implementation, this would use the user model method
    // const isMatch = await user.matchPassword(password);
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Create token
    const token = jwt.sign(
      { id: user.id, name: user.name, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'your_jwt_secret',
      { expiresIn: '30d' }
    );

    res.status(200).json({
      success: true,
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

/**
 * @desc    Register a new user
 * @route   POST /api/auth/register
 * @access  Private/Admin
 */
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Validate required fields
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email and password'
      });
    }

    // Check if user already exists
    // In a real implementation, this would query the database
    // const userExists = await User.findOne({ email });
    
    // For placeholder purposes, mock check
    const userExists = false;

    if (userExists) {
      return res.status(400).json({
        success: false,
        message: 'User already exists'
      });
    }

    // Create user
    // In a real implementation, this would save to the database
    // const user = await User.create({
    //   name,
    //   email,
    //   password,
    //   role: role || 'Employee'
    // });
    
    // For placeholder purposes, mock user creation
    const user = {
      id: Date.now().toString(),
      name,
      email,
      role: role || 'Employee'
    };

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

/**
 * @desc    Get current logged in user
 * @route   GET /api/auth/me
 * @access  Private
 */
exports.getMe = async (req, res) => {
  try {
    // In a real implementation, this would query the database
    // const user = await User.findById(req.user.id);
    
    // For placeholder purposes, use the user from the request
    const user = req.user;

    res.status(200).json({
      success: true,
      user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};
