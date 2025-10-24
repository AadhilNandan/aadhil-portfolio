import { ExternalLink, Github, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- Import your Dialog components ---
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// --- Project assets ---
import astralensImage from "@/assets/astralens-project.png";
import novaImage from "@/assets/nova-project.jpg";
import portfolioImage from "@/assets/portfolio-project.jpg";

const projects = [
  {
    title: "AstraLens — NASA Space Apps 2025",
    description:
      "As Team Lead, I architected this full-stack platform, building a Python/Flask backend and a 'hallucination-free' RAG/Gemini AI to serve NASA's gigabyte-sized lunar datasets.",
    image: astralensImage,
    tags: ["Python", "Flask", "Google Gemini API", "RAG", "Team Lead"],
    link: {
      text: "View Live Platform",
      href: "https://astralens.netlify.app",
      icon: Rocket,
    },
  },
  {
    title: "Project: Nova (AI Assistant)",
    description:
      "An ongoing R&D project to build a comprehensive, Jarvis-like AI ecosystem. My personal sandbox for pioneering next-gen human-computer interaction and system architecture.",
    image: novaImage,
    tags: ["AI/ML", "Python", "System Architecture", "NLP"],
    link: {
      text: "View on GitHub",
      href: "https://github.com/AadhilNandan/Nova-AI-Assistant", 
      icon: Github,
    },
  },
  {
    title: "Personal Portfolio (This Site)",
    description:
      "My own digital identity, built from scratch with React, Tailwind CSS, and Framer Motion to create a clean, cinematic, and interactive user experience.",
    image: portfolioImage,
    tags: ["React", "Tailwind CSS", "Framer Motion", "UI/UX", "Figma"],
    link: {
      text: "View Source Code",
      href: "https://github.com/AadhilNandan/aadhil-portfolio", 
      icon: Github,
    },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-orbitron font-bold text-center mb-16">
          <span className="text-gradient-cyan">Featured Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            // --- 1. Wrap each card in the Dialog component ---
            <Dialog key={project.title}>
              <DialogTrigger asChild>
                {/* This is your original card, now acting as the trigger */}
                <div
                  className="group relative glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Image with overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 relative flex flex-col h-[calc(100%-16rem)]">
                    <h3 className="text-2xl font-orbitron font-bold mb-3 text-neon-cyan">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 mb-4 flex-grow line-clamp-3">
                      {/* Added line-clamp for consistent card height */}
                      {project.description}
                    </p>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => ( // Show 3 tags
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-orbitron border border-neon-purple/30 rounded-full text-neon-purple"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* CTA Button (now just for show, modal opens) */}
                    <Button
                      variant="outline"
                      className="w-full neon-border group-hover:bg-primary/10 mt-auto"
                      tabIndex={-1} // Prevents tabbing to this button
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10"></div>
                  </div>
                </div>
              </DialogTrigger>

              {/* --- 2. Define the Modal Content --- */}
              <DialogContent className="glass-card max-w-2xl border-neon-cyan/20">
                <DialogHeader>
                  <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <DialogTitle className="text-3xl font-orbitron font-bold text-neon-cyan">
                    {project.title}
                  </DialogTitle>
                  <DialogDescription className="text-foreground/80 text-lg pt-2">
                    {project.description}
                  </DialogDescription>
                </DialogHeader>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 py-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-orbitron border border-neon-purple/30 rounded-full text-neon-purple"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* External Link Button */}
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4"
                >
                  <Button
                    variant="outline"
                    className="w-full neon-border group-hover:bg-primary/10 text-lg py-6"
                  >
                    <project.link.icon className="mr-2 h-4 w-4" />
                    {project.link.text}
                  </Button>
                </a>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;