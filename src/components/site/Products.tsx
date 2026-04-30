import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Products = () => {
  return (
    <section id="products" className="py-20 md:py-32 bg-secondary/40">
      <div className="container mx-auto px-4">
        <Reveal className="max-w-3xl">
          <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-background border border-border text-primary">
            Our Products
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
            Purpose-built Health Tech that <span className="text-gradient-brand">makes a difference</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {/* Kadapatha */}
          <Reveal delay={100}>
            <article className="relative h-full p-8 md:p-10 rounded-3xl gradient-brand text-primary-foreground overflow-hidden shadow-card">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent/40 blur-3xl" />
              <div className="relative">
                <span className="inline-flex px-2.5 py-1 rounded-full text-[11px] font-medium bg-primary-foreground/15 backdrop-blur border border-primary-foreground/20">
                  Oral Health
                </span>
                <h3 className="mt-5 text-2xl md:text-3xl font-bold leading-tight">
                  Kadapatha — Oral Cancer Early Detection
                </h3>
                <p className="mt-4 text-primary-foreground/80 font-light leading-relaxed">
                  An AI-powered application designed to assist in the early detection of oral cancer, enabling faster diagnosis and better patient outcomes.
                </p>
                <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold group">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="mt-10 rounded-2xl bg-primary-foreground/10 backdrop-blur border border-primary-foreground/15 p-5">
                  <div className="flex items-center justify-between text-xs text-primary-foreground/70">
                    <span>Scan analysis</span>
                    <span>98.4% confidence</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-primary-foreground/15 overflow-hidden">
                    <div className="h-full w-[88%] bg-primary-foreground rounded-full" />
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* ORA */}
          <Reveal delay={200}>
            <article className="relative h-full p-8 md:p-10 rounded-3xl bg-card border-2 border-primary/20 hover:border-primary/40 transition-colors shadow-soft">
              <span className="inline-flex px-2.5 py-1 rounded-full text-[11px] font-medium bg-primary/5 text-primary border border-primary/15">
                Dental Management
              </span>
              <h3 className="mt-5 text-2xl md:text-3xl font-bold leading-tight text-foreground">
                ORA — Dental Practice Management System
              </h3>
              <p className="mt-4 text-muted-foreground font-light leading-relaxed">
                A comprehensive management system built for dental clinicians to streamline appointments, patient records, and practice operations.
              </p>
              <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary group">
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="mt-10 grid grid-cols-3 gap-2">
                {[
                  { l: "Patients", v: "1,284" },
                  { l: "Visits / wk", v: "94" },
                  { l: "Retention", v: "92%" },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl bg-secondary p-3">
                    <p className="text-[10px] text-muted-foreground">{s.l}</p>
                    <p className="text-base font-bold text-primary">{s.v}</p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
