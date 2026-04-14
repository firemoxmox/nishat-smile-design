import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

const Footer = () => (
  <footer className="relative bg-foreground text-background overflow-hidden">
    {/* Decorative gradient */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 rounded-full blur-[120px]" />
    
    <div className="container mx-auto px-4 pt-16 pb-8 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-1.5 mb-5">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm font-display">N</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-bold font-display">Nishat</span>
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-body">Dental & Healthcare</span>
            </div>
          </div>
          <p className="text-sm opacity-60 leading-relaxed font-body mb-6">
            Advanced dental care in Darbhanga with modern technology and compassionate treatment.
          </p>
          <div className="flex gap-3">
            {["Facebook", "Instagram", "YouTube"].map((s) => (
              <a key={s} href="#" className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary/30 flex items-center justify-center transition-colors text-xs font-body">
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
          <div className="flex flex-col gap-3 text-sm opacity-70 font-body">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact" },
              { to: "/book-appointment", label: "Book Appointment" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="hover:text-primary hover:opacity-100 transition-all flex items-center gap-1 group">
                {l.label}
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-5 text-sm uppercase tracking-wider">Services</h4>
          <div className="flex flex-col gap-3 text-sm opacity-70 font-body">
            <span>Root Canal Treatment</span>
            <span>Teeth Whitening</span>
            <span>Dental Implants</span>
            <span>Braces & Aligners</span>
            <span>Crowns & Bridges</span>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-5 text-sm uppercase tracking-wider">Contact</h4>
          <div className="flex flex-col gap-4 text-sm opacity-70 font-body">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
              <span>Near Shiksha Bhawan, Karamganj Main Road, Darbhanga, Bihar</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 shrink-0 text-primary" />
              <a href="tel:+919876543210" className="hover:text-primary transition-colors">+91 98765 43210</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 shrink-0 text-primary" />
              <span>info@nishatdental.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 shrink-0 text-primary" />
              <span>Mon–Sat: 9 AM – 8 PM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-40 font-body">
        <span>© {new Date().getFullYear()} Nishat Dental & Healthcare. All rights reserved.</span>
        <span>Best Dentist in Darbhanga, Bihar</span>
      </div>
    </div>
  </footer>
);

export default Footer;
