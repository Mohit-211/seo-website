import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhyLocalSEO from "@/components/WhyLocalSEO";
import ServicesPreview from "@/components/ServicesPreview";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <WhyLocalSEO />
        <ServicesPreview />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;