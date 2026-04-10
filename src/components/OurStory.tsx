const OurStory = () => {
  return (
    <section id="our-story" className="py-24 md:py-36 bg-background">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="max-w-[600px]">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium mb-5">
              Notre Histoire
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-10 leading-[1.1] text-foreground text-left">
              Au service de vos envies,{" "}
              <span className="text-gradient-gold">de l'Europe au Cameroun</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-[1.7] text-left max-w-[560px]">
              <p className="text-base">
                Entre l'Europe et le Cameroun, nous avons créé un service qui
                simplifie tout.{" "}
                <span className="text-foreground font-medium">
                  Vous choisissez, nous achetons, nous livrons.
                </span>
              </p>
              <p className="text-foreground font-display text-xl md:text-2xl italic leading-snug border-l-2 border-primary/30 pl-6">
                Wentouch, c'est le lien entre vos envies et les boutiques qui
                accompagnent vos moments importants.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-gradient-gold flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">Douala & Yaoundé</p>
                <p className="text-xs text-muted-foreground">Livraison dans tout le Cameroun</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-xl bg-gradient-beige overflow-hidden border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-gold flex items-center justify-center">
                    <span className="font-display text-2xl font-semibold text-primary-foreground">W</span>
                  </div>
                  <p className="font-display text-3xl font-medium text-foreground mb-3">
                    Wen<span className="text-gradient-gold">touch</span>
                  </p>
                  <p className="text-muted-foreground text-xs uppercase tracking-[0.2em]">
                    Conciergerie Shopping Premium
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
