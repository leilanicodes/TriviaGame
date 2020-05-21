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
      include: [{ model: Project }],
    });
    if (!robot) return res.status(404);
    res.json(robot);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
