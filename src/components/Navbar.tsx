import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-card/95 backdrop-blur-xl shadow-md border-b border-border/50"
        : isHome ? "bg-[hsl(195,85%,12%)]/80 backdrop-blur-sm" : "bg-card"
    }`}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-white font-bold text-sm font-display">N</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`text-sm font-bold font-display ${!scrolled && isHome ? "text-white" : "text-foreground"}`}>Nishat Dental</span>
            <span className={`text-[9px] uppercase tracking-[0.15em] font-body ${!scrolled && isHome ? "text-white/50" : "text-muted-foreground"}`}>& Healthcare</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium font-body transition-colors hover:text-primary ${
                location.pathname === l.to
                  ? "text-primary"
                  : !scrolled && isHome ? "text-white/80" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Button asChild size="sm" className="rounded-full px-5 font-body text-xs shadow-lg shadow-primary/25 bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link to="/book-appointment">Book Appointment</Link>
          </Button>
        </div>

        <button
          className={`md:hidden p-2 rounded-lg ${!scrolled && isHome ? "text-white" : "text-foreground"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-t border-border/50 px-4 pb-5">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm font-medium font-body border-b border-border/20 ${
                location.pathname === l.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex gap-3 mt-4">
            <Button asChild size="sm" className="flex-1 rounded-full font-body bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/book-appointment" onClick={() => setOpen(false)}>Book Appointment</Link>
            </Button>
            <Button asChild size="sm" variant="outline" className="rounded-full">
              <a href="tel:+919876543210"><Phone className="w-4 h-4" /></a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
