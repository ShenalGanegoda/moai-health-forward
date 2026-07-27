import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
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
            <article className="relative h-full p-8 md:p-10 rounded-3xl gradient-brand text-primary-foreground overflow-hidden shadow-card flex flex-col">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent/40 blur-3xl" />
              <div className="relative flex flex-col flex-1">
                <span className="inline-flex px-2.5 py-1 rounded-full text-[11px] font-medium bg-primary-foreground/15 backdrop-blur border border-primary-foreground/20 w-fit">
                  Digital Preventive Health
                </span>
                <h3 className="mt-5 text-2xl md:text-3xl font-bold leading-tight">
                  Kadapatha
                </h3>
                <p className="mt-2 text-primary-foreground/70 text-sm font-medium">
                  Your one stop digital health companion towards a healthier nation.
                </p>
                <p className="mt-4 text-primary-foreground/80 font-light leading-relaxed">
                  A digital preventive health platform that identifies early risk indicators for NCDs through survey-based assessments and integrated clinical workflows — starting with Oral Cancer detection.
                </p>

                <div className="mt-6 rounded-2xl bg-primary-foreground/10 backdrop-blur border border-primary-foreground/15 p-5">
                  <div className="flex items-center justify-between text-xs text-primary-foreground/70">
                    <span>Assessment confidence</span>
                    <span>98.4%</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-primary-foreground/15 overflow-hidden">
                    <div className="h-full w-[88%] bg-primary-foreground rounded-full" />
                  </div>
                  <div className="mt-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[11px] text-primary-foreground/60">MVP active · Oral Cancer focus</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/products/kadapatha"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-white hover:opacity-90 transition-opacity shadow-soft"
                    style={{ color: "#2563d4" }}
                  >
                    View Product <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>

          {/* ORA */}
          <Reveal delay={200}>
            <article className="relative h-full p-8 md:p-10 rounded-3xl bg-card border-2 border-primary/20 hover:border-primary/40 transition-colors shadow-soft flex flex-col">
              <span className="inline-flex px-2.5 py-1 rounded-full text-[11px] font-medium bg-primary/5 text-primary border border-primary/15 w-fit">
                Dental Clinic Management
              </span>
              <h3 className="mt-5 text-2xl md:text-3xl font-bold leading-tight text-foreground">
                ORA
              </h3>
              <p className="mt-2 text-primary text-sm font-medium">
                Modern Dental Clinic Management — built for Sri Lanka.
              </p>
              <p className="mt-4 text-muted-foreground font-light leading-relaxed">
                ORA digitizes and streamlines daily clinic operations, strengthening the clinical infrastructure layer with structured data capture directly into routine dental workflows.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-2">
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

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/products/ora"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white hover:opacity-90 transition-opacity shadow-soft"
                  style={{ background: "linear-gradient(90deg, #6a29d4, #894dee)" }}
                >
                  View Product <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
