import { useState } from "react";
import { Calendar, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Root Canal Treatment",
  "Teeth Whitening",
  "Dental Implants",
  "Braces & Aligners",
  "Tooth Extraction",
  "Crowns & Bridges",
  "Kids Dentistry",
  "General Check-up",
  "Other",
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
      `Hi, I'd like to book an appointment.\n\nName: ${form.name.trim()}\nPhone: ${form.phone.trim()}\nService: ${form.service}\nPreferred Date: ${form.date || "Flexible"}\nPreferred Time: ${form.time || "Flexible"}`
    );
    window.open(`https://wa.me/919876543210?text=${msg}`, "_blank");
    toast({ title: "Redirecting to WhatsApp to confirm your appointment..." });
  };

  return (
    <div>
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Book an Appointment</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill the form below and we'll confirm your appointment via WhatsApp or call.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="border-border/50 shadow-lg">
            <CardContent className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">Appointment Details</h2>
                  <p className="text-sm text-muted-foreground">All fields marked are required</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                  <Input
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    maxLength={100}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number *</label>
                  <Input
                    placeholder="Enter your phone number"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    maxLength={15}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Select Service *</label>
                  <Select onValueChange={(v) => setForm({ ...form, service: v })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Preferred Date</label>
                    <Input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Preferred Time</label>
                    <Input
                      type="time"
                      value={form.time}
                      onChange={(e) => setForm({ ...form, time: e.target.value })}
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book via WhatsApp
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted-foreground mb-3">Or book directly by calling us</p>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <a href="tel:+919876543210">
                    <Phone className="w-5 h-5 mr-2" />
                    Call +91 98765 43210
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default BookAppointment;
