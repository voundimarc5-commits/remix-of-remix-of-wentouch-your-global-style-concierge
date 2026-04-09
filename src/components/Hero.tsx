import heroImage from "@/assets/hero-family.jpg";
import HeroRequestForm from "@/components/HeroRequestForm";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium shopping experience"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content */}
          <div className="max-w-xl animate-fade-up pt-8">
            <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-6">
              Conciergerie Shopping Premium
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] mb-6 text-foreground">
              Vous choisissez.{" "}
              <span className="italic">Nous achetons.</span>{" "}
              <span className="text-gradient-gold">Nous livrons.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Service de conciergerie shopping Europe → Cameroun. 
              Accédez aux plus grandes marques internationales depuis le confort de votre maison.
            </p>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 pt-6 border-t border-border/50">
              <div className="text-center">
                <p className="font-display text-2xl font-semibold text-foreground">Europe</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  Achats directs
                </p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="font-display text-2xl font-semibold text-foreground">50+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  Marques accessibles
                </p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="font-display text-2xl font-semibold text-foreground">7-14j</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  Délai livraison
                </p>
              </div>
            </div>
          </div>

          {/* Request Form */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="mb-4">
            <h2 className="font-display text-xl font-medium text-foreground">
                Décrivez votre commande
              </h2>
              <p className="text-sm text-muted-foreground">
                Collez vos liens et précisez vos préférences
              </p>
            </div>
            <HeroRequestForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
