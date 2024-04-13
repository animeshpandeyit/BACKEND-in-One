import { User } from "../models/user.js";

import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

import { sendCookie } from "../utils/features.js";

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
  // const token = jwt.sign({ _id: createdUser._id }, process.env.JWT_SECRET);
  // res
  //   .status(201)
  //   .cookie("token", token, {
  //     expires: new Date(Date.now() + 15 * 60 * 1000),
  //     httpOnly: true,
  //   })
  //   .json({
  //     success: true,
  //     message: "User created successfully",
  //     user: createdUser,
  //   });
  sendCookie(createdUser, res, "Registration successfull", 201);
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email }).select("+password");
  if (!user) {
    res.status(404).json({ success: false, message: "" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res
      .status(404)
      .json({ success: false, message: "invalid email or password" });
  }

  sendCookie(user, res, `welcome ${user.name}`, 200);
};

export const getMyDetails = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  res.json({
    success: true,
    message: `Person ${user.name} found successfu`,
    user,
  });
};

export const getCurrentUser = (req, res) => {
  // const id = "myId";

  // const { token } = req.cookies;

  // if (!token) {
  //   res.status(404).json({ message: "login first", success: false });
  // }

  // const decoded = jwt.verify(token, process.env.JWT_SECRET);

  // const users = await User.findById(decoded._id);

  res.status(200).json({
    success: true,
    users: req.user,
  });
};

export const logout = (req, res) => {
  res
    .status(200) 
    .cookie("token", "", { expires: new Date(Date.now()) }) 
    .json({
      success: true,
      users: req.user,
    });
};
