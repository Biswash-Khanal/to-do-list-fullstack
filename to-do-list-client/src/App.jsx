import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./components/NavBar";
import Login from "./components/Login_Register/Login";
import Landing from "./pages/Landing";
import Account from "./pages/Account";
import Todos from "./pages/Todos";
import Error404 from "./pages/Error404";

import { Toaster } from "react-hot-toast";
import { useAppContext } from "./context/AppContext";
import PrivateRoute from "./components/PrivateRoutes";

const App = () => {
	const { isLoggedIn, showLogin } = useAppContext();


	useEffect(() => {
		document.body.style.overflow = showLogin ? "hidden" : "auto";
	}, [showLogin]);

	return (
		<>
{/*login modal */}
			{showLogin && (
				<div className="font-bitcount fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl bg-primary/50">
					<Login />
				</div>
			)}

			{/* Main Content */}
			<div
				className={`font-bitcount relative bg-secondary min-h-screen overflow-hidden transition-all duration-200 ${
					showLogin ? "blur-sm pointer-events-none select-none" : ""
				}`}
			>
				<Routes>
					<Route
						path="/"
						element={
							isLoggedIn ? (
								<Navigate to="/todos" replace />
							) : (
								<Landing />
							)
						}
					/>
					<Route
						path="/account"
						element={
							<PrivateRoute>
								<NavBar />
								<Account />
							</PrivateRoute>
						}
					/>
					<Route
						path="/todos"
						element={
							<PrivateRoute>
								<NavBar />
								<Todos />
							</PrivateRoute>
						}
					/>
					<Route
						path="*"
						element={
							<PrivateRoute>
								<NavBar />
								<Error404 />
							</PrivateRoute>
						}
					/>
				</Routes>

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
		</>
	);
};

export default App;
