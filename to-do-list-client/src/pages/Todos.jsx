import React, { useEffect, useState } from "react";

import axios from "../api/axios";
import TodoCard from "../components/TodoCard";
import DeleteConfirm from "../components/Todos/DeleteConfirm";
import TodoAdd from "../components/Todos/TodoAdd";
import TodoEdit from "../components/Todos/TodoEdit";

const Todos = () => {
	const [userTodos, setUserTodos] = useState([]);
	const [toBeDeleted, setToBeDeleted] = useState({
		open: false,
		todo: null,
	});
	const [toBeUpdated, setToBeUpdated] = useState({
		open: false,
		todo: null,
	});
	const [toBeCreated, setToBeCreated] = useState({
		open: false,
		todo: null,
	});

	useEffect(() => {
		const fetchTodos = async () => {
			try {
				const response = await axios.get("/todos/");
				if (response.data.success === true) {
					setUserTodos(response.data.todos);
				}
			} catch (error) {
				console.log(error.response?.data?.error || "Fetch failed");
			}
		};

		fetchTodos();
	}, []);

	return (
		<>
			{toBeDeleted.open && <DeleteConfirm setUserTodos={setUserTodos} toBeDeleted={toBeDeleted}  setToBeDeleted={setToBeDeleted} />}
			{toBeCreated.open && <TodoAdd setUserTodos={setUserTodos} toBeCreated={toBeCreated} setToBeCreated={setToBeCreated} />}
			{toBeUpdated.open && <TodoEdit setUserTodos={setUserTodos} toBeUpdated={toBeUpdated} setToBeUpdated={setToBeUpdated} />}
			<div className="mt-30 flex flex-col gap-10 items-center">
				{userTodos.length === 0 ? (
					<p>No todos yet.</p>
				) : (
					userTodos.map((todo) => (
						<div key={todo._id}>
							<TodoCard
								toBeCreated={toBeCreated}
								toBeDeleted={toBeDeleted}
								toBeUpdated={toBeUpdated}
								setToBeCreated={setToBeCreated}
								setToBeDeleted={setToBeDeleted}
								setToBeUpdated={setToBeUpdated}
								key={todo._id}
								todo={todo}
							/>
						</div>
					))
				)}
				<TodoCard
					isActualCard={false}
					toBeCreated={toBeCreated}
					setToBeCreated={setToBeCreated}
				/>
			</div>
		</>
	);
};

export default Todos;
