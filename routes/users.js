import express from "express";

import { getAllUsers, getUser, createUser } from "../controllers/users.js";
import { userValidation, userHandle } from "../middleware/user.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUser);
router.post("/", userValidation(), userHandle, createUser);

export default router;
