import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

const services = [
  "Root Canal Treatment",
  "Teeth Whitening",
  "Dental Implants",
  "Braces & Aligners",
  "Crowns & Bridges",
  "Kids Dentistry",
];

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Dr. Kamil", path: "/about" },
  { label: "Our Services", path: "/services" },
  { label: "Book Appointment", path: "/book-appointment" },
  { label: "Contact Us", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">
                  N
                </span>
              </div>
              <div>
                <p className="font-heading font-semibold text-sm">
                  Nishat Dental
                </p>
                <p className="text-xs text-white/70">& Healthcare</p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Advanced dental care in Darbhanga with pain-free treatments,
              modern technology, and personalized care by Dr. Kamil Shahnawaz.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-4">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <span className="text-white/70">
                  Near Shiksha Bhawan, Karamganj, Darbhanga, Bihar
                </span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <a
                  href="tel:+919905056677"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  +91 99050 56677
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <a
                  href="mailto:nishatdentalhealthcare@gmail.com"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  nishatdentalhealthcare@gmail.com
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <div className="text-white/70">
                  <p>Mon – Sat: 9:00 AM – 9:00 PM</p>
                  <p>Sunday: By Appointment</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            © 2026 Nishat Dental & Healthcare. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Best Dentist in Darbhanga | Root Canal & Teeth Whitening Specialist
          </p>
        </div>
      </div>
    </footer>
  );
}
