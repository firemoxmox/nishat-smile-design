import React from "react";
import { User, Phone, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function PatientDetails({ form, onChange }) {
  return (
    <div>
      <div className="mb-5">
        <h3 className="font-heading font-bold text-foreground text-lg">
          Your Details
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Quick and easy — just the essentials
        </p>
      </div>

      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <label className="text-xs font-semibold text-foreground uppercase tracking-wide block mb-1.5">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Enter your full name"
              value={form.patient_name}
              onChange={(e) => onChange("patient_name", e.target.value)}
              required
              className="pl-11 h-13 h-12 rounded-2xl border-2 border-border/60 focus:border-primary bg-white text-sm"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <label className="text-xs font-semibold text-foreground uppercase tracking-wide block mb-1.5">
            Phone Number <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
              <span className="text-sm font-semibold text-muted-foreground">
                🇮🇳
              </span>
              <Phone className="w-3.5 h-3.5 text-muted-foreground" />
            </div>
            <Input
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              value={form.phone}
              onChange={(e) => onChange("phone", e.target.value)}
              required
              className="pl-16 h-12 rounded-2xl border-2 border-border/60 focus:border-primary bg-white text-sm"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <label className="text-xs font-semibold text-foreground uppercase tracking-wide block mb-1.5">
            Message{" "}
            <span className="text-muted-foreground font-normal normal-case">
              (optional)
            </span>
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-3.5 w-4 h-4 text-muted-foreground" />
            <Textarea
              placeholder="Describe your concern or any questions for Dr. Kamil..."
              value={form.message}
              onChange={(e) => onChange("message", e.target.value)}
              className="pl-11 min-h-[90px] rounded-2xl border-2 border-border/60 focus:border-primary bg-white text-sm resize-none"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
