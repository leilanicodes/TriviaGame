const { green, red } = require('chalk');
const { db, Project, Robot, RobotProject } = require('./server/db');
const faker = require('faker');
const seed = async () => {
  try {
    await db.sync({ force: true });

    for (let i = 0; i < 100; i++) {
      await Robot.create({
        name: faker.name.firstName(),
        imageUrl: faker.random.arrayElement([
          'https://www.pinclipart.com/picdir/middle/65-650945_cute-cute-robot-png-cartoon-clipart.png',
          'https://mk0vojovoweumgjb625j.kinstacdn.com/wp-content/uploads/2019/03/26.3.19_Header_Blog.jpg',
          'https://library.kissclipart.com/20181210/uvq/kissclipart-cute-robot-png-clipart-darpa-robotics-challenge-na-ca0b49b6e4ece43e.jpg',
          'https://www.clipartmax.com/png/full/162-1626172_robot-clipart-free-clipart-images-cute-robot-clip-art.png',
          'https://cdn.imgbin.com/16/23/18/imgbin-disco-robot-dancer-cartoon-happy-robot-chsBRH0AQX772mvsze5cZmfYw.jpg',
          'https://img.favpng.com/25/15/25/cute-robot-chatbot-robo-cute-technology-png-favpng-12iHW4y8pLt96HB2XbNZawu61.jpg',
          'https://i.ya-webdesign.com/images/cute-robot-png-2.png',
          'https://listimg.pinclipart.com/picdir/s/75-755218_cute-robot-clipart-3-by-tara-free-clipart.png',
          'https://www.kindpng.com/picc/m/198-1981548_voy-a-robots-tumblr-transparent-background-cute-robot.png',
          'https://lh3.googleusercontent.com/proxy/XmkjRwAp57cle6YC-y6HvAr2WpfjSIoxzjuUSQYF3sIwiPlERIuyQmE3E3xTKeCnSrAIwLrsfyNyqeUtLi99Nh8',
          'https://i.ya-webdesign.com/images/cute-robot-png-14.png',
          'https://fullcircle.asu.edu/wp-content/uploads/2016/02/robot-heart.jpg',
          'https://cdn2.iconfinder.com/data/icons/robot-character-emoji-sticker-big-set/100/Robot_sticer_color_set-34-512.png',
          'https://img.pngio.com/cute-cartoon-png-download-9901168-free-transparent-robot-png-cute-robot-png-900_1080.jpg',
        ]),
        fuelLevel: faker.random.number({
          min: 0,
          max: 100,
        }),
        fuelType: faker.random.arrayElement(['electric', 'gas', 'diesel']),
      });
    }

    for (let i = 0; i < 100; i++) {
      await Project.create({
        title: faker.lorem.words(),
        deadline: faker.date.future(),
        priority: faker.random.number({
          min: 1,
          max: 10,
        }),
        completed: faker.random.boolean(),
        description: faker.lorem.sentences(),
      });
    }

    await RobotProject.bulkCreate([
      { projectId: 1, robotId: 2 },
      { projectId: 5, robotId: 1 },
      { projectId: 2, robotId: 2 },
      { projectId: 3, robotId: 3 },
      { projectId: 1, robotId: 4 },
      { projectId: 4, robotId: 1 },
      { projectId: 2, robotId: 3 },
      { projectId: 3, robotId: 4 },
      { projectId: 4, robotId: 5 },
      { projectId: 4, robotId: 3 },
      { projectId: 1, robotId: 6 },
      { projectId: 4, robotId: 2 },
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
