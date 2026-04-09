import { Shield, Globe, ShoppingBag } from "lucide-react";

const proofs = [
  {
    icon: Shield,
    text: "Paiements sécurisés",
  },
  {
    icon: Globe,
    text: "Achats directs en Europe",
  },
  {
    icon: ShoppingBag,
    text: "Boutiques officielles uniquement",
  },
];

const ProofSection = () => {
  return (
    <section className="py-10 md:py-14 bg-secondary/40 border-b border-border">
      <div className="container mx-auto px-6">
        <p className="text-sm text-muted-foreground uppercase tracking-[0.15em] mb-8 text-left">
          Déjà utilisé par des clients exigeants au Cameroun
        </p>
        <div className="flex flex-wrap gap-6 md:gap-10">
          {proofs.map((proof) => (
            <div key={proof.text} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                <proof.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-foreground font-medium text-sm">
                {proof.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
