import express from "express";

import {
	registerUser,
	loginUser,
	logoutUser,
	verifyUser
} from "../controller/auth.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const authRoutes = express.Router();

authRoutes.post("/register", registerUser);

authRoutes.post("/login", loginUser);

authRoutes.post("/logout", logoutUser);

authRoutes.get("/verify",authMiddleware ,verifyUser)

export default authRoutes;
