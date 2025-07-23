import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const services = [
    "BMS & ELV Solutions",
    "IoT Solutions", 
    "EV Charging Solutions",
    "Home Automation",
    "Energy Metering",
    "Interior Fit-Out"
  ];

  const quickLinks = [
    "About Us",
    "Our Services", 
    "Projects",
    "Contact Us"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-glow rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg">SS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">SKY SPECTRA</span>
                <span className="text-xs opacity-80 leading-tight">Technical Service</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Leading provider of innovative technical solutions, specializing in BMS, ELV systems, 
              IoT solutions, and comprehensive technical services that drive your business forward.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-glow cursor-pointer transition-colors">
                <Facebook className="h-4 w-4" />
              </div>
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-glow cursor-pointer transition-colors">
                <Twitter className="h-4 w-4" />
              </div>
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-glow cursor-pointer transition-colors">
                <Linkedin className="h-4 w-4" />
              </div>
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-glow cursor-pointer transition-colors">
                <Instagram className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-primary-foreground/80 hover:text-primary-glow text-sm transition-colors cursor-pointer"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '')}`}
                    className="text-primary-foreground/80 hover:text-primary-glow text-sm transition-colors cursor-pointer"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-glow flex-shrink-0 mt-0.5" />
                <div className="text-primary-foreground/80 text-sm">
                  Business District<br />
                  Technology Hub<br />
                  City Center, State 12345
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-glow flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm">
                  +1 (555) 123-4567
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-glow flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm">
                  info@skyspectra.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
           <div className="text-primary-foreground/80 text-sm">
  © 2025 Sky Spectra Technical Service. All rights reserved. Designed and Maintained by{' '}
  <a
    href="https://www.weblysi.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="underline text-blue-500 hover:text-blue-600"
  >
    WebLysi
  </a>
</div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-primary-foreground/80 hover:text-primary-glow transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-primary-foreground/80 hover:text-primary-glow transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-primary-foreground/80 hover:text-primary-glow transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;