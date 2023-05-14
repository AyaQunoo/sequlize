const { Sequelize } = require('sequelize');
require('dotenv').config();
const url = process.env.DB_URL;
const db = new Sequelize(url)






module.exports = db;
