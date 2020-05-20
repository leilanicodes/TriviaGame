const { green, red } = require('chalk');
const { db, Project, Robot, RobotProject } = require('./server/db');
const robots = require('./robot-info');
const projects = require('./project-info');

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Robot.bulkCreate(robots);
    await Project.bulkCreate(projects);
    // const robotThree = await Robot.findByPk(3);
    // const projectOne = await Project.findByPk(1);
    // await robotThree.addProject(projectOne);

    await RobotProject.bulkCreate([
      { projectId: 1, robotId: 2 },
      { projectId: 2, robotId: 1 },
      { projectId: 2, robotId: 2 },
    ]);
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
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
