const router = require('express').Router();
const { Robot, Project, RobotProject } = require('../db');

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
    if (!robot) return res.sendStatus(404);
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

router.delete('/:robotId/unassign/:projectId', async (req, res, next) => {
  try {
    await RobotProject.destroy({
      where: {
        robotId: req.params.robotId,
        projectId: req.params.projectId,
      },
    });
    const robot = await Robot.findByPk(req.params.robotId, {
      include: [Project],
    });
    if (!robot) return res.sendStatus(404);
    res.json(robot);
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

router.put('/:robotId', async (req, res, next) => {
  try {
    const robot = await Robot.findByPk(req.params.robotId);
    if (!robot) return res.sendStatus(404);
    await robot.update(req.body);
    res.json(robot);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
