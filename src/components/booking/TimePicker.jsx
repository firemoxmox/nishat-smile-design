import React from "react";
import { Flame, Zap } from "lucide-react";
import { motion } from "framer-motion";

const timeGroups = [
  {
    label: "Morning",
    emoji: "🌅",
    slots: [
      "9:00 AM",
      "9:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
    ],
    popular: ["10:00 AM", "10:30 AM"],
  },
  {
    label: "Afternoon",
    emoji: "☀️",
    slots: ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM"],
    popular: ["12:00 PM"],
    booked: ["1:00 PM", "2:00 PM"],
  },
  {
    label: "Evening",
    emoji: "🌆",
    slots: ["3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"],
    popular: ["5:00 PM"],
    booked: ["3:30 PM"],
  },
  {
    label: "Late Evening",
    emoji: "🌙",
    slots: ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM"],
    booked: ["7:30 PM", "8:30 PM"],
  },
];

export default function TimePicker({ selected, onSelect }) {
  return (
    <div>
      <div className="mb-5">
        <h3 className="font-heading font-bold text-foreground text-lg">
          Choose a Time Slot
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Select your preferred appointment time
        </p>
      </div>

      <div className="space-y-5">
        {timeGroups.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: gi * 0.08 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-base">{group.emoji}</span>
              <span className="text-sm font-semibold text-foreground">
                {group.label}
              </span>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-2">
              {group.slots.map((slot) => {
                const isSelected = selected === slot;
                const isBooked = group.booked?.includes(slot);
                const isPopular = group.popular?.includes(slot);

                return (
                  <motion.button
                    key={slot}
                    type="button"
                    disabled={isBooked}
                    onClick={() => !isBooked && onSelect(slot)}
                    whileHover={!isBooked ? { scale: 1.04 } : {}}
                    whileTap={!isBooked ? { scale: 0.97 } : {}}
                    className={`relative rounded-xl py-2.5 px-2 text-xs font-semibold border-2 transition-all duration-150
                      ${
                        isBooked
                          ? "bg-muted/40 border-border/30 text-muted-foreground cursor-not-allowed line-through"
                          : isSelected
                            ? "bg-gradient-to-br from-primary to-secondary border-transparent text-white shadow-lg shadow-primary/25"
                            : "bg-white border-border/60 text-foreground hover:border-primary/50 hover:shadow-md"
                      }`}
                  >
                    {slot}
                    {isBooked && (
                      <span className="block text-[9px] text-muted-foreground font-normal mt-0.5">
                        Booked
                      </span>
                    )}
                    {isPopular && !isBooked && !isSelected && (
                      <div className="absolute -top-2 -right-1 bg-amber-400 text-white text-[8px] font-bold px-1 rounded-full leading-4">
                        Popular
                      </div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-5 pt-4 border-t border-border/40 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-gradient-to-br from-primary to-secondary" />
          <span>Selected</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-muted border border-border/50" />
          <span>Booked</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-amber-400" />
          <span>Popular</span>
        </div>
      </div>
    </div>
  );
}
