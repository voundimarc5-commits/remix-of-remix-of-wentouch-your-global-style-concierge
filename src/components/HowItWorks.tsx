import { Link2, FileText, Package } from "lucide-react";

const steps = [
  {
    icon: Link2,
    number: "01",
    title: "Envoyez le lien du produit",
  },
  {
    icon: FileText,
    number: "02",
    title: "Recevez votre devis complet",
  },
  {
    icon: Package,
    number: "03",
    title: "Recevez votre commande chez vous",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">
            Comment ça fonctionne
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground text-left">
            Simple, rapide, <span className="text-gradient-gold">élégant</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative bg-background rounded-xl p-7 shadow-luxury hover:shadow-luxury-hover hover:-translate-y-[3px] transition-all duration-300 border border-border hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="absolute top-5 right-5 font-display text-4xl font-bold text-muted/20">
                {step.number}
              </span>
              <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-medium text-foreground text-left">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
