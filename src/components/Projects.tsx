import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import libraryImage from "@/assets/library-project.jpg";
import goldmineImage from "@/assets/goldmine-app.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Online Library Attendance System",
      description: "Streamlined attendance management system handling 1000+ users, replacing offline registration with real-time tracking and automated reports. Features secure and scalable architecture.",
      image: libraryImage,
      technologies: ["Java", "MySQL", "Web Development", "System Design"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Goldmine Property App",
      description: "Android app for property exploration in Pune with detailed property information, location-based search, and intuitive user interface built with Flutter.",
      image: goldmineImage,
      technologies: ["Flutter", "Java", "Android Studio", "Firebase", "MySQL", "Dart"],
      github: "#",
      demo: "#",
      featured: true
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications focusing on user experience, scalability, and practical problem-solving
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={project.title} className="group overflow-hidden bg-gradient-card border-border hover:shadow-card transition-all duration-300 hover:scale-[1.02]">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader className="space-y-3">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-4">
                <Button variant="outline" size="sm" className="flex-1">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button size="sm" className="flex-1 bg-gradient-primary">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Experience Section */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center">
            Professional <span className="bg-gradient-accent bg-clip-text text-transparent">Experience</span>
          </h3>
          
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h4 className="text-xl font-bold text-foreground">Project Manager Intern</h4>
                  <p className="text-lg text-primary">Banao Technologies</p>
                </div>
                <Badge variant="outline" className="text-accent border-accent">July 2024 - Oct 2024</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Led remote teams on live social media marketing projects, enhancing client engagement and brand visibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Collaborated with clients to develop tailored strategies and ensure timely project delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Optimized content for search engines, improving online visibility and search rankings</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
