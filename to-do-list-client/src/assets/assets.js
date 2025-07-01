import base_logo from "./base_logo.png";
import logo_caption_hor from "./logo_caption_hor.png";
import logo_caption_ver from "./logo_caption_ver.png";
import logo_full from "./logo_full.png";

export const dummyTodos =  [
        {
            "_id": "6860724ed7ea2a330cb558cc",
            "title": "test 1",
            "description": "this is a test description",
            "completed": false,
            "user": "68603b8d4cfe204fd1814501",
            "createdAt": "2025-06-28T22:53:02.057Z",
            "updatedAt": "2025-06-28T22:53:02.057Z",
            "__v": 0
        },
        {
            "_id": "68607270d7ea2a330cb558d1",
            "title": "test 3",
            "description": "this is a test description",
            "completed": false,
            "user": "68603b8d4cfe204fd1814501",
            "createdAt": "2025-06-28T22:53:36.003Z",
            "updatedAt": "2025-06-28T22:53:36.003Z",
            "__v": 0
        }
    ]


export const assets = {
	base_logo,
	logo_caption_hor,
	logo_caption_ver,
	logo_full,
    
};

export const navLinks = [
	{
		title: "My To-Do List",
		link: "/todos",
	},
	{
		title: "Account",
		link: "/users",
	},
];

export const footerLinks = [
	{
		title: "Quick Links",
		links: [
			{ text: "Home", url: "#" },
			{ text: "Best Sellers", url: "#" },
			{ text: "Offers & Deals", url: "#" },
			{ text: "Contact Us", url: "#" },
			{ text: "FAQs", url: "#" },
		],
	},
	{
		title: "Need help?",
		links: [
			{ text: "Delivery Information", url: "#" },
			{ text: "Return & Refund Policy", url: "#" },
			{ text: "Payment Methods", url: "#" },
			{ text: "Track your Order", url: "#" },
			{ text: "Contact Us", url: "#" },
		],
	},
	{
		title: "Follow Us",
		links: [
			{ text: "Instagram", url: "#" },
			{ text: "Twitter", url: "#" },
			{ text: "Facebook", url: "#" },
			{ text: "YouTube", url: "#" },
		],
	},
];
