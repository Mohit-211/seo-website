import { Button } from "@/components/ui/button";
import mapPinIcon from "@/assets/map-pin-icon.jpg";
import reviewsStars from "@/assets/reviews-stars.jpg";
import seoGraph from "@/assets/seo-graph.jpg";

const WhyLocalSEO = () => {
  const stats = [
    {
      icon: mapPinIcon,
      title: "Google Maps drives 60% of local leads",
      description: "Local searches lead to 50% more store visits than non-local searches.",
      alt: "Google Maps location pin with radiating circles"
    },
    {
      icon: reviewsStars,
      title: "Businesses with reviews get 3x more calls",
      description: "91% of consumers trust online reviews as much as personal recommendations.",
      alt: "Five golden stars representing customer reviews"
    },
    {
      icon: seoGraph,
      title: "Local SEO brings ROI faster than traditional SEO",
      description: "See results in 30-90 days vs 6-12 months for traditional SEO.",
      alt: "Upward trending graph showing SEO growth"
    }
  ];

  return (
    <section className="py-20 bg-content-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-content-foreground mb-6">
            When someone searches <span className="text-gold">"near me,"</span><br />
            will they find you?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Local search is the battleground where your customers discover you. 
            Here's why winning this battle is critical for your business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto gradient-card rounded-2xl shadow-card flex items-center justify-center group-hover:shadow-elegant transition-smooth">
                  <img
                    src={stat.icon}
                    alt={stat.alt}
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-gold-foreground font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-content-foreground mb-4">
                {stat.title}
              </h3>
              
              <p className="text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="gradient-card rounded-3xl p-8 shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to dominate local search?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of local businesses that have transformed their online presence with our proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg">
                Get Your Free Local SEO Audit
              </Button>
              <Button variant="gold-outline" size="lg">
                See Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLocalSEO;