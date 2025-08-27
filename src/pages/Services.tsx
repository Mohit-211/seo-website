import Navbar from "../components/Navigation";
import Footer from "../components/Footer";
import PageBanner from "@/components/PageBanner";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Star,
  MapPin,
  Globe,
  Search,
  Megaphone,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Local SEO",
      desc: "Rank in Google Maps & attract local leads with optimized local search strategies.",
      icon: <MapPin size={28} className="text-[#FED045]" />,
      link: "/services/local-seo",
    },
    {
      title: "Google Business Profile Optimization",
      desc: "Keep your listing sharp & active with professional management and optimization.",
      icon: <Briefcase size={28} className="text-[#FED045]" />,
      link: "/services/google-business-profile",
    },
    {
      title: "Reviews & Reputation",
      desc: "Get 5-star reviews that win trust and drive more conversions from prospects.",
      icon: <Star size={28} className="text-[#FED045]" />,
      link: "/services/reviews-reputation",
    },
    {
      title: "Citation Building",
      desc: "Consistent business listings across the web to boost your local authority.",
      icon: <Globe size={28} className="text-[#FED045]" />,
      link: "/services/citation-building",
    },
    {
      title: "Website SEO",
      desc: "Optimize your site for search & conversions with technical and content SEO.",
      icon: <Search size={28} className="text-[#FED045]" />,
      link: "/services/website-seo",
    },
    {
      title: "Google Ads for Local",
      desc: "Fast-track visibility with targeted ads that bring customers to your door.",
      icon: <Megaphone size={28} className="text-[#FED045]" />,
      link: "/services/google-ads",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1E222A] text-white">
      <Navbar />

      {/* Hero Section */}
      <PageBanner
        title="Our Services"
        highlight="Services"
        subtitle="Comprehensive local SEO services designed to get your business found, trusted, and chosen by customers in your area."
      />

      {/* Services Grid */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-[#FED045] transition group"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold group-hover:text-[#FED045] transition">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-white/70">{service.desc}</p>
              <Link
                to={service.link}
                className="mt-4 inline-block text-sm font-medium text-[#FED045] hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
