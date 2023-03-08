const express = require('express');
const {
  getTasks,
  getTask,
  createTask,
} = require('../contollers/taskController');

const router = express.Router();

// GET all tasks
router.get('/', getTasks);

// GET a single task
router.get('/:id', getTask);

// POST a new task
router.post('/', createTask);

// DELETE a task
router.delete('/:id', (req, res) => {
  res.json({ mssg: 'DELETE a task' });
});

// UPDATE a task
router.patch('/:id', (req, res) => {
  res.json({ mssg: 'UPDATE a task' });
});

module.exports = router;
