import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can you respond?",
    answer: "We often provide same-day service during our business hours (Monday-Friday 8am-5pm). For non-urgent issues, we typically schedule within 1-2 business days."
  },
  {
    question: "What areas do you cover?", 
    answer: "We serve Eugene and the surrounding communities in Lane County. If you're not sure if we service your area, give us a call and we'll let you know."
  },
  {
    question: "Do you provide upfront pricing?",
    answer: "Absolutely. We believe in transparent pricing with no surprises. We'll provide a clear estimate before starting any work, so you know exactly what to expect."
  },
  {
    question: "Do you work on water heaters?",
    answer: "Yes, we handle all water heater services including installation, repair, maintenance, and replacement for both traditional tank and tankless water heaters."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, we are fully licensed (CCB #184589), bonded, and insured. This protects both you and us, and ensures all work meets Oregon building codes and standards."
  },
  {
    question: "Do you work on rental properties?",
    answer: "Yes! We work with many rental property owners and managers throughout Eugene. We understand the unique needs of rental properties and can work directly with tenants when needed."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, check, and all major credit cards. Payment is due upon completion of work unless other arrangements have been made in advance."
  }
];

const FAQ = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get quick answers to common questions about our plumbing services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;