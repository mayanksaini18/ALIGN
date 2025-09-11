import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { href: "#services", text: "Services" },
  { href: "#about", text: "About" },
  { href: "#contact", text: "Contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={clsx(
      "fixed top-0 w-full z-50 transition-all duration-300",
      {
        'bg-background/95 backdrop-blur-md border-b border-border/20 shadow-lg': isScrolled || isMenuOpen,
        'bg-transparent': !isScrolled && !isMenuOpen
      }
    )}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
            A.L.I.G.N
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.text} href={link.href} className="story-link text-muted-foreground hover:text-foreground transition-smooth">
                {link.text}
              </a>
            ))}
            <Button variant="hero" size="sm" className="hover-scale">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button onClick={toggleMenu} variant="ghost" size="icon">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col items-center space-y-4">
              {navLinks.map((link) => (
                <a key={link.text} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg text-muted-foreground hover:text-foreground transition-smooth">
                  {link.text}
                </a>
              ))}
              <Button variant="hero" size="lg" className="w-full mt-4">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;