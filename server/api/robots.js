const router = require('express').Router();
const Robot = require('../db/robot');

router.get('/', async (req, res, next) => {
  try {
    const robots = await Robot.findAll();
    res.json(robots);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const robot = await Robot.findbyId(req.params.id);
    if (!robot) return res.status(404);
    res.json(robot);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
