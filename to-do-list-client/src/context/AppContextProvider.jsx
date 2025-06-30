import { useState, useEffect } from "react";
import { AppContext } from "./AppContext";

export const AppContextProvider = ({ children }) => {
	const [scrollY, setScrollY] = useState(0);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const value = {
		scrollY,
        setScrollY,
        isScrolled: scrollY > 10, 
		isMenuOpen,
		setIsMenuOpen,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
