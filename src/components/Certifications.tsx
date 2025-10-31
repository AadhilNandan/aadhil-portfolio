import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import certificationsData from "../data/certifications.json";

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);

  const certificationsToShow = showAll
    ? certificationsData
    : certificationsData.slice(0, 3);

  return (
    <section id="certifications" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-orbitron font-bold text-center mb-16">
          <span className="text-gradient-cyan">Certifications</span>
        </h2>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certificationsToShow.map((cert, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div
                  className="group relative glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80"></div>
                  </div>

                  <div className="p-6 relative flex flex-col h-[calc(100%-16rem)]">
                    <h3 className="text-2xl font-orbitron font-bold mb-3 text-neon-cyan">
                      {cert.name}
                    </h3>
                    <p className="text-foreground/70 mb-4 flex-grow line-clamp-3">
                      {cert.description}
                    </p>
                    <Button
                      variant="outline"
                      className="w-full neon-border group-hover:bg-primary/10 mt-auto"
                      tabIndex={-1}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </div>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10"></div>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="glass-card max-w-2xl border-neon-cyan/20">
                <DialogHeader>
                  <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <DialogTitle className="text-3xl font-orbitron font-bold text-neon-cyan">
                    {cert.name}
                  </DialogTitle>
                  <DialogDescription className="text-foreground/80 text-lg pt-2">
                    {cert.description}
                  </DialogDescription>
                </DialogHeader>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4"
                >
                  <Button
                    variant="outline"
                    className="w-full neon-border group-hover:bg-primary/10 text-lg py-6"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View on LinkedIn
                  </Button>
                </a>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {certificationsData.length > 3 && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="neon-border group-hover:bg-primary/10 text-lg py-6 px-8"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "See Less" : "See More"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
