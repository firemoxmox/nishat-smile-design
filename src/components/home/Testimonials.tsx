import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Rahul Kumar", role: "Root Canal Patient", text: "Painless root canal treatment! Dr. Kamil is very gentle and professional. Highly recommended for anyone in Darbhanga.", rating: 5, initials: "RK" },
  { name: "Priya Singh", role: "Kids Dentistry", text: "The clinic is extremely clean and hygienic. My kids were very comfortable during the checkup. Best dentist!", rating: 5, initials: "PS" },
  { name: "Mohammad Arif", role: "Teeth Whitening", text: "Amazing teeth whitening results and very affordable. The staff is friendly and caring.", rating: 5, initials: "MA" },
  { name: "Sneha Devi", role: "General Checkup", text: "I was scared of dental treatments but Dr. Kamil made me feel at ease. Completely painless!", rating: 5, initials: "SD" },
];

const Testimonials = () => (
  <section className="section-padding bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="inline-block text-primary font-semibold text-xs uppercase tracking-widest font-body mb-3">Testimonials</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-foreground mb-4">
          Real patients, <span className="text-gradient">real results</span>
        </h2>
        <p className="text-muted-foreground font-body max-w-xl mx-auto">
          Join over 1000+ patients who trust us with their smiles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="relative bg-background rounded-2xl p-6 border border-border/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
          >
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: r.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">"{r.text}"</p>
            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border/30">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xs font-display">
                {r.initials}
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm font-body">{r.name}</p>
                <p className="text-xs text-muted-foreground font-body">{r.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
