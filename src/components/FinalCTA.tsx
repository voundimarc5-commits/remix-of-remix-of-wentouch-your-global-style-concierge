import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight mb-8">
            Prêt à accéder
            <br />
            <span className="italic">à l'Europe ?</span>
          </h2>
          <p className="text-background/60 text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed">
            Envoyez-nous votre premier lien. Recevez un devis gratuit sous 24 heures.
            Aucun engagement, aucun frais caché.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-10 text-base font-medium rounded-none"
            >
              <a href="https://order.wentouch.shop">
                Commencer ma commande
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>

          <p className="text-background/40 text-sm mt-8">
            Plus de 500 commandes livrées · Service client disponible 7j/7
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
