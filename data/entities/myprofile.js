const Sequelize = require('sequelize');
const database = require('../context/db');

const MyProfile = database.define('myprofile', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    city: Sequelize.STRING,
    age: Sequelize.INTEGER,
    favoriteclass: Sequelize.STRING
})

module.exports = MyProfile;