const Sequelize = require('sequelize');
const databseCofing = require('../config/database');

const sequelize = new Sequelize(databseCofing);

module.exports = sequelize;

