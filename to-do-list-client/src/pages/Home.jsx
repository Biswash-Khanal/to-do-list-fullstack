
import TodoCard from "../components/TodoCard";

import { dummyTodos } from "../assets/assets.js";


const Home = () => {
	
	return (
		<div className={`flex flex-col items-center bg-gradient-to-b from-secondary to-primary py-32 gap-10`}>
			


			{dummyTodos.map((todo) => (
				<TodoCard key={todo._id} todo={todo} />
			))}
		</div>
	);
};

export default Home;
