import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  format,
  addDays,
  isSunday,
  isToday,
  isPast,
  startOfDay,
} from "date-fns";

const DAYS_TO_SHOW = 14;

function getDates() {
  const today = startOfDay(new Date());
  return Array.from({ length: DAYS_TO_SHOW }, (_, i) => addDays(today, i));
}

export default function DatePicker({ selected, onSelect }) {
  const scrollRef = useRef(null);
  const dates = getDates();

  const scroll = (dir) => {
    if (scrollRef.current)
      scrollRef.current.scrollBy({ left: dir * 200, behavior: "smooth" });
  };

  return (
    <div>
      <div className="mb-5">
        <h3 className="font-heading font-bold text-foreground text-lg">
          Pick a Date
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Select your preferred appointment date
        </p>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => scroll(-1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center border border-border/50 hover:bg-muted transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide px-1 py-2 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {dates.map((date, i) => {
            const dateStr = format(date, "yyyy-MM-dd");
            const isSelected = selected === dateStr;
            const isSun = isSunday(date);
            const dayLabel = format(date, "EEE");
            const dayNum = format(date, "d");
            const monthLabel = format(date, "MMM");

            return (
              <motion.button
                key={dateStr}
                type="button"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                onClick={() => !isSun && onSelect(dateStr)}
                disabled={isSun}
                className={`shrink-0 flex flex-col items-center rounded-2xl px-4 py-3 min-w-[68px] border-2 transition-all duration-200
                  ${
                    isSelected
                      ? "bg-gradient-to-b from-primary to-secondary border-transparent text-white shadow-lg shadow-primary/30"
                      : isSun
                        ? "bg-muted/40 border-border/30 text-muted-foreground cursor-not-allowed opacity-50"
                        : "bg-white border-border/50 text-foreground hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5"
                  }`}
              >
                <span
                  className={`text-xs font-semibold uppercase tracking-wide ${isSelected ? "text-white/80" : "text-muted-foreground"}`}
                >
                  {dayLabel}
                </span>
                <span
                  className={`font-heading font-bold text-2xl leading-tight my-0.5 ${isSelected ? "text-white" : "text-foreground"}`}
                >
                  {dayNum}
                </span>
                <span
                  className={`text-xs ${isSelected ? "text-white/70" : "text-muted-foreground"}`}
                >
                  {monthLabel}
                </span>
                {isSun && (
                  <span className="text-[9px] font-medium mt-1 text-rose-400">
                    Appt Only
                  </span>
                )}
                {isToday(date) && !isSelected && (
                  <span className="text-[9px] font-bold mt-1 text-primary">
                    Today
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => scroll(1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center border border-border/50 hover:bg-muted transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
