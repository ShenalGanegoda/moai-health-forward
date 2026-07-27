import { useEffect } from "react";
import { ArrowRight, Calendar, FileText, Camera, History, Users, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

const PRIMARY = "#894dee";
const PRIMARY_LIGHT = "#a87af5";
const PRIMARY_DARK = "#6a29d4";

const coreFeatures = [
  { icon: Users,     label: "Patient Registration",   desc: "Digital patient records with complete history and demographics." },
  { icon: Calendar,  label: "Appointment Scheduling", desc: "Smart scheduling with queue management and automated reminders." },
  { icon: FileText,  label: "Electronic Charting",    desc: "Structured clinical notes and electronic dental charting." },
  { icon: Camera,    label: "Oral Imaging",            desc: "Upload, store and annotate oral images directly in patient records." },
  { icon: History,   label: "Treatment History",       desc: "Full treatment timeline with diagnostic data across all visits." },
  { icon: CheckCircle2, label: "Structured Data Capture", desc: "Clinical data flows directly into routine dental workflows." },
];

const stats = [
  { label: "Patients Managed", value: "1,284" },
  { label: "Visits / Week",    value: "94" },
  { label: "Retention Rate",   value: "92%" },
];

export default function Ora() {
  useEffect(() => {
    document.title = "ORA — Moai Tech";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${PRIMARY_DARK} 0%, ${PRIMARY} 55%, ${PRIMARY_LIGHT} 100%)` }}
      >
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-30 animate-blob"
          style={{ background: `radial-gradient(circle, ${PRIMARY_LIGHT}, transparent 70%)` }} />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full opacity-20 animate-blob"
          style={{ background: "radial-gradient(circle, white, transparent 70%)", animationDelay: "5s" }} />

        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Text */}
          <div className="animate-fade-in text-center lg:text-left">
            <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-white/15 backdrop-blur border border-white/25 text-white mb-5">
              Dental Clinic Management
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
              ORA
            </h1>
            <p className="mt-4 text-xl text-white/80 font-light">
              Modern Dental Clinic Management — built for Sri Lanka.
            </p>
            <p className="mt-5 text-white/65 leading-relaxed max-w-xl mx-auto lg:mx-0">
              ORA digitizes and streamlines daily clinic operations, strengthening the clinical infrastructure layer with structured data capture directly into routine dental workflows.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white hover:opacity-90 transition-opacity shadow-lg"
                style={{ color: PRIMARY }}
              >
                Request a Demo <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border-2 border-white/40 text-white hover:bg-white/10 transition-colors"
              >
                Explore Features
              </a>
            </div>
          </div>

          {/* Dashboard mockup */}
          <div className="flex justify-center lg:justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative animate-float">
              {/* Dashboard card */}
              <div className="w-72 rounded-3xl shadow-2xl overflow-hidden border border-white/20"
                style={{ background: "linear-gradient(160deg, #1a0b36 0%, #0d0620 100%)" }}>
                {/* Header bar */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
                  <span className="text-white font-semibold text-sm">ORA Dashboard</span>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                </div>
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2 p-4">
                  {stats.map(s => (
                    <div key={s.label} className="rounded-xl p-2.5 text-center" style={{ background: `${PRIMARY}25` }}>
                      <p className="text-white font-bold text-base">{s.value}</p>
                      <p className="text-white/50 text-[9px] leading-tight mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
                {/* Today's queue */}
                <div className="px-4 pb-4 space-y-2">
                  <p className="text-white/40 text-[10px] uppercase tracking-widest mb-3">Today's Queue</p>
                  {[
                    { name: "Amali P.", time: "09:00", status: "Done",    col: "#4ade80" },
                    { name: "Ruwan S.", time: "09:30", status: "In Chair", col: PRIMARY_LIGHT },
                    { name: "Chathura K.", time: "10:00", status: "Waiting", col: "#fbbf24" },
                  ].map(p => (
                    <div key={p.name} className="flex items-center justify-between bg-white/5 rounded-xl px-3 py-2">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white"
                          style={{ background: PRIMARY }}>
                          {p.name[0]}
                        </div>
                        <div>
                          <p className="text-white text-[10px] font-medium">{p.name}</p>
                          <p className="text-white/40 text-[9px]">{p.time}</p>
                        </div>
                      </div>
                      <span className="text-[9px] font-semibold" style={{ color: p.col }}>{p.status}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Floating notification */}
              <div className="absolute -left-12 bottom-12 w-44 rounded-2xl bg-white shadow-xl p-3 border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: PRIMARY }}>
                    <Calendar className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <p className="text-[9px] font-semibold text-gray-800">New Booking</p>
                    <p className="text-[8px] text-gray-400">Tomorrow 10:30 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What ORA Does ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container mx-auto px-4">
          <Reveal className="max-w-2xl">
            <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-background border border-border text-primary">Why ORA</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.05]">
              Strengthening the <span style={{ color: PRIMARY }}>clinical infrastructure layer</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              ORA is more than a management tool — it's the structured data backbone that elevates the standard of dental care across Sri Lanka.
            </p>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              { title: "Go Paperless",         desc: "Replace paper-based records with secure, searchable digital data accessible from anywhere." },
              { title: "Reduce No-Shows",       desc: "Smart scheduling and automated appointment reminders keep your chair filled." },
              { title: "Capture Better Data",   desc: "Structured clinical notes feed directly into Sri Lanka's growing preventive health ecosystem." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className="h-full p-7 rounded-3xl bg-card border border-border shadow-soft hover:shadow-card transition-shadow">
                  <div className="w-9 h-1.5 rounded-full mb-5" style={{ background: PRIMARY }} />
                  <h3 className="font-bold text-lg text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Features ─────────────────────────────────────────── */}
      <section id="features" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <Reveal className="max-w-2xl">
            <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-background border border-border text-primary">Core Features</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.05]">
              Everything a dental clinic <span style={{ color: PRIMARY }}>actually needs</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((f, i) => (
              <Reveal key={f.label} delay={i * 80}>
                <div className="h-full p-7 rounded-3xl bg-card border border-border shadow-soft hover:shadow-card hover:-translate-y-1 transition-all">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${PRIMARY}18` }}>
                    <f.icon className="w-5 h-5" style={{ color: PRIMARY }} />
                  </div>
                  <h3 className="font-bold text-foreground">{f.label}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Animated stats banner ─────────────────────────────────── */}
      <section className="py-16 md:py-20" style={{ background: `linear-gradient(135deg, ${PRIMARY_DARK}, ${PRIMARY})` }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: "1,284+", label: "Patients Managed" },
              { value: "94",     label: "Visits Per Week" },
              { value: "92%",    label: "Patient Retention Rate" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div>
                  <p className="text-5xl font-bold text-white">{s.value}</p>
                  <p className="mt-2 text-white/60">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Ready to modernize <span style={{ color: PRIMARY }}>your clinic?</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Join the growing number of Sri Lankan dental clinics using ORA to deliver better, more efficient patient care.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="/#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white shadow-lg hover:opacity-90 transition-opacity"
                style={{ background: `linear-gradient(90deg, ${PRIMARY_DARK}, ${PRIMARY})` }}>
                Request a Demo <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
