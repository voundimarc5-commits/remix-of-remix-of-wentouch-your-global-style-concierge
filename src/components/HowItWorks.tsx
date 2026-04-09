import { Link2, Calculator, CreditCard, Package } from "lucide-react";

const steps = [
  {
    icon: Link2,
    number: "01",
    title: "Partagez le lien",
    description:
      "Envoyez-nous le lien du produit ou de votre panier depuis n'importe quelle boutique européenne.",
  },
  {
    icon: Calculator,
    number: "02",
    title: "Recevez votre devis",
    description:
      "Nous calculons le coût total incluant produit, livraison internationale et frais de service.",
  },
  {
    icon: CreditCard,
    number: "03",
    title: "Payez en sécurité",
    description:
      "Réglez via PayPal, carte bancaire ou mobile money. Paiement 100% sécurisé.",
  },
  {
    icon: Package,
    number: "04",
    title: "Recevez votre colis",
    description:
      "Nous achetons en Europe et livrons directement chez vous au Cameroun sous 7-14 jours.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">
            Comment ça marche
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-foreground">
            Simple, rapide, <span className="text-gradient-gold">élégant</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            En quatre étapes simples, accédez aux produits de vos rêves depuis
            les meilleures boutiques européennes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative bg-background rounded-2xl p-8 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 border border-border hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Number */}
              <span className="absolute top-6 right-6 font-display text-5xl font-bold text-muted/30">
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-medium mb-3 text-foreground">
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
