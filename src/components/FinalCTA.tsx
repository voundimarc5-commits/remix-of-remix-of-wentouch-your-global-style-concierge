const FinalCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-foreground text-left leading-tight">
            Faites votre première commande{" "}
            <span className="text-gradient-gold">dès aujourd'hui</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 text-left">
            Simple, rapide, sans déplacement.
          </p>
          <a
            href="https://order.wentouch.shop"
            className="inline-flex items-center justify-center bg-gradient-gold text-primary-foreground px-8 py-4 text-base font-medium rounded-lg transition-transform duration-200 hover:scale-[1.03]"
          >
            Envoyer un produit
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
