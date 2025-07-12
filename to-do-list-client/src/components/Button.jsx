import React from "react";

const Button = ({ icon, onClick }) => {
	return (
		<button onClick={onClick} className="cursor-pointer flex border-2 p-0.5 border-font-primary rounded-xl hover:scale-125 bg-secondary">
			{icon}
		</button>
	);
};

export default Button;