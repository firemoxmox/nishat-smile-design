import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container mx-auto px-4 pt-14 pb-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-extrabold text-sm font-display">N</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold font-display">Nishat Dental</span>
              <span className="text-[9px] uppercase tracking-[0.2em] opacity-40 font-body">& Healthcare</span>
            </div>
          </div>
          <p className="text-xs opacity-40 leading-relaxed font-body mb-5 max-w-[220px]">
            Advanced dental care in Darbhanga with modern technology and compassionate treatment.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4 text-xs uppercase tracking-wider opacity-70">Quick Links</h4>
          <div className="flex flex-col gap-2.5 text-xs opacity-50 font-body">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact" },
              { to: "/book-appointment", label: "Book Appointment" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="hover:text-primary hover:opacity-100 transition-all">{l.label}</Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4 text-xs uppercase tracking-wider opacity-70">Services</h4>
          <div className="flex flex-col gap-2.5 text-xs opacity-50 font-body">
            <span>Root Canal Treatment</span>
            <span>Teeth Whitening</span>
            <span>Dental Implants</span>
            <span>Braces & Aligners</span>
            <span>Crowns & Bridges</span>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4 text-xs uppercase tracking-wider opacity-70">Contact</h4>
          <div className="flex flex-col gap-3 text-xs opacity-50 font-body">
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-primary" />
              <span>Near Shiksha Bhawan, Karamganj, Darbhanga</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 shrink-0 text-primary" />
              <a href="tel:+919876543210" className="hover:text-primary transition-colors">+91 98765 43210</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 shrink-0 text-primary" />
              <span>info@nishatdental.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 shrink-0 text-primary" />
              <span>Mon–Sat: 9 AM – 8 PM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 pt-5 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] opacity-30 font-body">
        <span>© {new Date().getFullYear()} Nishat Dental & Healthcare. All rights reserved.</span>
        <span>Best Dentist in Darbhanga, Bihar</span>
      </div>
    </div>
  </footer>
);

export default Footer;
