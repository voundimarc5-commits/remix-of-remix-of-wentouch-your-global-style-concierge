import { Link } from "react-router-dom";

const categories = [
  {
    title: "Homme",
    description: "Mode, accessoires, tech & lifestyle",
    link: "/homme",
    image: "/_img/e1.jpg",
    num: "01",
  },
  {
    title: "Femme",
    description: "Mode, beauté, accessoires & maroquinerie",
    link: "/femme",
    image: "/_img/femme_a.jpg",
    num: "02",
  },
  {
    title: "Bébé",
    description: "Vêtements, jouets & puériculture",
    link: "/bebe",
    image: "/_img/enfants_a.jpg",
    num: "03",
  },
];

const CategorySection = () => {
  return (
    <section className="py-24 md:py-36 bg-background">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        <div className="max-w-xl mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium mb-5">
            Pour toute la famille
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground text-left leading-[1.1]">
            Nos <span className="text-gradient-gold">catégories</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-5">
          {categories.map((category, index) => (
            <Link
              key={category.title}
              to={category.link}
              className={`group relative overflow-hidden rounded-xl border border-border hover:border-primary/30 transition-all duration-500 ${
                index === 0
                  ? "md:col-span-7 aspect-[4/5] md:aspect-[16/11]"
                  : index === 1
                  ? "md:col-span-5 aspect-[4/5]"
                  : "md:col-span-5 md:col-start-4 aspect-[4/5] md:aspect-square"
              }`}
            >
              <img
                src={category.image}
                alt={category.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[30%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.3em] text-primary/70 font-medium">
                  {category.num}
                </span>
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-white">
                  {category.title}
                </h3>
                <p className="text-sm text-white/60 mt-1">
                  {category.description}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/80 group-hover:text-primary transition-colors duration-300">
                    Explorer
                  </span>
                  <div className="h-px w-8 bg-primary/40 transition-all duration-500 group-hover:w-16 group-hover:bg-primary" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
