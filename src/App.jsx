import React from 'react';
import GsapLoader from './components/GsapLoader';
import SplitText from './components/SplitText';
import TextType from './components/TextType';


// --- Header Component ---
const Header = () => (
    <header className="py-4 px-6 md:px-12 sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
            {/* Brand name now uses font-serif */}
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

// --- Body Component ---
const Body = ({ className }) => (
    // Main content area now uses the new pure 'bg-black'
    <main className={`py-16 px-6 ${className} bg-black`}>
        <section id="services" className="max-w-7xl mx-auto mt-10">
            <h2 className="text-5xl font-extrabold text-white text-center mb-16">
                Our Expertise
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
                <ServiceCard title="Strategic Alignment" icon="🎯" description="We define your core identity and build a scalable marketing framework for sustained growth." />
                <ServiceCard title="Content Engineering" icon="✍️" description="Crafting compelling narratives from raw ideas to fully captivating and resonance-driven products." />
                <ServiceCard title="Motion & Graphics" icon="🎬" description="Enhancing your story with elegant motion graphics, from subtle titling to complex animated visuals." />
                <ServiceCard title="Digital Transformation" icon="⚡" description="Future-proof your business with cutting-edge tools and automated marketing workflows." />
                <ServiceCard title="Performance Marketing" icon="📈" description="Optimize every dollar with focused, data-backed campaign execution and measurable KPIs." />
                <ServiceCard title="Visual Storytelling" icon="✨" description="Setting the mood and ensuring visual perfection for every client project, delivering cinematic quality." />
            </div>
        </section>

        <section id="works" className="max-w-7xl mx-auto mt-24 text-center">
            <h2 className="text-5xl font-extrabold text-white mb-4">
                Our Recent Works
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16">
                A look at some of our recent projects. Short-form content that packs a punch.
            </p>
            {/* Placeholder for works gallery/grid */}
            <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                    // Cards now use a 'deep-panel' background for slight contrast
                    <div key={i} className="group aspect-video bg-deep-panel rounded-xl overflow-hidden relative transition-shadow duration-300 shadow-xl hover:shadow-align-gold/50">
                        <img src={`https://placehold.co/600x400/0A0A0A/FFC300?text=Project+${i}`} alt={`Project ${i}`} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition duration-500" />
                        <div className="absolute inset-0 flex items-end justify-start p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <h3 className="text-3xl font-bold text-white group-hover:text-align-gold transition duration-300">Campaign Title {i}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Client Words / Testimonials Section */}
        <section id="testimonials" className="max-w-4xl mx-auto mt-24 text-center py-10">
            <h2 className="text-4xl font-extrabold text-white mb-6">Client Words</h2>
            {/* Testimonial card uses 'deep-panel' */}
            <div className="p-8 bg-deep-panel rounded-xl border border-align-gold/20 shadow-xl">
                <p className="text-xl italic text-gray-300 leading-relaxed">
                    "ALIGN didn't just deliver a campaign; they uncovered the story within it. The process was seamless, the result extraordinary, and it has completely redefined our brand's visual language."
                </p>
                <p className="text-md font-bold text-align-gold mt-4">- Apex Marketing Group</p>
            </div>
        </section>

        <ContactSection />
    </main>
);

const ServiceCard = ({ title, icon, description }) => (
    // Service cards now use the 'deep-panel' background
    <div className="p-8 bg-deep-panel rounded-xl shadow-2xl space-y-4 border border-gray-800 transition duration-300 hover:border-align-gold">
        <div className="text-5xl mb-4 transition duration-300 text-align-gold">{icon}</div>
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
        <a href="#services" className="text-align-gold hover:underline flex items-center pt-2">
            Explore
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </a>
    </div>
);

// --- Contact Section (Start Your Project Look) ---
const ContactSection = () => (
    // Contact section background is now pure 'bg-black'
    <section id="contact" className="max-w-3xl mx-auto mt-24 py-16 bg-black text-white rounded-lg">
        <div className="text-center mb-10">
            <h2 className="text-5xl font-extrabold mb-4">Start Your Project</h2>
            <p className="text-lg text-gray-400">Have an idea? Let's make it a reality. Fill out the form below to get a quote for your project.</p>
        </div>

        <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="full-name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                    <input type="text" id="full-name" placeholder="Enter your full name" className="w-full p-3 bg-gray-800 border-b-2 border-gray-600 focus:border-align-gold text-white rounded-t-md outline-none transition duration-300" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                    <input type="email" id="email" placeholder="Enter your email address" className="w-full p-3 bg-gray-800 border-b-2 border-gray-600 focus:border-align-gold text-white rounded-t-md outline-none transition duration-300" />
                </div>
            </div>

            <div>
                <label htmlFor="project-details" className="block text-sm font-medium text-gray-300 mb-2">Project Details</label>
                <textarea id="project-details" rows="5" placeholder="Tell us about your project, goals, and timeline..." className="w-full p-3 bg-gray-800 border-b-2 border-gray-600 focus:border-align-gold text-white rounded-t-md outline-none transition duration-300 resize-y"></textarea>
            </div>

            <div className="text-center pt-4">
                <button type="submit" className="px-8 py-3 text-lg font-bold rounded-full bg-align-gold text-black shadow-xl hover:shadow-align-gold/50 transition duration-300 transform hover:scale-[1.02]">
                    <span className="flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.541V8.56l5.73 3.61c.45.286 1.05-.138.868-.643l-4.71-12.445z"></path></svg>
                        Send Message
                    </span>
                </button>
            </div>
        </form>
    </section>
);


// --- Footer Component ---
const Footer = () => (
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


// --- Main App Component ---
const AppContent = () => {
    // Utility for defining Tailwind custom colors
    const tailwindConfig = `
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap" rel="stylesheet">
      <script>
        tailwind.config = {
          theme: {
            extend: {
              colors: {
                'align-gold': '#FFC300', 
                'black': '#000000', // PURE BLACK
                'deep-panel': '#0A0A0A', // Used for cards/sections that need contrast against pure black
              },
              fontFamily: {
                // 'serif' now maps to Playfair Display for the brand feel
                'serif': ['"Playfair Display"', 'serif'], 
                'sans': ['Inter', 'sans-serif'],
                'mono': ['Fira Code', 'monospace']
              }
            }
          }
        }
      </script>
    `;

    return (
        <>
            {/* Inject custom Tailwind config and fonts */}
            <div dangerouslySetInnerHTML={{ __html: tailwindConfig }} />

            {/* Main Container: Full viewport height, pure black background, white text */}
            <div className="min-h-screen flex flex-col bg-black text-white font-sans">

                <Header />

                {/* HERO SECTION */}
                {/* Hero section background is now pure 'bg-black' */}
                <div className="flex flex-col items-center justify-center pt-24 pb-16 bg-black">
                    <SplitText text="ALIGN" />

                    <div className="flex items-center justify-center p-6 mb-8 text-center mt-4">
                        <TextType
                            text={["Strategy that cuts through.", "Execution that drives growth.", "Results that redefine success."]}
                            typingSpeed={75}
                            pauseDuration={1800}
                            showCursor={true}
                            cursorCharacter="_"
                            deletingSpeed={40}
                        />
                    </div>

                    <a href="#contact" className="px-10 py-4 text-xl font-bold rounded-lg bg-align-gold text-black shadow-2xl hover:bg-white transition duration-300 transform hover:scale-[1.05] mt-8">
                        Start Your Project
                    </a>
                </div>

                <Body className="flex-1"/>
                <Footer/>
            </div>
        </>
    );
};

// Wrapper component to load GSAP before AppContent
const App = () => (
    <GsapLoader>
        <AppContent />
    </GsapLoader>
);

export default App;
