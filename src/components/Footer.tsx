import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">
            <span className="text-primary">Nishat</span> Dental
          </h3>
          <p className="text-sm opacity-80">
            Advanced dental care in Darbhanga with modern technology and compassionate treatment by Dr. Kamil Shahnawaz.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm opacity-80">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            <Link to="/book-appointment" className="hover:text-primary transition-colors">Book Appointment</Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <div className="flex flex-col gap-2 text-sm opacity-80">
            <span>Root Canal Treatment</span>
            <span>Teeth Whitening</span>
            <span>Dental Implants</span>
            <span>Braces & Aligners</span>
            <span>Crowns & Bridges</span>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm opacity-80">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>Near Shiksha Bhawan, Karamganj Main Road, Darbhanga, Bihar</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              <a href="tel:+919876543210" className="hover:text-primary">+91 98765 43210</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0" />
              <span>info@nishatdental.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 shrink-0" />
              <span>Mon–Sat: 9 AM – 8 PM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/20 mt-8 pt-6 text-center text-sm opacity-60">
        © {new Date().getFullYear()} Nishat Dental & Healthcare. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
