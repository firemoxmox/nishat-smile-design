import { Award, Heart, Target, Users } from "lucide-react";
import clinic1 from "@/assets/clinic-1.png";
import clinic3 from "@/assets/clinic-3.png";

const About = () => (
  <div>
    {/* Hero */}
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Nishat Dental</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Trusted dental care in Darbhanga since over a decade, led by Dr. Kamil Shahnawaz.
        </p>
      </div>
    </section>

    {/* Doctor Profile */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={clinic1} alt="Dr. Kamil Shahnawaz" className="w-full h-auto object-cover" loading="lazy" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Dr. Kamil Shahnawaz</h2>
            <p className="text-primary font-semibold mb-6">MDS – Dental Surgeon | 12+ Years Experience</p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dr. Kamil Shahnawaz is a highly skilled dental surgeon with a Master's degree in Dental Surgery. With over 12 years of clinical experience, he has treated thousands of patients across Darbhanga and surrounding districts.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              He specializes in painless root canal treatments, dental implants, cosmetic dentistry, and orthodontic care. His patient-centric approach and commitment to using the latest technology have made Nishat Dental one of the most trusted clinics in the region.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Dr. Kamil believes that quality dental care should be accessible and affordable to everyone. He takes time to explain procedures, answer questions, and ensure patients feel comfortable throughout their visit.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Target, title: "Our Mission", desc: "To provide world-class dental care in Darbhanga with compassion, integrity, and advanced technology." },
            { icon: Heart, title: "Patient First", desc: "Every treatment plan is personalized to your needs, budget, and comfort level." },
            { icon: Award, title: "Excellence", desc: "Recognized for outstanding dental care and contribution to healthcare in Bihar." },
            { icon: Users, title: "Community", desc: "Proudly serving the Darbhanga community with affordable, accessible dental care." },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Award */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-8">Awards & Recognition</h2>
        <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-xl">
          <img src={clinic3} alt="Dr. Kamil Shahnawaz receiving award" className="w-full h-auto object-cover" loading="lazy" />
        </div>
        <p className="text-muted-foreground mt-6 max-w-lg mx-auto">
          Dr. Kamil Shahnawaz has been recognized for his exceptional contributions to dental healthcare.
        </p>
      </div>
    </section>
  </div>
);

export default About;
