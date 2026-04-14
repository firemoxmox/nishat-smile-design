import { Link } from "react-router-dom";
import { Stethoscope, Sparkles, CircleDot, SmilePlus, Scissors, Crown, Baby } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Stethoscope, title: "Root Canal Treatment (RCT)", desc: "Our painless root canal treatment uses advanced rotary instruments and digital X-rays to save your natural teeth. The procedure is completed in 1-2 visits with minimal discomfort.", benefits: ["Painless procedure", "Save natural teeth", "Digital X-ray guided", "1-2 visit completion"] },
  { icon: Sparkles, title: "Teeth Whitening", desc: "Professional in-office teeth whitening for a brighter, more confident smile. Our whitening treatments can lighten your teeth by several shades in just one visit.", benefits: ["Instant results", "Long-lasting brightness", "Safe & professional", "Custom shade matching"] },
  { icon: CircleDot, title: "Dental Implants", desc: "Permanent tooth replacement solution that looks, feels, and functions like your natural teeth. Our implants are made from premium titanium for maximum durability.", benefits: ["Permanent solution", "Natural appearance", "Premium materials", "High success rate"] },
  { icon: SmilePlus, title: "Braces & Aligners", desc: "Straighten your teeth with traditional metal braces or modern invisible aligners. We offer customized orthodontic treatment plans for all ages.", benefits: ["Metal & ceramic options", "Invisible aligners available", "All ages welcome", "Customized plans"] },
  { icon: Scissors, title: "Tooth Extraction", desc: "Safe and painless tooth extraction using modern techniques. Our gentle approach ensures minimal trauma and quick recovery.", benefits: ["Painless extraction", "Minimal recovery time", "Post-care guidance", "Emergency services"] },
  { icon: Crown, title: "Crowns & Bridges", desc: "Custom-made dental crowns and bridges to restore damaged or missing teeth. We use high-quality materials for natural-looking results.", benefits: ["Natural appearance", "Durable materials", "Custom fabrication", "Perfect fit"] },
  { icon: Baby, title: "Kids Dentistry", desc: "Gentle, child-friendly dental care designed to make your child's visit fun and comfortable. We specialize in preventive care for growing smiles.", benefits: ["Child-friendly environment", "Preventive focus", "Gentle approach", "Fun experience"] },
];

const Services = () => (
  <div>
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Dental Services</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive dental care under one roof – from routine check-ups to advanced surgical procedures.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 space-y-8">
        {services.map((s, i) => (
          <Card key={s.title} className="overflow-hidden border-border/50">
            <CardContent className="p-0">
              <div className={`flex flex-col md:flex-row ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="flex-1 p-8 md:p-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <s.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">{s.title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{s.desc}</p>
                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link to="/book-appointment">Book Appointment</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  </div>
);

export default Services;
