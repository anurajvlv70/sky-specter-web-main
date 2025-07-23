import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Our Location",
      details: "Business District, Technology Hub\nCity Center, State 12345"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Number",
      details: "+1 (555) 123-4567\n+1 (555) 987-6543"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Address",
      details: "info@skyspectra.com\nsupport@skyspectra.com"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: "Mon - Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 4:00 PM"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business with our technical solutions? 
            Contact us today to discuss your project requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-8">
                We're here to help you with all your technical service needs. 
                Reach out to us through any of the following channels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border/50">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {info.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground whitespace-pre-line">{info.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-elegant border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Stay connected with the us! Join us on WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground font-medium">
                      First Name
                    </Label>
                    <Input 
                      id="firstName" 
                      placeholder="Enter your first name"
                      className="border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground font-medium">
                      Last Name
                    </Label>
                    <Input 
                      id="lastName" 
                      placeholder="Enter your last name"
                      className="border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email"
                    className="border-border/50 focus:border-primary transition-colors"
                  />
                </div><br></br>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium">
                    Phone Number
                  </Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="Enter your phone number"
                    className="border-border/50 focus:border-primary transition-colors"
                  />
                </div><br></br>

                {/* <div className="space-y-2">
                  <Label htmlFor="service" className="text-foreground font-medium">
                    Service of Interest
                  </Label>
                  <Input 
                    id="service" 
                    placeholder="e.g., BMS Installation, IoT Solutions"
                    className="border-border/50 focus:border-primary transition-colors"
                  />
                </div> */}

                {/* <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Message
                  </Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project requirements..."
                    rows={4}
                    className="border-border/50 focus:border-primary transition-colors"
                  />
                </div> */}

               <a
  href="https://wa.me/919072955013"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full"
>
  <Button className="w-full bg-primary hover:bg-primary/90 shadow-elegant">
    Send Message
  </Button>
</a>

              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;