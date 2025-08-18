import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    name: "Lisa K.",
    rating: 5,
    text: "Great service! Down to earth! Reliable and reasonable! Handles my home AND rentals."
  },
  {
    name: "Barbara P.",
    rating: 5,
    text: "Very courteous, prompt and professional. I've recommended them to several people."
  },
  {
    name: "Robert E.", 
    rating: 5,
    text: "Excellent service from a pleasant family business. Fixed more than required at no extra cost."
  },
  {
    name: "Adam T.",
    rating: 5,
    text: "On time, professional, very knowledgeable, and cheaper than most in Eugene."
  }
];

const Reviews = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - here's what Eugene homeowners and property managers are saying about our service.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              {/* Star Rating */}
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-muted-foreground mb-4 italic leading-relaxed">
                "{review.text}"
              </p>
              
              {/* Reviewer Name */}
              <p className="font-semibold text-primary">
                {review.name}
              </p>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center">
          <Button 
            variant="outline"
            className="text-primary border-primary hover:bg-primary hover:text-white"
            asChild
          >
            <a 
              href="https://www.google.com/maps/place/Sniders+Plumbing/"
              target="_blank"
              rel="noopener noreferrer"
            >
              See More Reviews on Google
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;