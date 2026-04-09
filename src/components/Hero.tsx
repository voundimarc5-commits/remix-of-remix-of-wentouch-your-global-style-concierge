import heroImage from "@/assets/hero-family.jpg";

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

      <div className="container mx-auto px-6 relative z-10 py-16 lg:py-28">
        <div className="max-w-2xl animate-fade-up pt-8">
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-6">
            Conciergerie Shopping Premium
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] mb-6 text-foreground text-left">
            Le luxe européen,{" "}
            <span className="text-gradient-gold">livré chez vous.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 text-left max-w-lg">
            Accédez aux plus grandes maisons sans voyager.
            <br />
            Nous nous occupons de tout, de l'achat à la livraison au Cameroun.
          </p>

          <a
            href="https://order.wentouch.shop"
            className="inline-flex items-center justify-center bg-gradient-gold text-primary-foreground px-8 py-4 text-base font-medium rounded-lg transition-transform duration-200 hover:scale-[1.03]"
          >
            Commencer une commande
          </a>

          {/* Trust Badges */}
          <div className="flex items-center gap-6 pt-10 mt-10 border-t border-border/50">
            <div>
              <p className="font-display text-2xl font-semibold text-foreground">Europe</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                Achats directs
              </p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <p className="font-display text-2xl font-semibold text-foreground">50+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                Marques accessibles
              </p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <p className="font-display text-2xl font-semibold text-foreground">7-14j</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                Délai livraison
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
