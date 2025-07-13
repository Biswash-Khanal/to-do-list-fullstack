import React, { useState } from "react";
import axios from "../api/axios";
import { icons } from "../assets/assets";
import  {Button, ButtonToggle } from "./Button";

const TodoCard = ({
	todo = {},
	isActualCard = true,
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
<div className="bg-primary/30 backdrop-blur-2xl border-2 border-font-secondary shadow-xl shadow-b rounded-lg p-6 mx-5 flex items-center justify-between w-sm sm:w-2xl md:w-3xl lg:w-4xl transition-all duration-300 gap-5 ">
	{/* Edit Button */}
	<Button icon={icons.editIcon} onClick={handleEdit} />

	{/* Title + Description */}
<div className="flex flex-col gap-2 grow min-w-0 max-w-full">
	<h1 className="text-2xl font-semibold text-font-primary truncate">
		{todo.title}
	</h1>
	<p className="hidden sm:block text-font-primary text-sm truncate">
		{todo.description}
	</p>
</div>


	{/* Toggle */}
	<ButtonToggle completed={isCompleted} onClick={toggleCompleted} disabled={isLoading} />

	{/* Delete Button */}
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
