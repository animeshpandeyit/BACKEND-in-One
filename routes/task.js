import express from "express";
import { createTask, getAllTasks } from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/createTask", isAuthenticated, createTask);
router.get("/getAllTasks", isAuthenticated, getAllTasks);

export default router;
