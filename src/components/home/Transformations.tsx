import dentalCare from "@/assets/dental-care.jpg";
import teethWhitening from "@/assets/teeth-whitening.jpg";
import dentistTreating from "@/assets/dentist-treating.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const transformations = [
  { src: dentalCare, alt: "Professional dental care", caption: "Advanced dental treatment in a modern, comfortable environment." },
  { src: teethWhitening, alt: "Teeth whitening results", caption: "Professional teeth whitening for a brighter, more confident smile." },
  { src: dentistTreating, alt: "Dentist treating patient", caption: "Expert care with the latest dental technology and techniques." },
];

const Transformations = () => (
  <section className="relative overflow-hidden py-20 md:py-28">
    <div className="absolute inset-0 bg-gradient-to-b from-[hsl(195,85%,12%)] to-[hsl(195,80%,18%)]" />

    <div className="relative container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="inline-block text-accent font-semibold text-xs uppercase tracking-widest font-body mb-3">Our Work</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white mb-4">
          Real Smile <span className="text-accent">Transformations</span>
        </h2>
        <p className="text-white/60 font-body max-w-xl mx-auto text-sm">
          See the difference expert dental care makes in our patients' lives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {transformations.map((t) => (
          <div key={t.alt} className="group rounded-xl overflow-hidden">
            <div className="relative">
              <img src={t.src} alt={t.alt} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-white text-xs font-body">{t.caption}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button asChild variant="outline" className="rounded-full px-8 font-body text-sm border-white/30 text-white hover:bg-white/10 h-11">
          <Link to="/services">
            View All Services
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default Transformations;
