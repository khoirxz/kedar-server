import express from "express";

import {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  loginUser,
} from "../controllers/users.js";
import { userValidation, userHandle } from "../middleware/user.js";
import { isAuthrorize, isAuth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", isAuth, getUser);
router.put("/:id", isAuth, isAuthrorize, updateUser);

//login user
router.post("/auth", loginUser);
// signup user
router.post("/", userValidation(), userHandle, createUser);

export default router;
