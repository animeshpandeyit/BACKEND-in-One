import express from "express";
import { mongoose } from "mongoose";
import userRouter from "./routes/user.js";
// it can be named anything....
const app = express();

app.use(express.json());

app.use("/users", userRouter);

const router = express.Router();
mongoose
  .connect(
    "mongodb+srv://animeshpandeyit:Animesh%40123@masteringbackend.wxvwtru.mongodb.net/",
    {
      dbName: "backendapi",
    }
  )
  .then(() => {
    console.log("connection established successfully....");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(4000, () => {
  console.log("listening on port 4000");
});
