import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
		completed: { type: Boolean, default: false },
		user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

	},
	{
		timestamps: true,
	}
);

const Todo = mongoose.models.Todo || mongoose.model("Todo", todoSchema);

export default Todo;

