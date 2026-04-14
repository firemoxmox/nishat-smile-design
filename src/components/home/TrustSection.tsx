import { Award, Users, Cpu, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Award, label: "Years Experience", value: "12+" },
  { icon: Users, label: "Happy Patients", value: "1000+" },
  { icon: Cpu, label: "Modern Equipment", value: "Latest" },
  { icon: ShieldCheck, label: "Sterilized Environment", value: "100%" },
];

const TrustSection = () => (
  <section className="py-12 bg-primary text-primary-foreground">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-2">
            <s.icon className="w-8 h-8 opacity-90" />
            <span className="text-3xl font-bold">{s.value}</span>
            <span className="text-sm opacity-80">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
