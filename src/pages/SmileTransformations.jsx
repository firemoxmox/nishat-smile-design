import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { caseStudies, filterTabs } from "@/lib/caseStudiesData";
import CaseStudyCard from "@/components/transformations/CaseStudyCard";
import CaseStudyModal from "@/components/transformations/CaseStudyModal";

export default function SmileTransformations() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCase, setSelectedCase] = useState(null);

  const filtered =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-white pb-16 lg:pb-0">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-[#0c4a6e] via-[#0e7490] to-[#0891b2] pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-cyan-300/10 rounded-full -translate-x-1/3 translate-y-1/3" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-cyan-300 font-semibold text-xs uppercase tracking-widest mb-4">
              Case Studies · Darbhanga
            </p>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Smile Transformations
              <br />
              <span className="text-cyan-300">in Darbhanga</span>
            </h1>
            <h2 className="text-white/70 text-lg max-w-xl mx-auto mb-8">
              Real Dental Case Studies — from pain to confidence, one patient at
              a time
            </h2>

            {/* Trust pills */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <Award className="w-4 h-4 text-cyan-300" />
                <span className="text-xs font-semibold text-white">
                  Dr. Kamil Shahnawaz, MDS
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-xs font-semibold text-white">
                  1000+ Successful Treatments
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <span className="text-xs font-semibold text-white">
                  ✨ 12+ Years of Excellence
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-200
                ${
                  activeFilter === tab.value
                    ? "bg-gradient-to-r from-primary to-secondary text-white border-transparent shadow-lg shadow-primary/20"
                    : "bg-white text-muted-foreground border-border/50 hover:border-primary/30 hover:text-primary"
                }`}
            >
              {tab.label}
              <span className="ml-1.5 text-[10px] opacity-70">
                (
                {tab.value === "All"
                  ? caseStudies.length
                  : caseStudies.filter((c) => c.category === tab.value).length}
                )
              </span>
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cs, i) => (
            <CaseStudyCard
              key={cs.id}
              caseStudy={cs}
              index={i}
              onClick={setSelectedCase}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg font-medium">
              No cases found for this category.
            </p>
          </div>
        )}

        {/* Drag hint */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          ↔ Drag the slider on each card to compare Before & After
        </p>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-br from-[#0c4a6e] via-[#0e7490] to-[#0891b2] py-16 lg:py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-2xl mx-auto px-4 text-center"
        >
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready for Your Own Transformation?
          </h2>
          <p className="text-white/70 text-base mb-8 leading-relaxed">
            Join 1000+ patients who have transformed their smiles with Dr. Kamil
            Shahnawaz at Nishat Dental, Darbhanga.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/book-appointment">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 rounded-full px-8 h-12 text-base font-semibold shadow-xl shadow-black/20 transition-all hover:-translate-y-0.5"
              >
                Book Appointment <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a
              href="https://wa.me/919905056677?text=Hello%2C%20I%20would%20like%20to%20discuss%20my%20smile%20transformation."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-400 text-white rounded-full px-8 h-12 text-base shadow-lg shadow-green-500/30 transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Us
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedCase && (
        <CaseStudyModal
          caseStudy={selectedCase}
          onClose={() => setSelectedCase(null)}
        />
      )}
    </div>
  );
}
