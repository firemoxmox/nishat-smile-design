import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  Quote,
  Award,
  Clock,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BeforeAfterCard from "./BeforeAfterCard";

export default function CaseStudyModal({ caseStudy, onClose }) {
  if (!caseStudy) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden my-6"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-9 h-9 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-foreground" />
          </button>

          {/* Before/After hero */}
          <div className="h-64 sm:h-80 w-full">
            <BeforeAfterCard
              beforeImg={caseStudy.beforeImg}
              afterImg={caseStudy.afterImg}
              beforeLabel={caseStudy.beforeLabel}
              afterLabel={caseStudy.afterLabel}
            />
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            {/* Header */}
            <div className="flex flex-wrap items-start gap-3 mb-6">
              <div>
                <span
                  className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${caseStudy.categoryBg} ${caseStudy.categoryColor} mb-2`}
                >
                  {caseStudy.categoryLabel}
                </span>
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  {caseStudy.resultLine}
                </h2>
                <p
                  className={`text-sm font-medium mt-1 ${caseStudy.categoryColor}`}
                >
                  {caseStudy.emotion}
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-7">
              <div className="flex items-center gap-1.5 bg-muted rounded-full px-3 py-1 text-xs font-medium text-foreground">
                <Clock className="w-3 h-3" /> {caseStudy.visits}
              </div>
              <div className="flex items-center gap-1.5 bg-muted rounded-full px-3 py-1 text-xs font-medium text-foreground">
                <AlertCircle className="w-3 h-3" /> {caseStudy.difficulty}
              </div>
              <div className="flex items-center gap-1.5 bg-muted rounded-full px-3 py-1 text-xs font-medium text-foreground">
                👤 {caseStudy.patientAge}
              </div>
            </div>

            <div className="space-y-7">
              {/* Problem */}
              <div>
                <h3 className="font-heading font-bold text-base text-foreground mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center text-xs font-bold">
                    1
                  </span>
                  Patient Problem
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed pl-8">
                  {caseStudy.problem}
                </p>
              </div>

              {/* Diagnosis */}
              <div>
                <h3 className="font-heading font-bold text-base text-foreground mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">
                    2
                  </span>
                  Diagnosis
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed pl-8">
                  {caseStudy.diagnosis}
                </p>
              </div>

              {/* Treatment Plan */}
              <div>
                <h3 className="font-heading font-bold text-base text-foreground mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold">
                    3
                  </span>
                  Treatment Plan
                </h3>
                <ul className="space-y-2 pl-8">
                  {caseStudy.steps.map((step, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Result */}
              <div>
                <h3 className="font-heading font-bold text-base text-foreground mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">
                    4
                  </span>
                  Final Result
                </h3>
                <div className="pl-8 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-4 border border-green-100">
                  <p className="text-sm text-foreground leading-relaxed">
                    {caseStudy.result}
                  </p>
                </div>
              </div>

              {/* Testimonial */}
              <div className="pl-8">
                <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-5 border border-primary/10">
                  <Quote className="w-6 h-6 text-primary/30 mb-3" />
                  <p className="text-sm text-foreground italic leading-relaxed mb-3">
                    "{caseStudy.testimonial}"
                  </p>
                  <p className="text-xs font-bold text-primary">
                    — {caseStudy.testimonialName}
                  </p>
                </div>
              </div>
            </div>

            {/* Doctor badge + CTA */}
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center gap-4 justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">
                    Performed by Dr. Kamil Shahnawaz (MDS)
                  </p>
                  <p className="text-xs text-muted-foreground">
                    1000+ successful treatments
                  </p>
                </div>
              </div>
              <Link to="/book-appointment" onClick={onClose}>
                <Button className="bg-gradient-to-r from-primary to-secondary text-white rounded-full px-7 shadow-lg shadow-primary/20">
                  Book Your Transformation →
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
