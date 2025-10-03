import React, { useState } from 'react';

// --- Header Component with Corrected Responsive Logic ---
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = ['Services', 'Works', 'About', 'Contact'];

    return (
        <header className="py-4 px-6 md:px-12 sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                {/* Brand Name */}
                <div className="text-4xl font-serif font-black tracking-widest text-white">
                    <span className="text-align-gold">A</span>LIGN
                </div>

                {/* --- Desktop Navigation Container --- */}
                {/* This container is hidden on small screens and visible (as a flex container) on medium screens and up */}
                <div className="hidden md:flex items-center space-x-8">
                    <nav className="flex space-x-8">
                        {navItems.map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="text-lg font-medium text-white hover:text-align-gold transition duration-300">
                                {item}
                            </a>
                        ))}
                    </nav>
                    <a href="#contact" className="px-5 py-2 text-md font-bold rounded-lg bg-align-gold text-black shadow-lg hover:bg-white transition duration-300">
                        Get a Quote
                    </a>
                </div>

                {/* --- Mobile Menu Button --- */}
                {/* This button is visible only on small screens (hidden on medium and up) */}
                <button 
                    className="md:hidden p-2 text-align-gold focus:outline-none z-50"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Dropdown (only appears when isMenuOpen is true) */}
            {isMenuOpen && (
                <nav className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm py-8">
                    <div className="flex flex-col items-center space-y-6">
                        {navItems.map((item) => (
                            <a 
                                key={item} 
                                href={`#${item.toLowerCase()}`} 
                                className="text-xl font-medium text-white hover:text-align-gold transition duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <a 
                            href="#contact" 
                            className="mt-4 px-6 py-3 text-lg font-bold rounded-lg bg-align-gold text-black shadow-lg hover:bg-white transition duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Get a Quote
                        </a>
                    </div>
                </nav>
            )}
        </header>
    );
}

export default Header;
