import { useState } from "react";
import { Calendar, MessageCircle, Phone, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import dentalClinic from "@/assets/dental-clinic.jpg";

const servicesList = [
  "Root Canal Treatment", "Teeth Whitening", "Dental Implants", "Braces & Aligners",
  "Tooth Extraction", "Crowns & Bridges", "Kids Dentistry", "General Check-up", "Other",
];

const BookAppointment = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "", time: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.service) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    const msg = encodeURIComponent(
      `Hi, I'd like to book an appointment.\n\nName: ${form.name.trim()}\nPhone: ${form.phone.trim()}\nService: ${form.service}\nDate: ${form.date || "Flexible"}\nTime: ${form.time || "Flexible"}`
    );
    window.open(`https://wa.me/919876543210?text=${msg}`, "_blank");
    toast({ title: "Redirecting to WhatsApp to confirm..." });
  };

  return (
    <div>
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="container mx-auto px-4 text-center relative">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest font-body mb-4">Appointment</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6">
            Book Your <span className="text-gradient">Visit</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Fill the form and we'll confirm via WhatsApp or call. It takes just 30 seconds!
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-3xl p-8 md:p-10 border border-border/50 shadow-xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <Calendar className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold font-display text-foreground">Appointment Details</h2>
                    <p className="text-sm text-muted-foreground font-body">Fields marked with * are required</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-sm font-medium text-foreground font-body mb-2 block">Full Name *</label>
                    <Input placeholder="Enter your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} required className="h-12 rounded-xl font-body" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground font-body mb-2 block">Phone Number *</label>
                    <Input placeholder="Enter your phone number" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={15} required className="h-12 rounded-xl font-body" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground font-body mb-2 block">Select Service *</label>
                    <Select onValueChange={(v) => setForm({ ...form, service: v })}>
                      <SelectTrigger className="h-12 rounded-xl font-body">
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {servicesList.map((s) => (
                          <SelectItem key={s} value={s} className="font-body">{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground font-body mb-2 block">Preferred Date</label>
                      <Input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="h-12 rounded-xl font-body" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground font-body mb-2 block">Preferred Time</label>
                      <Input type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className="h-12 rounded-xl font-body" />
                    </div>
                  </div>
                  <Button type="submit" className="w-full rounded-full font-body shadow-lg shadow-primary/20 group h-13 text-base" size="lg">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Book via WhatsApp
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground font-body mb-3">Or call directly</p>
                  <Button asChild variant="outline" size="lg" className="w-full rounded-full font-body">
                    <a href="tel:+919876543210">
                      <Phone className="w-5 h-5 mr-2" />
                      Call +91 98765 43210
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Side info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img src={dentalClinic} alt="Dental clinic" className="w-full h-48 object-cover" loading="lazy" />
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <h3 className="font-display font-semibold text-foreground mb-4">Why Book With Us?</h3>
                {[
                  "Same-day appointments available",
                  "Zero waiting time policy",
                  "Painless treatment guaranteed",
                  "Affordable & transparent pricing",
                  "WhatsApp confirmation within minutes",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm font-body text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-6 text-primary-foreground">
                <h3 className="font-display font-semibold mb-2">Emergency?</h3>
                <p className="text-sm font-body opacity-90 mb-4">For dental emergencies, call us directly for immediate assistance.</p>
                <Button asChild variant="secondary" className="rounded-full font-body w-full">
                  <a href="tel:+919876543210">
                    <Phone className="w-4 h-4 mr-2" />
                    Emergency Call
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookAppointment;
