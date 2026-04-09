const OurStory = () => {
  return (
    <section id="our-story" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium mb-6">
            Notre histoire
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-10 leading-tight text-foreground">
            Née entre l'Europe et le Cameroun
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg text-left md:text-center">
            <p>
              Wentouch est née d'une frustration partagée par des milliers de personnes :
              vouloir accéder aux produits européens sans les contraintes du voyage —
              visas, billets d'avion, disponibilité.
            </p>
            <p>
              Nous avons créé un pont direct entre les boutiques européennes et votre porte
              au Cameroun. <span className="text-foreground font-medium">Un service humain, fiable et transparent</span>, porté
              par une équipe qui comprend vos attentes parce qu'elle les partage.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
            <div>
              <p className="font-display text-2xl md:text-3xl font-semibold text-foreground">Confiance</p>
              <p className="text-sm text-muted-foreground mt-2">
                Chaque commande traitée avec soin
              </p>
            </div>
            <div>
              <p className="font-display text-2xl md:text-3xl font-semibold text-foreground">Qualité</p>
              <p className="text-sm text-muted-foreground mt-2">
                Produits authentiques garantis
              </p>
            </div>
            <div>
              <p className="font-display text-2xl md:text-3xl font-semibold text-foreground">Proximité</p>
              <p className="text-sm text-muted-foreground mt-2">
                Une équipe à votre écoute
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="mt-16 inline-flex items-center gap-3 text-sm text-muted-foreground">
            <span className="text-lg">🇨🇲</span>
            Douala & Yaoundé — Livraison dans tout le Cameroun
            <span className="text-lg">🇫🇷</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
