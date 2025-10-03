import SplitText from "./SplitText.jsx";
import TextType from "./TextType.jsx";

export default function Hero() {
    return (
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
    );
}
