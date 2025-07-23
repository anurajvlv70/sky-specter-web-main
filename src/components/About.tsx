import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Award, Users, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "ISO Certified Excellence",
      description: "Quality management systems ensuring the highest standards in all our technical services."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team",
      description: "Highly skilled professionals with extensive experience in technical solutions and implementation."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Innovative Solutions", 
      description: "Cutting-edge technology and innovative approaches to solve complex technical challenges."
    }
  ];

  const achievements = [
    "ISO 9001:2015 Certified",
    "15+ Years Industry Experience",
    "500+ Successful Projects",
    "100+ Satisfied Clients",
    "24/7 Technical Support",
    "Green Technology Focus"
  ];

  return (
    <section id="company" className="py-24 bg-gradient-subtle overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full tracking-wider animate-fade-in">
                  ABOUT OUR COMPANY
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-6 animate-scale-in leading-tight">
                Welcome to Sky Spectra Technical Service
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
                Sky Spectra Technical Service is a leading ISO-certified business conglomerate, 
                established with a vision to provide cutting-edge technical solutions. We have 
                built a reputed and trustworthy name in the industry through our commitment 
                to excellence and innovation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "400ms" }}>
                Our comprehensive range of services includes Building Management Systems (BMS), 
                Extra Low Voltage (ELV) solutions, IoT implementations, energy management, 
                and modern interior fit-out works. We pride ourselves on delivering solutions 
                that are not only technically advanced but also environmentally sustainable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: "600ms" }}>
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 group hover:bg-primary/5 p-3 rounded-lg transition-all duration-300 animate-fade-in" 
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">{achievement}</span>
                </div>
              ))}
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "1400ms" }}>
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 shadow-elegant group">
                Learn More About Us
                <div className="ml-2 w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Button>
            </div>
          </div>

          {/* Features Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                      {feature.icon}
                      <div className="absolute inset-0 bg-gradient-primary rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                        {feature.title}
                      </CardTitle>
                      <div className="w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-500"></div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;