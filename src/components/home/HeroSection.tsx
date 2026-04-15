import { Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowRight, Star, Shield, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import dentalClinic from "@/assets/dental-clinic.jpg";
import clinicImg from "@/assets/clinic-1.png";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    {/* Full background image */}
    <div className="absolute inset-0">
      <img src={dentalClinic} alt="Modern dental clinic" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(195,90%,8%)]/95 via-[hsl(195,85%,12%)]/85 to-[hsl(195,80%,15%)]/60" />
    </div>

    {/* Decorative elements */}
    <div className="absolute top-20 right-[20%] w-72 h-72 bg-accent/10 rounded-full blur-[100px]" />
    <div className="absolute bottom-20 left-[10%] w-56 h-56 bg-primary/10 rounded-full blur-[80px]" />

    <div className="relative container mx-auto px-4 py-20 md:py-24">
      <div className="grid lg:grid-cols-5 gap-10 items-center">
        {/* Left content - 3 cols */}
        <div className="lg:col-span-3 z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-5 py-2 mb-8">
            <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
              <Star className="w-3 h-3 text-accent fill-accent" />
            </div>
            <span className="text-xs font-semibold font-body text-white/90 tracking-wide">#1 Rated Dental Clinic in Darbhanga</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.05] mb-6">
            <span className="text-white">Confident Smiles</span>
            <br />
            <span className="relative">
              <span className="text-accent">Begin Here</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 8 C50 2, 100 2, 150 6 S250 10, 298 4" stroke="hsl(160,60%,45%)" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
              </svg>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 font-body leading-relaxed mb-10 max-w-xl">
            Experience pain-free, world-class dental care with{" "}
            <span className="text-white font-medium">Dr. Kamil Shahnawaz</span> — over 12 years of trusted expertise in Darbhanga.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Button asChild size="lg" className="rounded-full px-8 text-sm font-body font-semibold h-13 bg-accent hover:bg-accent/90 text-accent-foreground shadow-2xl shadow-accent/25 group">
              <Link to="/book-appointment">
                Book Appointment
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" className="rounded-full px-8 text-sm font-body font-semibold border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white h-13">
              <a href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </a>
            </Button>
          </div>

          {/* Trust indicators row */}
          <div className="flex flex-wrap gap-6">
            {[
              { icon: Shield, text: "100% Sterilized" },
              { icon: Clock, text: "Same Day Treatment" },
              { icon: Users, text: "1000+ Happy Patients" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-accent" />
                </div>
                <span className="text-white/50 text-xs font-body font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - doctor card - 2 cols */}
        <div className="lg:col-span-2 hidden lg:block">
          <div className="relative">
            {/* Main doctor image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
              <img src={clinicImg} alt="Dr. Kamil Shahnawaz at Nishat Dental" className="w-full h-[480px] object-cover" />
              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                    <span className="text-accent font-bold text-sm font-display">K</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-white text-sm">Dr. Kamil Shahnawaz</p>
                    <p className="text-[11px] text-white/60 font-body">MDS — Dental Surgeon | 12+ Years</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-card/95 backdrop-blur-xl rounded-xl p-4 shadow-xl border border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Star className="w-5 h-5 text-accent fill-accent" />
                </div>
                <div>
                  <p className="text-lg font-bold font-display text-foreground">4.9/5</p>
                  <p className="text-[10px] text-muted-foreground font-body">Patient Rating</p>
                </div>
              </div>
            </div>

            {/* Floating experience badge */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-xl px-4 py-3 shadow-xl">
              <span className="text-xl font-bold font-display block">12+</span>
              <span className="text-[10px] font-body opacity-80">Years Exp.</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Floating Trust Bar at bottom */}
    <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2">
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-2xl shadow-xl shadow-black/10 border border-border/50 p-5 md:p-7 mx-2 md:mx-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {[
              { value: "12+", label: "Years Experience", icon: "🏆" },
              { value: "1000+", label: "Happy Patients", icon: "😊" },
              { value: "15+", label: "Dental Services", icon: "🦷" },
              { value: "100%", label: "Sterilized Clinic", icon: "🛡️" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3 md:justify-center">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-xl shrink-0">
                  {s.icon}
                </div>
                <div>
                  <span className="text-xl md:text-2xl font-bold font-display text-primary block leading-none">{s.value}</span>
                  <span className="text-[10px] md:text-xs text-muted-foreground font-body">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
