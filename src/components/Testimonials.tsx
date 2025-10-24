import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager at TechCorp",
    content:
      "Aadhil's design work is exceptional. He doesn't just create beautiful interfaces—he crafts experiences that users love.",
    avatar: "SC",
  },
  {
    name: "Marcus Rodriguez",
    role: "CEO at StartupXYZ",
    content:
      "Working with Aadhil was a game-changer. His ability to blend design and development is unmatched.",
    avatar: "MR",
  },
  {
    name: "Emily Watson",
    role: "Creative Director",
    content:
      "Aadhil brings a unique perspective to every project. His futuristic designs always push boundaries.",
    avatar: "EW",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-orbitron font-bold text-center mb-16">
          <span className="text-gradient-cyan">What People Say</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="h-10 w-10 text-neon-cyan opacity-50" />
              </div>

              {/* Content */}
              <p className="text-foreground/80 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center font-orbitron font-bold text-background">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-orbitron font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
