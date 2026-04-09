import { Shield, Globe, Package, FileText, HeadphonesIcon, ShoppingBag } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Accès direct à l'Europe",
    description:
      "Plus besoin de voyager. Commandez depuis Douala ou Yaoundé ce qui se trouve à Paris, Milan ou Londres.",
  },
  {
    icon: Shield,
    title: "Paiements sécurisés",
    description:
      "PayPal, carte bancaire, Wave, Orange Money — choisissez ce qui vous convient. Tout est vérifié et protégé.",
  },
  {
    icon: FileText,
    title: "Transparence totale",
    description:
      "Devis détaillé avant tout engagement. Vous savez exactement ce que vous payez — zéro surprise.",
  },
  {
    icon: Package,
    title: "Livraison fiable",
    description:
      "Suivi en temps réel de votre colis, de l'Europe jusqu'à votre porte. Délai moyen : 7 à 14 jours.",
  },
  {
    icon: ShoppingBag,
    title: "Boutiques officielles",
    description:
      "Nous achetons exclusivement sur les sites officiels des marques. Authenticité garantie.",
  },
  {
    icon: HeadphonesIcon,
    title: "Accompagnement dédié",
    description:
      "Une équipe réactive vous guide à chaque étape via WhatsApp, email ou téléphone.",
  },
];

const TrustSection = () => {
  return (
    <section id="why-wentouch" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium mb-4">
            Pourquoi Wentouch
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-foreground">
            Un service pensé pour vous
          </h2>
          <p className="text-muted-foreground text-lg">
            Chaque détail est conçu pour vous offrir une expérience premium, fiable et sans stress.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border max-w-5xl mx-auto border border-border">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-background p-10 hover:bg-card transition-colors duration-300"
            >
              <feature.icon className="w-6 h-6 text-accent mb-6" />
              <h3 className="font-display text-lg font-medium mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
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
