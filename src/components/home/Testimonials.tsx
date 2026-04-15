import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Rahul Kumar", role: "Root Canal Patient", text: "Painless root canal treatment! Dr. Kamil is very gentle and professional. Highly recommended for anyone in Darbhanga.", rating: 5 },
  { name: "Priya Singh", role: "Kids Dentistry", text: "The clinic is extremely clean and hygienic. My kids were very comfortable during the checkup. Best dentist in Darbhanga!", rating: 5 },
  { name: "Mohammad Arif", role: "Teeth Whitening", text: "Got my teeth whitening done here. Amazing results and very affordable. The staff is friendly and caring.", rating: 5 },
  { name: "Sneha Devi", role: "General Checkup", text: "I was scared of dental treatments but Dr. Kamil made me feel at ease. The experience was completely painless!", rating: 5 },
];

const Testimonials = () => (
  <section className="section-padding bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />

    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest font-body mb-3">Testimonials</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
          What Our Patients Say
        </h2>
        <p className="text-muted-foreground font-body max-w-xl mx-auto">
          Hear from the people who trust us with their smiles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((r, i) => (
          <div
            key={r.name}
            className="relative bg-card rounded-2xl p-6 border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
          >
            <Quote className="w-8 h-8 text-primary/15 absolute top-6 right-6" />
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: r.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">"{r.text}"</p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm font-display">
                {r.name[0]}
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
