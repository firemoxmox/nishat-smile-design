import React from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const contactDetails = [
  {
    icon: MapPin,
    title: "Our Location",
    lines: ["Near Shiksha Bhawan, Karamganj", "Darbhanga, Bihar, India"],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Phone,
    title: "Phone Number",
    lines: ["+91 98765 43210"],
    href: "tel:+919876543210",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Mail,
    title: "Email Address",
    lines: ["info@nishatdental.com"],
    href: "mailto:info@nishatdental.com",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon – Sat: 9:00 AM – 9:00 PM", "Sunday: By Appointment"],
    color: "bg-green-100 text-green-600",
  },
];

export default function Contact() {
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
              Get In Touch
            </p>
            <h1 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto">
              We're here to help! Reach out to us via phone, WhatsApp, or visit
              our clinic in Darbhanga. We look forward to giving you the best
              dental experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactDetails.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-background rounded-2xl p-6 border border-border/50 text-center"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-4`}
                >
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2 text-sm">
                  {item.title}
                </h3>
                {item.lines.map((line) => (
                  <p key={line} className="text-sm text-muted-foreground">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="hover:text-secondary transition-colors"
                      >
                        {line}
                      </a>
                    ) : (
                      line
                    )}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-10 text-center">
            <a
              href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Nishat%20Dental."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 h-12 text-base"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Message Us on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">
              Find Us on the Map
            </h2>
            <p className="text-muted-foreground mt-2">
              Near Shiksha Bhawan, Karamganj, Darbhanga
            </p>
          </motion.div>
          <div className="rounded-2xl overflow-hidden h-80 lg:h-[450px] shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.8!2d85.9045!3d26.1390!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ee3e70b8765555%3A0x0!2sNISHAT%20DENTAL%20and%20HEALTHCARE!5e0!3m2!1sen!2sin!4v1700000000001!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nishat Dental Healthcare location map"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
