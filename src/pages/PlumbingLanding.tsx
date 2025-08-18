import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reviews from "@/components/Reviews";
import ServiceArea from "@/components/ServiceArea";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const PlumbingLanding = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Reviews />
        <ServiceArea />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default PlumbingLanding;