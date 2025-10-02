// Define gsap globally until it's loaded
let gsap = window.gsap;

// --- Component to load GSAP from CDN ---
const GsapLoader = ({ children }) => {
    const [isGsapLoaded, setIsGsapLoaded] = useState(false);

    useEffect(() => {
        // Only load if GSAP is not yet available globally
        if (!window.gsap) {
            const script = document.createElement('script');
            // Using a reliable CDN link for GSAP
            script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
            script.onload = () => {
                // Assign the loaded library to the global 'gsap' variable
                gsap = window.gsap;
                setIsGsapLoaded(true);
            };
            document.body.appendChild(script);
            return () => {
                document.body.removeChild(script);
            };
        } else {
            setIsGsapLoaded(true);
        }
    }, []);

    if (!isGsapLoaded) {
        // Display a simple loading state while GSAP fetches
        return <div className="text-gray-400 p-8 text-center bg-black min-h-screen">Loading ALIGN experience...</div>;
    }

    // Render children once GSAP is ready
    return <>{children}</>;
};
