/ --- SplitText Component Implementation (Simple GSAP Character Reveal) ---
const SplitText = ({ text }) => {
    const charsRef = useRef([]);

    useEffect(() => {
        if (window.gsap) { // Use window.gsap directly
            window.gsap.from(charsRef.current, {
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.05,
                ease: "power3.out"
            });
        }
    }, [text]);

    return (
        <div className="flex justify-center flex-wrap">
            {text.split('').map((char, index) => (
                <span
                    key={index}
                    ref={el => charsRef.current[index] = el}
                    // Massive text size for the hero section, now using font-serif
                    className="inline-block text-white text-7xl md:text-8xl lg:text-[10rem] font-serif font-black tracking-tighter leading-none"
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </div>
    );
};
