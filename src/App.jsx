import './App.css';
// import Header from './components/Header'; // This will be fixed in the next step
import Footer from './components/Footer';
import Body from './components/Body';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans">
      {/* <Header /> */}
      <Hero />
      <Body className="flex-1" />
      <Footer />
    </div>
  );
}

export default App;
