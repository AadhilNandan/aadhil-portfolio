import { Download, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = [
  { name: "UI/UX Design (Figma)", level: 95 },
  { name: "React, JS & Tailwind CSS", level: 90 },
  { name: "Python", level: 90 },
  { name: "Design Systems", level: 92 },
  { name: "3D Modeling (Blender)", level: 85 },
  { name: "Prompt Engineering", level: 80 },
  { name: "Video & Photo Editing", level: 75 },
  { name: "Animation & Motion", level: 70 },
];

const timeline = [
  {
    type: "education",
    title: "Computer Science Engineering",
    institution: "Jyothi Engineering College, Thrissur",
    period: "2025-Present",
  },
  {
    type: "work",
    title: "Freelancer",
    institution: "AD",
    period: "2022 - Present",
  },
];
// ... (rest of the component) ...

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-orbitron font-bold text-center mb-16">
          <span className="text-gradient-cyan">Skills & Experience</span>
        </h2>

        <div className="max-w-6xl mx-auto">
          {/* Skills Bars */}
          <div className="glass-card rounded-2xl p-8 md:p-12 mb-16">
            <h3 className="text-3xl font-orbitron font-bold mb-8 text-neon-cyan">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-orbitron text-foreground/90">
                      {skill.name}
                    </span>
                    <span className="text-neon-purple font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full transition-all duration-1000 ease-out shadow-glow-cyan"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1}s`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {timeline.map((item, index) => (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 border border-neon-cyan">
                    {item.type === "education" ? (
                      <GraduationCap className="h-6 w-6 text-neon-cyan" />
                    ) : (
                      <Briefcase className="h-6 w-6 text-neon-purple" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-orbitron font-bold mb-1">
                      {item.title}
                    </h4>
                    <p className="text-foreground/70 mb-2">
                      {item.institution}
                    </p>
                    <span className="text-sm text-neon-cyan">{item.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Resume Download */}
          <div className="text-center">
            <a
              href="/Aadhil_Nandan_Resume.pdf" 
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                asChild 
                size="lg"
                className="neon-border-purple bg-background/20 hover:bg-secondary/20 text-secondary font-orbitron text-lg px-12 py-6"
              >
                <div> 
                  <Download className="mr-2" />
                  Download Full Resume
                </div>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;