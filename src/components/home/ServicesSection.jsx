import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { services } from "@/lib/servicesData";

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[#f0f9ff] to-[#e8f4fd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-semibold text-xs uppercase tracking-widest mb-3">
            Our Expertise
          </p>
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive Dental Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base lg:text-lg">
            From routine checkups to advanced surgical procedures — a full range
            of dental treatments under one roof in Darbhanga.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                to={`/services/${service.slug}`}
                className="group flex flex-col h-full bg-white rounded-3xl p-6 shadow-sm hover:shadow-2xl hover:shadow-primary/10 border border-white hover:border-primary/10 transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${service.bgAccent} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`w-6 h-6 ${service.accentColor}`} />
                </div>
                <h3 className="font-heading font-bold text-foreground text-base mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                  {service.shortDesc}
                </p>
                <span
                  className={`inline-flex items-center gap-1 text-sm font-semibold ${service.accentColor} group-hover:gap-2 transition-all`}
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-2 border-primary/20 hover:border-primary hover:text-primary transition-colors"
            >
              View All Services <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
