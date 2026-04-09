import { Link2, FileText, Package } from "lucide-react";

const steps = [
  {
    icon: Link2,
    number: "01",
    title: "Envoyez le lien",
    description:
      "Partagez le lien du produit depuis n'importe quelle boutique en ligne européenne — Zara, Dior, Apple, H&M…",
  },
  {
    icon: FileText,
    number: "02",
    title: "Recevez votre devis",
    description:
      "Nous vous envoyons un devis clair et détaillé sous 24h : prix du produit, livraison et frais de service inclus.",
  },
  {
    icon: Package,
    number: "03",
    title: "Livré chez vous",
    description:
      "Après validation, nous achetons en Europe et livrons directement à votre porte au Cameroun sous 7 à 14 jours.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium mb-4">
            Comment ça marche
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-foreground">
            Trois étapes. C'est tout.
          </h2>
          <p className="text-muted-foreground text-lg">
            Un processus pensé pour être aussi simple que possible.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center md:text-left">
              {/* Connector line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
              )}

              {/* Icon */}
              <div className="w-20 h-20 mx-auto md:mx-0 rounded-sm bg-foreground flex items-center justify-center mb-8">
                <step.icon className="w-8 h-8 text-background" />
              </div>

              {/* Number */}
              <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
                Étape {step.number}
              </span>

              {/* Content */}
              <h3 className="font-display text-2xl font-medium mt-2 mb-4 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
