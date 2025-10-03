import React, {useEffect, useRef, useState} from "react";

const TextType = ({ text, typingSpeed = 75, pauseDuration = 1500, showCursor = true, cursorCharacter = '|', deletingSpeed = 30 }) => {
    const textRef = useRef(null);
    const cursorRef = useRef(null);
    const [currentText, setCurrentText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [loopNum, setLoopNum] = useState(0);

    // GSAP animation for the cursor blink
    useEffect(() => {
        if (cursorRef.current && showCursor && window.gsap) { // Use window.gsap directly
            window.gsap.to(cursorRef.current, {
                opacity: 0,
                repeat: -1,
                yoyo: true,
                duration: 0.7,
                ease: 'power2.inOut',
            });
        }
    }, [showCursor]);

    // Core Typing/Deleting Logic
    useEffect(() => {
        const fullTxt = text[loopNum % text.length];
        let timer;

        const handleTyping = () => {
            if (isTyping) {
                setCurrentText(prev => fullTxt.substring(0, prev.length + 1));
                if (currentText === fullTxt) {
                    setIsTyping(false);
                    timer = setTimeout(handleTyping, pauseDuration);
                } else {
                    timer = setTimeout(handleTyping, typingSpeed);
                }
            } else {
                setCurrentText(prev => fullTxt.substring(0, prev.length - 1));
                if (currentText === '') {
                    setIsTyping(true);
                    setLoopNum(prev => prev + 1);
                    timer = setTimeout(handleTyping, 500);
                } else {
                    timer = setTimeout(handleTyping, deletingSpeed);
                }
            }
        };

        timer = setTimeout(handleTyping, isTyping ? typingSpeed : deletingSpeed);

        return () => clearTimeout(timer);
    }, [loopNum, isTyping, typingSpeed, deletingSpeed, pauseDuration, text, currentText]);

    return (
        <span className="font-serif inline-flex items-center justify-center">
            <span ref={textRef} className="text-white text-3xl font-light tracking-wide md:text-4xl">
                {currentText}
            </span>
            {showCursor && (
                <span ref={cursorRef} className="text-align-gold text-3xl ml-1 font-extralight md:text-4xl">
                    {cursorCharacter}
                </span>
            )}
        </span>
    );
};

export default TextType;
