import { User, Users, Baby } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: Users,
    title: "Homme",
    description: "Mode, accessoires, tech & lifestyle",
    link: "/homme",
  },
  {
    icon: User,
    title: "Femme",
    description: "Mode, beauté, accessoires & maroquinerie",
    link: "/femme",
  },
  {
    icon: Baby,
    title: "Bébé",
    description: "Vêtements, jouets & puériculture",
    link: "/bebe",
  },
];

const CategorySection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">
            Pour toute la famille
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-4 text-foreground">
            Nos <span className="text-gradient-gold">catégories</span>
          </h2>
          <p className="text-muted-foreground">
            Commandez pour vous, votre partenaire ou vos enfants
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {categories.map((category) => (
            <Link
              key={category.title}
              to={category.link}
              className="bg-card rounded-2xl p-8 text-center shadow-luxury hover:shadow-luxury-hover transition-all duration-300 border border-border hover:border-primary/30 hover:scale-105 cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-gold flex items-center justify-center mb-5">
                <category.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-medium mb-2 text-foreground">
                {category.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
