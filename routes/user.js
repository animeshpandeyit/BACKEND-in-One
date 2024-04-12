import express from "express";
import { registerUser } from "../controllers/user.js";
// import {
//   deleteUser,
//   getAllUsers,
//   getUserDetails,
//   queryParams,
//   registerUser,
//   updateUser,
// } from "../controllers/user.js";
const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("Hello World!");
// });

router.post("/register", registerUser);

// router.get("/all", getAllUsers);

// router.post("/register", registerUser);

// router
//   .route("/userid/:id")
//   .get(getUserDetails)
//   .put(updateUser)
//   .delete(deleteUser);
// router.get("/userid/:id", getUserDetails);
// router.put("/userid/:id", updateUser);
// router.delete("/userid/:id", deleteUser);

export default router;
