import React, { useState, useEffect } from 'react';

const TextType = ({
    text,
    typingSpeed = 75,
    deletingSpeed = 40,
    pauseDuration = 1800,
    showCursor = true,
    cursorCharacter = "_",
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % text.length;
            const fullText = text[i];

            setDisplayedText(
                isDeleting
                    ? fullText.substring(0, displayedText.length - 1)
                    : fullText.substring(0, displayedText.length + 1)
            );

            if (!isDeleting && displayedText === fullText) {
                setTimeout(() => setIsDeleting(true), pauseDuration);
            } else if (isDeleting && displayedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const typingTimeout = setTimeout(
            handleTyping,
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(typingTimeout);
    }, [displayedText, isDeleting, loopNum, text, typingSpeed, deletingSpeed, pauseDuration]);

    return (
        <span className="text-xl md:text-2xl text-gray-300 font-medium">
            {displayedText}
            {showCursor && <span className="animate-pulse text-align-gold">{cursorCharacter}</span>}
        </span>
    );
};

export default TextType;