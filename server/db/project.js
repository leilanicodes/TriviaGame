const Sequelize = require('sequelize');
const db = require('./database');

const Project = db.define('project', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  deadline: {
    type: Sequelize.DATE,
    vailidate: {
      isDate: true,
    },
  },
  priority: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 10,
    },
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
});

module.exports = Project;
