
import { navLinks, assets } from '../assets/assets.js';
import { useAppContext } from '../context/AppContext.jsx';

const NavBar = () => {

const {isScrolled, isMenuOpen, setIsMenuOpen} = useAppContext();


    return (
        <div className="h-88 md:h-64">
            
            <nav className={`fixed top-0 left-0 bg-primary w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-secondary shadow-md text-font-primary backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>

                {/* Logo */}
                <a href="/" className="flex items-center gap-2">
                    <img src={assets.logo_caption_hor} alt="logo" className={`h-9`} />
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-20 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <a key={i} href={link.link} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-font-secondary" : "text-font-primary"}`}>
                            {link.title}
                            <div className={`${isScrolled ? "bg-font-primary" : "bg-font-secondary"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </a>
                    ))}

                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-4">
                    
                    <button className={`${isScrolled?"bg-primary text-font-secondary":"bg-secondary text-font-primary"}  px-8 py-2.5 rounded-full ml-4 transition-all duration-500 hover:scale-110 cursor-pointer`}>
                        Login
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">
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
                        <a key={i} href={link.link} onClick={() => setIsMenuOpen(false)}>
                            {link.title}
                        </a>
                    ))}


                    <button className="bg-secondary text-font-secondary px-8 py-2.5 rounded-full transition-all duration-500 ">
                        Login
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default NavBar
