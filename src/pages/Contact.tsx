import { useState } from "react";
import { MapPin, Phone, Clock, Mail, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import dentalClinic from "@/assets/dental-clinic.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast({ title: "Please fill in your name and phone number", variant: "destructive" });
      return;
    }
    const msg = encodeURIComponent(`Hi, I'm ${form.name.trim()}. Phone: ${form.phone.trim()}. ${form.message.trim()}`);
    window.open(`https://wa.me/919876543210?text=${msg}`, "_blank");
    toast({ title: "Redirecting to WhatsApp..." });
  };

  return (
    <div>
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="container mx-auto px-4 text-center relative">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest font-body mb-4">Contact</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Have questions or need an appointment? We're here to help!
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold font-display text-foreground mb-2">Visit Us</h2>
              <p className="text-muted-foreground font-body text-sm mb-6">We'd love to welcome you to our clinic.</p>

              {[
                { icon: MapPin, title: "Address", info: "Near Shiksha Bhawan, Karamganj Main Road, Darbhanga, Bihar" },
                { icon: Phone, title: "Phone", info: "+91 98765 43210", href: "tel:+919876543210" },
                { icon: Mail, title: "Email", info: "info@nishatdental.com" },
                { icon: Clock, title: "Hours", info: "Mon–Sat: 9 AM – 8 PM | Sun: Closed" },
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

              <Button asChild className="w-full rounded-full font-body shadow-lg shadow-primary/20 mt-4" size="lg">
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-3xl p-8 md:p-10 border border-border/50 shadow-xl">
                <h2 className="text-2xl font-bold font-display text-foreground mb-2">Send a Message</h2>
                <p className="text-muted-foreground font-body text-sm mb-8">We'll get back to you as soon as possible.</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} required className="h-12 rounded-xl font-body" />
                  <Input placeholder="Phone Number" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={15} required className="h-12 rounded-xl font-body" />
                  <Textarea placeholder="Your Message (optional)" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={500} rows={4} className="rounded-xl font-body" />
                  <Button type="submit" className="w-full rounded-full font-body shadow-lg shadow-primary/20 group h-12" size="lg">
                    Send via WhatsApp
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-16 rounded-3xl overflow-hidden shadow-xl border border-border/50 h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.5!2d85.9!3d26.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA5JzAwLjAiTiA4NcKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Nishat Dental Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
