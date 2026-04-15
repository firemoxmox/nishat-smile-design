import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    treatment: "Root Canal Treatment",
    initials: "PS",
    color: "bg-rose-100 text-rose-600",
    text: "I was extremely anxious about my root canal, but Dr. Kamil made the entire process completely painless. The clinic is spotlessly clean and the staff is very friendly. Highly recommended!",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    treatment: "Dental Implant",
    initials: "RK",
    color: "bg-blue-100 text-blue-600",
    text: "Best dentist in Darbhanga! Got my dental implant done here and the results are amazing. The tooth looks and feels completely natural. Very professional and caring team.",
    rating: 5,
  },
  {
    name: "Anita Devi",
    treatment: "Teeth Whitening",
    initials: "AD",
    color: "bg-purple-100 text-purple-600",
    text: "My teeth look so much brighter after the whitening treatment. Dr. Kamil explained everything clearly and the treatment was quick and comfortable. The clinic has very modern equipment.",
    rating: 5,
  },
  {
    name: "Mohammad Faiz",
    treatment: "Braces Treatment",
    initials: "MF",
    color: "bg-emerald-100 text-emerald-600",
    text: "My son's braces treatment is going wonderfully. Dr. Kamil is very patient with children and makes them feel comfortable. The clinic maintains excellent hygiene standards.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-white/60 font-semibold text-xs uppercase tracking-widest mb-3">
            Patient Stories
          </p>
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-white mb-4">
            Real Patients, Real Results
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-base lg:text-lg">
            Hear from patients who have experienced the Nishat Dental
            difference.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <Quote className="w-7 h-7 text-white/30 mb-4" />
              <p className="text-sm text-white/85 leading-relaxed mb-5 flex-1">
                "{review.text}"
              </p>

              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full ${review.color} flex items-center justify-center font-heading font-bold text-xs shrink-0`}
                >
                  {review.initials}
                </div>
                <div>
                  <p className="font-heading font-semibold text-white text-sm">
                    {review.name}
                  </p>
                  <p className="text-xs text-white/60">{review.treatment}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
