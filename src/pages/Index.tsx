import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Skills />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border/30 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground font-orbitron">
            © 2025 Aadhil. Crafted with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
