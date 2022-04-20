const Sequelize = require('sequelize');
const database = require('../context/db');

const Student = database.define('student', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: Sequelize.STRING
})

module.exports = Student;