import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TrustSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Johnson Family Dentistry",
      location: "Toronto, ON",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      quote: "Our Google Maps visibility increased by 300% in just 3 months. We're now getting 15-20 new patient calls per week directly from local search.",
      result: "+300% Visibility"
    },
    {
      name: "Mike Rodriguez",
      business: "Elite Plumbing Services",
      location: "Mumbai, India",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "LocalSEOPro transformed our online presence. We went from invisible to the #1 plumber in our area. Revenue is up 250% this year.",
      result: "+250% Revenue"
    },
    {
      name: "Jennifer Chen",
      business: "Bloom Real Estate",
      location: "Vancouver, BC",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      quote: "The team's expertise in local SEO is unmatched. Our listings now appear in the top 3 for all our target neighborhoods.",
      result: "Top 3 Rankings"
    }
  ];

  const industries = [
    { name: "Healthcare", logo: "🏥" },
    { name: "Legal Services", logo: "⚖️" },
    { name: "Real Estate", logo: "🏠" },
    { name: "Home Services", logo: "🔧" },
    { name: "Restaurants", logo: "🍽️" },
    { name: "Fitness", logo: "💪" },
    { name: "Beauty & Spa", logo: "✨" },
    { name: "Automotive", logo: "🚗" }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-content-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-content-foreground mb-6">
            Results That <span className="text-gold">Speak</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what local business owners 
            are saying about their transformation with LocalSEOPro.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="gradient-card rounded-3xl p-8 lg:p-12 shadow-elegant relative">
            <Quote className="w-12 h-12 text-gold/30 absolute top-6 left-6" />
            
            <div className="text-center">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-4 border-gold/20"
              />
              
              <blockquote className="text-xl lg:text-2xl text-foreground mb-6 italic leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              
              <div className="mb-4">
                <div className="text-lg font-bold text-foreground">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-muted-foreground">
                  {testimonials[currentTestimonial].business} • {testimonials[currentTestimonial].location}
                </div>
              </div>
              
              <div className="inline-block bg-gold text-gold-foreground px-4 py-2 rounded-full font-semibold">
                {testimonials[currentTestimonial].result}
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background hover:bg-gold text-foreground hover:text-gold-foreground rounded-full flex items-center justify-center transition-smooth shadow-card"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background hover:bg-gold text-foreground hover:text-gold-foreground rounded-full flex items-center justify-center transition-smooth shadow-card"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-smooth ${
                    index === currentTestimonial ? "bg-gold" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Industries Served */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-content-foreground mb-8">
            Industries We Serve
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="gradient-card rounded-xl p-4 text-center hover:shadow-card transition-smooth group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-smooth">
                  {industry.logo}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {industry.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;