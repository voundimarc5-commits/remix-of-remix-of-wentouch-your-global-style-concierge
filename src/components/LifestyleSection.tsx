import lifestyleImage from "@/assets/lifestyle-aspiration.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const LifestyleSection = () => {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={lifestyleImage}
                alt="Avenue de boutiques de luxe européennes"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
            {/* Floating stat */}
            <div className="absolute bottom-6 right-6 bg-accent text-accent-foreground px-6 py-4">
              <p className="font-display text-2xl font-semibold">98%</p>
              <p className="text-xs uppercase tracking-wider">Clients satisfaits</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 max-w-lg">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium mb-6">
              Le style européen, chez vous
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] mb-8">
              Vivez le luxe
              <br />
              <span className="italic">sans frontières.</span>
            </h2>
            <div className="space-y-6 text-background/70 leading-relaxed">
              <p>
                Imaginez commander le dernier sac Dior, les sneakers Nike en édition limitée
                ou la garde-robe parfaite chez Zara — le tout depuis votre salon à Douala.
              </p>
              <p>
                Avec Wentouch, l'Europe n'est plus un voyage. C'est un <span className="text-background font-medium">simple message</span>.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-1 h-12 bg-accent" />
                <div>
                  <p className="font-medium text-background">Mode & Luxe</p>
                  <p className="text-sm text-background/50">Dior, Chanel, Louis Vuitton, Ralph Lauren</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-1 h-12 bg-accent" />
                <div>
                  <p className="font-medium text-background">Prêt-à-porter</p>
                  <p className="text-sm text-background/50">Zara, H&M, Mango, ASOS, Stradivarius</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-1 h-12 bg-accent" />
                <div>
                  <p className="font-medium text-background">Tech & Lifestyle</p>
                  <p className="text-sm text-background/50">Apple, Samsung, parfums, accessoires</p>
                </div>
              </div>
            </div>

            <Button
              asChild
              className="mt-12 bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-8 text-base font-medium rounded-none"
            >
              <a href="https://order.wentouch.shop">
                Passer commande
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
