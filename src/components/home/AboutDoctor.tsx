import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import clinicImg from "@/assets/clinic-1.png";

const AboutDoctor = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src={clinicImg}
            alt="Dr. Kamil Shahnawaz at Nishat Dental clinic"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">About the Doctor</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Dr. Kamil Shahnawaz
          </h2>
          <p className="text-primary font-medium mb-4">MDS – Dental Surgeon</p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            With over 12 years of experience, Dr. Kamil Shahnawaz is one of the most trusted dental surgeons in Darbhanga. He specializes in painless root canals, dental implants, and cosmetic dentistry.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Known for his gentle approach and patient-first philosophy, Dr. Kamil ensures every patient feels comfortable and receives world-class dental care right here in Darbhanga.
          </p>
          <Button asChild variant="outline">
            <Link to="/about">Know More →</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default AboutDoctor;
