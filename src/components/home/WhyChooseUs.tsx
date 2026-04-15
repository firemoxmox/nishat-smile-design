import { HeartPulse, Cpu, IndianRupee, Sparkles, UserCheck, ShieldCheck } from "lucide-react";

const reasons = [
  { icon: HeartPulse, title: "Pain-Free Procedures", desc: "Advanced anesthesia and gentle techniques for a completely comfortable experience." },
  { icon: Cpu, title: "Latest Technology", desc: "Digital X-rays, rotary RCT, and state-of-the-art dental equipment." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Quality dental care at transparent, budget-friendly prices for everyone." },
  { icon: Sparkles, title: "Personalized Care", desc: "Treatment plans tailored to your unique dental health needs." },
  { icon: ShieldCheck, title: "Sterilized Clinic", desc: "International-standard sterilization and strict infection control protocols." },
  { icon: UserCheck, title: "Trusted by 1000+", desc: "Over a thousand happy patients trust us with their smiles." },
];

const WhyChooseUs = () => (
  <section className="relative overflow-hidden py-20 md:py-28">
    {/* Dark teal background */}
    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(195,85%,15%)] via-[hsl(195,80%,20%)] to-[hsl(180,60%,22%)]" />

    <div className="relative container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="inline-block text-accent font-semibold text-xs uppercase tracking-widest font-body mb-3">Why Choose Us</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white mb-4">
          The Nishat Dental <span className="text-accent">Difference</span>
        </h2>
        <p className="text-white/60 font-body max-w-xl mx-auto text-sm">
          We go above and beyond to ensure every visit is comfortable, effective, and caring.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {reasons.map((r) => (
          <div
            key={r.title}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
              <r.icon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-display font-semibold text-white text-lg mb-2">{r.title}</h3>
            <p className="text-sm text-white/60 font-body leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
