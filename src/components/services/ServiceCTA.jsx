import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ServiceCTA({ service, relatedServices }) {
  const waMessage = `Hello%2C%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(service.title)}`;

  return (
    <>
      {/* CTA Banner */}
      <section className="py-16 lg:py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl lg:text-4xl font-bold text-white mb-4">
              Ready to Get {service.title}?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Book your appointment with Dr. Kamil Shahnawaz at Nishat Dental,
              Darbhanga. Call, WhatsApp, or fill out our online form.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/book-appointment">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 rounded-full px-7"
                >
                  Book Appointment <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href="tel:+919905056677">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white/30 hover:bg-white/10 rounded-full px-7"
                >
                  <Phone className="w-4 h-4 mr-2" /> +91 99050 56677
                </Button>
              </a>
              <a
                href={`https://wa.me/919905056677?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white rounded-full px-7"
                >
                  <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="py-16 lg:py-20 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-between mb-8"
            >
              <h2 className="font-heading text-xl lg:text-2xl font-bold text-foreground">
                Other Services
              </h2>
              <Link
                to="/services"
                className="text-sm text-secondary hover:underline flex items-center gap-1"
              >
                View All <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
            <div className="grid sm:grid-cols-3 gap-4">
              {relatedServices.map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={`/services/${s.slug}`}
                    className="group flex items-start gap-4 p-5 bg-white rounded-2xl border border-border/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl ${s.bgAccent} flex items-center justify-center shrink-0`}
                    >
                      <s.icon className={`w-5 h-5 ${s.accentColor}`} />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-sm text-foreground group-hover:text-secondary transition-colors">
                        {s.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                        {s.shortDesc}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
