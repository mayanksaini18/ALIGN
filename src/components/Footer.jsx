import React from 'react';

// --- Footer Component (Standard Function Declaration) ---
function Footer() {
    return (
        <footer className="py-12 px-6 bg-black border-t border-gray-800">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-sm">

                {/* Column 1: Brand Info */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">ALIGN Brand</h3>
                    <p className="text-gray-400 leading-relaxed">
                        Transforming visions into cinematic reality through professional video editing and post-production services.
                    </p>
                </div>

                {/* Column 2: Services */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Services</h3>
                    <ul className="space-y-2">
                        {['Strategic Alignment', 'Content Engineering', 'Motion & Graphics', 'Performance Marketing'].map(item => (
                            <li key={item}><a href="#services" className="text-gray-400 hover:text-align-gold transition">{item}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Company */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Company</h3>
                    <ul className="space-y-2">
                        {['About Us', 'Portfolio', 'Services', 'Contact'].map(item => (
                            <li key={item}><a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-align-gold transition">{item}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Column 4: Contact */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
                    <ul className="space-y-3 text-gray-400">
                        <li className="flex items-center">
                            <svg className="w-5 h-5 mr-2 text-align-gold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            <a href="mailto:contact@align.com" className="hover:text-align-gold">contact@align.com</a>
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 mr-2 text-align-gold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74A1 1 0 0118 16.846V18a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h12a2 2 0 012 2v2.153z"></path></svg>
                            +1 234 567 8900
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 mr-2 text-align-gold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                            Global Headquarters
                        </li>
                    </ul>
                </div>

            </div>
            <div className="text-center text-gray-600 mt-12 text-xs border-t border-gray-800 pt-6">
                © {new Date().getFullYear()} ALIGN Marketing Brand. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
