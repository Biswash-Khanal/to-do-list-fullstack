import { useState, useEffect } from "react";
import { AppContext } from "./AppContext";
import axios from "../api/axios";

export const AppContextProvider = ({ children }) => {
	const [scrollY, setScrollY] = useState(0);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [loggedUser, setLoggedUser] = useState({});
	const [showLogin, setShowLogin] = useState(false);
	const [loginRegisterSwitch, setLoginRegisterSwitch] = useState("login");

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		async function verifyUser() {
			try {
				const response = await axios.get("/auth/verify");

				if (response.data.success === true) {
					setIsLoggedIn(true);
					setLoggedUser(response.data.user);
				}
			} catch (error) {
				setIsLoggedIn(false);
				setLoggedUser({});
				console.log(error.response.data.error);
			}
		}

		verifyUser();
	}, []);

	const value = {
		scrollY,
		setScrollY,
		isScrolled: scrollY > 10,
		isMenuOpen,
		setIsMenuOpen,
		isLoggedIn,
		setIsLoggedIn,
		showLogin,
		setShowLogin,
		loginRegisterSwitch,
		setLoginRegisterSwitch,
		loggedUser,
		setLoggedUser,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
