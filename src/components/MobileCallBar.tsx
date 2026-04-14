import { Phone } from "lucide-react";

const MobileCallBar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-primary text-primary-foreground">
    <a
      href="tel:+919876543210"
      className="flex items-center justify-center gap-2 py-3 font-semibold text-sm"
    >
      <Phone className="w-4 h-4" />
      Call Now – +91 98765 43210
    </a>
  </div>
);

export default MobileCallBar;
