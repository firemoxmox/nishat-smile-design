import React, { useState } from "react"; // useState kept for modal
import { Link } from "react-router-dom";
import { ArrowRight, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { caseStudies } from "@/lib/caseStudiesData";
import CaseStudyCard from "../transformations/CaseStudyCard";
import CaseStudyModal from "../transformations/CaseStudyModal";

export default function SmileTransformation() {
  const [selectedCase, setSelectedCase] = useState(null);
  const featuredCases = caseStudies.slice(0, 3);

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[#f8fafc] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-secondary font-semibold text-xs uppercase tracking-widest mb-3">
            Case Studies
          </p>
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Real Smile Transformations
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base lg:text-lg">
            See how we restore confidence with advanced dental care
          </p>

          {/* Trust bar */}
          <div className="flex flex-wrap items-center justify-center gap-5 mt-7">
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-border/40">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold text-foreground">
                Dr. Kamil Shahnawaz, MDS
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-border/40">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-xs font-semibold text-foreground">
                1000+ Successful Treatments
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-border/40">
              <span className="text-xs font-semibold text-foreground">
                ✨ Restoring confidence, one smile at a time
              </span>
            </div>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCases.map((cs, i) => (
            <CaseStudyCard
              key={cs.id}
              caseStudy={cs}
              index={i}
              onClick={setSelectedCase}
            />
          ))}
        </div>

        {/* Drag hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-muted-foreground mt-6"
        >
          ↔ Drag the slider on each card to compare Before & After
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/smile-transformations">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-white rounded-full px-10 h-12 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
            >
              View All Smile Transformations{" "}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedCase && (
        <CaseStudyModal
          caseStudy={selectedCase}
          onClose={() => setSelectedCase(null)}
        />
      )}
    </section>
  );
}
