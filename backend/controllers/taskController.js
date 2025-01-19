const Task = require('../models/taskModel');
const taskService = require('../services/taskService');

// Create a new task
exports.createTask = async (req, res) => {
    try {
        const { title, description, dueDate, priority } = req.body;
        const newTask = new Task({ title, description, dueDate, priority, userId: req.user.id });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all tasks for a user
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user.id });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
