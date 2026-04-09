import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandMarquee from "@/components/BrandMarquee";
import CategorySection from "@/components/CategorySection";
import HowItWorks from "@/components/HowItWorks";
import PaymentMethods from "@/components/PaymentMethods";
import TrustSection from "@/components/TrustSection";
import OurStory from "@/components/OurStory";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <BrandMarquee />
      <CategorySection />
      <HowItWorks />
      <PaymentMethods />
      <TrustSection />
      <OurStory />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
