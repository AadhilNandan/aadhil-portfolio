import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated 3D Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[100px] animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px] animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Particle rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-neon-cyan/10 rounded-full animate-rotate-slow"></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-neon-purple/10 rounded-full animate-rotate-slow"
          style={{ animationDirection: "reverse", animationDuration: "30s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-orbitron font-bold mb-6">
            <span className="text-gradient-cyan">Hi, I'm Aadhil</span>
          </h1>
          <p className="text-2xl md:text-4xl font-orbitron font-light mb-4 text-foreground/90">
            Designer. Developer. Dream Builder.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Crafting immersive digital experiences where design meets
            cutting-edge technology
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="group neon-border bg-background/20 hover:bg-primary/20 text-primary font-orbitron text-lg px-8 py-6"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* === MODIFICATION START === */}
            <a
              href="/Aadhil_Nandan_Resume.pdf" // 1. Link to your file in /public
              download // 2. Add the download attribute
              target="_blank" // 3. (Optional) Opens in new tab, good practice
              rel="noopener noreferrer"
            >
              <Button
                asChild // 4. This is the key! Tells the component to be a child
                size="lg"
                variant="outline"
                className="neon-border-purple bg-background/20 hover:bg-secondary/20 text-secondary font-orbitron text-lg px-8 py-6"
              >
                <div> {/* 5. Wrap content in a div because it's now a child */}
                  <Download className="mr-2" />
                  Resume
                </div>
              </Button>
            </a>
            {/* === MODIFICATION END === */}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-cyan/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-neon-cyan rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;