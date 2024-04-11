import express from "express";
import {
  getAllUsers,
  getUserDetails,
  registerUser,
} from "../controllers/user.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/all", getAllUsers);

router.post("/register", registerUser);

router.get("/userid/:id", getUserDetails);

export default router;
