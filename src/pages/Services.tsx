import { Link } from "react-router-dom";
import { Stethoscope, Sparkles, CircleDot, SmilePlus, Scissors, Crown, Baby, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import dentalClinic from "@/assets/dental-clinic.jpg";
import teethWhitening from "@/assets/teeth-whitening.jpg";
import dentistTreating from "@/assets/dentist-treating.jpg";

const services = [
  { icon: Stethoscope, title: "Root Canal Treatment (RCT)", desc: "Our painless root canal treatment uses advanced rotary instruments and digital X-rays to save your natural teeth. Completed in 1-2 visits.", benefits: ["Painless procedure", "Save natural teeth", "Digital X-ray guided", "1-2 visit completion"], image: dentistTreating },
  { icon: Sparkles, title: "Teeth Whitening", desc: "Professional in-office teeth whitening for a brighter, more confident smile. Lighten your teeth by several shades in just one visit.", benefits: ["Instant results", "Long-lasting brightness", "Safe & professional", "Custom shade matching"], image: teethWhitening },
  { icon: CircleDot, title: "Dental Implants", desc: "Permanent tooth replacement solution that looks, feels, and functions like your natural teeth. Premium titanium materials.", benefits: ["Permanent solution", "Natural appearance", "Premium materials", "High success rate"], image: dentalClinic },
  { icon: SmilePlus, title: "Braces & Aligners", desc: "Straighten your teeth with traditional metal braces or modern invisible aligners. Customized orthodontic treatment for all ages.", benefits: ["Metal & ceramic options", "Invisible aligners", "All ages welcome", "Custom treatment plans"], image: null },
  { icon: Scissors, title: "Tooth Extraction", desc: "Safe and painless tooth extraction using modern techniques. Minimal trauma and quick recovery.", benefits: ["Painless extraction", "Minimal recovery", "Post-care guidance", "Emergency services"], image: null },
  { icon: Crown, title: "Crowns & Bridges", desc: "Custom-made dental crowns and bridges to restore damaged or missing teeth with natural-looking results.", benefits: ["Natural appearance", "Durable materials", "Custom fabrication", "Perfect fit guaranteed"], image: null },
  { icon: Baby, title: "Kids Dentistry", desc: "Gentle, child-friendly dental care designed to make your child's visit fun and comfortable. Preventive care focus.", benefits: ["Child-friendly", "Preventive focus", "Gentle approach", "Fun experience"], image: null },
];

const Services = () => (
  <div>
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
      <div className="container mx-auto px-4 text-center relative">
        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest font-body mb-4">Our Services</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6">
          Complete Dental <span className="text-gradient">Solutions</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
          From routine check-ups to advanced surgical procedures — all under one roof.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto px-4 space-y-12">
        {services.map((s, i) => (
          <div key={s.title} className="bg-card rounded-3xl border border-border/50 overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all">
            <div className={`flex flex-col ${s.image ? `lg:flex-row ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}` : ''}`}>
              {s.image && (
                <div className="lg:w-2/5 min-h-[250px]">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
              )}
              <div className={`flex-1 p-8 md:p-10 lg:p-12`}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-5">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4">{s.title}</h2>
                <p className="text-muted-foreground font-body mb-6 leading-relaxed max-w-lg">{s.desc}</p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {s.benefits.map((b) => (
                    <div key={b} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                      <span className="text-sm font-body text-foreground">{b}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="rounded-full px-8 font-body shadow-lg shadow-primary/20 group">
                  <Link to="/book-appointment">
                    Book This Service
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Services;
