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

module.exports = router;
