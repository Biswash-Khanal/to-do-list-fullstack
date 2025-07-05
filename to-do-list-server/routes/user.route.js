import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import { editUser, getUserDetails } from '../controller/user.controller.js';


const userRoutes = express.Router();

userRoutes.get('/', authMiddleware, getUserDetails);
userRoutes.post('/', authMiddleware, editUser);

export default userRoutes;