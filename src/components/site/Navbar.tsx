import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { href: "#home",     label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about",    label: "About" },
  { href: "#careers",  label: "Careers" },
];

const PRODUCTS = [
  { href: "/products/kadapatha", label: "Kadapatha", sub: "Digital Preventive Health" },
  { href: "/products/ora",       label: "ORA",        sub: "Dental Clinic Management" },
];

export const Navbar = () => {
  const [scrolled, setScrolled]           = useState(false);
  const [open, setOpen]                   = useState(false);
  const [productsOpen, setProductsOpen]   = useState(false);
  const [mobileProducts, setMobileProducts] = useState(false);
  const dropdownRef                        = useRef<HTMLDivElement>(null);
  const navigate                           = useNavigate();
  const location                           = useLocation();
  const isKadapatha = location.pathname === "/products/kadapatha";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const linkClass = `text-sm font-medium transition-colors hover:text-foreground ${scrolled ? "text-primary" : "text-white"}`;

  // Helper: if we're on a product page the href anchors won't work directly,
  // so navigate to home first then let the browser handle the hash.
  const handleHomeLink = (href: string) => {
    if (window.location.pathname !== "/") {
      navigate("/" + href);
    } else {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/moai-logo.png" alt="Moai Tech" className="h-7 w-auto rounded-lg" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {/* Home */}
          <button onClick={() => handleHomeLink("#home")} className={linkClass}>
            Home
          </button>

          {/* Products dropdown */}
          <div className="relative flex items-center" ref={dropdownRef}>
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className={`inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-foreground ${scrolled ? "text-primary" : "text-white"}`}
            >
              Products
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
            </button>

            {productsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 rounded-2xl bg-card border border-border shadow-card overflow-hidden">
                <div className="p-2">
                  {PRODUCTS.map((p) => (
                    <Link
                      key={p.href}
                      to={p.href}
                      onClick={() => setProductsOpen(false)}
                      className="flex flex-col px-4 py-3 rounded-xl hover:bg-secondary transition-colors"
                    >
                      <span className="text-sm font-semibold text-foreground">{p.label}</span>
                      <span className="text-xs text-muted-foreground mt-0.5">{p.sub}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Other nav links */}
          {NAV_LINKS.filter(l => l.href !== "#home").map((l) => (
            <button key={l.href} onClick={() => handleHomeLink(l.href)} className={linkClass}>
              {l.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => handleHomeLink("#contact")}
          className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-soft"
          style={isKadapatha
            ? { background: "#ffffff", color: "#4082fc" }
            : { background: "hsl(var(--accent))", color: "white" }}
        >
          Get in Touch
        </button>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            <button onClick={() => { handleHomeLink("#home"); setOpen(false); }}
              className="text-sm font-medium text-primary hover:text-foreground py-2 text-left">
              Home
            </button>

            {/* Mobile products accordion */}
            <button
              onClick={() => setMobileProducts(!mobileProducts)}
              className="flex items-center justify-between text-sm font-medium text-primary hover:text-foreground py-2"
            >
              Products
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileProducts ? "rotate-180" : ""}`} />
            </button>
            {mobileProducts && (
              <div className="ml-4 mb-1 space-y-1">
                {PRODUCTS.map(p => (
                  <Link key={p.href} to={p.href} onClick={() => { setOpen(false); setMobileProducts(false); }}
                    className="flex flex-col py-2 px-3 rounded-xl hover:bg-secondary transition-colors">
                    <span className="text-sm font-semibold text-foreground">{p.label}</span>
                    <span className="text-xs text-muted-foreground">{p.sub}</span>
                  </Link>
                ))}
              </div>
            )}

            {NAV_LINKS.filter(l => l.href !== "#home").map((l) => (
              <button key={l.href} onClick={() => { handleHomeLink(l.href); setOpen(false); }}
                className="text-sm font-medium text-primary hover:text-foreground py-2 text-left">
                {l.label}
              </button>
            ))}

            <button
              onClick={() => { handleHomeLink("#contact"); setOpen(false); }}
              className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold bg-accent text-accent-foreground"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
