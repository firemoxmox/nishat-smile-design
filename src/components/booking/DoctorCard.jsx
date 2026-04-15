import React from "react";
import { Star, Award, ShieldCheck, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const DOCTOR_IMAGE =
  "https://media.base44.com/images/public/69de4d5b6aec6158ad57d1be/331d44816_image.png";

export default function DoctorCard({ summary }) {
  return (
    <div className="space-y-5">
      {/* Doctor info */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white shadow-xl shadow-black/5 p-6"
      >
        <div className="flex items-start gap-4">
          <div className="relative shrink-0">
            <img
              src={DOCTOR_IMAGE}
              alt="Dr. Kamil Shahnawaz"
              className="w-20 h-20 rounded-2xl object-cover object-top border-2 border-white shadow-md"
            />
            <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-heading font-bold text-foreground text-lg leading-tight">
              Dr. Kamil Shahnawaz
            </h3>
            <p className="text-sm text-muted-foreground mt-0.5">
              MDS · Dental Surgeon
            </p>
            <div className="flex items-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                />
              ))}
              <span className="text-xs text-muted-foreground ml-1">
                5.0 · 200+ reviews
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 bg-blue-50 rounded-xl px-3 py-2">
            <Award className="w-4 h-4 text-primary shrink-0" />
            <span className="text-xs font-semibold text-foreground">
              12+ Years Exp.
            </span>
          </div>
          <div className="flex items-center gap-2 bg-green-50 rounded-xl px-3 py-2">
            <ShieldCheck className="w-4 h-4 text-green-600 shrink-0" />
            <span className="text-xs font-semibold text-foreground">
              1000+ Patients
            </span>
          </div>
        </div>

        <div className="flex items-start gap-2 mt-4 pt-4 border-t border-border/40">
          <MapPin className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground">
            Near Shiksha Bhawan, Karamganj, Darbhanga, Bihar
          </p>
        </div>
      </motion.div>

      {/* Live Summary */}
      {(summary.service || summary.date || summary.time) && (
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-3xl border border-primary/15 p-5"
        >
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            Your Selection
          </p>
          <div className="space-y-2">
            {summary.service && (
              <div className="flex items-center gap-2 text-sm text-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="font-medium">{summary.service}</span>
              </div>
            )}
            {summary.date && (
              <div className="flex items-center gap-2 text-sm text-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span>{summary.date}</span>
              </div>
            )}
            {summary.time && (
              <div className="flex items-center gap-2 text-sm text-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>{summary.time}</span>
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Trust note */}
      <div className="text-center">
        <p className="text-xs text-muted-foreground leading-relaxed">
          Trusted by hundreds of patients in Darbhanga.
          <br />
          <span className="text-green-600 font-medium">
            Confirmation sent via WhatsApp.
          </span>
        </p>
      </div>
    </div>
  );
}
