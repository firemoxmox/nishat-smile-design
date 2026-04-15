import { Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import clinicImg from "@/assets/clinic-1.png";

const HeroSection = () => (
  <section className="relative overflow-hidden">
    {/* Dark teal gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(195,85%,15%)] via-[hsl(195,80%,22%)] to-[hsl(180,60%,25%)]" />

    <div className="relative container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[600px] md:min-h-[650px] py-16 md:py-20">
        {/* Left content */}
        <div className="text-white z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <Star className="w-3.5 h-3.5 text-accent fill-accent" />
            <span className="text-xs font-medium font-body text-white/90">#1 Rated Dental Clinic in Darbhanga</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] mb-6">
            Confident Smiles{" "}
            <br />
            <span className="text-accent">Begin Here</span>
          </h1>

          <p className="text-base md:text-lg text-white/70 font-body leading-relaxed mb-8 max-w-lg">
            Experience pain-free, world-class dental care with Dr. Kamil Shahnawaz — over 12 years of trusted expertise in Darbhanga.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Button asChild size="lg" className="rounded-full px-8 text-sm font-body font-semibold shadow-2xl shadow-primary/30 h-12 bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/book-appointment">
                Book Appointment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" className="rounded-full px-8 text-sm font-body font-semibold border-2 border-white/30 bg-transparent hover:bg-white/10 text-white h-12">
              <a href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>

        {/* Right image */}
        <div className="relative hidden lg:flex justify-end">
          <div className="relative w-full max-w-md">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img src={clinicImg} alt="Dr. Kamil Shahnawaz at Nishat Dental" className="w-full h-[420px] object-cover" />
            </div>
            {/* Name badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <p className="font-display font-bold text-foreground text-sm">Dr. Kamil Shahnawaz</p>
              <p className="text-xs text-muted-foreground font-body">MDS — Dental Surgeon | 12+ Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Floating Trust Bar */}
    <div className="relative -mb-16 z-20 container mx-auto px-4">
      <div className="bg-card rounded-2xl shadow-xl border border-border/50 p-6 md:p-8 mx-4 md:mx-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {[
            { value: "12+", label: "Years Experience", icon: "🏆" },
            { value: "1000+", label: "Happy Patients", icon: "😊" },
            { value: "15+", label: "Dental Services", icon: "🦷" },
            { value: "100%", label: "Sterilized Clinic", icon: "🛡️" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              <span className="text-2xl">{s.icon}</span>
              <span className="text-2xl md:text-3xl font-bold font-display text-primary">{s.value}</span>
              <span className="text-xs text-muted-foreground font-body font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
