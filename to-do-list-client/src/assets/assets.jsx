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
      <circle cx="12" cy="7" r="4" stroke="#7B3F00" strokeWidth="1.5" fill="#7B3F00" />
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

