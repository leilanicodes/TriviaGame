const Sequelize = require('sequelize');
const db = require('./database');

const Robot = db.define('robot', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://www.pinclipart.com/picdir/middle/133-1333473_free-download-dancing-robot-gif-clipart-robot-dance.png',
  },
  fuelType: {
    type: Sequelize.STRING,
    defaultValue: 'electric',
    validate: {
      isIn: [['gas', 'diesel', 'electric']],
    },
  },
  fuelLevel: {
    type: Sequelize.FLOAT,
    defaultValue: 100,
    validate: {
      min: 0,
      max: 100,
    },
  },
});

module.exports = Robot;
