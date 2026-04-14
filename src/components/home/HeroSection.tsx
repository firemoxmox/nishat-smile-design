import { Link } from "react-router-dom";
import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 md:py-32">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto text-center md:text-left md:mx-0">
        <span className="inline-block text-primary font-semibold text-sm tracking-wide uppercase mb-4">
          Nishat Dental & Healthcare
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
          Advanced Dental Care in <span className="text-primary">Darbhanga</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl">
          Pain-free treatments with modern technology & expert care by Dr. Kamil Shahnawaz (MDS). Your smile is in safe hands.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="text-base">
            <Link to="/book-appointment">
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base">
            <a href="tel:+919876543210">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </Button>
        </div>
      </div>
    </div>
    {/* Decorative circles */}
    <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
    <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent/10 blur-3xl" />
  </section>
);

export default HeroSection;
