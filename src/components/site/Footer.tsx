import { useLocation } from "react-router-dom";

const links = ["Home", "Products", "Services", "About", "Careers"];

export const Footer = () => {
  const location = useLocation();
  const isKadapatha = location.pathname === "/products/kadapatha";

  return (
    <footer className="border-t-2 border-primary/20 bg-background">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#home" className="flex items-center gap-2">
          <img src="/moai-logo.png" alt="Moai Tech" className="h-7 w-auto rounded-lg" />
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 w-full md:w-auto">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l}
            </a>
          ))}
          {isKadapatha && (
            <a
              href="/kadapatha-privacy-policy.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
          )}
          {isKadapatha && (
            <a
              href="/kadapatha-terms.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms and Conditions
            </a>
          )}
        </nav>

        <p className="text-xs text-muted-foreground">© 2025 Moai Tech. All rights reserved.</p>
      </div>
    </footer>
  );
};
