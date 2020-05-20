// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:
const db = require('./database');
const Project = require('./project');
const Robot = require('./robot');

// This is a great place to establish associations between your models
// (https://sequelize-guides.netlify.com/association-types/).

const RobotProject = db.define('robotProject', {});

Project.belongsToMany(Robot, {
  through: RobotProject,
});
Robot.belongsToMany(Project, {
  through: RobotProject,
});
// Robot.hasMany(RobotProject);
// RobotProject.belongsTo(Robot);
// Project.hasMany(RobotProject);
// RobotProject.belongsTo(Project);

module.exports = {
  // Include your models in this exports object as well!
  db,
  Project,
  Robot,
  RobotProject,
};
