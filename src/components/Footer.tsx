import { Linkedin, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Blog", href: "#blog" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Section - Logo & Tagline */}
          <div className="space-y-6">
            <div>
              <div className="text-2xl font-bold text-foreground mb-3">
                LocalSEO<span className="text-gold">Pro</span>
              </div>
              <p className="text-muted-foreground">
                Helping businesses dominate Google Maps & local search.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-secondary hover:bg-gold rounded-full flex items-center justify-center text-foreground hover:text-gold-foreground transition-smooth"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Section - Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-gold transition-smooth"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Section - Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Contact Info</h4>
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <div>
                  <div className="text-foreground font-medium">(555) 123-4567</div>
                  <div className="text-sm text-muted-foreground">Main Line</div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <div>
                  <div className="text-foreground">hello@localseopro.com</div>
                  <div className="text-sm text-muted-foreground">Get in Touch</div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-gold flex-shrink-0 flex items-center justify-center">
                  📱
                </div>
                <div>
                  <div className="text-foreground">WhatsApp: +1 (555) 123-4567</div>
                  <div className="text-sm text-muted-foreground">Quick Support</div>
                </div>
              </div>

              {/* Offices */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-foreground font-medium">Canada Office</div>
                    <div className="text-sm text-muted-foreground">
                      123 Business St, Suite 500<br />
                      Toronto, ON M5V 3A8
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-foreground font-medium">India Office</div>
                    <div className="text-sm text-muted-foreground">
                      Tower B, Business Park<br />
                      Mumbai, Maharashtra 400001
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} LocalSEOPro. All rights reserved. 
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-gold transition-smooth">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-gold transition-smooth">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;