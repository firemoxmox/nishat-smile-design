import { HeartPulse, Cpu, IndianRupee, Sparkles, UserCheck } from "lucide-react";
import dentalTools from "@/assets/dental-tools.jpg";

const reasons = [
  { icon: HeartPulse, title: "Pain-Free Procedures", desc: "Advanced anesthesia and gentle techniques for complete comfort." },
  { icon: Cpu, title: "Advanced Technology", desc: "Digital X-rays, rotary RCT, and modern dental equipment." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Quality dental care at transparent, budget-friendly prices." },
  { icon: Sparkles, title: "Hygienic Clinic", desc: "International-standard sterilization & infection control." },
  { icon: UserCheck, title: "Personalized Care", desc: "Treatment plans tailored to your unique needs." },
];

const WhyChooseUs = () => (
  <section className="section-padding overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest font-body mb-3">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground leading-tight mb-10">
            The Nishat Dental <span className="text-gradient">Difference</span>
          </h2>
          <div className="space-y-6">
            {reasons.map((r, i) => (
              <div key={r.title} className="flex gap-5 items-start group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shrink-0 group-hover:from-primary/20 group-hover:to-accent/20 transition-all">
                  <r.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1 text-lg">{r.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image side */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img src={dentalTools} alt="Modern dental equipment" className="w-full h-[500px] object-cover" loading="lazy" />
          </div>
          {/* Floating card */}
          <div className="absolute -bottom-6 -left-4 md:-left-8 glass rounded-2xl p-5 shadow-xl max-w-[220px]">
            <div className="text-3xl font-bold font-display text-primary mb-1">100%</div>
            <p className="text-xs text-muted-foreground font-body">Sterilized environment following international protocols</p>
          </div>
          <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-accent/10 -z-10" />
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
