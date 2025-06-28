import express from "express";

import {
	registerUser,
	loginUser,
	logoutUser,
} from "../controller/auth.controller.js";

const authRoutes = express.Router();

authRoutes.post("/register", registerUser);

authRoutes.post("/login", loginUser);

authRoutes.post("/logout", logoutUser);

export default authRoutes;
