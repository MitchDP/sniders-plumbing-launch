import { useState } from "react";
import { Phone, Clock, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Request Submitted!",
      description: "We'll contact you within the hour during business hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Get Your Free Estimate
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to get started? Fill out the form below or give us a call directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="(541) 123-4567"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="service">Service Needed</Label>
                  <Select name="service" required>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="drain-cleaning">Drain Cleaning</SelectItem>
                      <SelectItem value="leak-repair">Leak Repair</SelectItem>
                      <SelectItem value="water-heater">Water Heater Service</SelectItem>
                      <SelectItem value="installation">Fixture Installation</SelectItem>
                      <SelectItem value="pipe-replacement">Pipe Replacement</SelectItem>
                      <SelectItem value="emergency">Emergency Service</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your plumbing issue or what service you need..."
                    className="mt-1"
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary"
                >
                  {isSubmitting ? "Sending..." : "Send Request"}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-border">
              <h3 className="text-xl font-semibold text-primary mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">(541) 461-0166</p>
                    <p className="text-sm text-muted-foreground">Call or text anytime</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">info@snidersplumbing.com</p>
                    <p className="text-sm text-muted-foreground">Email us anytime</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Eugene, OR</p>
                    <p className="text-sm text-muted-foreground">& surrounding areas</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Mon-Sat: 7am-7pm</p>
                    <p className="text-sm text-muted-foreground">Sun: Emergency only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency CTA */}
            <div className="bg-emergency/5 border border-emergency/20 p-6 rounded-xl text-center">
              <h4 className="font-semibold text-emergency mb-2">Plumbing Emergency?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                We offer 24/7 emergency service for urgent plumbing issues.
              </p>
              <Button className="btn-emergency w-full" asChild>
                <a href="tel:+15414610166">
                  <Phone className="w-4 h-4" />
                  Call Now: (541) 461-0166
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;