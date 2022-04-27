const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:superuser@localhost:5432/pw', {dialect: 'postgres'});

module.exports = sequelize;