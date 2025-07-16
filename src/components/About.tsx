import { Smartphone, Users, Trophy, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Flutter expertise with real-world application development"
    },
    {
      icon: Users,
      title: "Project Management",
      description: "Leading remote teams and client interaction experience"
    },
    {
      icon: Trophy,
      title: "Competitive Achievements",
      description: "Runner-up in DesignToDevelop at IIIT Vadodara techfest"
    },
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Computer Science Engineering with strong CGPA"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a dedicated Computer Science Engineering student at Dnyanshree Institute of Engineering 
                and Technology, with hands-on experience as a Project Manager Intern at Banao Technologies. 
                I specialize in mobile app development with Flutter and have successfully led remote teams.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My passion lies in creating user-friendly, scalable platforms that solve real-world problems. 
                From developing attendance management systems for 1000+ users to building property exploration 
                apps, I focus on delivering seamless digital experiences.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {["Java", "Flutter", "Apex (Salesforce)", "SQL", "HTML/CSS", "LWC", "MySQL", "Dart"].map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-secondary rounded-full text-sm font-medium border border-border hover:border-primary transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Leadership & Sports */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Leadership & Sports</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>• Girl Student Representative - T&P Cell</div>
                <div>• Lead Speaker - Communication Club</div>
                <div>• State-Level Mini Football Player</div>
                <div>• District Level Cricket & Badminton</div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={highlight.title} className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-float">
                    <highlight.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
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