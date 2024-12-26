// models/index.js
const { Sequelize } = require('sequelize');
const Database = require('../config/db');

// Import individual models
const User = require('./UserModel');

// Initialize models
User.initModel(Database); // If your model uses the `initModel` pattern

// Export all models and Sequelize instance
module.exports = {
  Database,
  User,
};
