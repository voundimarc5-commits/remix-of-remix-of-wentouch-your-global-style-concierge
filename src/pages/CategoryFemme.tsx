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
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">
              Collection Femme
            </p>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-foreground">
              Marques pour <span className="text-gradient-gold">Femme</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Découvrez notre sélection de marques féminines accessibles via notre service de conciergerie.
            </p>
          </div>

          {/* Brands Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {brands.map((brand) => (
              <a
                key={brand.name}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-xl p-6 text-center shadow-luxury hover:shadow-luxury-hover transition-all duration-300 border border-border hover:border-primary/30 hover:scale-105"
              >
                <span className="font-display text-lg font-medium text-foreground">
                  {brand.name}
                </span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Vous ne trouvez pas la marque que vous cherchez ?
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-gold text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
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
