import express from "express";

import { getAllUsers, getUser, createUser } from "../controllers/users.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUser);
router.post("/", createUser);

export default router;
