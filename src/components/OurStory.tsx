const OurStory = () => {
  return (
    <section id="our-story" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">
              Notre Histoire
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium mb-8 leading-tight text-foreground text-left">
              Au service de vos envies,{" "}
              <span className="text-gradient-gold">de l'Europe au Cameroun</span>
            </h2>
            
            <div className="space-y-5 text-muted-foreground leading-relaxed text-left">
              <p>
                Entre l'Europe et le Cameroun, nous avons créé un service qui 
                simplifie tout. <span className="text-foreground font-medium">Vous choisissez, nous achetons, nous livrons.</span>
              </p>
              <p className="text-foreground font-display text-lg italic">
                Wentouch, c'est le lien entre vos envies et les boutiques qui 
                accompagnent vos moments importants.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
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
            <div className="aspect-[4/5] rounded-xl bg-gradient-beige overflow-hidden shadow-luxury border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-gold flex items-center justify-center shadow-luxury">
                    <span className="font-display text-xl font-semibold text-primary-foreground">W</span>
                  </div>
                  <p className="font-display text-2xl font-medium text-foreground mb-3">
                    Wen<span className="text-gradient-gold">touch</span>
                  </p>
                  <p className="text-muted-foreground text-xs uppercase tracking-[0.15em]">
                    Conciergerie Shopping Premium
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
