import express from "express";

import {
	registerUser,
	loginUser,
	logoutUser,
	verifyUser,
	googleLoginUser
} from "../controller/auth.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const authRoutes = express.Router();

authRoutes.post("/register", registerUser);

authRoutes.post("/login", loginUser);
authRoutes.post("/login-google", googleLoginUser);

authRoutes.post("/logout", logoutUser);

authRoutes.get("/verify",authMiddleware ,verifyUser)

export default authRoutes;
