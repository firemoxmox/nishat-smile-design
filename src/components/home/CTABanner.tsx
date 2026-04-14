import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTABanner = () => (
  <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Appointment Today</h2>
      <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
        Don't wait for dental problems to worsen. Get expert care from Dr. Kamil Shahnawaz now.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" variant="secondary" className="text-base font-semibold">
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp Us
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="text-base font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
          <a href="tel:+919876543210">
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default CTABanner;
