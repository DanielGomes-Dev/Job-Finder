const { DataTypes } = require('sequelize');
const db = require('../database/connection');

const Job = db.define('Jobs', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salary: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    company: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    new: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    }

})

module.exports = Job;