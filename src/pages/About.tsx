import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Award,
  GraduationCap,
  Heart,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const qualifications = [
  "Master of Dental Surgery (MDS)",
  "Bachelor of Dental Surgery (BDS)",
  "Advanced Implantology Certification",
  "Continuing Education in Cosmetic Dentistry",
];

const values = [
  {
    icon: Heart,
    title: "Patient-First Approach",
    desc: "Every decision is made with the patient's comfort and well-being as the top priority.",
  },
  {
    icon: Award,
    title: "Clinical Excellence",
    desc: "We follow evidence-based practices and stay updated with the latest advances in dentistry.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    desc: "Regular training and workshops ensure we bring the best global practices to Darbhanga.",
  },
];

export default function About() {
  return (
    <div className="pt-20 lg:pt-24 pb-16 lg:pb-0">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-primary/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <p className="text-secondary font-medium text-sm uppercase tracking-widest mb-3">
                About Us
              </p>
              <h1 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Trusted Dental Care Since 2012
              </h1>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-6">
                Nishat Dental & Healthcare was founded with a simple mission —
                to bring world-class dental care to Darbhanga. Under the
                leadership of Dr. Kamil Shahnawaz, we have served over 1,000
                patients with compassion, expertise, and cutting-edge
                technology.
              </p>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                Our clinic is equipped with the latest dental technology,
                including digital X-rays, rotary endodontic systems, and
                advanced sterilization equipment. We believe every patient
                deserves pain-free, affordable, and high-quality dental
                treatment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden aspect-[3/4] max-w-md mx-auto">
                <img
                  src="https://media.base44.com/images/public/69de4d5b6aec6158ad57d1be/cb8b24d71_generated_fd94999b.png"
                  alt="Dr. Kamil Shahnawaz at Nishat Dental clinic"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctor Bio */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-secondary font-medium text-sm uppercase tracking-widest mb-3">
              Your Dentist
            </p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Dr. Kamil Shahnawaz
            </h2>
            <p className="text-muted-foreground text-lg">
              MDS, Dental Surgeon — 12+ Years Experience
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-muted-foreground text-base lg:text-lg leading-relaxed"
          >
            <p>
              Dr. Kamil Shahnawaz is a highly experienced dental surgeon with
              over 12 years of dedicated practice in advanced dentistry. After
              completing his MDS, he committed himself to bringing modern,
              pain-free dental treatments to the people of Darbhanga and
              surrounding regions.
            </p>
            <p>
              His expertise spans across general dentistry, endodontics (root
              canal), prosthodontics (crowns, bridges, implants), orthodontics
              (braces & aligners), and pediatric dentistry. He is known for his
              gentle touch, thorough explanations, and commitment to making
              every patient feel at ease.
            </p>
            <p>
              Dr. Kamil regularly attends national and international dental
              conferences and workshops to stay at the forefront of dental
              innovation. He believes in personalized treatment plans that
              consider each patient's unique needs and concerns.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <h3 className="font-heading font-semibold text-foreground text-lg mb-4">
              Qualifications & Training
            </h3>
            <ul className="space-y-3">
              {qualifications.map((q) => (
                <li
                  key={q}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                  {q}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/book-appointment">
              <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-6">
                Book Appointment <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hello%20Dr.%20Kamil%2C%20I%20have%20a%20question."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="rounded-full px-6 border-2">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat with Dr. Kamil
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
              Our Values
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-border/50 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
