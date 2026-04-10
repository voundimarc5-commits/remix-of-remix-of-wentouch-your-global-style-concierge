import { Shield, Globe, ShoppingBag } from "lucide-react";

const proofs = [
  { icon: Shield, text: "Paiements sécurisés" },
  { icon: Globe, text: "Achats directs en Europe" },
  { icon: ShoppingBag, text: "Boutiques officielles uniquement" },
];

const ProofSection = () => {
  return (
    <section className="py-14 md:py-20 bg-secondary/40 border-b border-border">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-10 text-left">
          Déjà utilisé par des clients exigeants au Cameroun
        </p>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {proofs.map((proof) => (
            <div key={proof.text} className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-gradient-gold flex items-center justify-center shrink-0">
                <proof.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-foreground font-medium text-sm tracking-wide">
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
