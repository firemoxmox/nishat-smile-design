import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ServiceHero({ service, image }) {
  return (
    <section
      className={`pt-24 lg:pt-28 pb-16 lg:pb-20 bg-gradient-to-br ${service.heroColor}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Services
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium ${service.bgAccent} ${service.accentColor} mb-5`}
            >
              <service.icon className="w-3.5 h-3.5" />
              Dental Service — Darbhanga
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              {service.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              {service.tagline}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {service.fullDesc}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/book-appointment">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-7"
                >
                  Book This Treatment <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href="tel:+919905056677">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-7 border-2"
                >
                  <Phone className="w-4 h-4 mr-2" /> +91 99050 56677
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/10">
              {image ? (
                <img
                  src={image}
                  alt={`${service.title} at Nishat Dental Darbhanga`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div
                  className={`w-full h-full ${service.bgAccent} flex items-center justify-center`}
                >
                  <service.icon
                    className={`w-24 h-24 ${service.accentColor} opacity-30`}
                  />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
