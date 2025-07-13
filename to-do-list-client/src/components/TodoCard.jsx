import React, { useState } from "react";
import axios from "../api/axios";
import { icons } from "../assets/assets";
import Button from "./Button";

const TodoCard = ({
	todo = {},
	isActualCard = true,
	toBeCreated,
	toBeDeleted,
	toBeUpdated,
	setToBeCreated,
	setToBeDeleted,
	setToBeUpdated,
}) => {
	const [isCompleted, setIsCompleted] = useState(todo.completed);
	const [isLoading, setIsLoading] = useState(false);

	const toggleCompleted = async () => {
		try {
			setIsCompleted(!isCompleted);
			setIsLoading(true);

			const response = await axios.put(`/todos/${todo._id}`, {
				completed: !isCompleted,
			});

			if (response.data.success === true) {
				console.log(response.data.todo);
			}
			console.log(response.data.message);
		} catch (error) {
			console.error("Failed to update status:", error.response?.data?.error);
			setIsCompleted(isCompleted); // revert if error
		} finally {
			setIsLoading(false);
		}
	};

	const handleEdit =()=>{
		setToBeUpdated({open:true, todo:todo})
		console.log("test edit")
	}
	const handleCreate =()=>{
		setToBeCreated({open:true, todo:todo})
		console.log("test update")
	}
	const handleDelete =()=>{
		setToBeDeleted({open:true, todo:todo})
		console.log("test delete")
	}

	return isActualCard ? (
		<div className="bg-primary/30 backdrop-blur-2xl border-2 border-font-secondary shadow-xl shadow-b rounded-lg p-6 mx-5 flex items-center justify-between w-sm sm:w-2xl md:w-3xl lg:w-4xl transition-all duration-300 ">
			{/*Edit Button */}
			<Button icon={icons.editIcon} onClick={handleEdit}/>

			<div className="flex flex-col gap-2">
				<h1 className="text-2xl font-semibold text-font-primary">
					{todo.title}
				</h1>
				<p className="hidden sm:block text-font-primary text-sm">
					{todo.description}
				</p>
			</div>

			{/* Desktop Fancy Toggle Button */}
			<button
				onClick={toggleCompleted}
				disabled={isLoading}
				className={`hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 font-medium text-sm transition-all duration-300 shadow-sm
					${
						isCompleted
							? "bg-green-100 text-green-700 border-green-400 hover:bg-green-200"
							: "bg-red-100 text-red-700 border-red-400 hover:bg-red-200"
					}
					${
						isLoading
							? "opacity-50 pointer-events-none cursor-not-allowed"
							: "hover:scale-105"
					}
				`}
			>
				<span className="text-base">{isCompleted ? "✅" : "⏳"}</span>
				{isCompleted ? "Mark Incomplete" : "Mark Completed"}
			</button>

			{/* Mobile Dot Toggle */}
			<div
				onClick={toggleCompleted}
				className={`sm:hidden w-6 h-6 rounded-full border-2 transition-all duration-300 cursor-pointer
					${
						isCompleted
							? "bg-green-400 border-green-600 hover:scale-110"
							: "bg-red-400 border-red-600 hover:scale-110"
					}
					${isLoading ? "opacity-50 pointer-events-none" : ""}
				`}
			></div>

			{/*Delete Button */}
			<Button icon={icons.deleteIcon} onClick={handleDelete} />
		</div>
	) : (
		<div onClick={handleCreate} className=" bg-primary/30 backdrop-blur-2xl border-2 border-green-500 shadow-md rounded-lg p-6 mx-5 flex items-center justify-center w-sm sm:w-2xl md:w-3xl lg:w-4xl transition-all duration-300 cursor-pointer hover:scale-95 text-green-400 ">
			<div className="flex flex-col gap-2 text-green-400 ">
				<h1 className="text-2xl font-semibold text-green-400  text-shadow-2xs">
					Click here to add a new Todo.......
				</h1>
				<p className="hidden sm:block text-font-primary text-sm">
					You will be able to set your title and description
				</p>
			</div>
		</div>
	);
};

export default TodoCard;
