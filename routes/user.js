import express from "express";
// import { User } from "../models/user.js";
import { getAllUsers } from "../controllers/user.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/all", getAllUsers);

// router.post("/register", async (req, res) => {
//   const { name, email, password } = req.body;

//   const users = await User.create({
//     name: name,
//     email: email,
//     password: password,
//   });

//   res.status(201).cookie("tempI", "Dummy--Cookie").json({
//     success: true,
//     message: "Successfully registered",
//     users: users,
//   });
// });

// router.get("/userid/:id ", async (req, res) => {
//   //   const { id } = req.body;
//   //   const { id } = req.query;
//   const { id } = req.params;
//   const user = await User.findById(id);

//   res.json({
//     success: true,
//     user,
//   });
// });

export default router;
