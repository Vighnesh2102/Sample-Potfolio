import { Github, Linkedin, Mail, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Let's discuss opportunities",
      value: "sakshikiranbhosale@gmail.com",
      href: "mailto:sakshikiranbhosale@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Available for consultations",
      value: "+91 7350530055",
      href: "tel:+917350530055"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect professionally",
      value: "linkedin.com/in/sakshi-bhosale-b94387214",
      href: "https://www.linkedin.com/in/sakshi-bhosale-b94387214"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Check out my projects",
      value: "github.com/sakshi",
      href: "https://github.com"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can work together 
            to create innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm actively seeking opportunities in mobile app development, project management, 
                and software engineering. Whether you have an internship opportunity, project 
                collaboration, or just want to connect professionally, I'd love to hear from you.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactMethods.map((method) => (
                <Card key={method.title} className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-border">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-float">
                        <method.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-foreground">{method.title}</h4>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                        <a 
                          href={method.href}
                          className="text-sm text-primary hover:text-primary-glow transition-colors font-medium"
                        >
                          {method.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Availability */}
            <Card className="bg-gradient-accent border-none text-accent-foreground">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-background/20 rounded-lg flex items-center justify-center">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Graduating May 2025</h4>
                    <p className="text-sm opacity-90">
                      Seeking full-time opportunities in software development and project management!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    First Name
                  </label>
                  <Input placeholder="John" className="bg-secondary border-border" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Last Name
                  </label>
                  <Input placeholder="Doe" className="bg-secondary border-border" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input 
                  type="email" 
                  placeholder="john.doe@example.com" 
                  className="bg-secondary border-border" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Subject
                </label>
                <Input 
                  placeholder="Project Collaboration" 
                  className="bg-secondary border-border" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell me about your project or ideas..."
                  rows={5}
                  className="bg-secondary border-border resize-none"
                />
              </div>

              <Button 
                size="lg" 
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;