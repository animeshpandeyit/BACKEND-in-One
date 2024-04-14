import express from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/createTask", isAuthenticated, createTask);
router.get("/getAllTasks", isAuthenticated, getAllTasks);
// router.get("/updateTask/:id", isAuthenticated, updateTask);

router.route("/:id").put(updateTask).delete(deleteTask);

export default router;
