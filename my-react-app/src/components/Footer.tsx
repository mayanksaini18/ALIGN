import { Mail, Phone, Briefcase } from "lucide-react";

const serviceLinks = [
  { href: "#services", text: "Brand Strategy" },
  { href: "#services", text: "Digital Marketing" },
  { href: "#services", text: "Web Development" },
  { href: "#services", text: "Creative Design" },
];

const companyLinks = [
  { href: "#about", text: "About Us" },
  { href: "#team", text: "Our Team" },
  { href: "#careers", text: "Careers" },
  { href: "#contact", text: "Contact" },
];

const socialLinks = [
  { href: "mailto:hello@align.agency", label: "Email", icon: <Mail className="w-5 h-5" /> },
  { href: "tel:+1234567890", label: "Phone", icon: <Phone className="w-5 h-5" /> },
  { href: "#", label: "LinkedIn", icon: <Briefcase className="w-5 h-5" /> },
];

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
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  aria-label={link.label}
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-smooth"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              {serviceLinks.map((link) => (
                <li key={link.text}>
                  <a href={link.href} className="hover:text-foreground transition-smooth">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              {companyLinks.map((link) => (
                <li key={link.text}>
                  <a href={link.href} className="hover:text-foreground transition-smooth">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/20 mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} A.L.I.G.N Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;