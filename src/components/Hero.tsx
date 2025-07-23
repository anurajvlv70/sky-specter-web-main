import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Modern corporate buildings" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Animated Welcome Text */}
          <div className="mb-8">
            <div className="text-lg md:text-xl text-primary-foreground/70 mb-2 animate-fade-in font-light tracking-wider">
              WELCOME TO
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight animate-scale-in">
              <span className="bg-gradient-to-r from-primary-glow via-primary-foreground to-primary-glow bg-clip-text text-transparent animate-pulse">
                Sky Spectra
              </span>
            </h1>
            <div className="relative inline-block">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary-foreground font-semibold tracking-wide animate-slide-in-right">
                Technical Service Solutions
              </h2>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-glow to-transparent animate-fade-in" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '500ms' }}>
            Sky Spectra Technical Service is a leading provider of innovative technical solutions, 
            specializing in BMS, ELV systems, IoT solutions, and comprehensive technical services 
            that drive your business forward.
          </p>

          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '800ms' }}>
            <Button 
              size="lg" 
              className="bg-primary-glow hover:bg-primary-glow/90 text-primary-foreground shadow-glow transition-all duration-300 transform hover:scale-105 hover:shadow-2xl px-8 py-4 text-lg font-semibold"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </div>

          {/* Enhanced Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary-foreground/20">
            {[
              { number: "15+", label: "Years Experience", delay: "1000ms" },
              { number: "500+", label: "Projects Completed", delay: "1200ms" },
              { number: "100+", label: "Happy Clients", delay: "1400ms" }
            ].map((stat, index) => (
              <div key={index} className="text-center group animate-fade-in" style={{ animationDelay: stat.delay }}>
                <div className="text-4xl md:text-5xl font-bold text-primary-glow mb-2 group-hover:scale-110 transition-transform duration-300 group-hover:text-primary-foreground">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80 group-hover:text-primary-foreground transition-colors duration-300 font-medium">
                  {stat.label}
                </div>
                <div className="w-12 h-0.5 bg-primary-glow mx-auto mt-2 group-hover:w-16 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;