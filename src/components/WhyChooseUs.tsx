import { CheckCircle, Clock, DollarSign, Home, Users } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Fast Response",
    description: "Often same-day service when you need it most"
  },
  {
    icon: DollarSign,
    title: "Upfront Pricing",
    description: "No surprises - clear pricing before we start"
  },
  {
    icon: Home,
    title: "Trusted by Many",
    description: "Serving homeowners & rental managers across Eugene"
  },
  {
    icon: Users,
    title: "Family-Owned & Operated",
    description: "Proudly serving Eugene with personal care and attention"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Why Choose Snider's Plumbing?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing reliable, affordable plumbing services with the personal touch of a family business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-2">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>Licensed & Bonded</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>CCB #184589</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>Mon-Fri 8am-5pm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;