import { Link } from "react-router-dom";
import { Stethoscope, Sparkles, CircleDot, SmilePlus, Scissors, Crown, Baby, ArrowRight } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "Root Canal Treatment", desc: "Painless RCT with advanced rotary instruments to save your natural teeth.", color: "from-primary/10 to-primary/5" },
  { icon: Sparkles, title: "Teeth Whitening", desc: "Professional whitening for a brighter, confident smile in a single visit.", color: "from-accent/10 to-accent/5" },
  { icon: CircleDot, title: "Dental Implants", desc: "Permanent tooth replacement that looks and feels like your natural teeth.", color: "from-primary/10 to-primary/5" },
  { icon: SmilePlus, title: "Braces & Aligners", desc: "Straighten your teeth with metal braces or invisible aligners.", color: "from-accent/10 to-accent/5" },
  { icon: Scissors, title: "Tooth Extraction", desc: "Safe and painless tooth removal with minimal recovery time.", color: "from-primary/10 to-primary/5" },
  { icon: Crown, title: "Crowns & Bridges", desc: "Custom-made restorations for damaged or missing teeth.", color: "from-accent/10 to-accent/5" },
  { icon: Baby, title: "Kids Dentistry", desc: "Gentle dental care designed especially for children.", color: "from-primary/10 to-primary/5" },
];

const ServicesGrid = () => (
  <section className="section-padding bg-secondary/50 relative overflow-hidden">
    {/* Decorative blobs */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10" />

    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest font-body mb-3">Our Services</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
          Comprehensive Dental Care
        </h2>
        <p className="text-muted-foreground font-body max-w-xl mx-auto text-base">
          From routine check-ups to advanced treatments, we provide a full range of dental services under one roof.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <Link
            key={s.title}
            to="/services"
            className="group relative bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
          >
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-foreground text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">{s.desc}</p>
            <div className="flex items-center gap-1 text-primary text-sm font-medium font-body opacity-0 group-hover:opacity-100 transition-opacity">
              Learn More <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
