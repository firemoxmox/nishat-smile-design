import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceBenefits({ service }) {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-secondary font-medium text-sm uppercase tracking-widest mb-3">
            Why Choose This Treatment
          </p>
          <h2 className="font-heading text-2xl lg:text-4xl font-bold text-foreground">
            Benefits of {service.title}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.benefits.map((benefit, i) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-border/50"
            >
              <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <p className="text-sm text-foreground leading-relaxed">
                {benefit}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
