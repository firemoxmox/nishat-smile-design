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

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-card/80 backdrop-blur-xl shadow-lg shadow-primary/5 border-b border-border/50" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto flex items-center justify-between h-18 px-4 py-3">
        <Link to="/" className="flex items-center gap-1.5">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm font-display">N</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-bold font-display text-foreground">Nishat</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-body">Dental & Healthcare</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative text-sm font-medium font-body transition-colors hover:text-primary ${
                location.pathname === l.to 
                  ? "text-primary after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full" 
                  : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" size="sm" className="text-muted-foreground font-body">
              <a href="tel:+919876543210">
                <Phone className="w-4 h-4 mr-1.5" />
                Call
              </a>
            </Button>
            <Button asChild size="sm" className="rounded-full px-6 font-body shadow-lg shadow-primary/25">
              <Link to="/book-appointment">Book Now</Link>
            </Button>
          </div>
        </div>

        <button className="md:hidden p-2 rounded-lg hover:bg-secondary" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl border-t border-border/50 px-4 pb-6 animate-fade-in">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block py-3.5 text-sm font-medium font-body border-b border-border/30 ${
                location.pathname === l.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex gap-3 mt-5">
            <Button asChild size="sm" className="flex-1 rounded-full font-body shadow-lg shadow-primary/25">
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
