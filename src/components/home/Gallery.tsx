import clinic1 from "@/assets/clinic-1.png";
import clinic2 from "@/assets/clinic-2.png";
import clinic3 from "@/assets/clinic-3.png";

const images = [
  { src: clinic1, alt: "Nishat Dental clinic interior" },
  { src: clinic2, alt: "Dr. Kamil Shahnawaz with patient" },
  { src: clinic3, alt: "Award ceremony - Nishat Dental" },
];

const Gallery = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="text-primary font-semibold text-sm uppercase tracking-wide">Gallery</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
          Our Clinic
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((img) => (
          <div key={img.alt} className="rounded-2xl overflow-hidden shadow-lg">
            <img src={img.src} alt={img.alt} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
