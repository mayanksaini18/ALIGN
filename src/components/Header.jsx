import React from 'react';

// --- Header Component (Standard Function Declaration) ---
function Header() {
    return (
        <header className="py-4 px-6 md:px-12 sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                {/* Brand name now uses font-serif (Playfair Display) */}
                <div className="text-4xl font-serif font-black tracking-widest text-white">
                    <span className="text-align-gold">A</span>LIGN
                </div>
                <nav className="hidden md:flex space-x-8">
                    {['Services', 'Works', 'About', 'Contact'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="text-lg font-medium text-gray-400 hover:text-align-gold transition duration-300">
                            {item}
                        </a>
                    ))}
                </nav>
                <a href="#contact" className="hidden md:block px-5 py-2 text-md font-bold rounded-lg bg-align-gold text-black shadow-lg hover:bg-white transition duration-300">
                    Get a Quote
                </a>
                <button className="md:hidden p-2 text-align-gold focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>
        </header>
    );
}

export default Header;
