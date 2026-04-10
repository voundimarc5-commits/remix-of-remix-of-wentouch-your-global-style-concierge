import { Link2, FileText, Package } from "lucide-react";

const steps = [
  {
    icon: Link2,
    number: "01",
    title: "Envoyez le lien",
    description: "Trouvez le produit que vous aimez sur n'importe quel site européen et envoyez-nous le lien.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Recevez votre devis",
    description: "Nous calculons le prix total incluant achat, livraison et frais de service. Transparent, sans surprise.",
  },
  {
    icon: Package,
    number: "03",
    title: "Livraison chez vous",
    description: "Une fois validé, nous achetons et expédions directement à votre adresse au Cameroun.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-36 bg-secondary/30">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-xl mb-20">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium mb-5">
            Comment ça fonctionne
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground text-left leading-[1.1]">
            Simple, rapide,{" "}
            <span className="text-gradient-gold italic">élégant</span>
          </h2>
        </div>

        {/* Steps — horizontal storytelling on desktop */}
        <div className="grid md:grid-cols-3 gap-0 relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-[42px] left-[16.67%] right-[16.67%] h-px bg-border" />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex flex-col items-start md:items-center text-left md:text-center group"
            >
              {/* Number circle */}
              <div className="relative z-10 w-[84px] h-[84px] rounded-full bg-background border-2 border-border group-hover:border-primary/40 flex items-center justify-center mb-8 transition-colors duration-300">
                <span className="font-display text-2xl font-medium text-primary">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="max-w-[280px] md:px-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center mb-5 md:mx-auto group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-[1.7] max-w-[260px] md:mx-auto">
                  {step.description}
                </p>
              </div>

              {/* Mobile separator */}
              {index < steps.length - 1 && (
                <div className="md:hidden w-px h-12 bg-border ml-[42px] my-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
