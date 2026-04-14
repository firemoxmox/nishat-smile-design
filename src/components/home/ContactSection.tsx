import { MapPin, Phone, Clock, Mail } from "lucide-react";

const ContactSection = () => (
  <section className="section-padding bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest font-body mb-3">Find Us</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">Visit Our Clinic</h2>
        <p className="text-muted-foreground font-body max-w-xl mx-auto">
          Conveniently located in the heart of Darbhanga, near Shiksha Bhawan.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2 space-y-6">
          {[
            { icon: MapPin, title: "Address", info: "Near Shiksha Bhawan, Karamganj Main Road, Darbhanga, Bihar" },
            { icon: Phone, title: "Phone", info: "+91 98765 43210", href: "tel:+919876543210" },
            { icon: Mail, title: "Email", info: "info@nishatdental.com" },
            { icon: Clock, title: "Hours", info: "Mon–Sat: 9 AM – 8 PM" },
          ].map((c) => (
            <div key={c.title} className="flex items-start gap-4 bg-card rounded-xl p-4 border border-border/50">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shrink-0">
                <c.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground text-sm">{c.title}</h3>
                {c.href ? (
                  <a href={c.href} className="text-sm text-primary hover:underline font-body">{c.info}</a>
                ) : (
                  <p className="text-sm text-muted-foreground font-body">{c.info}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="md:col-span-3 rounded-2xl overflow-hidden shadow-xl border border-border/50 min-h-[350px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.5!2d85.9!3d26.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA5JzAwLjAiTiA4NcKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 350 }}
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
