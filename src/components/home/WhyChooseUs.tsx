import React from "react";
import {
  Heart,
  Cpu,
  BadgeIndianRupee,
  SprayCan,
  UserCheck,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Heart,
    title: "Pain-Free Procedures",
    desc: "Advanced anesthesia and gentle techniques ensure complete comfort throughout every treatment.",
    gradient: "from-rose-500 to-pink-600",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
  {
    icon: Cpu,
    title: "Latest Technology",
    desc: "Digital X-rays, rotary instruments, and cutting-edge dental equipment for precise results.",
    gradient: "from-blue-500 to-cyan-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: BadgeIndianRupee,
    title: "Affordable Pricing",
    desc: "Quality dental care at fair, transparent prices. EMI options available for major treatments.",
    gradient: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: SprayCan,
    title: "Hygienic & Safe",
    desc: "Fully sterilized instruments and a spotlessly clean environment meeting international standards.",
    gradient: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    icon: UserCheck,
    title: "Personalized Care",
    desc: "Every patient receives a customized treatment plan tailored to their unique dental needs.",
    gradient: "from-amber-500 to-orange-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    desc: "Open Monday to Saturday 9AM–9PM. Appointments also available on Sundays.",
    gradient: "from-sky-500 to-indigo-600",
    bg: "bg-sky-50",
    border: "border-sky-100",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-semibold text-xs uppercase tracking-widest mb-3">
            Why Patients Trust Us
          </p>
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-4">
            The Nishat Dental Difference
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base lg:text-lg">
            We don't just treat teeth — we build lasting relationships based on
            trust, care, and exceptional results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group relative bg-white rounded-3xl p-7 border ${item.border} shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden`}
            >
              {/* Hover gradient bg */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}
              />

              <div
                className={`w-13 h-13 w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center mb-5`}
              >
                <item.icon
                  className={`w-6 h-6 bg-gradient-to-br ${item.gradient} text-transparent`}
                  style={{
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                />
              </div>
              <h3 className="font-heading font-bold text-foreground text-base mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
