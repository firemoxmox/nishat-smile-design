import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { services } from "@/lib/servicesData";

export default function Services() {
  return (
    <div className="pt-20 lg:pt-24 pb-16 lg:pb-0">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-primary/[0.03]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-secondary font-medium text-sm uppercase tracking-widest mb-3">
              What We Offer
            </p>
            <h1 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Our Dental Services
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
              From preventive care to advanced surgical treatments, Nishat
              Dental offers comprehensive dental solutions for the entire family
              — delivered with care, precision, and modern technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid — cards linking to detail pages */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group flex flex-col h-full bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl hover:shadow-primary/5 border border-border/50 transition-all duration-300 hover:-translate-y-1"
                  aria-label={`Learn about ${service.title} at Nishat Dental`}
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl ${service.bgAccent} flex items-center justify-center mb-5`}
                  >
                    <service.icon
                      className={`w-7 h-7 ${service.accentColor}`}
                    />
                  </div>

                  {/* Title + tagline */}
                  <h2 className="font-heading font-bold text-foreground text-lg mb-1 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-xs font-medium text-muted-foreground mb-3 italic">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    {service.shortDesc}
                  </p>

                  {/* Feature chips */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.features.slice(0, 2).map((f) => (
                      <span
                        key={f}
                        className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full ${service.bgAccent} ${service.accentColor}`}
                      >
                        <CheckCircle className="w-3 h-3" /> {f}
                      </span>
                    ))}
                  </div>

                  {/* CTA row */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/40">
                    <span
                      className={`inline-flex items-center gap-1 text-sm font-medium ${service.accentColor} group-hover:gap-2 transition-all`}
                    >
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                    <Link
                      to="/book-appointment"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs text-muted-foreground hover:text-secondary underline underline-offset-2 transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-6">
            Not Sure Which Treatment You Need?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Schedule a consultation with Dr. Kamil Shahnawaz. He'll examine your
            dental health and recommend the best treatment plan for you.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/book-appointment">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 rounded-full px-8 h-12 text-base"
              >
                Book a Consultation <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href="tel:+919905056677">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white/30 hover:bg-white/10 rounded-full px-8 h-12"
              >
                Call +91 99050 56677
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
