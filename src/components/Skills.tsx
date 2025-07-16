import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "SQL", level: 85 },
        { name: "Dart", level: 80 },
        { name: "Apex (Salesforce)", level: 75 }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "Flutter", level: 88 },
        { name: "HTML/CSS", level: 92 },
        { name: "LWC (Salesforce)", level: 78 },
        { name: "Responsive Design", level: 85 }
      ]
    },
    {
      title: "Databases & Cloud",
      skills: [
        { name: "MySQL", level: 88 },
        { name: "Salesforce", level: 82 },
        { name: "Google Firebase", level: 85 },
        { name: "Database Design", level: 80 }
      ]
    },
    {
      title: "Tools & Management",
      skills: [
        { name: "Android Studio", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Git/GitHub", level: 88 },
        { name: "Project Management", level: 92 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Technical <span className="bg-gradient-accent bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise in mobile development, project management, and modern web technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={category.title} className="bg-gradient-card border-border hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-secondary" 
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Focus */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-primary border-none text-primary-foreground max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Key Achievements</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-2">
                  <h4 className="font-semibold">🏆 Runner-Up at DesignToDevelop</h4>
                  <p className="text-sm opacity-90">Secured 2nd place in Cerebro Techfest by IIIT Vadodara, Gujarat as part of Creative Crew team</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">👥 Leadership Roles</h4>
                  <p className="text-sm opacity-90">Girl Student Representative, Lead Speaker, Department Cultural Coordinator</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">🏃‍♀️ Sports Excellence</h4>
                  <p className="text-sm opacity-90">State-Level Mini Football, District Level Cricket & Badminton Player</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">📱 1000+ Users Impact</h4>
                  <p className="text-sm opacity-90">Successfully managed attendance system serving over 1000 students and staff</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;