// Authentication and Authorization Middleware
const jwt = require('jsonwebtoken');
// const User = require('../models/userModel');

/**
 * Middleware to protect routes - verifies JWT token
 */
exports.protect = async (req, res, next) => {
  try {
    let token;
    
    // Check if token exists in headers
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }
    
    // Make sure token exists
    if (!token) {
      return res.status(401).json({ 
        success: false, 
        message: 'Not authorized to access this route' 
      });
    }
    
    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret');
      
      // Get user from token
      // req.user = await User.findById(decoded.id).select('-password');
      
      // In this placeholder, we'll mock the user
      req.user = {
        id: decoded.id,
        name: decoded.name,
        email: decoded.email,
        role: decoded.role
      };
      
      next();
    } catch (error) {
      return res.status(401).json({ 
        success: false, 
        message: 'Not authorized to access this route' 
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

/**
 * Middleware to authorize based on user roles
 * @param {...String} roles - Roles allowed to access the route
 */
exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !req.user.role) {
      return res.status(403).json({
        success: false,
        message: 'User role not defined'
      });
    }
    
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `User role ${req.user.role} is not authorized to access this route`
      });
    }
    
    next();
  };
};
