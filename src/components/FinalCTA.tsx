const FinalCTA = () => {
  return (
    <section className="py-28 md:py-40 bg-background">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        <div className="max-w-[640px]">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium mb-6">
            Prêt à commencer ?
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-8 text-foreground text-left leading-[1.08]">
            Faites votre première commande{" "}
            <span className="text-gradient-gold italic">dès aujourd'hui</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-left leading-[1.7] max-w-[480px]">
            Simple, rapide, sans déplacement. Accédez aux boutiques européennes depuis chez vous.
          </p>
          <a
            href="https://order.wentouch.shop"
            className="inline-flex items-center justify-center bg-gradient-gold text-primary-foreground px-10 py-4 text-base font-medium rounded-lg transition-transform duration-200 hover:scale-[1.03]"
          >
            Envoyer un produit
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
