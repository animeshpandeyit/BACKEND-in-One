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

export const updateTask = async (req, res) => {
  const { id } = req.params;

  const { title, description } = req.body;

  const task = await Task.findOneAndUpdate({ id, title, description });

  task.isCompleted = !task.isCompleted;

  await task.save();
  res.status(200).json({
    success: true,
    message: "Task updated successfully",
  });
};

// export const updateTask = async (req, res) => {
//   const { id } = req.params;

//   // Include the update object to specify changes to the document
//   const task = await Task.findByIdAndUpdate(
//     id,
//     { $set: { isCompleted: true } },
//     { new: true }
//   );

//   // Check if the task exists
//   if (!task) {
//     return res.status(404).json({
//       success: false,
//       message: "Task not found",
//     });
//   }

//   res.status(200).json({
//     success: true,
//     message: "Task updated successfully",
//     data: task, // Optionally, you can send the updated task data in the response
//   });
// };

export const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) return next(new ErrorHandler("Task not found", 404));
    await task.deleteOne();

    res.status(200).json({
      message: "Task Deleted!",
      success: true,
    });
  } catch (error) {
    next(error);
  }
};
