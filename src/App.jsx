import './App.css'
import Footer from './pages/Footer'
import Header from './pages/Header'
import Body from './pages/Body'

import SplitText from "./pages/SplitText.jsx";
import TextType from "./pages/TextType.jsx";


function App() {

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
        <Header/>
        <div className="flex items-center justify-center p-6"  style={{ fontSize: '24px' }}>
            <SplitText  text="Hello, GSAP!" />
        </div>
        <div className="flex items-center justify-center p-6"  style={{ fontSize: '24px' , color:'red'}}>
            <TextType
                text={["Text typing effect", "for your websites", "Happy coding!"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
            />

        </div>


        <Body className="flex-1"/>
        <Footer/>
    </div>
  )
}

export default App
