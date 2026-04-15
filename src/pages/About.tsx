import { Award, Heart, Target, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import clinic1 from "@/assets/clinic-1.png";
import clinic3 from "@/assets/clinic-3.png";
import dentalClinic from "@/assets/dental-clinic.jpg";
import dentistTreating from "@/assets/dentist-treating.jpg";

const About = () => (
  <div>
    {/* Hero */}
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 text-center relative">
        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest font-body mb-4">About Us</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6">
          Trusted Dental Care<br />Since <span className="text-gradient">2012</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
          Nishat Dental & Healthcare has been serving the Darbhanga community with advanced dental care, led by the expertise of Dr. Kamil Shahnawaz.
        </p>
      </div>
    </section>

    {/* Doctor Profile */}
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={clinic1} alt="Dr. Kamil Shahnawaz" className="w-full h-auto object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-6 -right-4 md:right-8 w-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-background z-10">
              <img src={dentistTreating} alt="Dr. Kamil treating patient" className="w-full h-auto object-cover" loading="lazy" />
            </div>
            <div className="absolute top-6 -left-4 bg-primary text-primary-foreground rounded-2xl px-5 py-3 shadow-xl z-10">
              <span className="text-2xl font-bold font-display block">12+</span>
              <span className="text-xs font-body opacity-90">Years</span>
            </div>
          </div>
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest font-body mb-3">Lead Dentist</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-2">Dr. Kamil Shahnawaz</h2>
            <p className="text-primary font-semibold font-body mb-6 text-lg">MDS – Dental Surgeon</p>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed mb-8">
              <p>Dr. Kamil Shahnawaz is a highly skilled dental surgeon with a Master's degree in Dental Surgery. With over 12 years of clinical experience, he has treated thousands of patients across Darbhanga and surrounding districts.</p>
              <p>He specializes in painless root canal treatments, dental implants, cosmetic dentistry, and orthodontic care. His patient-centric approach and commitment to using the latest technology have made Nishat Dental one of the most trusted clinics in the region.</p>
              <p>Dr. Kamil believes that quality dental care should be accessible and affordable. He takes time to explain procedures, answer questions, and ensure every patient feels comfortable.</p>
            </div>
            {["Painless Root Canal Specialist", "Advanced Implant Surgery", "Cosmetic & Aesthetic Dentistry", "Orthodontic Treatments"].map((item) => (
              <div key={item} className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm font-body text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest font-body mb-3">Our Values</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">What Drives Us</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Target, title: "Our Mission", desc: "To provide world-class dental care in Darbhanga with compassion and advanced technology." },
            { icon: Heart, title: "Patient First", desc: "Every treatment plan is personalized to your needs, budget, and comfort level." },
            { icon: Award, title: "Excellence", desc: "Recognized for outstanding dental care and contribution to healthcare in Bihar." },
            { icon: Users, title: "Community", desc: "Proudly serving the Darbhanga community with affordable, accessible dental care." },
          ].map((item) => (
            <div key={item.title} className="bg-card rounded-2xl p-6 border border-border/50 text-center hover:shadow-xl hover:shadow-primary/5 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2 text-lg">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Clinic Tour */}
    <section className="section-padding">
      <div className="container mx-auto px-4 text-center">
        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest font-body mb-3">Our Facility</span>
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-10">A Clinic Built for Comfort</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={dentalClinic} alt="Dental clinic interior" className="w-full h-72 object-cover" loading="lazy" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={clinic3} alt="Award ceremony" className="w-full h-72 object-cover" loading="lazy" />
          </div>
        </div>
        <p className="text-muted-foreground font-body mt-8 max-w-lg mx-auto">
          Our clinic features modern dental chairs, digital X-ray systems, and follows international sterilization standards.
        </p>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-5">Ready to Visit?</h2>
        <p className="font-body opacity-90 mb-8 max-w-lg mx-auto">Book your appointment with Dr. Kamil Shahnawaz today.</p>
        <Button asChild size="lg" variant="secondary" className="rounded-full px-8 font-body font-semibold shadow-xl">
          <Link to="/book-appointment">Book Appointment →</Link>
        </Button>
      </div>
    </section>
  </div>
);

export default About;
