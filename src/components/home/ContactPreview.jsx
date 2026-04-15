import React from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-secondary font-medium text-sm uppercase tracking-widest mb-3">
            Visit Us
          </p>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
            Find Us in Darbhanga
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden h-80 lg:h-full min-h-[320px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.8!2d85.9045!3d26.1390!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ee3e70b8765555%3A0x0!2sNISHAT%20DENTAL%20and%20HEALTHCARE!5e0!3m2!1sen!2sin!4v1700000000001!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nishat Dental and Healthcare location in Darbhanga"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex gap-4 p-5 bg-background rounded-2xl border border-border/50">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">
                  Address
                </h3>
                <p className="text-sm text-muted-foreground">
                  Near Shiksha Bhawan, Karamganj, Darbhanga, Bihar, India
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-background rounded-2xl border border-border/50">
              <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">
                  Phone
                </h3>
                <a
                  href="tel:+919876543210"
                  className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-background rounded-2xl border border-border/50">
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">
                  Email
                </h3>
                <a
                  href="mailto:info@nishatdental.com"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  info@nishatdental.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-background rounded-2xl border border-border/50">
              <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">
                  Working Hours
                </h3>
                <p className="text-sm text-muted-foreground">
                  Monday – Saturday: 9:00 AM – 9:00 PM
                </p>
                <p className="text-sm text-muted-foreground">
                  Sunday: By Appointment Only
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
