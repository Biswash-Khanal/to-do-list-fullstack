import { Link } from "react-router-dom";
import { assets } from "../assets/assets.jsx";
import { useAppContext } from "../context/AppContext";

const Landing = () => {
	const { setShowLogin } = useAppContext();

	const loginButtonHandler = () => {
		setShowLogin(true);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br to-secondary from-primary text-font-secondary">
			{/* Hero Section */}
			<section className="px-6 md:px-16 pt-20 text-center md:text-left">
				<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
					<div className="flex-1 mb-12 md:mb-0">
						<h1 className="text-4xl md:text-6xl font-bold text-font-primary mb-6">
							Plan Better. Live Smarter.
						</h1>
						<p className="text-lg md:text-xl text-font-secondary mb-8">
							Welcome to{" "}
							<span className="font-bold text-font-primary">PlanUp</span> – the
							smart and simple ToDo list app designed to keep your life
							organized and productive.
						</p>

						<button
							onClick={loginButtonHandler}
							className="bg-primary text-font-secondary px-6 py-3 rounded-full text-lg hover:scale-105 transition-all cursor-pointer"
						>
							Sign In & Start Planning
						</button>
					</div>
					<div className="flex-1">
						<img
							src={assets.logo_caption_ver}
							alt="PlanUp Illustration"
							className="w-full max-w-sm mx-auto"
						/>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className=" pb-20 pt-23 px-6 md:px-16">
				<div className="max-w-6xl mx-auto text-center">
					<h2 className="text-3xl font-semibold text-font-primary mb-6">
						Why PlanUp?
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
						<div className="p-6 rounded-xl bg-white/20 backdrop-blur-sm shadow">
							<h3 className="text-xl font-semibold text-font-primary mb-2">
								Simple UI
							</h3>
							<p className="text-font-secondary">
								Easily add, edit, and manage your tasks with a clean and
								intuitive interface.
							</p>
						</div>
						<div className="p-6 rounded-xl bg-white/20 backdrop-blur-sm shadow">
							<h3 className="text-xl font-semibold text-font-primary mb-2">
								Sign In & Plan
							</h3>
							<p className="text-font-secondary">
								Sign in with your account and immediately start managing your
								goals and priorities.
							</p>
						</div>
						<div className="p-6 rounded-xl bg-white/20 backdrop-blur-sm shadow">
							<h3 className="text-xl font-semibold text-font-primary mb-2">
								Focus Mode
							</h3>
							<p className="text-font-secondary">
								Stay in the zone with a distraction-free task view. Get things
								done, one task at a time.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<section>
				<footer className="bg-primary text-font-primary py-6 text-center ">
					<p className="inline font-roboto">&copy;</p>{" "}
					<p className="inline">
						{" "}
						{new Date().getFullYear()} PlanUp. Built by [Biswash Khanal]
					</p>
				</footer>
			</section>
		</div>
	);
};

export default Landing;
