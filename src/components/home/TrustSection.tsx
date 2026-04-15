import { Award, Users, Cpu, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Award, label: "Years Experience", value: "12+", color: "bg-primary/10 text-primary" },
  { icon: Users, label: "Happy Patients", value: "1000+", color: "bg-accent/10 text-accent" },
  { icon: Cpu, label: "Dental Services", value: "15+", color: "bg-primary/10 text-primary" },
  { icon: ShieldCheck, label: "Sterilized", value: "100%", color: "bg-accent/10 text-accent" },
];

const TrustSection = () => (
  <section className="py-12 md:py-16 bg-card border-y border-border/50">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((s) => (
          <div key={s.label} className="flex items-center gap-4 justify-center md:justify-start">
            <div className={`w-12 h-12 rounded-2xl ${s.color} flex items-center justify-center shrink-0`}>
              <s.icon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-2xl md:text-3xl font-extrabold font-display text-foreground leading-none block">{s.value}</span>
              <span className="text-xs text-muted-foreground font-body font-medium">{s.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
