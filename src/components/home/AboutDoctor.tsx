import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import clinicImg from "@/assets/clinic-1.png";
import dentistImg from "@/assets/dentist-treating.jpg";

const highlights = [
  "12+ years of clinical experience",
  "MDS — Master of Dental Surgery",
  "Specialist in painless root canals",
  "Expert in dental implants & cosmetics",
  "Patient-first compassionate care",
];

const AboutDoctor = () => (
  <section className="section-padding overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Image stack */}
        <div className="relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img src={clinicImg} alt="Dr. Kamil Shahnawaz" className="w-full h-auto object-cover" loading="lazy" />
          </div>
          {/* Overlapping second image */}
          <div className="absolute -bottom-8 -right-4 md:right-8 w-48 md:w-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-background z-20">
            <img src={dentistImg} alt="Dr. Kamil treating a patient" className="w-full h-auto object-cover" loading="lazy" />
          </div>
          {/* Experience badge */}
          <div className="absolute top-6 -left-2 md:-left-6 bg-primary text-primary-foreground rounded-2xl px-5 py-3 shadow-xl z-20">
            <span className="text-2xl font-bold font-display block">12+</span>
            <span className="text-xs font-body opacity-90">Years Exp.</span>
          </div>
          {/* Decorative */}
          <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-accent/10 -z-10" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-primary/10 -z-10" />
        </div>

        {/* Content */}
        <div>
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest font-body mb-3">
            Meet Your Doctor
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground leading-tight mb-3">
            Dr. Kamil Shahnawaz
          </h2>
          <p className="text-primary font-semibold font-body mb-6 text-lg">MDS – Dental Surgeon</p>
          <p className="text-muted-foreground leading-relaxed mb-4 font-body text-base">
            With over 12 years of dedicated practice, Dr. Kamil Shahnawaz is one of Darbhanga's most trusted dental surgeons. He combines cutting-edge technology with a gentle, patient-first approach.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 font-body text-base">
            From painless root canals to stunning cosmetic transformations, every treatment is delivered with precision, empathy, and a commitment to your comfort.
          </p>
          
          <div className="space-y-3 mb-8">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm font-body text-foreground">{h}</span>
              </div>
            ))}
          </div>

          <Button asChild className="rounded-full px-8 font-body shadow-lg shadow-primary/20 group">
            <Link to="/about">
              Learn More About Dr. Kamil
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default AboutDoctor;
