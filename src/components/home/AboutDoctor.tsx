import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import clinicImg from "@/assets/clinic-1.png";
import clinic2Img from "@/assets/clinic-2.png";

const highlights = [
  "12+ years of clinical experience",
  "MDS — Master of Dental Surgery",
  "Specialist in painless root canals",
  "Expert in dental implants & cosmetics",
  "Patient-first compassionate care",
];

const AboutDoctor = () => (
  <section className="py-20 md:py-28 lg:py-32 pt-28 md:pt-36 overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image side */}
        <div className="relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl max-w-sm mx-auto lg:mx-0">
            <img src={clinicImg} alt="Dr. Kamil Shahnawaz" className="w-full h-[420px] object-cover" loading="lazy" />
            {/* Name overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[hsl(195,85%,18%)] to-transparent pt-16 pb-4 px-4">
              <p className="text-white font-display font-bold text-lg">Dr. Kamil Shahnawaz</p>
              <p className="text-white/70 text-xs font-body">MDS — Dental Surgeon</p>
            </div>
          </div>
          {/* Small second image */}
          <div className="absolute -bottom-4 -right-2 md:right-12 w-32 md:w-40 rounded-xl overflow-hidden shadow-xl border-4 border-background z-20 hidden md:block">
            <img src={clinic2Img} alt="Clinic facility" className="w-full h-28 object-cover" loading="lazy" />
          </div>
          {/* Decorative dots */}
          <div className="absolute -top-4 -left-4 w-24 h-24 opacity-20 -z-10" style={{
            backgroundImage: "radial-gradient(hsl(var(--primary)) 2px, transparent 2px)",
            backgroundSize: "12px 12px"
          }} />
        </div>

        {/* Content side */}
        <div>
          <span className="inline-block text-primary font-semibold text-xs uppercase tracking-widest font-body mb-3">Meet Your Doctor</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground leading-tight mb-2">
            Dr. Kamil{" "}
            <span className="text-primary">Shahnawaz</span>
          </h2>
          <p className="text-primary font-semibold font-body mb-6 text-sm">MDS – Dental Surgeon</p>
          <p className="text-muted-foreground leading-relaxed mb-4 font-body text-sm">
            With over 12 years of dedicated practice, Dr. Kamil Shahnawaz is one of Darbhanga's most trusted dental surgeons. He combines cutting-edge technology with a gentle, patient-first approach.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 font-body text-sm">
            From painless root canals to stunning cosmetic transformations, every treatment is delivered with precision, empathy, and a commitment to your comfort.
          </p>

          <div className="space-y-3 mb-8">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span className="text-sm font-body text-foreground">{h}</span>
              </div>
            ))}
          </div>

          <Button asChild className="rounded-full px-8 font-body shadow-lg shadow-primary/20 group h-11 text-sm">
            <Link to="/about">
              Know More
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default AboutDoctor;
