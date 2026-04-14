import { HeartPulse, Cpu, IndianRupee, Sparkles, UserCheck } from "lucide-react";

const reasons = [
  { icon: HeartPulse, title: "Pain-Free Procedures", desc: "Advanced anesthesia and gentle techniques for a comfortable experience." },
  { icon: Cpu, title: "Advanced Technology", desc: "State-of-the-art digital X-rays, rotary RCT, and laser dentistry." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Quality dental care at transparent, budget-friendly prices." },
  { icon: Sparkles, title: "Hygienic Clinic", desc: "International-standard sterilization and infection control protocols." },
  { icon: UserCheck, title: "Personalized Care", desc: "Tailored treatment plans designed around your unique needs." },
];

const WhyChooseUs = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="text-primary font-semibold text-sm uppercase tracking-wide">Why Choose Us</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
          The Nishat Dental Difference
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {reasons.map((r) => (
          <div key={r.title} className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
              <r.icon className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
