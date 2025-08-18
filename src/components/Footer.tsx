import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Snider's Plumbing & Drain Cleaning LLC</h3>
            <p className="text-primary-foreground/80 mb-4">
              Licensed, bonded, and insured plumbing services for Eugene and surrounding areas.
            </p>
            <div className="space-y-2 text-sm">
              <div>CCB #184589</div>
              <div>Family-owned and operated</div>
              <div>Mon-Fri: 8am-5pm</div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <a 
                href="tel:+15414610166"
                className="flex items-center gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(541) 461-0166</span>
              </a>
              <a 
                href="mailto:info@snidersplumbing.com"
                className="flex items-center gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@snidersplumbing.com</span>
              </a>
              <a 
                href="https://www.google.com/maps/place/Sniders+Plumbing/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span>Eugene, OR & Surrounding Areas</span>
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2 text-sm text-primary-foreground/90">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday - Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} Snider's Plumbing & Drain Cleaning LLC. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a 
              href="#privacy"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#terms"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;