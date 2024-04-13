import express from "express";
import {
  getCurrentUser,
  getMyDetails,
  login,
  logout,
  registerUser,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();
router.post("/register", registerUser);
router.post("/login", login);
router.get("/getDetail/:id", getMyDetails);
router.get("/currentUser", isAuthenticated, getCurrentUser);
router.get("/logout", logout);
// import {
//   deleteUser,
//   getAllUsers,
//   getUserDetails,
//   queryParams,
//   registerUser,
//   updateUser,
// } from "../controllers/user.js";

// router.get("/", (req, res) => {
//   res.send("Hello World!");
// });

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
