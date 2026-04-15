import clinic1 from "@/assets/clinic-1.png";
import clinic2 from "@/assets/clinic-2.png";
import clinic3 from "@/assets/clinic-3.png";
import dentalClinic from "@/assets/dental-clinic.jpg";
import dentistTreating from "@/assets/dentist-treating.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";

const images = [
  { src: dentalClinic, alt: "Modern dental clinic interior", span: "col-span-2 row-span-2" },
  { src: clinic1, alt: "Dr. Kamil Shahnawaz", span: "" },
  { src: dentistTreating, alt: "Dental treatment in progress", span: "" },
  { src: clinicInterior, alt: "Clinic reception area", span: "col-span-2" },
  { src: clinic2, alt: "Clinic facility", span: "" },
  { src: clinic3, alt: "Award ceremony", span: "" },
];

const Gallery = () => (
  <section className="section-padding">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="inline-block text-primary font-semibold text-xs uppercase tracking-widest font-body mb-3">Gallery</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
          Inside <span className="text-primary">Nishat Dental</span>
        </h2>
        <p className="text-muted-foreground font-body max-w-xl mx-auto text-sm">
          A peek into our state-of-the-art facility and the care we provide.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {images.map((img) => (
          <div
            key={img.alt}
            className={`${img.span} rounded-xl overflow-hidden group cursor-pointer`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full min-h-[160px] object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
