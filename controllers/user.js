import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  //   console.log(res.query);

  res.json({
    success: true,
    users: users,
  });
};

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name: name,
    email: email,
    password: password,
  });

  res.status(201).json({
    success: true,
    message: "User created successfully",
    user: user,
  });
};

export const getUserDetails = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.json({ success: true, message: "Person found successfully", user });
};
