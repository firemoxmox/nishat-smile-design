import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Play, Star, Shield, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import doctorImg from "@/assets/doctor-portrait.jpg";
import happyPatient from "@/assets/happy-patient.jpg";
import modernClinic from "@/assets/modern-clinic.jpg";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-background">
    {/* Subtle background pattern */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
      backgroundSize: '40px 40px'
    }} />

    <div className="container mx-auto px-4 pt-8 pb-16 md:pt-16 md:pb-24 relative">
      {/* Top marquee bar */}
      <div className="flex items-center justify-center gap-8 mb-12 md:mb-16 text-sm text-muted-foreground font-body">
        {["Pain-Free Dentistry", "Advanced Technology", "12+ Years Experience", "1000+ Happy Patients"].map((item, i) => (
          <span key={item} className="hidden md:flex items-center gap-2">
            {i > 0 && <span className="w-1 h-1 rounded-full bg-primary" />}
            {item}
          </span>
        ))}
      </div>

      {/* Main hero content - centered like Tend */}
      <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/15 rounded-full px-5 py-2 mb-8">
          <Award className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold font-body text-primary tracking-wide uppercase">#1 Dental Clinic in Darbhanga</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-[80px] font-extrabold font-display leading-[1.05] tracking-tight mb-6">
          <span className="text-foreground">Look forward to</span>
          <br />
          <span className="text-gradient">your dentist</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed mb-10 max-w-2xl mx-auto">
          Whether it's been 6 months or 6 years, experience gentle, pain-free dental care with{" "}
          <span className="text-foreground font-semibold">Dr. Kamil Shahnawaz</span> — no judgment, ever.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <Button asChild size="lg" className="rounded-full px-10 text-sm font-body font-semibold h-14 shadow-xl shadow-primary/20 group">
            <Link to="/book-appointment">
              Book Appointment
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-10 text-sm font-body font-semibold h-14 border-2">
            <a href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Us
            </a>
          </Button>
        </div>

        <p className="text-xs text-muted-foreground font-body">
          ✓ Same day appointments available · ✓ All insurances accepted
        </p>
      </div>

      {/* Image composition - inspired by Tend's flanking photos */}
      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-12 gap-4 items-end">
          {/* Left - patient photo */}
          <div className="col-span-4 hidden md:block">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 aspect-[3/4]">
              <img src={happyPatient} alt="Happy patients at Nishat Dental" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Center - clinic */}
          <div className="col-span-12 md:col-span-4">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 aspect-[4/3] md:aspect-[3/4] relative">
              <img src={modernClinic} alt="Modern dental clinic" className="w-full h-full object-cover" />
              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground font-body">100% Sterilized</p>
                  <p className="text-[10px] text-muted-foreground font-body">International protocols</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - doctor */}
          <div className="col-span-4 hidden md:block">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 aspect-[3/4] relative">
              <img src={doctorImg} alt="Dr. Kamil Shahnawaz" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-3">
                <p className="text-xs font-bold text-foreground font-display">Dr. Kamil Shahnawaz</p>
                <p className="text-[10px] text-muted-foreground font-body">MDS · 12+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
