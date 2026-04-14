import { Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import happyFamily from "@/assets/happy-family.jpg";

const CTABanner = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0">
      <img src={happyFamily} alt="Happy family smiling" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-accent/85" />
    </div>

    <div className="relative container mx-auto px-4 py-20 md:py-28">
      <div className="max-w-2xl mx-auto text-center text-primary-foreground">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-5">
          Ready for Your Best Smile?
        </h2>
        <p className="text-lg opacity-90 mb-10 font-body max-w-lg mx-auto">
          Book your appointment today and experience the difference of expert, caring dental treatment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary" className="rounded-full px-8 text-base font-body font-semibold shadow-xl group h-13">
            <Link to="/book-appointment">
              Book Appointment
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild size="lg" className="rounded-full px-8 text-base font-body font-semibold border-2 border-primary-foreground/30 bg-transparent hover:bg-primary-foreground/10 h-13">
            <a href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default CTABanner;
