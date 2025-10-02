import React, { useState, useEffect } from 'react';

const GsapLoader = ({ children }) => {
    const [gsapLoaded, setGsapLoaded] = useState(false);

    useEffect(() => {
        // Check if GSAP is already available
        if (window.gsap) {
            setGsapLoaded(true);
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
        script.async = true;
        script.onload = () => {
            setGsapLoaded(true);
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return gsapLoaded ? <>{children}</> : null; // Or a loading spinner
};

export default GsapLoader;