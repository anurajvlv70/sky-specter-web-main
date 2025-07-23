import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Import service icons and avatars
import bmsElvIcon from "@/assets/bms-elv-icon.png";
import iotIcon from "@/assets/iot-solutions-icon.png";
import evChargingIcon from "@/assets/ev-charging-icon.png";
import homeAutomationIcon from "@/assets/home-automation-icon.png";
import energyMeteringIcon from "@/assets/energy-metering-icon.png";
import interiorFitoutIcon from "@/assets/interior-fitout-icon.png";

// Import avatars
import bmsAvatar from "@/assets/bms-avatar.jpg";
import iotAvatar from "@/assets/iot-avatar.jpg";
import evAvatar from "@/assets/ev-avatar.jpg";
import homeAvatar from "@/assets/home-avatar.jpg";
import energyAvatar from "@/assets/energy-avatar.jpg";
import interiorAvatar from "@/assets/interior-avatar.jpg";

const Services = () => {
  const services = [
    {
      icon: bmsElvIcon,
      avatar: bmsAvatar,
      title: "BMS, ELV Solutions & Installation",
      description: "Comprehensive Building Management Systems and Extra Low Voltage solutions for modern infrastructure.",
      features: ["Smart Building Controls", "Security Systems", "Fire Alarm Systems", "CCTV Integration"]
    },
    {
      icon: iotIcon,
      avatar: iotAvatar,
      title: "IoT Solutions",
      description: "Internet of Things solutions that connect and optimize your business operations through smart technology.",
      features: ["Device Connectivity", "Data Analytics", "Remote Monitoring", "Smart Automation"]
    },
    {
      icon: evChargingIcon,
      avatar: evAvatar,
      title: "EV Charging Solutions",
      description: "Advanced electric vehicle charging infrastructure for residential and commercial applications.",
      features: ["Fast Charging Stations", "Smart Grid Integration", "Payment Systems", "Remote Management"]
    },
    {
      icon: homeAutomationIcon,
      avatar: homeAvatar,
      title: "Home Automation",
      description: "Transform your living space with intelligent home automation systems for comfort and efficiency.",
      features: ["Smart Lighting", "Climate Control", "Security Integration", "Voice Control"]
    },
    {
      icon: energyMeteringIcon,
      avatar: energyAvatar,
      title: "Energy Metering & Dashboard",
      description: "Advanced energy monitoring solutions with real-time dashboards for optimal energy management.",
      features: ["Real-time Monitoring", "Energy Analytics", "Cost Optimization", "Sustainability Reports"]
    },
    {
      icon: interiorFitoutIcon,
      avatar: interiorAvatar,
      title: "Interior Fit-Out Works",
      description: "Professional interior design and fit-out services for commercial and residential spaces.",
      features: ["Space Planning", "Modern Design", "Quality Materials", "Project Management"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Technical Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive technical solutions tailored to meet your specific needs 
            with cutting-edge technology and expert implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border-border/50 bg-card/80 backdrop-blur animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4 relative">
                {/* Avatar Background */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <img 
                    src={service.avatar} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Icon */}
                <div className="relative z-10 w-16 h-16 mx-auto mb-4 p-3 bg-gradient-primary rounded-xl shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className="w-full h-full object-contain filter brightness-0 invert group-hover:brightness-150 transition-all duration-300"
                  />
                </div>
                
                {/* Avatar Circle */}
                <div className="relative z-10 w-12 h-12 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-md">
                  <img 
                    src={service.avatar} 
                    alt={`${service.title} specialist`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <CardTitle className="relative z-10 text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4 relative z-10">
                <CardDescription className="text-muted-foreground text-center group-hover:text-foreground transition-colors duration-300">
                  {service.description}
                </CardDescription>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-all duration-300 transform group-hover:translate-x-1"
                      style={{ transitionDelay: `${featureIndex * 50}ms` }}
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0 group-hover:scale-150 group-hover:bg-primary-glow transition-all duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* <div className="pt-4">
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 group-hover:shadow-glow"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="text-center mt-16">
          <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-elegant">
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Services;