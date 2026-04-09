import { Shield, Globe, Package, FileText, HeadphonesIcon, ShoppingBag } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Paiements sécurisés",
    description:
      "Transactions protégées et vérifiées via PayPal, Wave et Orange Money.",
  },
  {
    icon: Globe,
    title: "Service international",
    description:
      "Achats effectués directement en Europe, livraison au Cameroun.",
  },
  {
    icon: Package,
    title: "Suivi de commande",
    description:
      "Suivez votre colis en temps réel de l'Europe jusqu'à votre porte.",
  },
  {
    icon: FileText,
    title: "Devis clair",
    description:
      "Prix transparent et détaillé avant tout engagement de votre part.",
  },
  {
    icon: HeadphonesIcon,
    title: "Assistance personnalisée",
    description:
      "Une équipe dédiée vous accompagne à chaque étape de votre achat.",
  },
  {
    icon: ShoppingBag,
    title: "Boutiques officielles",
    description:
      "Articles achetés uniquement sur les sites officiels des marques.",
  },
];

const TrustSection = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-beige">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">
            Notre engagement
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-foreground">
            Pourquoi faire confiance à{" "}
            <span className="text-gradient-gold">Wentouch</span> ?
          </h2>
          <p className="text-muted-foreground text-lg">
            Un service premium pensé pour vous offrir une expérience d'achat
            internationale fiable et transparente.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-background rounded-2xl p-8 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 border border-border hover:border-primary/30"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-medium mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
