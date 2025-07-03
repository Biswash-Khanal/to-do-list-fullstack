import React from "react";

const TodoCard = ({ todo }) => {
	return (
		<div className="bg-primary/30 backdrop-blur-2xl border-2 border-font-secondary shadow-md rounded-lg p-6 mx-5 flex items-center justify-between w-sm sm:w-2xl md:w-3xl lg:w-4xl">
			<div className="flex flex-col gap-2">
				<h1 className="text-2xl font-semibold text-font-primary">
					{todo.title}
				</h1>
				<p className="hidden sm:block text-font-primary text-sm">
					{todo.description}
				</p>
			</div>

			{/* Desktop Label */}
			<div
				className={`hidden sm:flex items-center px-4 py-1 rounded-lg font-medium text-sm border-2 ${
					todo.completed
						? "bg-green-100 text-green-800 border-amber-300"
						: "bg-red-300 text-red-800 border-black"
				}`}
			>
				{todo.completed ? "Completed" : "In Progress"}
			</div>

			{/* Mobile Dot */}
			<div
				className={`sm:hidden w-5 h-5 rounded-full border-2 ${
					todo.completed
						? "bg-green-100 border-amber-300"
						: "bg-red-300 border-black"
				}`}
			></div>
		</div>
	);
};

export default TodoCard;
