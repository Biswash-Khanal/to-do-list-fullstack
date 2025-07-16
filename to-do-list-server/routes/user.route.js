import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import { editUserName, getUserDetails, deleteUser, editUserPassword } from '../controller/user.controller.js';


const userRoutes = express.Router();

userRoutes.get('/', authMiddleware, getUserDetails);

userRoutes.patch('/username-edit', authMiddleware, editUserName);
userRoutes.patch('/password-edit', authMiddleware, editUserPassword);

userRoutes.delete('/', authMiddleware, deleteUser);

export default userRoutes;