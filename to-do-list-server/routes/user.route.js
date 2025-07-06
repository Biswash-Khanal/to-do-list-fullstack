import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import { editUser, getUserDetails, deleteUser } from '../controller/user.controller.js';


const userRoutes = express.Router();

userRoutes.get('/', authMiddleware, getUserDetails);

userRoutes.put('/', authMiddleware, editUser);

userRoutes.delete('/', authMiddleware, deleteUser);

export default userRoutes;