import heroImage from "@/assets/hero-family.jpg";
import { useEffect, useRef, useState } from "react";

const useCountUp = (target: number, duration: number = 1400) => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setDone(true);
      }
    };
    requestAnimationFrame(tick);
  }, [target, duration]);

  return { count, done };
};

const Hero = () => {
  const { count, done } = useCountUp(100, 1400);

  return (
    <section className="relative min-h-screen bg-gradient-hero pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium shopping experience"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="max-w-[1300px] mx-auto px-6 md:px-12 relative z-10 py-16 lg:py-28">
        <div className="max-w-2xl animate-fade-up pt-8">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium mb-6">
            Conciergerie Shopping Premium
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-medium leading-[1.08] mb-8 text-foreground text-left">
            Le luxe européen,{" "}
            <span className="text-gradient-gold">livré chez vous.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-[1.7] mb-12 text-left max-w-lg">
            Accédez aux plus grandes maisons sans voyager.
            <br />
            Nous nous occupons de tout, de l'achat à la livraison au Cameroun.
          </p>

          <a
            href="https://order.wentouch.shop"
            className="inline-flex items-center justify-center bg-gradient-gold text-primary-foreground px-10 py-4 text-base font-medium rounded-lg transition-transform duration-200 hover:scale-[1.03]"
          >
            Commencer une commande
          </a>

          {/* Credibility line */}
          <div
            className="flex items-center gap-6 md:gap-10 mt-8 opacity-0 translate-y-[10px]"
            style={{
              animation: "credibilityIn 0.7s ease-out 0.6s forwards",
            }}
          >
            <span
              className="text-[15px] font-medium tracking-wide"
              style={{ color: "hsl(var(--gold))" }}
            >
              {done ? "+" : ""}{count} marques
            </span>
            <span className="text-[12.5px] tracking-[0.04em] text-muted-foreground">
              Achat accompagné · Process maîtrisé · Livraison en toute confiance
            </span>
          </div>

          <div className="flex items-center gap-8 pt-12 mt-12 border-t border-border/50">
            <div>
              <p className="font-display text-2xl font-semibold text-foreground">Europe</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Achats directs</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <p className="font-display text-2xl font-semibold text-foreground">50+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Marques accessibles</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <p className="font-display text-2xl font-semibold text-foreground">3-7j</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Délai livraison</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes credibilityIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
