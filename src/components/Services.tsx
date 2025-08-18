import { ArrowRight, Droplets, Wrench, Zap, Toilet, Settings, Trash2, Camera, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Droplets,
    title: "Drain Cleaning",
    description: "Professional drain cleaning and unclogging services"
  },
  {
    icon: Droplets,
    title: "Leak Repair", 
    description: "Fast leak detection and repair for pipes and fixtures"
  },
  {
    icon: Zap,
    title: "Water Heater Service",
    description: "Installation, repair, and maintenance of water heaters"
  },
  {
    icon: Toilet,
    title: "Faucet & Toilet Installs",
    description: "Professional installation of faucets and toilets"
  },
  {
    icon: Settings,
    title: "Pipe Replacement",
    description: "Full and partial pipe replacement services"
  },
  {
    icon: Trash2,
    title: "Garbage Disposal",
    description: "Installation and repair of garbage disposal units"
  },
  {
    icon: Camera,
    title: "Sewer Line Inspection",
    description: "Camera inspection to diagnose sewer line issues"
  },
  {
    icon: Phone,
    title: "Emergency Service",
    description: "24/7 emergency plumbing services when you need us most"
  }
];

const Services = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Professional Plumbing Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From routine maintenance to emergency repairs, we handle all your plumbing needs with expertise and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-lg font-semibold text-primary mb-2">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <Button 
                variant="outline"
                size="sm"
                onClick={scrollToContact}
                className="w-full text-primary border-primary hover:bg-primary hover:text-white"
              >
                Request Service
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;