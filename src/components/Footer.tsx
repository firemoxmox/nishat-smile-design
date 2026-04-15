import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

const Footer = () => (
  <footer className="relative bg-[hsl(195,85%,10%)] text-white overflow-hidden">
    <div className="container mx-auto px-4 pt-14 pb-6 relative">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-sm font-display">N</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold font-display">Nishat Dental</span>
              <span className="text-[9px] uppercase tracking-[0.15em] opacity-50 font-body">& Healthcare</span>
            </div>
          </div>
          <p className="text-xs opacity-50 leading-relaxed font-body mb-5">
            Advanced dental care in Darbhanga with modern technology and compassionate treatment.
          </p>
          <div className="flex gap-2">
            {["F", "I", "Y"].map((s) => (
              <a key={s} href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary/40 flex items-center justify-center transition-colors text-xs font-body">
                {s}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-xs uppercase tracking-wider text-white/80">Quick Links</h4>
          <div className="flex flex-col gap-2.5 text-xs opacity-60 font-body">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact" },
              { to: "/book-appointment", label: "Book Appointment" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="hover:text-accent hover:opacity-100 transition-all">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-xs uppercase tracking-wider text-white/80">Our Services</h4>
          <div className="flex flex-col gap-2.5 text-xs opacity-60 font-body">
            <span>Root Canal Treatment</span>
            <span>Teeth Whitening</span>
            <span>Dental Implants</span>
            <span>Braces & Aligners</span>
            <span>Crowns & Bridges</span>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-xs uppercase tracking-wider text-white/80">Contact Us</h4>
          <div className="flex flex-col gap-3 text-xs opacity-60 font-body">
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-accent" />
              <span>Near Shiksha Bhawan, Karamganj, Darbhanga</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 shrink-0 text-accent" />
              <a href="tel:+919876543210" className="hover:text-accent transition-colors">+91 98765 43210</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 shrink-0 text-accent" />
              <span>info@nishatdental.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 shrink-0 text-accent" />
              <span>Mon–Sat: 9 AM – 8 PM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-5 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] opacity-40 font-body">
        <span>© {new Date().getFullYear()} Nishat Dental & Healthcare. All rights reserved.</span>
        <span>Best Dentist in Darbhanga, Bihar</span>
      </div>
    </div>
  </footer>
);

export default Footer;
