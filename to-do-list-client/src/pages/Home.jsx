
import TodoCard from "../components/TodoCard";
import { useAppContext } from "../context/AppContext";
import { dummyTodos } from "../assets/assets.js";


const Home = () => {
	const {isScrolled} = useAppContext();
	return (
		<div className={`flex flex-col items-center bg-gradient-to-b ${isScrolled?"from-secondary to-primary":"from-primary to-secondary"} py-32 gap-10`}>
			{console.log("dummyTodos:", dummyTodos)}


			{dummyTodos.map((todo) => (
				<TodoCard key={todo._id} todo={todo} />
			))}
		</div>
	);
};

export default Home;
