import { Shield, Globe, Package, FileText, HeadphonesIcon, ShoppingBag } from "lucide-react";

const features = [
  { icon: Shield, title: "Paiements sécurisés", desc: "Transactions protégées à chaque étape" },
  { icon: Globe, title: "Accès aux marques européennes", desc: "Plus de 50 marques disponibles" },
  { icon: Package, title: "Livraison sécurisée", desc: "Expédition suivie jusqu'au Cameroun" },
  { icon: FileText, title: "Devis transparent", desc: "Prix clairs, sans frais cachés" },
  { icon: HeadphonesIcon, title: "Prise en charge complète", desc: "De l'achat à la livraison" },
  { icon: ShoppingBag, title: "Boutiques officielles", desc: "Authenticité garantie" },
];

const TrustSection = () => {
  return (
    <section className="py-24 md:py-36 bg-gradient-beige">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        <div className="max-w-xl mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium mb-5">
            Notre engagement
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground text-left leading-[1.1]">
            Pourquoi faire confiance à{" "}
            <span className="text-gradient-gold">Wentouch</span> ?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 max-w-[1100px]">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-5 group"
            >
              <div className="w-11 h-11 shrink-0 rounded-lg bg-gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-medium text-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
