const router = require('express').Router();
const Project = require('../db/project');
const Robot = require('../db/robot');

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
    const project = await Project.findByPk(req.params.projectId, {
      include: [Robot],
    });
    if (!project) {
      return res.status(404);
    } else {
      res.json(project);
    }
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const {
      title,
      deadline,
      priority,
      completed,
      description,
    } = req.body.newProject;

    const newProject = await Project.create({
      title,
      deadline,
      priority,
      completed,
      description,
    });
    res.status(201).json(newProject);
  } catch (err) {
    next(err);
  }
});

router.delete('/:projectId', async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.projectId);
    if (!project) return res.sendStatus(404);
    await project.destroy();
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

router.put('/:projectId', async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.projectId);
    if (!project) return res.sendStatus(404);
    await project.update(req.body);
    res.json(project);
  } catch (err) {
    next(err);
  }
});

router.patch('/:projectId', async (req, res, next) => {
  try {
    const id = req.params.projectId;
    const { updatedFields } = req.body;

    await Project.update({ ...updatedFields }, { where: { id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
