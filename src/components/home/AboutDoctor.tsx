import React from "react";
import { Link } from "react-router-dom";
import {
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const highlights = [
  "MDS (Master of Dental Surgery)",
  "12+ years of clinical excellence",
  "Specialist in pain-free procedures",
  "Advanced implantology & orthodontics",
  "Gentle, patient-first approach",
];

export default function AboutDoctor({ doctorImage }) {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[#f0f9ff] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Decorative ring */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-[2.5rem] blur-xl" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/15 border-4 border-white">
                <img
                  src={doctorImage}
                  alt="Dr. Kamil Shahnawaz - MDS Dental Surgeon at Nishat Dental, Darbhanga"
                  className="w-full aspect-[4/5] object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-heading font-bold text-xl leading-tight">
                    Dr. Kamil Shahnawaz
                  </p>
                  <p className="text-white/80 text-sm mt-0.5">
                    MDS · Dental Surgeon
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -right-4 bg-white rounded-2xl shadow-xl shadow-black/10 px-5 py-4 border border-border/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground text-sm">
                      MDS Certified
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Dental Surgeon
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-secondary font-semibold text-xs uppercase tracking-widest mb-4">
              Meet Your Dentist
            </p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-2">
              Dr. Kamil
            </h2>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-6">
              Shahnawaz
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5 text-base lg:text-lg">
              With over{" "}
              <strong className="text-foreground">
                12 years of dedicated experience
              </strong>
              , Dr. Kamil Shahnawaz brings a unique blend of expertise,
              compassion, and modern techniques to every patient. His gentle
              approach ensures even the most anxious patients feel comfortable
              and at ease.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base lg:text-lg">
              Trained in the latest dental technologies, he is committed to
              delivering the{" "}
              <strong className="text-foreground">
                best dental care in Darbhanga
              </strong>{" "}
              — from routine checkups to complex surgical procedures.
            </p>

            <ul className="space-y-3 mb-9">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-foreground"
                >
                  <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Link to="/about">
                <Button
                  variant="outline"
                  className="rounded-full px-6 border-2 hover:border-primary hover:text-primary transition-colors"
                >
                  Full Profile <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a
                href="https://wa.me/919905056677?text=Hello%20Dr.%20Kamil%2C%20I%20would%20like%20to%20consult."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6 shadow-md shadow-green-500/20">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat with Dr. Kamil
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
