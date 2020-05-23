const { green, red } = require('chalk');
const { db, Project, Robot, RobotProject } = require('./server/db');
const robots = require('./robot-info');
const projects = require('./project-info');

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Robot.bulkCreate(robots);
    await Project.bulkCreate(projects);

    await RobotProject.bulkCreate([
      { projectId: 1, robotId: 2 },
      { projectId: 2, robotId: 1 },
      { projectId: 2, robotId: 2 },
      { projectId: 2, robotId: 3 },
      { projectId: 1, robotId: 4 },
    ]);
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;

if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    });
}
