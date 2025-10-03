import TextType from "./TextType.jsx";

export default function TextTypeSection() {
    return (
        <div className="flex items-center justify-center p-6" style={{ fontSize: '24px', color: 'red' }}>
            <TextType
                text={["Text typing effect", "for your websites", "Happy coding!"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
            />
        </div>
    );
}
