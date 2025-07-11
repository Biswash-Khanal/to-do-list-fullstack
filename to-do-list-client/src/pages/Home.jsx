

import TodoCard from "../components/TodoCard";
import { useAppContext } from "../context/AppContext";




const Home = () => {
	
	const {loggedUser} = useAppContext();

	return (
		<div className={`flex flex-col items-center bg-gradient-to-b from-secondary to-primary py-32 gap-10`}>
			


			Hello {loggedUser.email}
			
		</div>
	);
};

export default Home;
