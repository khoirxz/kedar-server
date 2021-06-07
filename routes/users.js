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

// get All users
router.get("/", getAllUsers);
// get user By Id
router.get("/:id", isAuth, getUser);
// update user
router.put("/:id", isAuth, isAuthrorize, updateUser);

//login user
router.post("/login", loginUser);
// signup user
router.post("/signup", userValidation(), userHandle, createUser);

export default router;
