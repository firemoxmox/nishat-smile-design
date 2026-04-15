import { Link } from "react-router-dom";
import { Stethoscope, Sparkles, CircleDot, SmilePlus, Scissors, Crown, Baby, Syringe, ArrowRight } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "Root Canal Treatment", desc: "Painless RCT with advanced rotary instruments to save your natural teeth." },
  { icon: Sparkles, title: "Teeth Whitening", desc: "Professional whitening for a brighter, confident smile in a single visit." },
  { icon: CircleDot, title: "Dental Implants", desc: "Permanent tooth replacement that looks and feels like your natural teeth." },
  { icon: SmilePlus, title: "Braces & Aligners", desc: "Straighten your teeth with metal braces or invisible aligners." },
  { icon: Scissors, title: "Tooth Extraction", desc: "Safe and painless tooth removal with minimal recovery time." },
  { icon: Crown, title: "Crowns & Bridges", desc: "Custom-made restorations for damaged or missing teeth." },
  { icon: Baby, title: "Kids Dentistry", desc: "Gentle dental care designed especially for children." },
  { icon: Syringe, title: "Gum Treatment", desc: "Advanced periodontal care for healthy gums and strong foundations." },
];

const ServicesGrid = () => (
  <section className="section-padding bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="inline-block text-primary font-semibold text-xs uppercase tracking-widest font-body mb-3">Our Services</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
          Comprehensive Dental <span className="text-primary">Services</span>
        </h2>
        <p className="text-muted-foreground font-body max-w-xl mx-auto text-sm">
          From routine check-ups to advanced treatments, we provide a full range of dental services under one roof.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((s) => (
          <Link
            key={s.title}
            to="/services"
            className="group bg-card rounded-xl p-5 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-foreground text-base mb-2">{s.title}</h3>
            <p className="text-xs text-muted-foreground font-body leading-relaxed mb-3">{s.desc}</p>
            <span className="inline-flex items-center gap-1 text-primary text-xs font-medium font-body opacity-0 group-hover:opacity-100 transition-opacity">
              Learn More <ArrowRight className="w-3 h-3" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
