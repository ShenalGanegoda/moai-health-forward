import { Brain, Handshake, Globe2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const items = [
  {
    icon: Brain,
    title: "Our Own Products",
    desc: "We build and ship our own Health Tech products solving real clinical problems.",
  },
  {
    icon: Handshake,
    title: "Client Development",
    desc: "We partner with healthcare organizations to design and build custom digital health solutions.",
  },
  {
    icon: Globe2,
    title: "Impact-Driven",
    desc: "Based in Sri Lanka, building for the region and beyond.",
  },
];

export const WhatWeDo = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 100}>
              <div className="group h-full p-8 rounded-2xl border border-border bg-card hover:shadow-card hover:-translate-y-1 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl gradient-brand grid place-items-center text-primary-foreground shadow-soft">
                  <it.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{it.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed font-light">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
