import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  ArrowRight,
  Star,
  MessageCircle,
  ShieldCheck,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection({ heroImage, doctorImage }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-[#f0f9ff] to-[#e0f2fe]">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-teal-200/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-36 lg:pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT: Content */}
          <div>
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white border border-cyan-200 text-secondary px-4 py-1.5 rounded-full text-sm font-medium shadow-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Now Accepting Patients · Open Today
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-secondary font-semibold text-xs uppercase tracking-widest mb-3"
            >
              Nishat Dental & Healthcare · Darbhanga
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-5"
            >
              Confident Smiles{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Begin Here
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="6"
                  viewBox="0 0 200 6"
                  fill="none"
                >
                  <path
                    d="M0 3 Q50 0 100 3 Q150 6 200 3"
                    stroke="url(#ul)"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="ul"
                      x1="0"
                      y1="0"
                      x2="200"
                      y2="0"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0e7490" />
                      <stop offset="1" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg"
            >
              Advanced, painless dental care in Darbhanga with modern technology
              and expert hands. Experience the finest dental treatment by Dr.
              Kamil Shahnawaz — MDS Dental Surgeon.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Link to="/book-appointment">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white rounded-full px-8 h-12 text-base shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5"
                >
                  Book Appointment <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a
                href="https://wa.me/919905056677?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Nishat%20Dental."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 h-12 text-base shadow-lg shadow-green-500/20 transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Now
                </Button>
              </a>
            </motion.div>

            {/* Trust badges row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {[
                {
                  icon: Star,
                  label: "5 Star Rated",
                  color: "text-amber-500",
                  bg: "bg-amber-50 border-amber-100",
                },
                {
                  icon: Award,
                  label: "12+ Yrs Experience",
                  color: "text-primary",
                  bg: "bg-blue-50 border-blue-100",
                },
                {
                  icon: ShieldCheck,
                  label: "1000+ Patients",
                  color: "text-green-600",
                  bg: "bg-green-50 border-green-100",
                },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold ${badge.bg} ${badge.color}`}
                >
                  <badge.icon className="w-3.5 h-3.5" />
                  {badge.label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Doctor image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Glow ring */}
            <div className="absolute inset-0 m-auto w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-cyan-300/30 to-blue-400/20 rounded-full blur-2xl" />

            <div className="relative w-72 sm:w-80 lg:w-[420px]">
              {/* Main image card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border-4 border-white">
                <img
                  src={doctorImage}
                  alt="Dr. Kamil Shahnawaz - MDS Dental Surgeon, Nishat Dental Darbhanga"
                  className="w-full aspect-[4/5] object-cover object-top"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                {/* Name tag */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl px-4 py-3">
                    <p className="text-white font-heading font-bold text-lg leading-tight">
                      Dr. Kamil Shahnawaz
                    </p>
                    <p className="text-white/80 text-xs mt-0.5">
                      MDS · Dental Surgeon · Darbhanga
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-5 -left-6 bg-white rounded-2xl shadow-xl shadow-black/10 px-5 py-3.5 border border-border/40"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground text-base leading-none">
                      5.0
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Patient Rating
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating experience card */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl shadow-black/10 px-5 py-3.5 border border-border/40"
              >
                <p className="font-heading font-bold text-primary text-xl leading-none">
                  12+
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Years of Experience
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
