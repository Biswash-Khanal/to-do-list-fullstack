import { useState, useEffect } from "react";
import { AppContext } from "./AppContext";

export const AppContextProvider = ({ children }) => {
	const [scrollY, setScrollY] = useState(0);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [showLogin, setShowLogin] = useState(false);
	const[loginRegisterSwitch, setLoginRegisterSwitch] = useState("login");

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		
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
		setLoginRegisterSwitch};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
