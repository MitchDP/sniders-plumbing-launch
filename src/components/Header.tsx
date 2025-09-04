import { Phone, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container-custom">
        <div className="flex justify-center py-6">
          {/* Centered Logo */}
          <img 
            src="/lovable-uploads/436d3fa7-0385-4dd5-a519-45722adeea67.png"
            alt="Snider's Plumbing & Drain Cleaning LLC Logo"
            className="h-16 w-auto object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;