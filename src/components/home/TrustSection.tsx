import { Award, Users, Cpu, ShieldCheck } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const stats = [
  { icon: Award, label: "Years Experience", value: 12, suffix: "+" },
  { icon: Users, label: "Happy Patients", value: 1000, suffix: "+" },
  { icon: Cpu, label: "Modern Equipment", value: 100, suffix: "%" },
  { icon: ShieldCheck, label: "Sterilized", value: 100, suffix: "%" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <div ref={ref} className="text-4xl md:text-5xl font-bold font-display">{count}{suffix}</div>;
};

const TrustSection = () => (
  <section className="relative -mt-1">
    <div className="bg-gradient-to-r from-primary via-primary to-accent">
      <div className="container mx-auto px-4 py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center text-primary-foreground">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-primary-foreground/15 flex items-center justify-center backdrop-blur-sm">
                <s.icon className="w-7 h-7" />
              </div>
              <Counter target={s.value} suffix={s.suffix} />
              <span className="text-sm opacity-80 font-body font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TrustSection;
