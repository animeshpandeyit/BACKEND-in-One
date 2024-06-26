import { mongoose } from "mongoose";

export const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "backendapi",
    })
    .then(() => {
      console.log("connection established successfully....");
    })
    .catch((error) => {
      console.log(error);
    });
};
