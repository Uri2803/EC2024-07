const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const Product = sequelize.define('Product', {
  ProductID: {
    type: DataTypes.STRING(10),
    primaryKey: true
  },
  ProductName: {
    type: DataTypes.STRING(55),
    allowNull: false
  },
  Descriptions: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  Price: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  PrepareTime: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  CookingTime: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  ImageUrl: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  Nutrition: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  TypeProductID: {
    type: DataTypes.STRING(10),
    allowNull: false
  }
}, {
  tableName: 'Products',
  timestamps: false
});

module.exports = Product;
