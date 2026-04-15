import { Link } from "react-router-dom";
import { Stethoscope, Sparkles, CircleDot, SmilePlus, Scissors, Crown, Baby, Syringe, ArrowRight } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "Root Canal", desc: "Painless RCT with advanced rotary instruments." },
  { icon: Sparkles, title: "Teeth Whitening", desc: "Professional whitening for a brighter smile." },
  { icon: CircleDot, title: "Dental Implants", desc: "Permanent tooth replacement solutions." },
  { icon: SmilePlus, title: "Braces & Aligners", desc: "Straighten your teeth invisibly." },
  { icon: Scissors, title: "Tooth Extraction", desc: "Safe and painless tooth removal." },
  { icon: Crown, title: "Crowns & Bridges", desc: "Custom restorations for damaged teeth." },
  { icon: Baby, title: "Kids Dentistry", desc: "Gentle care designed for children." },
  { icon: Syringe, title: "Gum Treatment", desc: "Advanced periodontal care." },
];

const ServicesGrid = () => (
  <section className="section-padding bg-card">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <span className="inline-block text-primary font-semibold text-xs uppercase tracking-widest font-body mb-3">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-foreground">
            Comprehensive dental
            <br />
            <span className="text-gradient">services for everyone</span>
          </h2>
        </div>
        <Link to="/services" className="inline-flex items-center gap-2 text-primary text-sm font-semibold font-body hover:gap-3 transition-all shrink-0">
          View All Services <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {services.map((s) => (
          <Link
            key={s.title}
            to="/services"
            className="group bg-background rounded-2xl p-5 md:p-6 border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display font-bold text-foreground text-sm md:text-base mb-1.5">{s.title}</h3>
            <p className="text-xs text-muted-foreground font-body leading-relaxed">{s.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
