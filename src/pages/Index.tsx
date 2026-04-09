import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofSection from "@/components/ProofSection";
import BrandMarquee from "@/components/BrandMarquee";
import HowItWorks from "@/components/HowItWorks";
import LifestyleSection from "@/components/LifestyleSection";
import CategorySection from "@/components/CategorySection";
import PaymentMethods from "@/components/PaymentMethods";
import TrustSection from "@/components/TrustSection";
import OurStory from "@/components/OurStory";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyBar from "@/components/StickyBar";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      <ScrollReveal>
        <ProofSection />
      </ScrollReveal>

      <ScrollReveal>
        <BrandMarquee />
      </ScrollReveal>

      <ScrollReveal>
        <HowItWorks />
      </ScrollReveal>

      <LifestyleSection />

      <ScrollReveal>
        <CategorySection />
      </ScrollReveal>

      <ScrollReveal>
        <PaymentMethods />
      </ScrollReveal>

      <ScrollReveal>
        <TrustSection />
      </ScrollReveal>

      <ScrollReveal>
        <OurStory />
      </ScrollReveal>

      <ScrollReveal>
        <FinalCTA />
      </ScrollReveal>

      <Footer />
      <WhatsAppButton />
      <StickyBar />
    </div>
  );
};

export default Index;
