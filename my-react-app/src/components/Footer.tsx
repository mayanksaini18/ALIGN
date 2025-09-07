const Footer = () => {
  return (
    <footer id="contact" className="bg-muted/10 border-t border-border/20 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              A.L.I.G.N
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transforming brands through strategic design, innovative marketing, and cutting-edge development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-smooth">
                📧
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-smooth">
                📱
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-smooth">
                💼
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-smooth">Brand Strategy</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Web Development</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Creative Design</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-smooth">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Our Team</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/20 mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 A.L.I.G.N Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;