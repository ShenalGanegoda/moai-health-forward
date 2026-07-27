// Design system tokens — single source of truth for shared patterns.
// Import from here instead of duplicating Tailwind class strings across components.

/** Section wrappers */
export const section = {
  base: "py-20 md:py-32",
  alt:  "py-20 md:py-32 bg-secondary/40",
  container: "container mx-auto px-4",
} as const;

/** Label badges */
export const badge = {
  brand:   "inline-flex px-3 py-1 rounded-full text-xs font-medium bg-background border border-border text-primary",
  ghost:   "inline-flex px-2.5 py-1 rounded-full text-[11px] font-medium bg-primary/5 text-primary border border-primary/15",
  inverse: "inline-flex px-2.5 py-1 rounded-full text-[11px] font-medium bg-primary-foreground/15 backdrop-blur border border-primary-foreground/20",
} as const;

/** Heading sizes */
export const heading = {
  section: "mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.05]",
  card:    "text-2xl md:text-3xl font-bold leading-tight",
  sub:     "text-xl font-bold",
} as const;

/** Card surfaces */
export const card = {
  base:     "rounded-3xl bg-card border border-border shadow-soft",
  hover:    "rounded-3xl bg-card border border-border shadow-soft hover:shadow-card transition-shadow",
  brand:    "rounded-3xl gradient-brand text-primary-foreground shadow-card overflow-hidden",
  outlined: "rounded-3xl bg-card border-2 border-primary/20 hover:border-primary/40 transition-colors shadow-soft",
} as const;

/** Buttons */
export const btn = {
  primary: "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-accent text-accent-foreground hover:opacity-90 transition-opacity shadow-soft",
  outline: "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors",
  ghost:   "inline-flex items-center gap-2 text-sm font-semibold text-primary group",
  inverse: "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-white text-primary hover:opacity-90 transition-opacity",
} as const;

/** Body text helpers */
export const text = {
  muted: "text-muted-foreground font-light leading-relaxed",
  body:  "text-base md:text-lg leading-relaxed",
} as const;
