import React, { useEffect, useRef } from 'react';

const SplitText = ({ text }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current && window.gsap) {
            const chars = containerRef.current.children;
            window.gsap.from(chars, {
                y: 100,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: 'power3.out',
            });
        }
    }, []);

    return (
        <h1 ref={containerRef} className="text-8xl md:text-9xl font-serif font-black tracking-widest text-white" aria-label={text}>
            {text.split('').map((char, index) => (
                <span key={index} className="inline-block" style={{ color: char === 'A' ? '#FFC300' : 'white' }} aria-hidden="true">{char}</span>
            ))}
        </h1>
    );
};

export default SplitText;