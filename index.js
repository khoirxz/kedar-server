import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import db from "./model/index.js";
import indexRouters from "./routes/index.js";
import userRouters from "./routes/users.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

try {
  await db.authenticate();
  console.log("Connection successfully");
} catch (error) {
  console.log(error);
}

// router users
app.use("/api", indexRouters);
app.use("/api/user", userRouters);

app.listen(PORT, () => {
  console.log("server is running on http://localhost:" + PORT);
});
