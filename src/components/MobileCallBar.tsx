import { Phone } from "lucide-react";

const MobileCallBar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
    <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
      <a
        href="tel:+919876543210"
        className="flex items-center justify-center gap-2 py-3.5 font-semibold text-sm font-body"
      >
        <Phone className="w-4 h-4" />
        Call Now – Book Your Appointment
      </a>
    </div>
  </div>
);

export default MobileCallBar;
