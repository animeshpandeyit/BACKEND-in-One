import { Task } from "../models/task.js";

export const createTask = async (req, res, next) => {
  const { title, description, isCompleted } = req.body;

  const task = await Task.create({ title, description, user: req.user });

  res.status(201).json({
    success: true,
    message: "Task created successfully",
    task: task,
  });
};

export const getAllTasks = async (req, res, next) => {
  //   const userId = req.user._id;
  //   const tasks = await Task.find({ user: userId });

//   const { id } = req.params;

  const tasks = await Task.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    message: "Tasks retrieved successfully",
    tasks: tasks,
  });
};
