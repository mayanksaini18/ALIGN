import React from 'react';

// --- ServiceCard Component (Helper) ---
function ServiceCard({ title, icon, description }) {
    return (
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
}

// --- Contact Section with Submit Button ---
function ContactSection() {
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkgqbyea";

    return (
        <section id="contact" className="max-w-3xl mx-auto mt-24 py-16 bg-black text-white rounded-lg">
            <div className="text-center mb-10">
                <h2 className="text-5xl font-extrabold mb-4">Start Your Project</h2>
                <p className="text-lg text-gray-400">Have an idea? Let's make it a reality. Fill out the form below to get a quote for your project.</p>
            </div>

            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="full-name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                        <input type="text" id="full-name" name="name" placeholder="Enter your full name" className="w-full p-3 bg-gray-800 border-b-2 border-gray-600 focus:border-align-gold text-white rounded-t-md outline-none transition duration-300" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                        <input type="email" id="email" name="_replyto" placeholder="Enter your email address" className="w-full p-3 bg-gray-800 border-b-2 border-gray-600 focus:border-align-gold text-white rounded-t-md outline-none transition duration-300" required />
                    </div>
                </div>

                <div>
                    <label htmlFor="project-details" className="block text-sm font-medium text-gray-300 mb-2">Project Details</label>
                    <textarea id="project-details" name="message" rows="5" placeholder="Tell us about your project, goals, and timeline..." className="w-full p-3 bg-gray-800 border-b-2 border-gray-600 focus:border-align-gold text-white rounded-t-md outline-none transition duration-300 resize-y" required></textarea>
                </div>

                {/* --- SUBMIT BUTTON ADDED HERE --- */}
                <div className="text-center pt-4">
                    <button type="submit" className="px-8 py-3 text-lg font-bold rounded-full bg-align-gold text-white shadow-xl hover:shadow-align-gold/50 transition duration-300 transform hover:scale-[1.02]">
                        <span className="flex items-center justify-center">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.541V8.56l5.73 3.61c.45.286 1.05-.138.868-.643l-4.71-12.445z"></path></svg>
                            Send Message
                        </span>
                    </button>
                </div>
            </form>
        </section>
    );
}


// --- Body Component (Standard Function Declaration) ---
function Body({ className }) {

    // SVG ICON COMPONENT DEFINITIONS
    const WebIcon = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 0 0 9.8 8.6c.3 1.1-.1 2.3-.9 3.1L12 21.8l-7-7.1c-.8-.8-1.2-2-.9-3.1A10 10 0 0 0 12 2Z"/><path d="M5 13.5c.3 1.1.8 2.3 1.7 3.1L12 21.8l5.3-5.2c.8-.8 1.3-2 1.7-3.1"/><path d="M12 2v10m-3-3h6"/></svg>;
    const SearchIcon = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><path d="M10 5l4 4m0-4l-4 4"></path></svg>;
    const TargetIcon = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>;
    const BoltIcon = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>;
    const BrushIcon = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12.5 7.5l-3 3M18 13l-4-4m-3-3l-4-4m15 15l-4-4m-3-3l-4-4m-4 15l-4-4m21 0l-4 4M7 21l-3-3m15-6l-3-3M3 3l18 18"></path></svg>;
    const EditIcon = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>;

    const digitalServices = [
        { title: "Custom Web Development", icon: WebIcon, description: "Building high-performance, fully custom websites (React, Next.js) tailored to your business needs." },
        { title: "SEO Strategy & Execution", icon: SearchIcon, description: "Driving organic traffic and ranking higher with comprehensive keyword research and on-page optimization." },
        { title: "Performance Marketing (PPC)", icon: TargetIcon, description: "Optimizing Google Ads and social campaigns to maximize ROI and minimize cost per conversion." },
        { title: "Conversion Rate Optimization", icon: BoltIcon, description: "Analyzing user journeys and site behavior to turn more visitors into customers." },
        { title: "UI/UX Design & Audit", icon: BrushIcon, description: "Designing intuitive user interfaces and conducting expert reviews to ensure seamless user experience." },
        { title: "Brand & Content Strategy", icon: EditIcon, description: "Developing a unified brand voice and content plan that aligns with your market goals." },
    ];

    return (
        <main className={`py-16 px-6 ${className} bg-black`}>
            <section id="services" className="max-w-7xl mx-auto mt-10">
                <h2 className="text-5xl font-extrabold text-white text-center mb-16">
                    Our Expertise
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {digitalServices.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </section>

            <section id="works" className="max-w-7xl mx-auto mt-24 text-center">
                <h2 className="text-5xl font-extrabold text-white mb-4">
                    Our Recent Works
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16">
                    A look at some of our recent projects. Short-form content that packs a punch.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="group aspect-video bg-deep-panel rounded-xl overflow-hidden relative transition-shadow duration-300 shadow-xl hover:shadow-align-gold/50">
                            <img src={`https://placehold.co/600x400/0A0A0A/FFC300?text=Project+${i}`} alt={`Project ${i}`} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition duration-500" />
                            <div className="absolute inset-0 flex items-end justify-start p-6 bg-gradient-to-t from-black/80 to-transparent">
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="testimonials" className="max-w-4xl mx-auto mt-24 text-center py-10">
                <h2 className="text-4xl font-extrabold text-white mb-6">Client Words</h2>
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
}

export default Body;
