import {
  Code2,
  Palette,
  Boxes,
  Layers,
  BrainCircuit, // New Icon for AI
  Server, // New Icon for Backend
} from "lucide-react";
import profileImage from "@/assets/profile-aadhil.jpg";

// UPDATED skills array to reflect your new brand (AI, Backend, Frontend)
const skills = [
  { name: "AI & ML", icon: BrainCircuit, color: "cyan" },
  { name: "Python & Flask", icon: Server, color: "purple" },
  { name: "React & Frontend", icon: Code2, color: "cyan" },
  { name: "UI/UX Design", icon: Palette, color: "purple" },
  { name: "3D Design (Blender)", icon: Boxes, color: "cyan" },
  { name: "Design Systems", icon: Layers, color: "purple" },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-orbitron font-bold text-center mb-16">
          <span className="text-gradient-cyan">About Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50"></div>
            <div className="relative rounded-2xl overflow-hidden border-2 border-neon-cyan/30 group-hover:border-neon-cyan transition-all duration-300">
              <img
                src={profileImage}
                alt="Aadhil"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Bio - NOW UPDATED with your new narrative */}
          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-3xl font-orbitron font-bold mb-4 text-neon-cyan">
                Building Beyond the Syllabus
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                I’m Aadhil Nandan, a B.Tech Computer Science student at Jyothi
                Engineering College with an insatiable curiosity for
                technology. My passion isn't just learning; it's{" "}
                <strong>applying</strong>.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                While my foundation is in core computer science, my real
                education comes from building ambitious, real-world projects. I
                thrive on the entire technology spectrum—from architecting robust
                Python backends to exploring the new frontiers of artificial
                intelligence.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                My work is driven by a belief that great design isn't just
                what you see—it's how it feels when it moves.
                [cite: 15]
              </p>
            </div>
          </div>
        </div>

        {/* Skills Grid - Maps over the new skills array */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-card rounded-xl p-6 group hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`mb-4 ${
                  skill.color === "cyan"
                    ? "text-neon-cyan"
                    : "text-neon-purple"
                }`}
              >
                <skill.icon
                  size={40}
                  className="group-hover:scale-110 transition-transform"
                />
              </div>
              <h4 className="font-orbitron font-semibold text-lg">
                {skill.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;