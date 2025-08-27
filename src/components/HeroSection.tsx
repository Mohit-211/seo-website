import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-google-maps.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen gradient-hero flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Get Found. <br />
              Get Calls. <br />
              <span className="text-gold">Grow Local.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              We help local businesses dominate Google Maps & local search results 
              with proven Local SEO strategies that drive real customers to your door.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="gold" size="lg" className="text-lg px-8 py-4">
                Book a Free Consultation
              </Button>
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Learn How It Works
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">500+</div>
                <div className="text-sm text-muted-foreground">Local Businesses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">98%</div>
                <div className="text-sm text-muted-foreground">Client Retention</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">3x</div>
                <div className="text-sm text-muted-foreground">Average ROI</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="gradient-card rounded-3xl p-8 shadow-elegant">
              <img
                src={heroImage}
                alt="Google Maps local search results showing multiple business locations"
                className="w-full h-auto rounded-2xl shadow-card"
              />
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-gold text-gold-foreground rounded-2xl p-4 shadow-gold">
                <div className="text-2xl font-bold">+245%</div>
                <div className="text-sm">Local Visibility</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-content-bg text-content-foreground rounded-2xl p-4 shadow-card">
                <div className="text-2xl font-bold">$50K+</div>
                <div className="text-sm">Revenue Added</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;