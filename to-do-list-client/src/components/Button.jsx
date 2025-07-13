// Buttons.jsx

import React from "react";

// Basic Icon Button
export const Button = ({ icon, onClick }) => (
	<button
		onClick={onClick}
		className="cursor-pointer flex border-2 p-0.5 border-font-primary rounded-xl hover:scale-125 bg-secondary"
	>
		{icon}
	</button>
);

// Toggle Button (Complete / Incomplete)
export const ButtonToggle = ({ completed, onClick, disabled }) => (
	<button
		onClick={onClick}
		disabled={disabled}
		className={`cursor-pointer flex border-2 p-1 rounded-xl transition-transform duration-200 
        ${completed ? "border-green-500 bg-green-200" : "border-yellow-500 bg-yellow-200"} 
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-125"}`}
	>
		{completed ? (
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-green-800">
				<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
			</svg>
		) : (
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-yellow-800">
				<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
			</svg>
		)}
	</button>
);
