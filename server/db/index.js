const db = require('./database');
const Project = require('./project');
const Robot = require('./robot');

const RobotProject = db.define('robotProject', {});

Project.belongsToMany(Robot, {
  through: RobotProject,
});
Robot.belongsToMany(Project, {
  through: RobotProject,
});

module.exports = {
  db,
  Project,
  Robot,
  RobotProject,
};
