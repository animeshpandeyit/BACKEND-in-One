import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

// export const isAuthenticated = async (req, res, next) => {
//   const { token } = req.cookies;

//   if (!token) {
//     res.status(404).json({ message: "login first", success: false });
//   }

//   const decoded = jwt.verify(token, process.env.JWT_SECRET);

//   req.user = await User.findById(decoded._id);
//   next();
// };

export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res
      .status(401)
      .json({ message: "JWT must be provided{login first}", success: false });
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded._id);
  next();
};
