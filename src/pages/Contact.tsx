import { useState } from "react";
import { MapPin, Phone, Clock, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast({ title: "Please fill in your name and phone number", variant: "destructive" });
      return;
    }
    const msg = encodeURIComponent(
      `Hi, I'm ${form.name.trim()}. Phone: ${form.phone.trim()}. ${form.message.trim()}`
    );
    window.open(`https://wa.me/919876543210?text=${msg}`, "_blank");
    toast({ title: "Redirecting to WhatsApp..." });
  };

  return (
    <div>
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or need an appointment? Reach out to us – we're here to help!
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
              {[
                { icon: MapPin, title: "Address", info: "Near Shiksha Bhawan, Karamganj Main Road, Darbhanga, Bihar" },
                { icon: Phone, title: "Phone", info: "+91 98765 43210", href: "tel:+919876543210" },
                { icon: Mail, title: "Email", info: "info@nishatdental.com" },
                { icon: Clock, title: "Working Hours", info: "Mon–Sat: 9 AM – 8 PM | Sunday: Closed" },
              ].map((c) => (
                <div key={c.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{c.title}</h3>
                    {c.href ? (
                      <a href={c.href} className="text-sm text-primary hover:underline">{c.info}</a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{c.info}</p>
                    )}
                  </div>
                </div>
              ))}

              <Button asChild className="w-full sm:w-auto" size="lg">
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>

            {/* Contact Form */}
            <Card className="border-border/50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    maxLength={100}
                    required
                  />
                  <Input
                    placeholder="Phone Number"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    maxLength={15}
                    required
                  />
                  <Textarea
                    placeholder="Your Message (optional)"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    maxLength={500}
                    rows={4}
                  />
                  <Button type="submit" className="w-full" size="lg">
                    Send via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="mt-12 rounded-2xl overflow-hidden shadow-lg h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.5!2d85.9!3d26.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA5JzAwLjAiTiA4NcKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Nishat Dental Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
