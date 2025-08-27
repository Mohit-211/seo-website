import { Button } from "@/components/ui/button";
import teamPhoto from "@/assets/team-photo.jpg";

const CTASection = () => {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/90"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="w-full h-full bg-gradient-to-l from-gold/20 to-transparent"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Get More <span className="text-gold">Local Customers?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Stop losing customers to competitors who show up first in local search. 
              Book your free consultation today and discover how we can transform 
              your local online presence.
            </p>

            {/* Benefits List */}
            <div className="mb-8 text-left max-w-2xl">
              <div className="space-y-3">
                {[
                  "Free 30-minute local SEO audit & strategy session",
                  "Custom action plan tailored to your business",
                  "No obligation - see the opportunity before you commit",
                  "Same-day response within business hours"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-gold-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="gold" size="lg" className="text-lg px-8 py-4">
                Book Your Free Consultation
              </Button>
              <Button variant="gold-outline" size="lg" className="text-lg px-8 py-4">
                Call Now: (555) 123-4567
              </Button>
            </div>

            {/* Urgency Indicator */}
            <div className="mt-8 p-4 bg-gold/10 border border-gold/20 rounded-xl">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="w-3 h-3 bg-gold rounded-full animate-pulse mr-3"></div>
                <span className="text-sm text-foreground font-medium">
                  Only 3 consultation spots available this week
                </span>
              </div>
            </div>
          </div>
          
          {/* Team Image */}
          <div className="relative">
            <div className="gradient-card rounded-3xl p-8 shadow-elegant">
              <img
                src={teamPhoto}
                alt="Professional LocalSEOPro team ready to help your business grow"
                className="w-full h-auto rounded-2xl shadow-card"
              />
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -left-4 bg-gold text-gold-foreground rounded-2xl p-4 shadow-gold">
                <div className="text-sm font-semibold">Ready to Help</div>
                <div className="text-2xl font-bold">You Grow</div>
              </div>
              
              {/* Trust Badge */}
              <div className="absolute -bottom-4 -right-4 bg-content-bg text-content-foreground rounded-2xl p-4 shadow-card">
                <div className="text-xs text-muted-foreground">Trusted by</div>
                <div className="text-lg font-bold">500+ Businesses</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;