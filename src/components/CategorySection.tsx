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
    <section className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">
            Pour toute la famille
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground text-left">
            Nos <span className="text-gradient-gold">catégories</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl">
          {categories.map((category) => (
            <Link
              key={category.title}
              to={category.link}
              className="bg-card rounded-xl p-7 shadow-luxury hover:shadow-luxury-hover hover:-translate-y-[3px] transition-all duration-300 border border-border hover:border-primary/30 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-gold flex items-center justify-center mb-5">
                <category.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-medium mb-2 text-foreground text-left">
                {category.title}
              </h3>
              <p className="text-muted-foreground text-sm text-left">
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
