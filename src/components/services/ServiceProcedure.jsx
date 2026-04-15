import React from "react";
import { motion } from "framer-motion";

export default function ServiceProcedure({ service }) {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-secondary font-medium text-sm uppercase tracking-widest mb-3">
            The Process
          </p>
          <h2 className="font-heading text-2xl lg:text-4xl font-bold text-foreground">
            How It Works — Step by Step
          </h2>
        </motion.div>

        <div className="relative">
          {/* vertical connector line */}
          <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-8">
            {service.procedure.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div
                  className={`relative z-10 w-12 h-12 lg:w-16 lg:h-16 rounded-2xl ${service.bgAccent} flex items-center justify-center shrink-0`}
                >
                  <span
                    className={`font-heading font-bold text-sm lg:text-base ${service.accentColor}`}
                  >
                    {step.step}
                  </span>
                </div>
                <div className="pt-2 lg:pt-3">
                  <h3 className="font-heading font-semibold text-foreground text-base lg:text-lg mb-1">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* What to Expect box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mt-12 p-6 rounded-2xl ${service.bgAccent} border border-border/30`}
        >
          <h3
            className={`font-heading font-semibold text-base mb-2 ${service.accentColor}`}
          >
            What to Expect
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {service.whatToExpect}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
