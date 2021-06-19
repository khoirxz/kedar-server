import express from "express";

import {
    checkVersion,
} from "../controllers/check_version.js";

import { isAuthrorize, isAuth } from "../middleware/auth.js";

const router = express.Router();

router.get("/check_version", checkVersion);

export default router;