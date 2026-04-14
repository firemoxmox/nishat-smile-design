import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20an%20appointment%20at%20Nishat%20Dental"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-20 md:bottom-8 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 animate-pulse_glow"
    style={{ background: "linear-gradient(135deg, hsl(142, 70%, 45%), hsl(160, 60%, 45%))" }}
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-6 h-6 text-white" />
  </a>
);

export default WhatsAppButton;
