const router = require('express').Router();
const Robot = require('../db/robot');
const Project = require('../db/project');

router.get('/', async (req, res, next) => {
  try {
    const robots = await Robot.findAll();
    res.json(robots);
  } catch (error) {
    next(error);
  }
});

router.get('/:robotId', async (req, res, next) => {
  try {
    let robot = await Robot.findByPk(req.params.robotId, {
      include: [Project],
    });
    if (!robot) return res.status(404);
    res.json(robot);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { name, imageUrl, fuelType, fuelLevel } = req.body.newRobot;
    const newRobot = await Robot.create({
      name,
      imageUrl,
      fuelType,
      fuelLevel,
    });
    res.status(201).json(newRobot);
  } catch (err) {
    next(err);
  }
});

router.delete('/:robotId', async (req, res, next) => {
  try {
    const robot = await Robot.findByPk(req.params.robotId);
    if (!robot) return res.sendStatus(404);
    await robot.destroy();
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
