import { useState } from "react";
import { Github, Linkedin, Mail, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// 1. Define the validation schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const Contact = () => {
  const [isSending, setIsSending] = useState(false);

  // 2. Define the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // 3. The new submit handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSending(true);

    // These variable names MUST match your EmailJS template
    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      message: values.message,
    };

    try {
      // Make sure your .env.local file has these VITE_ variables!
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success("Message sent! I'll get back to you soon.");
      form.reset(); // Clear the form after sending
    } catch (error) {
      console.error("FAILED...", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/AadhilNandan", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/aadhil-nandan",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:aadhilnandan.dev@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-orbitron font-bold text-center mb-16">
          <span className="text-gradient-cyan">Get In Touch</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-12">
            {/* 4. Use the new Form component */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-orbitron text-foreground/80">
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            className="bg-input border-border focus:border-neon-cyan focus:ring-neon-cyan/20"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage /> {/* Shows validation errors */}
                      </FormItem>
                    )}
                  />
                  {/* Email Field */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-orbitron text-foreground/80">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            className="bg-input border-border focus:border-neon-cyan focus:ring-neon-cyan/20"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage /> {/* Shows validation errors */}
                      </FormItem>
                    )}
                  />
                </div>

                {/* Message Field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-orbitron text-foreground/80">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about your project..."
                          rows={6}
                          className="bg-input border-border focus:border-neon-cyan focus:ring-neon-cyan/20 resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage /> {/* Shows validation errors */}
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full neon-border bg-background/20 hover:bg-primary/20 text-primary font-orbitron text-lg py-6"
                  disabled={isSending} // 5. Disable button while sending
                >
                  {isSending ? (
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  ) : null}
                  {isSending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label={social.label}
              >
                <div className="w-14 h-14 rounded-full border border-neon-cyan/30 flex items-center justify-center hover:bg-neon-cyan/10 hover:border-neon-cyan transition-all duration-300 group-hover:shadow-glow-cyan">
                  <social.icon className="h-6 w-6 text-neon-cyan" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Quote */}
      <div className="mt-24 text-center">
        <blockquote className="text-xl md:text-2xl font-orbitron font-light text-foreground/60 italic max-w-3xl mx-auto">
          "Design is not what it looks like — it's how it feels when it moves."
        </blockquote>
      </div>
    </section>
  );
};

export default Contact;