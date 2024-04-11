import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  //   console.log(res.query);

  res.json({
    success: true,
    users: users,
  });
};
