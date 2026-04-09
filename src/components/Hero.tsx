import heroImage from "@/assets/hero-luxury.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Sacs de shopping de marques européennes premium"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/30" />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-16 lg:py-24">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-accent" />
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
              Conciergerie Shopping Premium
            </p>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.05] mb-6 text-background">
            L'Europe à portée{" "}
            <br className="hidden md:block" />
            de <span className="italic">main.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-background/70 leading-relaxed mb-10 max-w-lg">
            Accédez aux plus grandes marques européennes sans quitter le Cameroun.
            Nous achetons, nous livrons — vous profitez.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-8 text-base font-medium rounded-none"
            >
              <a href="https://order.wentouch.shop">
                Commencer ma commande
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-background/30 text-background hover:bg-background/10 h-14 px-8 text-base font-medium rounded-none"
            >
              <a href="#how-it-works">Découvrir le service</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 md:gap-12 pt-8 border-t border-background/15">
            <div>
              <p className="font-display text-3xl md:text-4xl font-semibold text-background">500+</p>
              <p className="text-xs text-background/50 uppercase tracking-wider mt-1">
                Commandes livrées
              </p>
            </div>
            <div className="w-px h-12 bg-background/15" />
            <div>
              <p className="font-display text-3xl md:text-4xl font-semibold text-background">50+</p>
              <p className="text-xs text-background/50 uppercase tracking-wider mt-1">
                Marques accessibles
              </p>
            </div>
            <div className="w-px h-12 bg-background/15" />
            <div>
              <p className="font-display text-3xl md:text-4xl font-semibold text-background">7–14j</p>
              <p className="text-xs text-background/50 uppercase tracking-wider mt-1">
                Délai de livraison
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
