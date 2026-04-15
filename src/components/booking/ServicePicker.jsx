import React from "react";
import {
  Zap,
  Sparkles,
  CircleDot,
  Smile,
  Scissors,
  Crown,
  Baby,
  Stethoscope,
  MoreHorizontal,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    label: "Root Canal Treatment",
    icon: Zap,
    benefit: "Pain-free & single sitting",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    glow: "shadow-blue-200",
  },
  {
    label: "Teeth Whitening",
    icon: Sparkles,
    benefit: "Brighter in one visit",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
    glow: "shadow-amber-200",
  },
  {
    label: "Dental Implants",
    icon: CircleDot,
    benefit: "Permanent & natural look",
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-200",
    glow: "shadow-teal-200",
  },
  {
    label: "Braces & Aligners",
    icon: Smile,
    benefit: "Straighten at any age",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
    glow: "shadow-purple-200",
  },
  {
    label: "Tooth Extraction",
    icon: Scissors,
    benefit: "Safe & painless removal",
    color: "text-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-200",
    glow: "shadow-rose-200",
  },
  {
    label: "Crowns & Bridges",
    icon: Crown,
    benefit: "Restore & protect teeth",
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
    glow: "shadow-orange-200",
  },
  {
    label: "Kids Dentistry",
    icon: Baby,
    benefit: "Gentle & child-friendly",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    glow: "shadow-emerald-200",
  },
  {
    label: "General Checkup",
    icon: Stethoscope,
    benefit: "Full dental assessment",
    color: "text-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-200",
    glow: "shadow-sky-200",
  },
  {
    label: "Other",
    icon: MoreHorizontal,
    benefit: "Any other concern",
    color: "text-gray-600",
    bg: "bg-gray-50",
    border: "border-gray-200",
    glow: "shadow-gray-200",
  },
];

export default function ServicePicker({ selected, onSelect }) {
  return (
    <div>
      <div className="mb-5">
        <h3 className="font-heading font-bold text-foreground text-lg">
          Select a Service
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Choose the treatment you need
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {services.map((s, i) => {
          const isSelected = selected === s.label;
          return (
            <motion.button
              key={s.label}
              type="button"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => onSelect(s.label)}
              className={`relative group text-left rounded-2xl p-4 border-2 transition-all duration-200 hover:-translate-y-0.5
                ${
                  isSelected
                    ? `${s.border} ${s.bg} shadow-lg ${s.glow}`
                    : "border-border/50 bg-white hover:border-border hover:shadow-md"
                }`}
            >
              {isSelected && (
                <motion.div
                  layoutId="service-glow"
                  className={`absolute inset-0 rounded-2xl ${s.bg} opacity-50`}
                />
              )}
              <div
                className={`relative w-9 h-9 rounded-xl ${isSelected ? s.bg : "bg-muted"} flex items-center justify-center mb-3 transition-colors`}
              >
                <s.icon
                  className={`w-5 h-5 ${isSelected ? s.color : "text-muted-foreground"}`}
                />
              </div>
              <p
                className={`relative text-xs font-bold leading-tight mb-1 ${isSelected ? s.color : "text-foreground"}`}
              >
                {s.label}
              </p>
              <p className="relative text-xs text-muted-foreground leading-tight">
                {s.benefit}
              </p>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
