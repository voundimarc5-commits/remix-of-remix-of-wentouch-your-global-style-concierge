import { Clock, CreditCard, ShieldCheck, Truck } from "lucide-react";

const details = [
  {
    icon: ShieldCheck,
    title: "Que peut-on commander ?",
    items: [
      "Vêtements, chaussures, accessoires",
      "Maroquinerie et sacs de luxe",
      "Parfums et cosmétiques",
      "Électronique (Apple, Samsung…)",
      "Articles pour bébé et enfant",
      "Tout article disponible en Europe",
    ],
  },
  {
    icon: Clock,
    title: "Délais & processus",
    items: [
      "Devis envoyé sous 24h",
      "Achat effectué dès validation du paiement",
      "Livraison en 7 à 14 jours ouvrables",
      "Suivi de colis en temps réel",
      "Livraison à domicile à Douala & Yaoundé",
      "Autres villes : relais partenaires",
    ],
  },
  {
    icon: CreditCard,
    title: "Paiement",
    items: [
      "PayPal (paiement international)",
      "Carte bancaire (Visa, Mastercard)",
      "Orange Money",
      "Wave",
      "Paiement 100% sécurisé",
      "Aucun frais caché",
    ],
  },
];

const ServiceDetails = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium mb-4">
            Le service en détail
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-foreground">
            Tout ce qu'il faut savoir
          </h2>
          <p className="text-muted-foreground text-lg">
            Transparence et clarté — notre engagement envers vous.
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {details.map((detail) => (
            <div
              key={detail.title}
              className="bg-background p-8 md:p-10 border border-border"
            >
              <detail.icon className="w-6 h-6 text-accent mb-6" />
              <h3 className="font-display text-xl font-medium mb-6 text-foreground">
                {detail.title}
              </h3>
              <ul className="space-y-3">
                {detail.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
