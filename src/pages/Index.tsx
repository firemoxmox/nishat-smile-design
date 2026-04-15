import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import AboutDoctor from "@/components/home/AboutDoctor";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Transformations from "@/components/home/Transformations";
import Testimonials from "@/components/home/Testimonials";
import Gallery from "@/components/home/Gallery";
import CTABanner from "@/components/home/CTABanner";
import ContactSection from "@/components/home/ContactSection";

const Index = () => (
  <>
    <HeroSection />
    <TrustSection />
    <AboutDoctor />
    <ServicesGrid />
    <WhyChooseUs />
    <Transformations />
    <Testimonials />
    <Gallery />
    <CTABanner />
    <ContactSection />
  </>
);

export default Index;
