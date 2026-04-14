import { Link } from "react-router-dom";
import { Stethoscope, Sparkles, CircleDot, SmilePlus, Scissors, Crown, Baby } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { icon: Stethoscope, title: "Root Canal Treatment", desc: "Painless RCT with advanced rotary instruments to save your natural teeth." },
  { icon: Sparkles, title: "Teeth Whitening", desc: "Professional whitening for a brighter, confident smile in a single visit." },
  { icon: CircleDot, title: "Dental Implants", desc: "Permanent tooth replacement that looks and feels like your natural teeth." },
  { icon: SmilePlus, title: "Braces & Aligners", desc: "Straighten your teeth with metal braces or invisible aligners." },
  { icon: Scissors, title: "Tooth Extraction", desc: "Safe and painless tooth removal with minimal recovery time." },
  { icon: Crown, title: "Crowns & Bridges", desc: "Custom-made restorations for damaged or missing teeth." },
  { icon: Baby, title: "Kids Dentistry", desc: "Gentle dental care designed especially for children." },
];

const ServicesGrid = () => (
  <section className="py-16 md:py-24 bg-secondary/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="text-primary font-semibold text-sm uppercase tracking-wide">Our Services</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
          Comprehensive Dental Care
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          From routine check-ups to advanced treatments, we provide a full range of dental services under one roof.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((s) => (
          <Card key={s.title} className="group hover:shadow-lg transition-shadow border-border/50 bg-card">
            <CardContent className="p-6 flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
              <Link to="/services" className="text-primary text-sm font-medium hover:underline mt-auto">
                Learn More →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
