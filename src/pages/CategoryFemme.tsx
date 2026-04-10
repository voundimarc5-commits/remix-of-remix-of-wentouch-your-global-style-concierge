import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const brands = [
  { name: "Zara", url: "https://www.zara.com" },
  { name: "H&M", url: "https://www.hm.com" },
  { name: "Mango", url: "https://www.mango.com" },
  { name: "Stradivarius", url: "https://www.stradivarius.com" },
  { name: "Shein", url: "https://www.shein.com" },
  { name: "ASOS", url: "https://www.asos.com" },
  { name: "Sephora", url: "https://www.sephora.com" },
  { name: "Michael Kors", url: "https://www.michaelkors.com" },
  { name: "Coach", url: "https://www.coach.com" },
  { name: "Chanel", url: "https://www.chanel.com" },
  { name: "Dior", url: "https://www.dior.com" },
  { name: "Louis Vuitton", url: "https://www.louisvuitton.com" },
  { name: "Gucci", url: "https://www.gucci.com" },
  { name: "Hermès", url: "https://www.hermes.com" },
  { name: "Prada", url: "https://www.prada.com" },
  { name: "YSL", url: "https://www.ysl.com" },
];

const CategoryFemme = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 md:pt-36 pb-24 md:pb-36">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>

          {/* Header — editorial split */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-20 md:mb-28 items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium mb-5">
                Collection Femme
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.08]">
                Marques pour{" "}
                <span className="text-gradient-gold italic">Femme</span>
              </h1>
            </div>
            <p className="text-muted-foreground text-base leading-[1.7] max-w-[480px] lg:pb-2">
              Découvrez notre sélection de marques féminines accessibles via
              notre service de conciergerie. De la mode à la beauté, tout est
              à votre portée.
            </p>
          </div>

          {/* Brands — clean grid without boxed cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-border">
            {brands.map((brand) => (
              <a
                key={brand.name}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background py-8 md:py-10 flex items-center justify-center hover:bg-secondary/50 transition-colors duration-300 group"
              >
                <span className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  {brand.name}
                </span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 md:mt-28 max-w-[600px]">
            <p className="text-muted-foreground mb-5 text-base leading-relaxed">
              Vous ne trouvez pas la marque que vous cherchez ? Nous pouvons
              acheter depuis n'importe quelle boutique européenne.
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-gold text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity text-base"
            >
              Faire une demande personnalisée
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryFemme;
