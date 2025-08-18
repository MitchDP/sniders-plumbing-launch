import { Phone, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/436d3fa7-0385-4dd5-a519-45722adeea67.png"
              alt="Snider's Plumbing & Drain Cleaning LLC Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Call Now Button - Always Visible */}
          <Button 
            className="btn-emergency text-sm sm:text-base"
            asChild
          >
            <a href="tel:+15414610166">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call Now</span>
              <span className="sm:hidden">(541) 461-0166</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;