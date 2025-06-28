import express from "express";
import {
	getUserTodos,
	createTodo,
	updateTodo,
	deleteTodo,
} from "../controller/todo.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const todoRoutes = express.Router();

todoRoutes.get("/", authMiddleware, getUserTodos);
todoRoutes.post("/",authMiddleware, createTodo);
todoRoutes.put("/:id",authMiddleware, updateTodo);
todoRoutes.delete("/:id",authMiddleware, deleteTodo);

export default todoRoutes;
