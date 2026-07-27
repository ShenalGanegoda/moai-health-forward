import { Reveal } from "@/components/Reveal";

const team = [
  { name: "Shan Ganegoda", role: "CTO", image: "/founder-shan.png" },
  { name: "Shenal Ganegoda", role: "COO", image: "/founder-shenal.png" },
  { name: "Janith Dissanayake", role: "CGO", image: "/founder-janith.png" },
];

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/40">
      <div className="container mx-auto px-4">
        <Reveal className="max-w-3xl">
          <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-background text-primary border border-border">
            The Team
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
            Meet the people behind <span className="text-gradient-brand">Moai Tech</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <div className="h-full p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card transition-shadow text-center">
                <div className="mx-auto w-24 h-24 rounded-full overflow-hidden shadow-glow">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-primary">{m.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
