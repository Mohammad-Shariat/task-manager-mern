const Task = require('../modules/taskModel');
const mongoose = require('mongoose');

// get all tasks
const getTasks = async (req, res) => {
  const tasks = await Task.find({}).sort({ createdAt: -1 });

  res.status(200).json(tasks);
};

// get a single task
const getTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such task' });
  }

  const task = await Task.findById(id);

  if (!task) {
    return res.status(404).json({ error: 'No such task' });
  }
  res.status(200).json(task);
};

// create new task
const createTask = async (req, res) => {
  const { task } = req.body;

  // add doc to db
  try {
    const newTask = await Task.create({ task });
    res.status(200).json(newTask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// delete a task

// update a task

module.exports = {
  getTasks,
  getTask,
  createTask,
};
