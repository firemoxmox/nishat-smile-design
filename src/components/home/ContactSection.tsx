import { MapPin, Phone, Clock, Mail } from "lucide-react";

const ContactSection = () => (
  <section className="py-16 md:py-24 bg-secondary/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="text-primary font-semibold text-sm uppercase tracking-wide">Find Us</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Visit Our Clinic</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Address</h3>
              <p className="text-sm text-muted-foreground">Near Shiksha Bhawan, Karamganj Main Road, Darbhanga, Bihar, India</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Phone</h3>
              <a href="tel:+919876543210" className="text-sm text-primary hover:underline">+91 98765 43210</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Email</h3>
              <p className="text-sm text-muted-foreground">info@nishatdental.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Working Hours</h3>
              <p className="text-sm text-muted-foreground">Monday – Saturday: 9:00 AM – 8:00 PM</p>
              <p className="text-sm text-muted-foreground">Sunday: Closed</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg h-80 md:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.5!2d85.9!3d26.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA5JzAwLjAiTiA4NcKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 320 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nishat Dental & Healthcare Location"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
