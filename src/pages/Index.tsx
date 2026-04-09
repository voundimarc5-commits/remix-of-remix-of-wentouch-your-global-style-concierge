import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandMarquee from "@/components/BrandMarquee";
import SocialProof from "@/components/SocialProof";
import HowItWorks from "@/components/HowItWorks";
import TrustSection from "@/components/TrustSection";
import LifestyleSection from "@/components/LifestyleSection";
import ServiceDetails from "@/components/ServiceDetails";
import OurStory from "@/components/OurStory";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <BrandMarquee />
      <SocialProof />
      <HowItWorks />
      <TrustSection />
      <LifestyleSection />
      <ServiceDetails />
      <OurStory />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
