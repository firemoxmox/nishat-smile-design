import { useState } from "react";
import { Calendar, MessageCircle, Phone, ArrowRight, CheckCircle, Clock, Shield, Sparkles, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import doctorImg from "@/assets/dr-kamil.png";

const servicesList = [
  "Root Canal Treatment", "Teeth Whitening", "Dental Implants", "Braces & Aligners",
  "Tooth Extraction", "Crowns & Bridges", "Kids Dentistry", "General Check-up", "Other",
];

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM",
  "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM",
];

const BookAppointment = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "", time: "" });
  const [step, setStep] = useState(1);

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

  const canProceed = step === 1 ? (form.name.trim() && form.phone.trim()) : form.service;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-28 pb-8 md:pt-36 md:pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest font-body mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            Book in 30 Seconds
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-display text-foreground mb-4 leading-tight">
            Schedule Your <br className="hidden sm:block" />
            <span className="text-gradient">Perfect Smile</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto font-body">
            Quick booking, instant WhatsApp confirmation, zero waiting time
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">

            {/* Progress Steps */}
            <div className="flex items-center justify-center gap-0 mb-10">
              {[
                { num: 1, label: "Your Info" },
                { num: 2, label: "Service" },
                { num: 3, label: "Schedule" },
              ].map((s, i) => (
                <div key={s.num} className="flex items-center">
                  <button
                    onClick={() => s.num < step ? setStep(s.num) : undefined}
                    className={`flex items-center gap-2.5 px-4 py-2 rounded-full transition-all duration-300 ${
                      step === s.num
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                        : step > s.num
                        ? "bg-primary/10 text-primary cursor-pointer"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      step > s.num ? "bg-primary text-primary-foreground" : step === s.num ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted-foreground/20"
                    }`}>
                      {step > s.num ? <CheckCircle className="w-3.5 h-3.5" /> : s.num}
                    </span>
                    <span className="text-sm font-semibold font-body hidden sm:block">{s.label}</span>
                  </button>
                  {i < 2 && (
                    <div className={`w-10 md:w-16 h-0.5 mx-1 rounded-full transition-colors ${step > s.num ? "bg-primary" : "bg-border"}`} />
                  )}
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-5 gap-8">
              {/* Form Card */}
              <div className="lg:col-span-3">
                <form onSubmit={handleSubmit}>
                  <div className="bg-card rounded-[2rem] border border-border/50 shadow-2xl shadow-primary/5 overflow-hidden">
                    
                    {/* Step 1 - Personal Info */}
                    <div className={`transition-all duration-500 ${step === 1 ? "block" : "hidden"}`}>
                      <div className="p-8 md:p-10">
                        <div className="flex items-center gap-3 mb-7">
                          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h2 className="text-lg font-bold font-display text-foreground">Personal Information</h2>
                            <p className="text-xs text-muted-foreground font-body">Tell us about yourself</p>
                          </div>
                        </div>

                        <div className="space-y-5">
                          <div>
                            <label className="text-sm font-semibold text-foreground font-body mb-2 block">Full Name <span className="text-destructive">*</span></label>
                            <Input
                              placeholder="e.g. Rahul Sharma"
                              value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              maxLength={100}
                              required
                              className="h-13 rounded-2xl font-body bg-muted/50 border-border/60 focus:bg-background transition-colors text-base"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-semibold text-foreground font-body mb-2 block">Phone Number <span className="text-destructive">*</span></label>
                            <Input
                              placeholder="e.g. +91 98765 43210"
                              type="tel"
                              value={form.phone}
                              onChange={(e) => setForm({ ...form, phone: e.target.value })}
                              maxLength={15}
                              required
                              className="h-13 rounded-2xl font-body bg-muted/50 border-border/60 focus:bg-background transition-colors text-base"
                            />
                          </div>
                        </div>

                        <Button
                          type="button"
                          onClick={() => form.name.trim() && form.phone.trim() ? setStep(2) : toast({ title: "Please fill name & phone", variant: "destructive" })}
                          className="w-full rounded-full font-body shadow-lg shadow-primary/20 group h-13 text-base mt-8"
                          size="lg"
                        >
                          Continue
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>

                    {/* Step 2 - Service Selection */}
                    <div className={`transition-all duration-500 ${step === 2 ? "block" : "hidden"}`}>
                      <div className="p-8 md:p-10">
                        <div className="flex items-center gap-3 mb-7">
                          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center">
                            <Shield className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h2 className="text-lg font-bold font-display text-foreground">Choose Service</h2>
                            <p className="text-xs text-muted-foreground font-body">What treatment do you need?</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {servicesList.map((s) => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => setForm({ ...form, service: s })}
                              className={`relative px-4 py-4 rounded-2xl border-2 text-left transition-all duration-200 font-body text-sm font-medium ${
                                form.service === s
                                  ? "border-primary bg-primary/5 text-primary shadow-md shadow-primary/10"
                                  : "border-border/60 bg-muted/30 text-foreground hover:border-primary/30 hover:bg-muted/50"
                              }`}
                            >
                              {form.service === s && (
                                <CheckCircle className="w-4 h-4 text-primary absolute top-2 right-2" />
                              )}
                              {s}
                            </button>
                          ))}
                        </div>

                        <div className="flex gap-3 mt-8">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setStep(1)}
                            className="rounded-full font-body h-13 px-6"
                            size="lg"
                          >
                            Back
                          </Button>
                          <Button
                            type="button"
                            onClick={() => form.service ? setStep(3) : toast({ title: "Please select a service", variant: "destructive" })}
                            className="flex-1 rounded-full font-body shadow-lg shadow-primary/20 group h-13 text-base"
                            size="lg"
                          >
                            Continue
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Step 3 - Date & Time + Submit */}
                    <div className={`transition-all duration-500 ${step === 3 ? "block" : "hidden"}`}>
                      <div className="p-8 md:p-10">
                        <div className="flex items-center gap-3 mb-7">
                          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center">
                            <Clock className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h2 className="text-lg font-bold font-display text-foreground">Pick Date & Time</h2>
                            <p className="text-xs text-muted-foreground font-body">Optional — we'll confirm availability</p>
                          </div>
                        </div>

                        <div className="space-y-5">
                          <div>
                            <label className="text-sm font-semibold text-foreground font-body mb-2 block">Preferred Date</label>
                            <Input
                              type="date"
                              value={form.date}
                              onChange={(e) => setForm({ ...form, date: e.target.value })}
                              className="h-13 rounded-2xl font-body bg-muted/50 border-border/60 focus:bg-background transition-colors text-base"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-semibold text-foreground font-body mb-2 block">Preferred Time</label>
                            <Select onValueChange={(v) => setForm({ ...form, time: v })}>
                              <SelectTrigger className="h-13 rounded-2xl font-body bg-muted/50 border-border/60">
                                <SelectValue placeholder="Select a time slot" />
                              </SelectTrigger>
                              <SelectContent>
                                {timeSlots.map((t) => (
                                  <SelectItem key={t} value={t} className="font-body">{t}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        {/* Summary */}
                        <div className="bg-muted/50 rounded-2xl p-5 mt-6 border border-border/40">
                          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground font-body mb-3">Booking Summary</p>
                          <div className="space-y-2 text-sm font-body">
                            <div className="flex justify-between"><span className="text-muted-foreground">Name</span><span className="font-semibold text-foreground">{form.name}</span></div>
                            <div className="flex justify-between"><span className="text-muted-foreground">Phone</span><span className="font-semibold text-foreground">{form.phone}</span></div>
                            <div className="flex justify-between"><span className="text-muted-foreground">Service</span><span className="font-semibold text-primary">{form.service}</span></div>
                            {form.date && <div className="flex justify-between"><span className="text-muted-foreground">Date</span><span className="font-semibold text-foreground">{form.date}</span></div>}
                            {form.time && <div className="flex justify-between"><span className="text-muted-foreground">Time</span><span className="font-semibold text-foreground">{form.time}</span></div>}
                          </div>
                        </div>

                        <div className="flex gap-3 mt-8">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setStep(2)}
                            className="rounded-full font-body h-13 px-6"
                            size="lg"
                          >
                            Back
                          </Button>
                          <Button
                            type="submit"
                            className="flex-1 rounded-full font-body shadow-lg shadow-primary/20 group h-13 text-base bg-gradient-to-r from-primary to-accent hover:opacity-90"
                            size="lg"
                          >
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Confirm via WhatsApp
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              {/* Side Panel */}
              <div className="lg:col-span-2 space-y-5">
                {/* Doctor Card */}
                <div className="bg-card rounded-[2rem] border border-border/50 p-6 shadow-lg">
                  <div className="flex items-center gap-4 mb-5">
                    <img src={doctorImg} alt="Dr. Kamil Shahnawaz" className="w-16 h-16 rounded-2xl object-cover border-2 border-primary/15 shadow-md" />
                    <div>
                      <p className="font-display font-bold text-foreground text-sm">Dr. Kamil Shahnawaz</p>
                      <p className="text-xs text-primary font-body font-semibold">MDS · Conservative Dentistry</p>
                      <p className="text-[11px] text-muted-foreground font-body mt-0.5">12+ years experience</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { icon: Clock, text: "Same-day appointments available" },
                      { icon: Shield, text: "Painless treatment guaranteed" },
                      { icon: CheckCircle, text: "Zero waiting time policy" },
                      { icon: Sparkles, text: "WhatsApp confirmation in minutes" },
                      { icon: MapPin, text: "Modern clinic with latest tech" },
                    ].map(({ icon: Icon, text }) => (
                      <div key={text} className="flex items-center gap-3 group">
                        <div className="w-8 h-8 rounded-xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                          <Icon className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="text-sm font-body text-muted-foreground">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Emergency Card */}
                <div className="relative overflow-hidden rounded-[2rem] p-6 bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground shadow-xl shadow-primary/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-6 -translate-x-6" />
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-4">
                      <Phone className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg mb-1">Dental Emergency?</h3>
                    <p className="text-sm font-body opacity-85 mb-5 leading-relaxed">
                      Don't wait — call us now for immediate pain relief and emergency care.
                    </p>
                    <Button asChild variant="secondary" className="rounded-full font-body w-full h-12 font-semibold shadow-lg">
                      <a href="tel:+919876543210">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Clinic Hours */}
                <div className="bg-muted/50 rounded-2xl p-5 border border-border/40">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground font-body mb-3">Clinic Hours</p>
                  <div className="space-y-2 text-sm font-body">
                    <div className="flex justify-between"><span className="text-muted-foreground">Mon – Sat</span><span className="font-semibold text-foreground">9:00 AM – 8:00 PM</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Sunday</span><span className="font-semibold text-foreground">10:00 AM – 2:00 PM</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookAppointment;
