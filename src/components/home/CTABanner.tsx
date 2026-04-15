import { Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTABanner = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(195,85%,15%)] via-[hsl(195,80%,22%)] to-[hsl(180,60%,28%)]" />

    <div className="relative container mx-auto px-4 py-20 md:py-24">
      <div className="max-w-2xl mx-auto text-center">
        <span className="inline-block text-accent font-semibold text-xs uppercase tracking-widest font-body mb-4">Book Your Visit</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white mb-5 leading-tight">
          Your Perfect Smile is{" "}
          <em className="italic text-accent not-italic font-display">Just One</em>
          <br />Appointment Away
        </h2>
        <p className="text-white/60 font-body mb-10 max-w-lg mx-auto text-sm">
          Don't wait for the perfect moment. Schedule your visit today and let us take care of your dental health.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="rounded-full px-8 text-sm font-body font-semibold shadow-xl h-12 bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link to="/book-appointment">
              Book Appointment
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-sm font-body font-semibold border-white/30 text-white hover:bg-white/10 h-12">
            <a href="tel:+919876543210">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </Button>
          <Button asChild size="lg" className="rounded-full px-8 text-sm font-body font-semibold h-12 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-white">
            <a href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default CTABanner;
