import { HeartPulse, Cpu, IndianRupee, Sparkles, UserCheck, ShieldCheck } from "lucide-react";
import modernClinic from "@/assets/modern-clinic.jpg";

const reasons = [
  { icon: HeartPulse, title: "Pain-Free", desc: "Advanced anesthesia for complete comfort." },
  { icon: Cpu, title: "Latest Tech", desc: "Digital X-rays & rotary instruments." },
  { icon: IndianRupee, title: "Affordable", desc: "Transparent, budget-friendly pricing." },
  { icon: Sparkles, title: "Hygienic", desc: "International sterilization standards." },
  { icon: UserCheck, title: "Personal Care", desc: "Plans tailored to your needs." },
  { icon: ShieldCheck, title: "Trusted", desc: "1000+ happy patients trust us." },
];

const WhyChooseUs = () => (
  <section className="section-padding overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="inline-block text-primary font-semibold text-xs uppercase tracking-widest font-body mb-3">Why Us</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-foreground mb-4">
          The Nishat Dental <span className="text-gradient">difference</span>
        </h2>
        <p className="text-muted-foreground font-body max-w-xl mx-auto">
          We go above and beyond to ensure every visit is comfortable, effective, and caring.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-center">
        {/* Left column */}
        <div className="space-y-6">
          {reasons.slice(0, 3).map((r) => (
            <div key={r.title} className="flex items-start gap-4 group">
              <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                <r.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-0.5">{r.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center image */}
        <div className="hidden lg:block">
          <div className="rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10 aspect-[3/4]">
            <img src={modernClinic} alt="Modern dental clinic" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {reasons.slice(3).map((r) => (
            <div key={r.title} className="flex items-start gap-4 group lg:flex-row-reverse lg:text-right">
              <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                <r.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-0.5">{r.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
