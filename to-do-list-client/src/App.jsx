import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Landing from "./pages/Landing";
import { useAppContext } from "./context/AppContext";

import { Routes, Route } from "react-router-dom";
import Login from "./components/Login_Register/Login";
import Account from "./pages/Account";
import Todos from "./pages/Todos";

const App = () => {
	const { isLoggedIn, showLogin } = useAppContext();

	return (
		<div className="font-bitcount relative bg-secondary min-h-screen overflow-hidden">
			{showLogin && (
				<div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl bg-primary/520">
					<Login />
				</div>
			)}
			{!isLoggedIn ? (
				<Landing />
			) : (
				<>
					<NavBar />
					<Routes>
						<Route
							path="/"
							element={<Home />}
						/>
						<Route
							path="/account"
							element={<Account />}
						/>
						<Route
							path="/todos"
							element={<Todos />}
						/>
					</Routes>
				</>
			)}
			<Toaster
				position="top-center"
				toastOptions={{
					duration: 1200,
					style: {
						background: "#F2BFA4",
						color: "#7B3F00",
						fontSize: "16px",
						textAlign: "center",
					},
					success: {
						iconTheme: {
							primary: "green",
							secondary: "#F2BFA4",
						},
						style: {
							background: "#F2BFA4",
							color: "#7B3F00",
							textAlign: "center",
						},
						duration: 1200,
					},
					error: {
						iconTheme: {
							primary: "red",
							secondary: "#F2BFA4",
						},
						style: {
							background: "#F2BFA4",
							color: "red",
							textAlign: "center",

						},
						duration: 2000,
					},
				}}
			/>
		</div>
	);
};

export default App;
