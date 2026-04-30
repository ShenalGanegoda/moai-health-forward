import { ArrowRight, Activity, Heart, Stethoscope } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden gradient-brand text-primary-foreground pt-28 md:pt-36 pb-24 md:pb-32"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-accent/40 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-24 w-[26rem] h-[26rem] rounded-full bg-primary/60 blur-3xl animate-blob" />
      </div>
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.08)_1px,_transparent_0)] [background-size:28px_28px]" />

      <div className="container relative mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-in">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
            Health Tech. Reimagined.
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Building the Future of <span className="italic font-light text-primary-foreground/90">Healthcare</span> Technology
          </h1>

          <p className="mt-6 text-base md:text-lg text-primary-foreground/80 max-w-2xl leading-relaxed font-light">
            Moai Tech is a Health Tech startup that creates innovative digital health products and partners with organizations to build tailored healthcare solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-background text-primary hover:bg-background/90 transition shadow-glow"
            >
              Explore Our Products <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition"
            >
              Work With Us
            </a>
          </div>
        </div>

        {/* Floating UI mockup */}
        <div className="lg:col-span-5 relative h-[420px] hidden lg:block">
          <div className="absolute top-4 right-4 w-72 rounded-2xl bg-background/95 backdrop-blur p-5 shadow-glow animate-float">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-brand grid place-items-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Patient Vitals</p>
                <p className="text-sm font-semibold text-foreground">All systems normal</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[72, 98, 36].map((v, i) => (
                <div key={i} className="rounded-lg bg-muted p-2">
                  <p className="text-[10px] text-muted-foreground">{["BPM", "SpO₂", "Temp"][i]}</p>
                  <p className="text-base font-bold text-foreground">{v}{i === 1 ? "%" : ""}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 h-12 rounded-lg bg-muted/60 grid place-items-center">
              <Activity className="w-full h-8 text-accent" strokeWidth={2} />
            </div>
          </div>

          <div className="absolute bottom-8 left-0 w-64 rounded-2xl bg-background/95 backdrop-blur p-5 shadow-card animate-float [animation-delay:1s]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/15 grid place-items-center">
                <Stethoscope className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Today</p>
                <p className="text-sm font-semibold text-foreground">12 appointments</p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              {["Dr. Perera · 9:00", "Dr. Silva · 10:30", "Dr. Fernando · 12:00"].map((t) => (
                <div key={t} className="flex items-center justify-between text-xs text-muted-foreground border-b border-border pb-1.5 last:border-0">
                  <span>{t}</span>
                  <span className="text-accent font-medium">Confirmed</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
