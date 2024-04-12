import { User } from "../models/user.js";

import bcrypt from "bcrypt";

// export const getAllUsers = async (req, res) => {
//   const users = await User.find({});
//   //   console.log(res.query);

//   res.json({
//     success: true,
//     users: users,
//   });
// };

// export const registerUser = async (req, res) => {
//   const { name, email, password } = req.body;

//   const user = await User.create({
//     name: name,
//     email: email,
//     password: password,
//   });

//   res.status(201).json({
//     success: true,
//     message: "User created successfully",
//     user: user,
//   });
// };

// export const getUserDetails = async (req, res) => {
//   const { id } = req.params;
//   const user = await User.findById(id);
//   res.json({ success: true, message: "Person found successfully", user });
// };

// export const updateUser = async (req, res) => {
//   const { id } = req.params;
//   const user = await User.findById(id);
//   res.json({ success: true, message: "updated successfully", user });
// };

// export const deleteUser = async (req, res) => {
//   const { id } = req.params;
//   const user = await User.findById(id);
//   await user.deleteOne();
//   res.json({ success: true, message: "deleted successfully", user });
// };

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  let user = await User.findOne({ email: email });

  if (user) {
    return res.status(404).json({
      success: false,
      message: "User already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const createdUser = await User.create({
    name: name,
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({
    success: true,
    message: "User created successfully",
    user: createdUser,
  });
};

export const login = async (req, res, next) => {};
