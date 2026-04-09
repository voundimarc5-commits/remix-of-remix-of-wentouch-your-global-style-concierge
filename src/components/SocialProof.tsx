import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Christelle M.",
    city: "Douala",
    text: "J'ai commandé un sac Michael Kors pour l'anniversaire de ma sœur. Livré en 10 jours, emballage impeccable. Je recommande à 100%.",
    rating: 5,
  },
  {
    name: "Patrick N.",
    city: "Yaoundé",
    text: "Service sérieux et transparent. Le devis était clair, pas de frais cachés. Ma commande Zara est arrivée exactement comme prévu.",
    rating: 5,
  },
  {
    name: "Aminata D.",
    city: "Douala",
    text: "Première commande chez Wentouch : des chaussures Ralph Lauren. Communication rapide, livraison soignée. Je suis cliente fidèle maintenant.",
    rating: 5,
  },
];

const SocialProof = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium mb-4">
            Témoignages
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-foreground">
            Ils nous font confiance
          </h2>
          <p className="text-muted-foreground text-lg">
            Des centaines de clients satisfaits au Cameroun et en Afrique.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-sm p-8 border border-border hover:border-accent/30 transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-8 text-[15px]">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-border">
                <p className="font-medium text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.city}, Cameroun</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
