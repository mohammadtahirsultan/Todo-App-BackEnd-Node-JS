import ErrorHandler from "../middlewares/error.js";
import Task from "../models/task.js";



// User Controllers
// Creating a New Task
export const newTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const task = await Task.create({
      title,
      description,
      user: req.user,
    });

    res.status(201).json({
      success: true,
      message: "Task Added Successfully",
    });
  } catch (err) {
    next(err)
  }
};

// Getting All Save Created Tasks
export const getMyTask = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const tasks = await Task.find({ user: userId });

    res.status(200).json({
      success: true,
      tasks,
    });
  } catch (err) {
    next(err)
  }
};

// updating the Task
export const updateTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return next(new Error("Invalid Id"));
    }

    task.isCompleted = !task.isCompleted;

    await task.save();

    res.status(200).json({
      success: true,
      message: "Task Updated Successfully",
    });
  } catch (err) {
    next(err)
  }
};

// Deletting the Task
export const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return next(new ErrorHandler("Task Not Found", 404));
    }

    await task.deleteOne();

    res.status(200).json({
      success: true,
      message: "Task Deleted Successfully",
    });
  } catch (err) {
    next(err)
  }
};
