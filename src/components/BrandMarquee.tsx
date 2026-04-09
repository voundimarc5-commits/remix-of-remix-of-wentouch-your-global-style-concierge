const brands = [
  // Marques accessibles
  { name: "SHEIN", url: "https://www.shein.com" },
  { name: "ZARA", url: "https://www.zara.com" },
  { name: "H&M", url: "https://www.hm.com" },
  { name: "STRADIVARIUS", url: "https://www.stradivarius.com" },
  { name: "MANGO", url: "https://www.mango.com" },
  { name: "ASOS", url: "https://www.asos.com" },
  // Marques premium/luxe
  { name: "MICHAEL KORS", url: "https://www.michaelkors.com" },
  { name: "COACH", url: "https://www.coach.com" },
  { name: "RALPH LAUREN", url: "https://www.ralphlauren.com" },
  { name: "DIOR", url: "https://www.dior.com" },
  { name: "CHANEL", url: "https://www.chanel.com" },
  { name: "APPLE", url: "https://www.apple.com" },
];

const BrandMarquee = () => {
  return (
    <section id="brands" className="py-12 md:py-16 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <p className="text-center text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Accédez aux plus grandes marques internationales
        </p>
      </div>
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling container */}
        <div className="flex animate-marquee animate-marquee-pause">
          {/* First set */}
          <div className="flex shrink-0 gap-12 md:gap-16 px-6">
            {brands.map((brand) => (
              <a
                key={brand.name}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg md:text-xl font-display tracking-wider text-foreground/70 hover:text-primary transition-colors duration-300 whitespace-nowrap"
              >
                {brand.name}
              </a>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex shrink-0 gap-12 md:gap-16 px-6">
            {brands.map((brand) => (
              <a
                key={`${brand.name}-dup`}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg md:text-xl font-display tracking-wider text-foreground/70 hover:text-primary transition-colors duration-300 whitespace-nowrap"
              >
                {brand.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;
