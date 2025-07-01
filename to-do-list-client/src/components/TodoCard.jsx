import React from "react";
import { useAppContext } from "../context/AppContext";
import { dummyTodos } from "../assets/assets.js";

const TodoCard = () => {
	return (
		<div className="bg-primary/30 backdrop:blur-2xl  shadow-md rounded-lg p-6 mx-5 flex items-center justify-around w-sm sm:w-2xl md:w-3xl lg:w-4xl">
			<div className="flex-col gap-4">
				<h1 className="text-2xl font-semibold text-font-primary">
					{dummyTodos[0].title}
				</h1>
				<h2 className="hidden sm:block text-font-primary">{dummyTodos[0].description}</h2>
			</div>

            <div className="hidden sm:block items-center bg-green-100 border-2 border-amber-300 rounded-lg ">
                Completed
            </div>
            <div className="sm:hidden flex items-center bg-green-100 border-2 border-amber-300 rounded-lg w-5 h-5">
                
            </div>
		</div>
	);
};

export default TodoCard;
