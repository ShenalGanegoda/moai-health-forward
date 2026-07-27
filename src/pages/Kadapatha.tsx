import { useEffect } from "react";
import { ArrowRight, Smartphone, Monitor, CheckCircle2, AlertTriangle, Users, ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

const PRIMARY = "#4082fc";
const PRIMARY_LIGHT = "#6ba3ff";
const PRIMARY_DARK = "#2563d4";

const features = [
  { icon: ClipboardList, label: "Survey-based risk assessments" },
  { icon: CheckCircle2, label: "Automatic risk categorization" },
  { icon: Smartphone,   label: "Seamless clinical appointment booking" },
  { icon: Monitor,      label: "Web dashboard for clinics" },
  { icon: Users,        label: "Structured diagnostic data capture" },
  { icon: CheckCircle2, label: "Oral image uploads & storage" },
];

const problems = [
  { icon: AlertTriangle, title: "Fragmented Screening", desc: "Disconnected data and screening systems lead to late detection of NCDs across Sri Lanka." },
  { icon: Users,         title: "Missed Screenings",   desc: "Many individuals never receive timely screening due to lack of accessible tools." },
  { icon: ClipboardList, title: "No Structured Data",  desc: "Healthcare providers lack structured preventive data to guide early intervention." },
];

export default function Kadapatha() {
  useEffect(() => {
    document.title = "Kadapatha — Moai Tech";
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
        {/* ambient blobs */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-30 animate-blob"
          style={{ background: `radial-gradient(circle, ${PRIMARY_LIGHT}, transparent 70%)` }} />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full opacity-20 animate-blob"
          style={{ background: `radial-gradient(circle, white, transparent 70%)`, animationDelay: "4s" }} />

        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Text */}
          <div className="animate-fade-in text-center lg:text-left">
            <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-white/15 backdrop-blur border border-white/25 text-white mb-5">
              Digital Preventive Health
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
              Kadapatha
            </h1>
            <p className="mt-4 text-xl text-white/80 font-light">
              Your one stop digital health companion towards a healthier nation.
            </p>
            <p className="mt-5 text-white/65 leading-relaxed max-w-xl mx-auto lg:mx-0">
              A digital preventive health platform that identifies early risk indicators for Non-Communicable Diseases through survey-based assessments and integrated clinical workflows.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white hover:opacity-90 transition-opacity shadow-lg"
                style={{ color: PRIMARY }}
              >
                Get Early Access <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#solution"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border-2 border-white/40 text-white hover:bg-white/10 transition-colors"
              >
                See How It Works
              </a>
            </div>
          </div>

          {/* ── Mockups: desktop dashboard + phone ── */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>

          {/* Large screens: laptop + phone side by side */}
          <div className="hidden lg:flex items-end justify-center gap-4">

            {/* ── Laptop mockup ── */}
            <div className="animate-float flex-shrink-0" style={{ animationDelay: "0.6s" }}>

              {/* ── Screen lid ── */}
              <div className="rounded-t-2xl rounded-b-sm px-3 pt-3 pb-2.5 shadow-2xl" style={{ background: "#1c1c1e", width: 368 }}>
                {/* Camera dot */}
                <div className="flex justify-center mb-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#3d3d3f" }} />
                </div>
                {/* Screen content */}
                <div className="rounded-md overflow-hidden">
                  {/* Browser chrome */}
                  <div className="h-6 bg-gray-50 flex items-center gap-1.5 px-3 border-b border-gray-100">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <div className="ml-2 h-3 rounded w-24 bg-gray-200" />
                  </div>
                  {/* App nav */}
                  <div className="flex items-center justify-between px-4 py-2" style={{ background: PRIMARY }}>
                    <span className="text-white text-[10px] font-bold">Kadapatha</span>
                    <div className="flex gap-4">
                      {["Dashboard", "Appointments", "Patients"].map((t, i) => (
                        <span key={t} className={`text-[9px] font-medium pb-0.5 ${i === 0 ? "text-white border-b border-white" : "text-white/55"}`}>{t}</span>
                      ))}
                    </div>
                    <div className="w-5 h-5 rounded-full bg-white/25" />
                  </div>
                  {/* Dashboard body */}
                  <div className="bg-white p-3 space-y-2.5">
                    {/* Stat cards */}
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: "Patients Tested", val: "1,200+" },
                        { label: "Positive Cases",  val: "586+" },
                        { label: "In Treatment",    val: "127+" },
                      ].map(s => (
                        <div key={s.label} className="rounded-xl border border-gray-100 p-2.5 shadow-sm">
                          <div className="w-5 h-5 rounded-md mb-1.5 flex items-center justify-center" style={{ background: `${PRIMARY}18` }}>
                            <div className="w-2 h-2 rounded-full" style={{ background: PRIMARY }} />
                          </div>
                          <p className="text-[7px] text-gray-400 leading-tight">{s.label}</p>
                          <p className="text-[13px] font-bold mt-0.5" style={{ color: PRIMARY }}>{s.val}</p>
                        </div>
                      ))}
                    </div>
                    {/* Charts row */}
                    <div className="grid grid-cols-5 gap-2">
                      {/* Bar chart */}
                      <div className="col-span-3 rounded-xl border border-gray-100 p-2.5">
                        <p className="text-[9px] font-semibold text-gray-800 mb-1.5">Incident Rate</p>
                        <svg viewBox="0 0 155 68" className="w-full">
                          {[60, 40, 20].map(y => (
                            <line key={y} x1="0" y1={y} x2="155" y2={y} stroke="#f3f4f6" strokeWidth="1" />
                          ))}
                          {[
                            { x: 6,   h1: 48, h2: 30 },
                            { x: 36,  h1: 28, h2: 18 },
                            { x: 66,  h1: 40, h2: 26 },
                            { x: 96,  h1: 20, h2: 13 },
                            { x: 126, h1: 36, h2: 22 },
                          ].map((b, i) => (
                            <g key={i}>
                              <rect x={b.x}    y={65 - b.h1} width="11" height={b.h1} rx="3" fill={PRIMARY} />
                              <rect x={b.x+12} y={65 - b.h2} width="11" height={b.h2} rx="3" fill={PRIMARY_LIGHT} />
                            </g>
                          ))}
                          <rect x="5"  y="67" width="5" height="2.5" rx="1" fill={PRIMARY} />
                          <text x="12" y="70" fontSize="5" fill="#9ca3af">Male</text>
                          <rect x="35" y="67" width="5" height="2.5" rx="1" fill={PRIMARY_LIGHT} />
                          <text x="42" y="70" fontSize="5" fill="#9ca3af">Female</text>
                        </svg>
                      </div>
                      {/* Donut chart */}
                      <div className="col-span-2 rounded-xl border border-gray-100 p-2 flex flex-col items-center justify-center">
                        <p className="text-[8px] font-semibold text-gray-800 mb-1">Patient Count</p>
                        <svg viewBox="0 0 70 70" width="58" height="58">
                          <circle cx="35" cy="35" r="25" fill="none" stroke="#e5e7eb" strokeWidth="9" />
                          <circle cx="35" cy="35" r="25" fill="none" stroke={PRIMARY} strokeWidth="9"
                            strokeDasharray="110 157" strokeLinecap="round" transform="rotate(-90 35 35)" />
                          <circle cx="35" cy="35" r="25" fill="none" stroke={PRIMARY_LIGHT} strokeWidth="9"
                            strokeDasharray="27 157" strokeDashoffset="-110" strokeLinecap="round" transform="rotate(-90 35 35)" />
                          <text x="35" y="32" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1f2937">167</text>
                          <text x="35" y="42" textAnchor="middle" fontSize="6" fill="#9ca3af">Patients</text>
                        </svg>
                        <div className="space-y-0.5 w-full px-1 mt-0.5">
                          {[
                            { label: "Treatment", col: PRIMARY },
                            { label: "Recovered", col: PRIMARY_LIGHT },
                          ].map(l => (
                            <div key={l.label} className="flex items-center gap-1">
                              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: l.col }} />
                              <span className="text-[7px] text-gray-500">{l.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Appointments */}
                    <div className="rounded-xl border border-gray-100 p-2.5">
                      <p className="text-[9px] font-semibold text-gray-800 mb-2">Today's Appointments</p>
                      <div className="space-y-1.5">
                        {[
                          { time: "10:00 AM", patient: "Amali P." },
                          { time: "11:30 AM", patient: "Ruwan S." },
                        ].map(a => (
                          <div key={a.patient} className="flex items-center justify-between">
                            <span className="text-[8px] text-gray-400">{a.time}</span>
                            <span className="text-[8px] font-medium text-gray-700">{a.patient}</span>
                            <span className="text-[7px] font-semibold px-1.5 py-0.5 rounded-full"
                              style={{ color: PRIMARY, background: `${PRIMARY}12` }}>Scheduled</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Bottom chin */}
                <div className="h-2.5" />
              </div>

              {/* ── Hinge ── */}
              <div className="h-[3px]" style={{ background: "#111114", width: 368 }} />

              {/* ── Keyboard base ── */}
              <div className="rounded-b-2xl px-5 pt-3 pb-4 shadow-xl" style={{ background: "#242426", width: 368 }}>
                <div className="space-y-[5px]">
                  {/* Fn row */}
                  <div className="flex gap-[3px]">
                    {Array.from({ length: 14 }, (_, i) => (
                      <div key={i} className="flex-1 rounded-[3px]" style={{ height: 5, background: "#3a3a3c" }} />
                    ))}
                  </div>
                  {/* Main key rows */}
                  {[12, 12, 11, 10].map((count, row) => (
                    <div key={row} className="flex gap-[3px]">
                      {Array.from({ length: count }, (_, i) => (
                        <div key={i} className="rounded-[3px]" style={{
                          height: 8, background: "#3a3a3c",
                          flex: row > 0 && (i === 0 || i === count - 1) ? 1.6 : 1,
                        }} />
                      ))}
                    </div>
                  ))}
                  {/* Space bar row */}
                  <div className="flex gap-[3px]">
                    {[1, 4, 1].map((flex, i) => (
                      <div key={i} className="rounded-[3px]" style={{ height: 8, background: "#3a3a3c", flex }} />
                    ))}
                  </div>
                </div>
                {/* Trackpad */}
                <div className="mx-auto mt-2.5 rounded-lg" style={{ width: 72, height: 44, background: "#333335", border: "1px solid #444446" }} />
              </div>

            </div>

            {/* ── Phone mockup ── */}
            <div className="animate-float flex-shrink-0" style={{ width: 175 }}>
              <div className="rounded-[2.2rem] border-4 border-white/50 shadow-2xl overflow-hidden bg-white">

                {/* Status bar */}
                <div className="flex justify-between items-center px-4 pt-2.5 pb-2" style={{ background: PRIMARY }}>
                  <span className="text-[9px] text-white font-semibold">9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-1.5 rounded-full bg-white/80" />
                    <div className="w-4 h-2 rounded bg-white/20 border border-white/50 flex items-center px-0.5">
                      <div className="w-2.5 h-1 rounded-sm bg-white" />
                    </div>
                  </div>
                </div>

                {/* Blue hero card */}
                <div className="px-3 pt-2.5 pb-4" style={{ background: PRIMARY }}>
                  <p className="text-center text-white font-bold text-[11px] tracking-wide">Your Risk Status</p>

                  {/* Category dots */}
                  <div className="mt-2.5 flex justify-between px-1">
                    {["Oral", "Lungs", "Liver", "Skin"].map((c, i) => (
                      <div key={c} className="flex flex-col items-center gap-0.5">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${i === 0 ? "bg-white" : "bg-white/20"}`}>
                          <div className="w-2.5 h-2.5 rounded-full" style={{ background: i === 0 ? PRIMARY : "rgba(255,255,255,0.5)" }} />
                        </div>
                        <span className={`text-[7px] font-medium ${i === 0 ? "text-white" : "text-white/50"}`}>{c}</span>
                      </div>
                    ))}
                  </div>

                  {/* Arc gauge */}
                  <div className="flex justify-center mt-2">
                    <svg viewBox="0 0 150 85" width="138" height="78">
                      <path d="M 16,76 A 59,59 0 0 1 134,76"
                        fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="10" strokeLinecap="round" />
                      <path d="M 16,76 A 59,59 0 0 1 134,76"
                        fill="none" stroke="white" strokeWidth="10" strokeLinecap="round"
                        strokeDasharray="90 185" />
                      <text x="75" y="63" textAnchor="middle" fontSize="17" fontWeight="800" fill="white">48%</text>
                      <text x="75" y="76" textAnchor="middle" fontSize="7.5" fill="rgba(255,255,255,0.7)">Cancer Risk</text>
                    </svg>
                  </div>
                </div>

                {/* Date cards */}
                <div className="grid grid-cols-2 gap-1.5 mx-2.5 mt-2.5">
                  {[
                    { label: "Last Checkup", date: "Jan 25, 2025" },
                    { label: "Next Checkup", date: "May 25, 2025" },
                  ].map(d => (
                    <div key={d.label} className="rounded-xl p-2" style={{ background: "#f0f5ff" }}>
                      <p className="text-[7px] text-gray-400">{d.label}</p>
                      <p className="text-[8px] font-bold mt-0.5" style={{ color: PRIMARY }}>{d.date}</p>
                    </div>
                  ))}
                </div>

                {/* Appointment button */}
                <div className="mx-2.5 mt-2 mb-4 rounded-xl py-2.5 text-center text-[10px] font-bold text-white"
                  style={{ background: PRIMARY }}>
                  Make an appointment
                </div>

              </div>
            </div>

          </div>{/* end hidden lg:flex */}

          {/* Mobile / tablet: phone only, centered */}
          <div className="flex lg:hidden justify-center mt-10">
            <div className="animate-float" style={{ width: 200 }}>
              <div className="rounded-[2.2rem] border-4 border-white/50 shadow-2xl overflow-hidden bg-white">
                <div className="flex justify-between items-center px-4 pt-2.5 pb-2" style={{ background: PRIMARY }}>
                  <span className="text-[9px] text-white font-semibold">9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-1.5 rounded-full bg-white/80" />
                    <div className="w-4 h-2 rounded bg-white/20 border border-white/50 flex items-center px-0.5">
                      <div className="w-2.5 h-1 rounded-sm bg-white" />
                    </div>
                  </div>
                </div>
                <div className="px-3 pt-2.5 pb-4" style={{ background: PRIMARY }}>
                  <p className="text-center text-white font-bold text-[11px] tracking-wide">Your Risk Status</p>
                  <div className="mt-2.5 flex justify-between px-1">
                    {["Oral", "Lungs", "Liver", "Skin"].map((c, i) => (
                      <div key={c} className="flex flex-col items-center gap-0.5">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center ${i === 0 ? "bg-white" : "bg-white/20"}`}>
                          <div className="w-3 h-3 rounded-full" style={{ background: i === 0 ? PRIMARY : "rgba(255,255,255,0.5)" }} />
                        </div>
                        <span className={`text-[8px] font-medium ${i === 0 ? "text-white" : "text-white/50"}`}>{c}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center mt-2">
                    <svg viewBox="0 0 160 92" width="148" height="85">
                      <path d="M 16,82 A 66,66 0 0 1 144,82" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="11" strokeLinecap="round" />
                      <path d="M 16,82 A 66,66 0 0 1 144,82" fill="none" stroke="white" strokeWidth="11" strokeLinecap="round" strokeDasharray="100 207" />
                      <text x="80" y="68" textAnchor="middle" fontSize="19" fontWeight="800" fill="white">48%</text>
                      <text x="80" y="82" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.7)">Cancer Risk</text>
                    </svg>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-1.5 mx-3 mt-3">
                  {[{ label: "Last Checkup", date: "Jan 25, 2025" }, { label: "Next Checkup", date: "May 25, 2025" }].map(d => (
                    <div key={d.label} className="rounded-xl p-2.5" style={{ background: "#f0f5ff" }}>
                      <p className="text-[8px] text-gray-400">{d.label}</p>
                      <p className="text-[9px] font-bold mt-0.5" style={{ color: PRIMARY }}>{d.date}</p>
                    </div>
                  ))}
                </div>
                <div className="mx-3 mt-2 mb-5 rounded-xl py-2.5 text-center text-[11px] font-bold text-white" style={{ background: PRIMARY }}>
                  Make an appointment
                </div>
              </div>
            </div>
          </div>

          </div>{/* end animate-fade-in outer wrapper */}
        </div>
      </section>

      {/* ── The Problem ──────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container mx-auto px-4">
          <Reveal className="max-w-2xl">
            <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium text-white" style={{ background: PRIMARY }}>The Problem</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.05]">
              A critical <span style={{ color: PRIMARY }}>healthcare gap</span> in Sri Lanka
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Late detection of NCDs remains a persistent challenge. Kadapatha directly addresses the root causes.
            </p>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="h-full p-7 rounded-3xl bg-card border border-border shadow-soft hover:shadow-card transition-shadow">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${PRIMARY}18` }}>
                    <p.icon className="w-5 h-5" style={{ color: PRIMARY }} />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Solution ─────────────────────────────────────────── */}
      <section id="solution" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <Reveal className="max-w-2xl">
            <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium text-white" style={{ background: PRIMARY }}>The Solution</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.05]">
              Two powerful tools, <span style={{ color: PRIMARY }}>one connected system</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 gap-8">
            {/* Mobile App */}
            <Reveal delay={100}>
              <div className="h-full p-8 rounded-3xl border-2 shadow-soft hover:shadow-card transition-shadow" style={{ borderColor: `${PRIMARY}30`, background: `${PRIMARY}05` }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: PRIMARY }}>
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Mobile Application</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">For individuals to take control of their preventive health journey.</p>
                <ul className="mt-6 space-y-3">
                  {["Survey-based risk assessments", "Automatic risk categorization", "Seamless appointment booking via the app"].map(f => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: PRIMARY }} />
                      <span className="text-sm text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Web Dashboard */}
            <Reveal delay={200}>
              <div className="h-full p-8 rounded-3xl border-2 shadow-soft hover:shadow-card transition-shadow" style={{ borderColor: `${PRIMARY}30`, background: `${PRIMARY}05` }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: PRIMARY }}>
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Web Dashboard for Clinics</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">Giving healthcare providers the structured data they need.</p>
                <ul className="mt-6 space-y-3">
                  {["Manage patient bookings", "Record structured diagnostic data", "Upload and store oral images", "Track patient follow-ups"].map(f => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: PRIMARY }} />
                      <span className="text-sm text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Current Stage ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium text-white" style={{ background: PRIMARY }}>MVP Stage</span>
              <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.05]">
                Starting with <span style={{ color: PRIMARY }}>Oral Cancer</span> risk assessment
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                The current MVP focuses on Oral Cancer risk assessment — one of the most underdiagnosed conditions in Sri Lanka. The platform is built to scale across a full roadmap of NCD risk categories.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { phase: "MVP · Now",     label: "Oral Cancer Risk Assessment", active: true },
                  { phase: "Phase 2",       label: "Diabetes & Hypertension Screening", active: false },
                  { phase: "Phase 3",       label: "Cardiovascular Risk Profiling", active: false },
                  { phase: "Phase 4",       label: "Expanded NCD Categories", active: false },
                ].map((r) => (
                  <div key={r.phase} className={`flex items-center gap-4 p-4 rounded-2xl border transition-colors ${r.active ? "border-transparent shadow-md" : "border-border bg-card"}`}
                    style={r.active ? { background: `linear-gradient(90deg, ${PRIMARY}15, ${PRIMARY_LIGHT}10)`, borderColor: `${PRIMARY}30` } : {}}>
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: r.active ? PRIMARY : "#d1d5db" }} />
                    <div>
                      <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">{r.phase}</p>
                      <p className="text-sm font-semibold text-foreground">{r.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Animated scan card */}
            <Reveal delay={150}>
              <div className="relative">
                <div className="rounded-3xl p-8 shadow-xl" style={{ background: `linear-gradient(135deg, ${PRIMARY_DARK}, ${PRIMARY})` }}>
                  <p className="text-white/60 text-xs uppercase tracking-widest mb-4">Live Analysis</p>
                  <div className="space-y-4">
                    {[
                      { label: "Risk Score Calculated", val: "Low Risk", pct: 25, col: "#4ade80" },
                      { label: "Assessment Confidence", val: "98.4%",    pct: 98, col: PRIMARY_LIGHT },
                      { label: "Patients Screened",     val: "2,400+",   pct: 72, col: "#fbbf24" },
                    ].map(s => (
                      <div key={s.label}>
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="text-white/70">{s.label}</span>
                          <span className="text-white font-semibold">{s.val}</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/10">
                          <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${s.pct}%`, background: s.col }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                    <span className="text-white/60 text-xs">Platform Status</span>
                    <span className="flex items-center gap-1.5 text-xs text-green-400 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      MVP Active
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Ready to transform <span style={{ color: PRIMARY }}>preventive care?</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Whether you're a healthcare organization or an individual — Kadapatha gives you the tools for early action.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="/#contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white shadow-lg hover:opacity-90 transition-opacity"
                style={{ background: `linear-gradient(90deg, ${PRIMARY_DARK}, ${PRIMARY})` }}>
                Get Early Access <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
