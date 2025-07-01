import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Landing from "./pages/Landing";
import { useAppContext } from "./context/AppContext";
import Login from "./components/Login";

const App = () => {
	const { isLoggedIn, showLogin } = useAppContext();

	return (
<div className="font-bitcount relative bg-amber-50 min-h-screen overflow-hidden">
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
      <Home />
    </>
  )}
  <Toaster />
</div>

	);
};

export default App;
