import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const EXTRA_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
    alt: "Modern dental instruments and tools",
    label: "Precision Tools",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1588776814546-1ffbb543e0d3?w=800&q=80",
    alt: "Digital dental X-ray technology",
    label: "Digital X-Ray",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
    alt: "Professional teeth whitening equipment",
    label: "Whitening Tech",
    span: "",
  },
];

export default function GallerySection({ images }) {
  const [lightbox, setLightbox] = useState(null);

  const galleryItems = [
    {
      src: images.clinic,
      alt: "Nishat Dental Clinic in Darbhanga",
      label: "Our Clinic",
      span: "lg:col-span-2 lg:row-span-2",
    },
    {
      src: "https://media.base44.com/images/public/69de4d5b6aec6158ad57d1be/e2f100da2_image.png",
      alt: "Advanced dental treatment chair",
      label: "Treatment Room",
      span: "",
    },
    ...EXTRA_IMAGES,
    {
      src: images.treatment,
      alt: "Dental procedure in progress",
      label: "Advanced Care",
      span: "",
    },
    {
      src: images.patient,
      alt: "Happy patient after treatment",
      label: "Happy Patients",
      span: "",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-semibold text-xs uppercase tracking-widest mb-3">
            Our Clinic
          </p>
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Inside Nishat Dental
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A modern, hygienic, and welcoming clinic designed for your comfort
            and care.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[220px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`group relative rounded-2xl lg:rounded-3xl overflow-hidden cursor-pointer ${item.span}`}
              onClick={() => setLightbox(item)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-8 h-8 text-white drop-shadow-lg" />
              </div>
              <p className="absolute bottom-4 left-4 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-5 right-5 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
