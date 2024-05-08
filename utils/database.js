const Sequelize = require('sequelize');

const sequelize = new Sequelize('appointment-booking-app', 'root', '8521', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;