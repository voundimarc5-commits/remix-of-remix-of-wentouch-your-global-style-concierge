const brands = [
  "ZARA", "DIOR", "CHANEL", "H&M", "RALPH LAUREN",
  "MICHAEL KORS", "MANGO", "APPLE", "COACH", "ASOS",
  "STRADIVARIUS", "LOUIS VUITTON",
];

const BrandMarquee = () => {
  return (
    <section id="brands" className="py-10 md:py-14 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto px-6 mb-6">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Accédez aux plus grandes marques internationales
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee animate-marquee-pause">
          {[0, 1].map((set) => (
            <div key={set} className="flex shrink-0 gap-12 md:gap-20 px-6">
              {brands.map((brand) => (
                <span
                  key={`${brand}-${set}`}
                  className="text-sm md:text-base font-display tracking-[0.2em] text-foreground/40 whitespace-nowrap"
                >
                  {brand}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;
