import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans">
      <Header />
      <Hero />
      <Body className="flex-1" />
      <Footer />
    </div>
  );
}

export default App;
