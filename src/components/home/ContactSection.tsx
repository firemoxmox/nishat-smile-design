import { MapPin, Phone, Clock, Mail } from "lucide-react";

const contactItems = [
  { icon: MapPin, title: "Address", info: "Near Shiksha Bhawan, Karamganj Main Road, Darbhanga, Bihar" },
  { icon: Phone, title: "Phone", info: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: Mail, title: "Email", info: "info@nishatdental.com" },
  { icon: Clock, title: "Working Hours", info: "Mon–Sat: 9 AM – 8 PM" },
];

const ContactSection = () => (
  <section className="section-padding">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="inline-block text-primary font-semibold text-xs uppercase tracking-widest font-body mb-3">Location</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-foreground mb-4">
          Find us in <span className="text-gradient">Darbhanga</span>
        </h2>
        <p className="text-muted-foreground font-body max-w-xl mx-auto">
          Conveniently located near Shiksha Bhawan on Karamganj Main Road.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-6">
        <div className="md:col-span-3 rounded-2xl overflow-hidden shadow-lg border border-border/50 min-h-[350px]">
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

        <div className="md:col-span-2 space-y-4">
          {contactItems.map((c) => (
            <div key={c.title} className="flex items-start gap-4 bg-card rounded-2xl p-5 border border-border/50">
              <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                <c.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground text-sm mb-0.5">{c.title}</h3>
                {c.href ? (
                  <a href={c.href} className="text-sm text-primary hover:underline font-body">{c.info}</a>
                ) : (
                  <p className="text-sm text-muted-foreground font-body">{c.info}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
