import { Microscope, Smartphone, Link2, BarChart3 } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const features = [
  {
    icon: Microscope,
    title: "Custom Health Tech Development",
    desc: "End-to-end development of digital health platforms tailored to your needs.",
  },
  {
    icon: Smartphone,
    title: "Mobile & Web Applications",
    desc: "Cross-platform applications for patients, clinicians, and administrators.",
  },
  {
    icon: Link2,
    title: "System Integration",
    desc: "Connecting your existing systems with modern health tech infrastructure.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    desc: "Turning clinical data into actionable insights.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 grid lg:grid-cols-12 gap-12 lg:gap-20">
        <Reveal className="lg:col-span-5 lg:sticky lg:top-28 self-start">
          <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-secondary text-primary border border-border">
            For Clients
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
            We build Health Tech products for your <span className="text-gradient-brand">organization</span>
          </h2>
          <p className="mt-6 text-muted-foreground font-light leading-relaxed">
            From concept to deployment, we collaborate closely with your team to deliver software that clinicians actually want to use.
          </p>
        </Reveal>

        <div className="lg:col-span-7 space-y-2">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="group flex gap-5 p-6 md:p-7 rounded-2xl border border-transparent hover:border-border hover:bg-secondary/40 transition-all">
                <div className="shrink-0 w-12 h-12 rounded-xl gradient-brand-soft border border-border grid place-items-center text-primary group-hover:gradient-brand group-hover:text-primary-foreground transition-all">
                  <f.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-muted-foreground font-light leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
