
import React from 'react';

// --- ServiceCard Component (Helper) ---
// Defined here because it's only used by Body.jsx
function ServiceCard({ title, icon, description }) {
    return (
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
}

// --- Contact Section (Helper) ---
// Defined here because it's only used by Body.jsx
function ContactSection() {
    return (
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
}


// --- Body Component (Standard Function Declaration) ---
function Body({ className }) {
    return (
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
}

export default Body;
