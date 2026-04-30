import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Careers = () => {
  return (
    <section id="careers" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl gradient-brand text-primary-foreground p-10 md:p-20 shadow-card">
            <div className="absolute -top-24 -right-16 w-96 h-96 rounded-full bg-accent/40 blur-3xl animate-blob" />
            <div className="absolute -bottom-24 -left-16 w-96 h-96 rounded-full bg-primary/60 blur-3xl animate-blob" />
            <div className="relative max-w-3xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                Join us in shaping the future of <span className="italic font-light">healthcare</span>
              </h2>
              <p className="mt-6 text-primary-foreground/85 font-light leading-relaxed text-base md:text-lg max-w-2xl">
                We're a small, ambitious team building things that matter. If you're passionate about Health Tech, we'd love to hear from you.
              </p>
              <a
                href="#contact"
                className="mt-10 inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-background text-primary hover:bg-background/90 transition shadow-glow"
              >
                View Open Roles <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
