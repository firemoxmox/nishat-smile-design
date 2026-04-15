import React, { useEffect, useRef, useState } from "react";
import { Award, Users, Cpu, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

function CountUp({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const num = parseInt(target);
        const step = Math.ceil(num / 40);
        const timer = setInterval(() => {
          start += step;
          if (start >= num) {
            setCount(num);
            clearInterval(timer);
          } else setCount(start);
        }, 40);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  {
    icon: Award,
    label: "Years Experience",
    value: "12",
    suffix: "+",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Users,
    label: "Happy Patients",
    value: "1000",
    suffix: "+",
    color: "from-teal-500 to-emerald-500",
    bg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    icon: Cpu,
    label: "Modern Equipment",
    value: "15",
    suffix: "+",
    color: "from-purple-500 to-indigo-500",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: ShieldCheck,
    label: "Sterilized & Safe",
    value: "100",
    suffix: "%",
    color: "from-green-500 to-lime-500",
    bg: "bg-green-50",
    iconColor: "text-green-600",
  },
];

export default function TrustStats() {
  return (
    <section className="relative -mt-10 z-20 px-4 sm:px-6 lg:px-8 pb-0">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/8 border border-white p-8 lg:p-10"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${stat.bg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className={`w-7 h-7 ${stat.iconColor}`} />
                </div>
                <p
                  className={`font-heading text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                >
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-muted-foreground mt-1.5 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
