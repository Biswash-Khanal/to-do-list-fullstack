
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { navLinks, assets } from '../assets/assets.jsx';
import { useAppContext } from '../context/AppContext.jsx';
import axios from '../api/axios.js';
import toast from 'react-hot-toast';
const NavBar = () => {
const navigate = useNavigate();


    const handleLogout = async()=>{
        try {
            const response = await axios.post("/auth/logout" );
            if(response.data.success === true){
                setIsLoggedIn(false);
                navigate("/");
                toast.success(response.data.message)
            }
        } catch (error) {

            toast.error(error.response.data.error);
        }
        
    }

const {isScrolled, isMenuOpen, setIsMenuOpen, setIsLoggedIn, IsLoggedIn} = useAppContext();


    return (
        
            
            <nav className={`fixed top-0 left-0 bg-primary w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-1000 z-50 ${isScrolled ? "bg-primary/30 shadow-md text-font-primary backdrop-blur-lg py-2 md:py-3" : "py-4 md:py-4"}`}>

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img src={assets.logo_caption_hor} alt="logo" className={`h-10`} />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden sm:flex items-center gap-20 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <Link key={i} to={link.link} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-font-secondary" : "text-font-primary"}`}>
                            {link.title}
                            <div className={`${isScrolled ? "bg-font-primary" : "bg-font-secondary"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </Link>
                    ))}

                </div>

                {/* Desktop Right */}
                <div className="hidden sm:flex items-center gap-4">
                    
                    <button onClick={handleLogout} className={`${isScrolled?"bg-primary/30 text-white":"bg-secondary text-primary"}  px-8 py-2.5 rounded-full ml-4 transition-all duration-500 hover:scale-110 cursor-pointer`}>
                        Log-Out
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 sm:hidden">
                    <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className={`h-6 w-6 cursor-pointer ${isScrolled ? "text-font-primary" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-primary text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-font-primary transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {navLinks.map((link, i) => (
                        <Link key={i} to={link.link} onClick={() => setIsMenuOpen(false)}>
                            {link.title}
                        </Link>
                    ))}


                    <button onClick={handleLogout} className="bg-secondary text-font-secondary px-8 py-2.5 rounded-full transition-all duration-500 cursor-pointer hover:scale-110">
                        Logout
                    </button>
                </div>
            </nav>
      
    );
}

export default NavBar
