import { useState, useRef, useCallback } from "react";
import { ArrowRight, Check, Quote, GripVertical, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import doctorImg from "@/assets/dr-kamil.png";

import rcBefore from "@/assets/case-rootcanal-before.jpg";
import rcAfter from "@/assets/case-rootcanal-after.jpg";
import impBefore from "@/assets/case-implant-before.jpg";
import impAfter from "@/assets/case-implant-after.jpg";
import brBefore from "@/assets/case-braces-before.jpg";
import brAfter from "@/assets/case-braces-after.jpg";

interface CaseStudy {
  id: number;
  category: string;
  title: string;
  subtitle: string;
  beforeImg: string;
  afterImg: string;
  beforeLabel: string;
  afterLabel: string;
  tags: string[];
  patientInfo: string;
  problem: string;
  diagnosis: string;
  treatmentPlan: string[];
  result: string;
  testimonial: string;
  patientName: string;
}

const cases: CaseStudy[] = [
  {
    id: 1,
    category: "Root Canal",
    title: "Severe Infection Saved in Single Sitting",
    subtitle: "Pain-free root canal treatment with advanced rotary system",
    beforeImg: rcBefore,
    afterImg: rcAfter,
    beforeLabel: "Infected & Painful",
    afterLabel: "Pain-Free & Saved",
    tags: ["Single Sitting", "Complex Case", "34 years Male"],
    patientInfo: "34 years, Male",
    problem: "Patient came with severe toothache and swelling in the lower right molar region. The tooth was highly sensitive to hot and cold, making it difficult to eat or sleep.",
    diagnosis: "X-ray revealed deep caries extending into the pulp chamber with periapical abscess formation. The tooth had irreversible pulpitis with acute periapical periodontitis.",
    treatmentPlan: [
      "Local anesthesia for pain-free procedure",
      "Access opening and pulp extirpation",
      "Biomechanical preparation with rotary NiTi files",
      "Calcium hydroxide intracanal medicament",
      "Obturation with gutta-percha and sealer",
      "Full coverage ceramic crown placement"
    ],
    result: "Complete resolution of symptoms within 48 hours. The tooth was restored with a zirconia crown for long-lasting protection. Patient reported zero pain during the entire procedure.",
    testimonial: "I was terrified of root canals, but Dr. Kamil made it completely painless. I didn't feel a thing! The whole process was done in one sitting and my tooth feels brand new.",
    patientName: "Rahul M."
  },
  {
    id: 2,
    category: "Dental Implant",
    title: "Missing Tooth Replaced with Premium Implant",
    subtitle: "Titanium implant with natural-looking zirconia crown",
    beforeImg: impBefore,
    afterImg: impAfter,
    beforeLabel: "Missing Tooth",
    afterLabel: "Natural Implant",
    tags: ["Premium Implant", "3-Month Process", "45 years Female"],
    patientInfo: "45 years, Female",
    problem: "Patient had been living with a missing front tooth for 2 years after a traumatic extraction. She was self-conscious about her smile and avoided social situations.",
    diagnosis: "CBCT scan showed adequate bone density for implant placement. Surrounding teeth were healthy with good periodontal support.",
    treatmentPlan: [
      "Comprehensive CBCT scan and digital planning",
      "Titanium implant placement under local anesthesia",
      "3-month osseointegration healing period",
      "Impression and custom abutment fabrication",
      "Zirconia crown cementation for natural aesthetics",
      "Follow-up monitoring and care instructions"
    ],
    result: "The implant integrated perfectly. The final zirconia crown matched the adjacent teeth so well that even close family members couldn't tell which tooth was the implant.",
    testimonial: "After 2 years of hiding my smile, Dr. Kamil gave me my confidence back. The implant looks and feels exactly like my natural tooth. Best decision I ever made!",
    patientName: "Sunita D."
  },
  {
    id: 3,
    category: "Braces & Aligners",
    title: "Crooked Teeth to Perfect Smile in 14 Months",
    subtitle: "Clear aligner therapy for beautiful teeth alignment",
    beforeImg: brBefore,
    afterImg: brAfter,
    beforeLabel: "Misaligned Teeth",
    afterLabel: "Perfect Smile",
    tags: ["Clear Aligners", "14 Months", "22 years Female"],
    patientInfo: "22 years, Female",
    problem: "Young professional with moderate crowding and misalignment of upper and lower teeth. She wanted a discreet treatment option that wouldn't affect her professional appearance.",
    diagnosis: "Orthodontic assessment revealed Class I malocclusion with moderate anterior crowding and slight overjet. Digital scanning confirmed clear aligner candidacy.",
    treatmentPlan: [
      "Digital 3D scanning and treatment simulation",
      "Custom clear aligner fabrication (28 sets)",
      "Bi-weekly aligner changes with monthly check-ups",
      "IPR (interproximal reduction) for space creation",
      "Attachment placement for controlled tooth movement",
      "Retainer delivery for long-term stability"
    ],
    result: "Treatment completed in 14 months with stunning results. Teeth are perfectly aligned with an ideal bite. Patient's confidence has skyrocketed both personally and professionally.",
    testimonial: "I can't stop smiling! The clear aligners were so comfortable that most people didn't even notice I was wearing them. Dr. Kamil's expertise made the whole journey smooth and exciting.",
    patientName: "Priya S."
  }
];

const BeforeAfterSlider = ({ beforeImg, afterImg, beforeLabel, afterLabel }: {
  beforeImg: string; afterImg: string; beforeLabel: string; afterLabel: string;
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(5, Math.min(95, pos)));
  }, []);

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => { if (isDragging.current) handleMove(e.clientX); };
  const handleTouchMove = (e: React.TouchEvent) => { handleMove(e.touches[0].clientX); };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[5/4] rounded-2xl overflow-hidden cursor-col-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* After (full background) */}
      <img src={afterImg} alt="After" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      {/* Before (clipped) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
        <img src={beforeImg} alt="Before" className="w-full h-full object-cover" loading="lazy" />
      </div>
      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-[3px] bg-background z-10 shadow-lg"
        style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background shadow-xl flex items-center justify-center border-2 border-primary">
          <GripVertical className="w-4 h-4 text-primary" />
        </div>
      </div>
      {/* Labels */}
      <div className="absolute bottom-3 left-3 z-10">
        <span className="bg-destructive/90 backdrop-blur-sm text-destructive-foreground text-[10px] font-bold font-body px-3 py-1.5 rounded-full uppercase tracking-wider">
          {beforeLabel}
        </span>
      </div>
      <div className="absolute bottom-3 right-3 z-10">
        <span className="bg-primary/90 backdrop-blur-sm text-primary-foreground text-[10px] font-bold font-body px-3 py-1.5 rounded-full uppercase tracking-wider">
          {afterLabel}
        </span>
      </div>
    </div>
  );
};

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-primary/5 border border-primary/15 rounded-full px-5 py-2 mb-6">
            <Stethoscope className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold font-body text-primary tracking-wide uppercase">Case Studies</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight mb-4">
            Real Smile{" "}
            <span className="text-gradient">Transformations</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
            See the incredible results our patients have achieved. Every smile has a story — here are some of our favorites.
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap text-sm font-body text-muted-foreground">
            <span className="flex items-center gap-2">
              <img src={doctorImg} alt="Dr. Kamil" className="w-7 h-7 rounded-full object-cover border-2 border-primary/20" />
              <span className="font-semibold text-foreground">Dr. Kamil Shahnawaz</span>
              <span>MDS</span>
            </span>
            <span className="w-1 h-1 rounded-full bg-primary hidden sm:block" />
            <span>1000+ Treatments</span>
            <span className="w-1 h-1 rounded-full bg-primary hidden sm:block" />
            <span>12+ Years Experience</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cases.map((c) => (
            <div
              key={c.id}
              className="group bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/20 cursor-pointer"
              onClick={() => setSelectedCase(c)}
            >
              <div className="relative">
                <BeforeAfterSlider
                  beforeImg={c.beforeImg}
                  afterImg={c.afterImg}
                  beforeLabel={c.beforeLabel}
                  afterLabel={c.afterLabel}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-300 flex items-center justify-center rounded-2xl">
                  <Button
                    variant="secondary"
                    className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 rounded-full font-body font-semibold text-sm backdrop-blur-md bg-background/80 hover:bg-background shadow-xl"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="default" className="text-[10px] font-bold uppercase tracking-wider">
                    {c.category}
                  </Badge>
                  {c.tags.slice(0, 2).map(t => (
                    <Badge key={t} variant="outline" className="text-[10px] font-medium">
                      {t}
                    </Badge>
                  ))}
                </div>
                <h3 className="font-display font-bold text-foreground text-base mb-1 leading-tight">{c.title}</h3>
                <p className="text-xs text-primary font-body font-medium">{c.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground font-body mb-4 flex items-center justify-center gap-2">
            <GripVertical className="w-3 h-3" />
            Drag the slider to compare before & after
          </p>
          <Button asChild size="lg" className="rounded-full px-10 font-body font-semibold h-14 shadow-xl shadow-primary/20">
            <Link to="/services">
              View All Smile Transformations
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={!!selectedCase} onOpenChange={(o) => !o && setSelectedCase(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 rounded-3xl border-0 gap-0">
          {selectedCase && (
            <>
              {/* Modal header image */}
              <div className="relative">
                <BeforeAfterSlider
                  beforeImg={selectedCase.beforeImg}
                  afterImg={selectedCase.afterImg}
                  beforeLabel={selectedCase.beforeLabel}
                  afterLabel={selectedCase.afterLabel}
                />
              </div>

              <div className="p-6 md:p-8">
                <DialogHeader className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="default" className="text-[10px] font-bold uppercase tracking-wider">
                      {selectedCase.category}
                    </Badge>
                    {selectedCase.tags.map(t => (
                      <Badge key={t} variant="outline" className="text-[10px] font-medium">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <DialogTitle className="font-display text-xl md:text-2xl font-bold leading-tight">
                    {selectedCase.title}
                  </DialogTitle>
                  <DialogDescription className="text-primary font-body font-medium text-sm">
                    {selectedCase.subtitle}
                  </DialogDescription>
                </DialogHeader>

                {/* Steps */}
                <div className="space-y-6">
                  {/* Problem */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center text-destructive font-bold font-display text-sm">1</div>
                    <div>
                      <h4 className="font-display font-bold text-foreground text-sm mb-1">Patient Problem</h4>
                      <p className="text-sm text-muted-foreground font-body leading-relaxed">{selectedCase.problem}</p>
                    </div>
                  </div>

                  {/* Diagnosis */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold font-display text-sm">2</div>
                    <div>
                      <h4 className="font-display font-bold text-foreground text-sm mb-1">Diagnosis</h4>
                      <p className="text-sm text-muted-foreground font-body leading-relaxed">{selectedCase.diagnosis}</p>
                    </div>
                  </div>

                  {/* Treatment Plan */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-display text-sm">3</div>
                    <div>
                      <h4 className="font-display font-bold text-foreground text-sm mb-1">Treatment Plan</h4>
                      <ul className="space-y-2 mt-2">
                        {selectedCase.treatmentPlan.map((step, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground font-body">
                            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Result */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold font-display text-sm">4</div>
                    <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 flex-1">
                      <h4 className="font-display font-bold text-foreground text-sm mb-1">Final Result</h4>
                      <p className="text-sm text-muted-foreground font-body leading-relaxed">{selectedCase.result}</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mt-8 bg-muted/50 rounded-2xl p-5 border border-border/50">
                  <Quote className="w-5 h-5 text-primary mb-2" />
                  <p className="text-sm font-body text-foreground leading-relaxed italic mb-3">
                    "{selectedCase.testimonial}"
                  </p>
                  <p className="text-xs font-body font-semibold text-muted-foreground">— {selectedCase.patientName}</p>
                </div>

                {/* Doctor + CTA */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border/50">
                  <div className="flex items-center gap-3">
                    <img src={doctorImg} alt="Dr. Kamil" className="w-10 h-10 rounded-full object-cover border-2 border-primary/20" />
                    <div>
                      <p className="text-sm font-display font-bold text-foreground">Dr. Kamil Shahnawaz</p>
                      <p className="text-xs font-body text-muted-foreground">MDS · Conservative Dentistry</p>
                    </div>
                  </div>
                  <Button asChild className="rounded-full px-8 font-body font-semibold shadow-lg shadow-primary/20">
                    <Link to="/book-appointment">
                      Book Your Transformation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CaseStudies;
