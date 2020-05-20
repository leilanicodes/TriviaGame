const router = require('express').Router();
const { Project } = require('../db/project');

const { Robot } = require('../db/robot');

router.post('/', async (req, res, next) => {
  try {
    const project = await Project.findOrCreate({
      where: {
        id: req.body.projectId,
      },
    });

    const currentRobot = await Robot.findById(req.body.robotId);
    await currentRobot.addProject(project[0]);
    res.json(project[0]);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
