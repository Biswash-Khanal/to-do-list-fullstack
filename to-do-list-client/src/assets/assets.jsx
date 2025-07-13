import base_logo from "./base_logo.png";
import logo_caption_hor from "./logo_caption_hor.png";
import logo_caption_ver from "./logo_caption_ver.png";
import logo_full from "./logo_full.png";

export const assets = {
	base_logo,
	logo_caption_hor,
	logo_caption_ver,
	logo_full,
};

export const modalText = {
	add: {
		title: "Please Enter Details!",
	},
	edit: {
		title: "Please Edit Details!",
	},
	delete: {
		title: "Are You Sure?",
	},
};

export const icons = {
	user: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="#7B3F00"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="#7B3F00"
			className="w-6 h-6"
		>
			<circle
				cx="12"
				cy="7"
				r="4"
				stroke="#7B3F00"
				strokeWidth="1.5"
				fill="#7B3F00"
			/>
			<path
				stroke="#7B3F00 "
				strokeWidth="1.5"
				d="M5.5 21a8.38 8.38 0 0113 0"
				fill="none"
			/>
		</svg>
	),

	email: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="#7B3F00"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="#7B3F00"
			className="w-6 h-6"
		>
			<path
				stroke="#7B3F00"
				strokeWidth="1.5"
				d="M3 8l9 6 9-6M3 8v8a2 2 0 002 2h14a2 2 0 002-2V8"
				fill="none"
			/>
		</svg>
	),

	password: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="#7B3F00"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="#AF8B66"
			className="w-6 h-6"
		>
			<rect
				x="5"
				y="11"
				width="14"
				height="8"
				stroke="#7B3F00"
				strokeWidth="1.5"
				rx="2"
				fill="#7B3F00"
			/>
			<path
				stroke="#7B3F00"
				strokeWidth="1.5"
				d="M8 11V7a4 4 0 118 0v4"
				fill="none"
			/>
		</svg>
	),

	editIcon: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="#7B3F00"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M16.862 3.487a2.25 2.25 0 013.182 3.182L7.5 19.313 3 21l1.687-4.5L16.862 3.487z"
			/>
		</svg>
	),

	deleteIcon: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="#7B3F00"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M6 10.5v7.5a1.5 1.5 0 001.5 1.5h9a1.5 1.5 0 001.5-1.5v-7.5M9.75 10.5v6m4.5-6v6M4.5 6h15M10.5 3h3a.75.75 0 01.75.75V6h-4.5V3.75a.75.75 0 01.75-.75z"
			/>
		</svg>
	),
};

export const navLinks = [
	{
		title: "My To-Do List",
		link: "/todos",
	},
	{
		title: "Account",
		link: "/account",
	},
];
