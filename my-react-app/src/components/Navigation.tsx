import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
            A.L.I.G.N
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="story-link text-muted-foreground hover:text-foreground transition-smooth">
              Services
            </a>
            <a href="#about" className="story-link text-muted-foreground hover:text-foreground transition-smooth">
              About
            </a>
            <a href="#contact" className="story-link text-muted-foreground hover:text-foreground transition-smooth">
              Contact
            </a>
            <Button variant="hero" size="sm" className="hover-scale">
              Get Started
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;