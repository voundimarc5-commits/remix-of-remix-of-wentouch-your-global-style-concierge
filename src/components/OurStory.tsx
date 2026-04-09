const OurStory = () => {
  return (
    <section id="our-story" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">
              Notre Histoire
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-8 leading-tight text-foreground">
              Au service de vos envies de shopping, de l'Europe vers le{" "}
              <span className="text-gradient-gold">Cameroun</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Wentouch est née d'un constat simple : même les personnes habituées 
                à voyager et à accéder aux plus belles boutiques peuvent parfois 
                manquer de temps. Entre événements, engagements et déplacements, 
                il devient difficile de faire ses achats à l'international comme 
                on le souhaite.
              </p>
              <p>
                Entre l'Europe et le Cameroun, nous avons créé un service qui 
                simplifie tout. <span className="text-foreground font-medium">Vous choisissez, nous achetons, nous organisons 
                la livraison.</span> Avec transparence, élégance et sérieux.
              </p>
              <p className="text-foreground font-display text-lg italic">
                Wentouch, c'est le lien entre vos envies et les boutiques qui 
                accompagnent vos moments importants.
              </p>
            </div>

            {/* Location Badge */}
            <div className="mt-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-foreground">Douala & Yaoundé</p>
                <p className="text-sm text-muted-foreground">Livraison dans tout le Cameroun</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-beige overflow-hidden shadow-luxury border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-gold flex items-center justify-center shadow-luxury">
                    <span className="font-display text-2xl font-semibold text-primary-foreground">W</span>
                  </div>
                  <p className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
                    Wen<span className="text-gradient-gold">touch</span>
                  </p>
                  <p className="text-muted-foreground text-sm uppercase tracking-[0.15em]">
                    Conciergerie Shopping Premium
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
