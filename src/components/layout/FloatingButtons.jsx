import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp floating button */}
      <motion.a
        href="https://wa.me/919905056677?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Nishat%20Dental."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-4 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-colors"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.a>

      {/* Mobile sticky call bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
        <div className="bg-white/90 backdrop-blur-lg border-t border-border px-4 py-2.5 flex items-center gap-2">
          <a
            href="tel:+919905056677"
            className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-full py-3 text-sm font-medium transition-colors hover:bg-primary/90"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <a
            href="https://wa.me/919905056677?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Nishat%20Dental."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white rounded-full py-3 text-sm font-medium transition-colors hover:bg-green-600"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
