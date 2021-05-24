import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import userRouters from "./routes/users.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ extended: true }));
app.use(cors());
// router users
app.use("/api", userRouters);

app.listen(PORT, () => {
  console.log("server is running on http://localhost:" + PORT);
});
