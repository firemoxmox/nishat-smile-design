import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  { name: "Rahul Kumar", text: "Painless root canal treatment! Dr. Kamil is very gentle and professional. Highly recommended for anyone in Darbhanga.", rating: 5 },
  { name: "Priya Singh", text: "The clinic is extremely clean and hygienic. My kids were very comfortable during the checkup. Best dentist in Darbhanga!", rating: 5 },
  { name: "Mohammad Arif", text: "Got my teeth whitening done here. Amazing results and very affordable. The staff is friendly and caring.", rating: 5 },
  { name: "Sneha Devi", text: "I was scared of dental treatments but Dr. Kamil made me feel at ease. The experience was completely painless. Thank you!", rating: 5 },
];

const Testimonials = () => (
  <section className="py-16 md:py-24 bg-secondary/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="text-primary font-semibold text-sm uppercase tracking-wide">Testimonials</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
          What Our Patients Say
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((r) => (
          <Card key={r.name} className="bg-card border-border/50">
            <CardContent className="p-6">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{r.text}"</p>
              <p className="font-semibold text-foreground text-sm">{r.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
