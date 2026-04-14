import { Link } from "react-router-dom";
import { Phone, Calendar, ArrowRight, Shield, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-smile.jpg";
import dentalClinic from "@/assets/dental-clinic.jpg";

const HeroSection = () => (
  <section className="relative overflow-hidden">
    {/* Background image with overlay */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Beautiful smile" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
    </div>

    <div className="relative container mx-auto px-4 py-24 md:py-36 lg:py-44">
      <div className="max-w-2xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-1.5 mb-6 animate-fade-up">
          <Star className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-medium text-primary font-body">#1 Rated Dental Clinic in Darbhanga</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
          <span className="text-background">Your Smile,</span>
          <br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Passion</span>
        </h1>

        <p className="text-lg md:text-xl text-background/70 font-body leading-relaxed mb-10 max-w-lg animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          Experience pain-free, world-class dental care with Dr. Kamil Shahnawaz — over 12 years of trusted expertise in Darbhanga.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
          <Button asChild size="lg" className="rounded-full px-8 text-base font-body shadow-2xl shadow-primary/30 h-13">
            <Link to="/book-appointment">
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-base font-body border-background/30 text-background hover:bg-background/10 hover:text-background h-13">
            <a href="tel:+919876543210">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </Button>
        </div>

        {/* Mini trust indicators */}
        <div className="flex flex-wrap gap-6 animate-fade-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
          {[
            { icon: Shield, text: "100% Sterilized" },
            { icon: Clock, text: "Same Day Treatment" },
            { icon: Star, text: "1000+ Happy Patients" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-background/60 text-sm font-body">
              <item.icon className="w-4 h-4 text-primary" />
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Floating clinic image card (desktop) */}
    <div className="hidden lg:block absolute bottom-12 right-12 xl:right-24 animate-float">
      <div className="w-72 rounded-2xl overflow-hidden shadow-2xl border-2 border-background/20">
        <img src={dentalClinic} alt="Modern dental clinic" className="w-full h-48 object-cover" />
        <div className="bg-card/90 backdrop-blur-xl p-4">
          <p className="font-display font-semibold text-foreground text-sm">State-of-the-Art Facility</p>
          <p className="text-xs text-muted-foreground font-body mt-1">Modern equipment & sterilized environment</p>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
