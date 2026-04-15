import { Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTABanner = () => (
  <section className="relative overflow-hidden bg-foreground">
    {/* Decorative */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]" />
    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/15 rounded-full blur-[120px]" />

    <div className="relative container mx-auto px-4 py-20 md:py-28">
      <div className="max-w-2xl mx-auto text-center">
        <span className="inline-block text-primary font-semibold text-xs uppercase tracking-widest font-body mb-6">Book Your Visit</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-background leading-tight mb-5">
          Your perfect smile is
          <br />
          <span className="text-primary">just one visit away</span>
        </h2>
        <p className="text-background/50 font-body mb-10 max-w-lg mx-auto">
          Don't wait for the perfect moment. Schedule your visit today and let us take care of your dental health.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="rounded-full px-10 text-sm font-body font-semibold shadow-xl h-14 group">
            <Link to="/book-appointment">
              Book Appointment
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-sm font-body font-semibold border-background/20 text-background hover:bg-background/10 h-14">
            <a href="tel:+919876543210">
              <Phone className="w-4 h-4 mr-2" />
              +91 98765 43210
            </a>
          </Button>
          <Button asChild size="lg" className="rounded-full px-8 text-sm font-body font-semibold h-14 bg-[hsl(142,70%,42%)] hover:bg-[hsl(142,70%,38%)] text-white">
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default CTABanner;
