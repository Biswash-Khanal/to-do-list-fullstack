import mongoose, { mongo } from "mongoose";
import Todo from "../model/todo.model.js";
import AppError from "../utils/AppError.js";

export const createTodo = async (req, res, next) => {
	const createTodoSession = await mongoose.startSession();
	createTodoSession.startTransaction();

	try {
		const { title, description } = req.body;
		if (!title || !description) {
			throw new AppError("Title and description are required", 400);
		}
		const user = req.authorizedId;

		if (!user) {
			throw new AppError("User not authenticated", 401);
		}

		const newTodo = new Todo({
			title,
			description,
			user,
		});

		await newTodo.save({ session: createTodoSession });

		await createTodoSession.commitTransaction();
		createTodoSession.endSession();

		res.status(201).json({
			success: true,
			message: "Todo created successfully",
		});
	} catch (error) {
		await createTodoSession.abortTransaction();
		createTodoSession.endSession();
		next(error);
	}
};

export const getUserTodos = async (req, res, next) => {
	try {
		const user = req.authorizedId;
		if (!user) {
			throw new AppError("Unauthorized access"); //if middleware works control should never reach this
		}

		const allTodos = await Todo.find({ user });

		return res.status(200).json({
			success: true,
			message: "Todo-list fetched successfully",
			todos: allTodos,
		});
	} catch (error) {
		next(error);
	}
};

export const updateTodo = async (req, res, next) => {
	const updateTodoSession = await mongoose.startSession();
	updateTodoSession.startTransaction();

try {
	const _id = req.params.id;
	const user = req.authorizedId;
	const { title, description, completed } = req.body;

	if (
		typeof title === "undefined" &&
		typeof description === "undefined" &&
		typeof completed === "undefined"
	) {
		throw new AppError("No fields to update", 400);
	}

	const updateFields = {};


	if (typeof title !== "undefined") updateFields.title = title;


	if (typeof description !== "undefined") updateFields.description = description;


	if (typeof completed !== "undefined") updateFields.completed = completed;

	const updatedTodo = await Todo.findOne({ _id, user });

	if (!updatedTodo) {
		throw new AppError("Could not find the todo", 404);
	}

	
	for (const key in updateFields) {
		updatedTodo[key] = updateFields[key];
	}

	await updatedTodo.save({ session: updateTodoSession });
	await updateTodoSession.commitTransaction();
	updateTodoSession.endSession();

	return res.status(200).json({
		success: true,
		message: "Todo updated successfully",
		todo: updatedTodo,
	});
} catch (error) {
	await updateTodoSession.abortTransaction();
	updateTodoSession.endSession();
	next(error);
}

};
export const deleteTodo = async (req, res, next) => {
	const deleteTodoSession = await mongoose.startSession();
	deleteTodoSession.startTransaction();

	try {
		const _id = req.params.id;
		const user = req.authorizedId;

		const deletedResult = await Todo.deleteOne(
			{ _id, user },

			{ session: deleteTodoSession }
		);

		if (deletedResult.acknowledged === false) {
			throw new AppError("Could'nt delete the record", 400);
		}

		await deleteTodoSession.commitTransaction();
		deleteTodoSession.endSession();

		return res.status(200).json({
			success: true,
			message: "Todo deleted successfully",
		});
	} catch (error) {
		await deleteTodoSession.abortTransaction();
		deleteTodoSession.endSession();
		next(error);
	}
};
