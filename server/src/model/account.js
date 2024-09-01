const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Account = sequelize.define('Account', {
    Email: {
        type: DataTypes.STRING(255),
        primaryKey: true
    },
    UserPassword: { 
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Username: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Role: {
        type: DataTypes.ENUM(['Customer', 'Employee']),
        allowNull: false
    }
}, {
    tableName: 'Account',
    timestamps: false
});

module.exports  = Account;