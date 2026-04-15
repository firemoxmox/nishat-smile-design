import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Quote } from "lucide-react";
import doctorImg from "@/assets/dr-kamil.png";
import clinicImg from "@/assets/clinic-1.png";

const highlights = [
  "12+ years of clinical experience",
  "MDS — Master of Dental Surgery",
  "Specialist in painless root canals",
  "Expert in dental implants & cosmetics",
];

const AboutDoctor = () => (
  <section className="section-padding overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Image composition */}
        <div className="relative">
          <div className="rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10">
            <img src={doctorImg} alt="Dr. Kamil Shahnawaz" className="w-full aspect-[4/5] object-cover" loading="lazy" />
          </div>
          {/* Small overlapping image */}
          <div className="absolute -bottom-6 -right-4 w-40 md:w-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-background hidden md:block">
            <img src={clinicImg} alt="Inside the clinic" className="w-full h-32 object-cover" loading="lazy" />
          </div>
          {/* Quote card */}
          <div className="absolute -top-4 -left-4 md:-left-8 glass rounded-2xl p-5 max-w-[240px] hidden md:block">
            <Quote className="w-6 h-6 text-primary mb-2" />
            <p className="text-xs text-foreground font-body italic leading-relaxed">"Your comfort is my priority. Every smile deserves gentle, expert care."</p>
            <p className="text-[10px] text-primary font-semibold mt-2 font-body">— Dr. Kamil</p>
          </div>
          {/* Decorative circle */}
          <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border-2 border-primary/10 -z-10" />
        </div>

        {/* Content */}
        <div>
          <span className="inline-block text-primary font-semibold text-xs uppercase tracking-widest font-body mb-4">Meet Your Doctor</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-foreground leading-tight mb-2">
            Dr. Kamil
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-gradient leading-tight mb-4">
            Shahnawaz
          </h2>
          <p className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/5 rounded-full text-primary font-semibold font-body text-sm mb-6">
            MDS – Dental Surgeon
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4 font-body">
            With over 12 years of dedicated practice, Dr. Kamil Shahnawaz is one of Darbhanga's most trusted dental surgeons. He combines cutting-edge technology with a gentle, patient-first approach.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 font-body">
            From painless root canals to stunning cosmetic transformations — every treatment is delivered with precision, empathy, and a commitment to your comfort.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm font-body text-foreground">{h}</span>
              </div>
            ))}
          </div>

          <Button asChild className="rounded-full px-8 font-body shadow-lg shadow-primary/15 group h-12">
            <Link to="/about">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default AboutDoctor;
