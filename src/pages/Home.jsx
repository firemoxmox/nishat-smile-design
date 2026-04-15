import React from "react";
import HeroSection from "../components/home/HeroSection";
import TrustStats from "../components/home/TrustStats";
import AboutDoctor from "../components/home/AboutDoctor";
import ServicesSection from "../components/home/ServicesSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import SmileTransformation from "../components/home/SmileTransformation";
import Testimonials from "../components/home/Testimonials";
import GallerySection from "../components/home/GallerySection";
import CTASection from "../components/home/CTASection";
import ContactPreview from "../components/home/ContactPreview";

const IMAGES = {
  hero: "https://media.base44.com/images/public/69de4d5b6aec6158ad57d1be/531b4a7cf_generated_212ae2d4.png",
  doctor:
    "https://media.base44.com/images/public/69de4d5b6aec6158ad57d1be/331d44816_image.png",
  patient:
    "https://media.base44.com/images/public/69de4d5b6aec6158ad57d1be/23db244a2_generated_7992be37.png",
  clinic:
    "https://media.base44.com/images/public/69de4d5b6aec6158ad57d1be/cd941a2b1_generated_1c573c55.png",
  equipment:
    "https://media.base44.com/images/public/69de4d5b6aec6158ad57d1be/a5cbe7837_generated_b8ed6b87.png",
  treatment:
    "https://media.base44.com/images/public/69de4d5b6aec6158ad57d1be/3e4b308e1_generated_0026be76.png",
};

export default function Home() {
  return (
    <div className="pb-16 lg:pb-0">
      <HeroSection heroImage={IMAGES.hero} doctorImage={IMAGES.doctor} />
      <TrustStats />
      <AboutDoctor doctorImage={IMAGES.doctor} />
      <ServicesSection />
      <WhyChooseUs />
      <SmileTransformation />
      <Testimonials />
      <GallerySection
        images={{
          clinic: IMAGES.clinic,
          equipment: IMAGES.equipment,
          treatment: IMAGES.treatment,
          patient: IMAGES.patient,
        }}
      />
      <CTASection />
      <ContactPreview />
    </div>
  );
}
