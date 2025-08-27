import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Star, 
  Building, 
  Globe, 
  Search, 
  Megaphone 
} from "lucide-react";

const ServicesPreview = () => {
  const services = [
    {
      icon: MapPin,
      title: "Local SEO",
      description: "Rank in Google Maps & attract local leads with optimized local search strategies.",
      color: "text-gold"
    },
    {
      icon: Building,
      title: "Google Business Profile Optimization",
      description: "Keep your listing sharp & active with professional management and optimization.",
      color: "text-gold"
    },
    {
      icon: Star,
      title: "Reviews & Reputation",
      description: "Get 5-star reviews that win trust and drive more conversions from prospects.",
      color: "text-gold"
    },
    {
      icon: Globe,
      title: "Citation Building",
      description: "Consistent business listings across the web to boost your local authority.",
      color: "text-gold"
    },
    {
      icon: Search,
      title: "Website SEO",
      description: "Optimize your site for search & conversions with technical and content SEO.",
      color: "text-gold"
    },
    {
      icon: Megaphone,
      title: "Google Ads for Local",
      description: "Fast-track visibility with targeted ads that bring customers to your door.",
      color: "text-gold"
    }
  ];

  return (
    <section id="services" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What We Do <span className="text-gold">Best</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive local SEO services designed to get your business found, 
            trusted, and chosen by customers in your area.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="gradient-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-smooth group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-smooth">
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
              
              <div className="pt-4 border-t border-border">
                <div className="flex items-center text-gold text-sm font-semibold">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-smooth"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button variant="gold" size="lg" className="mr-4">
            See All Services
          </Button>
          <Button variant="gold-outline" size="lg">
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;