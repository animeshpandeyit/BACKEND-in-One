import jwt from "jsonwebtoken";

export const sendCookie = (createdUser, res, message, statusCode) => {
  const token = jwt.sign({ _id: createdUser._id },process.env.JWT_SECRET);
  res
    .status(statusCode)
    .cookie("token", token, {
      expires: new Date(Date.now() + 15 * 60 * 1000),
      httpOnly: true,
    })
    .json({
      success: true,
      message: message,
      user: createdUser,
    });
};
