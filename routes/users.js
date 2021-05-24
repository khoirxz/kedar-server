import express from "express";

import { NewController } from "../controllers/users.js";

const router = express.Router();

router.get("/", NewController);

export default router;
