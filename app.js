import express from "express";
import userRouter from "./routes/user.js";
import { config } from "dotenv";
// it can be named anything....
export const app = express();

config({
  path: "./data/config.env",
});

app.use(express.json());

app.use("/users", userRouter);

const router = express.Router();
