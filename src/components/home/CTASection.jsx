import React from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c4a6e] via-[#0e7490] to-[#0891b2]" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-300 rounded-full translate-y-1/2 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-white/80 text-sm mb-8">
            <Sparkles className="w-4 h-4 text-amber-300" />
            Limited Slots Available This Week
          </div>

          <h2 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Your Perfect Smile is{" "}
            <span className="text-cyan-300">Just One</span> Appointment Away
          </h2>
          <p className="text-lg text-white/75 mb-12 max-w-2xl mx-auto leading-relaxed">
            Don't wait for the pain to get worse. Schedule your visit with Dr.
            Kamil Shahnawaz and experience the finest dental care in Darbhanga.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/book-appointment">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 rounded-full px-10 h-14 text-base font-semibold shadow-2xl shadow-black/30 hover:shadow-white/20 transition-all hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4 mr-2 text-amber-500" />
                Book Appointment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href="tel:+919905056677">
              <Button
                size="lg"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-full px-8 h-14 text-base backdrop-blur-sm transition-all hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 mr-2" />
                +91 99050 56677
              </Button>
            </a>
            <a
              href="https://wa.me/919905056677?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-400 text-white rounded-full px-8 h-14 text-base shadow-lg shadow-green-500/30 transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
