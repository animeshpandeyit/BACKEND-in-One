import { app } from "./app.js";
import { connectDb } from "./data/database.js";

connectDb();

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

