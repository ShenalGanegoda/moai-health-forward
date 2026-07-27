import { useState } from "react";
import { Linkedin, Mail } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { toast } from "@/hooks/use-toast";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thanks for reaching out — we'll get back to you shortly.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <Reveal>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
            Let's build something <span className="text-gradient-brand">great together</span>
          </h2>
          <p className="mt-6 text-muted-foreground font-light leading-relaxed text-base md:text-lg max-w-lg">
            Whether you're a healthcare organization looking to build a product, or just want to learn more about what we do — reach out.
          </p>

          <div className="mt-10 space-y-4">
            <a href="mailto:moaitechnology@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
              <span className="w-10 h-10 rounded-xl bg-secondary grid place-items-center">
                <Mail className="w-4 h-4 text-primary" />
              </span>
              <span className="font-medium">moaitechnology@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/company/moaitechnology/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
              <span className="w-10 h-10 rounded-xl bg-secondary grid place-items-center">
                <Linkedin className="w-4 h-4 text-primary" />
              </span>
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-soft space-y-5">
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold bg-accent text-accent-foreground hover:opacity-90 transition shadow-soft"
            >
              Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
