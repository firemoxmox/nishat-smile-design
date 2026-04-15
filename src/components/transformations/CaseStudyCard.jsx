import React from "react";
import { motion } from "framer-motion";
import { Clock, Zap, ArrowRight } from "lucide-react";
import BeforeAfterCard from "./BeforeAfterCard";

export default function CaseStudyCard({ caseStudy, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-black/8 border border-border/40 hover:border-primary/10 transition-all duration-400 hover:-translate-y-2 cursor-pointer"
      onClick={() => onClick(caseStudy)}
    >
      {/* Before/After image area */}
      <div className="relative h-52 overflow-hidden">
        <BeforeAfterCard
          beforeImg={caseStudy.beforeImg}
          afterImg={caseStudy.afterImg}
          beforeLabel={caseStudy.beforeLabel}
          afterLabel={caseStudy.afterLabel}
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30">
          <div className="flex items-center gap-2 text-white font-semibold text-sm bg-white/20 backdrop-blur-sm rounded-full px-5 py-2.5 border border-white/30">
            View Case Study <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Card info */}
      <div className="p-5">
        {/* Tags row */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span
            className={`text-xs font-bold px-2.5 py-1 rounded-full ${caseStudy.categoryBg} ${caseStudy.categoryColor}`}
          >
            {caseStudy.categoryLabel}
          </span>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground flex items-center gap-1">
            <Clock className="w-2.5 h-2.5" />
            {caseStudy.visits}
          </span>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground flex items-center gap-1">
            <Zap className="w-2.5 h-2.5" />
            {caseStudy.difficulty}
          </span>
        </div>

        <h3 className="font-heading font-bold text-foreground text-sm leading-snug mb-2 group-hover:text-primary transition-colors">
          {caseStudy.resultLine}
        </h3>
        <p
          className={`text-xs font-medium ${caseStudy.categoryColor} leading-snug`}
        >
          {caseStudy.emotion}
        </p>
      </div>
    </motion.div>
  );
}
