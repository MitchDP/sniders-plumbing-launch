import { Phone, MessageSquare, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="hero-gradient section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            Reliable Plumbing Service You Can Count On
          </h1>
          
          {/* Subtext */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Fast, affordable plumbing for homes and rentals across Eugene and surrounding areas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              className="btn-emergency text-lg px-8 py-4"
              asChild
            >
              <a href="tel:+15414610166">
                <Phone className="w-5 h-5" />
                Call Now: (541) 461-0166
              </a>
            </Button>
            
            <Button 
              className="btn-secondary text-lg px-8 py-4"
              asChild
            >
              <a href="sms:+15414610166">
                <MessageSquare className="w-5 h-5" />
                Text Us
              </a>
            </Button>
            
            <Button 
              className="btn-secondary text-lg px-8 py-4"
              asChild
            >
              <a 
                href="https://www.google.com/maps/place/Sniders+Plumbing/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
            </Button>
          </div>

          {/* Quick Info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>24/7 Emergency Service</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-success rounded-full"></span>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-success rounded-full"></span>
              <span>Family Owned & Operated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;