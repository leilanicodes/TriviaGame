const router = require('express').Router();
const Project = require('../db/project');

router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    next(error);
  }
});

router.get('/:projectId', async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.projectId);
    if (!project) {
      return res.status(404);
    } else {
      res.json(project);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
