import { Shield, Globe, Package, FileText, HeadphonesIcon, ShoppingBag } from "lucide-react";

const features = [
  { icon: Shield, title: "Paiements sécurisés" },
  { icon: Globe, title: "Accès aux marques européennes" },
  { icon: Package, title: "Livraison sécurisée au Cameroun" },
  { icon: FileText, title: "Devis clair et transparent" },
  { icon: HeadphonesIcon, title: "Prise en charge complète" },
  { icon: ShoppingBag, title: "Boutiques officielles" },
];

const TrustSection = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-beige">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">
            Notre engagement
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground text-left">
            Pourquoi faire confiance à{" "}
            <span className="text-gradient-gold">Wentouch</span> ?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-center gap-4 bg-background rounded-xl p-5 shadow-luxury hover:shadow-luxury-hover hover:-translate-y-[3px] transition-all duration-300 border border-border hover:border-primary/30"
            >
              <div className="w-11 h-11 shrink-0 rounded-lg bg-gradient-gold flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-base font-medium text-foreground">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
