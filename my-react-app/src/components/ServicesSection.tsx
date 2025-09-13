import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Brand Strategy",
    description: "Comprehensive brand positioning, identity design, and messaging that resonates with your target audience.",
    icon: "🎯"
  },
  {
    title: "Digital Marketing",
    description: "Data-driven marketing campaigns across all digital channels to maximize reach and ROI.",
    icon: "📈"
  },
  {
    title: "Web Development",
    description: "Modern, responsive websites and applications built with cutting-edge technology.",
    icon: "💻"
  },
  {
    title: "Creative Design",
    description: "Stunning visual content that captures attention and communicates your brand story effectively.",
    icon: "🎨"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From brand strategy to digital execution, we deliver comprehensive solutions that drive growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="bg-gradient-card border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-card hover-scale group"
            >
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;