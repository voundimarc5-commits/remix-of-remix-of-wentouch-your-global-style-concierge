import heroImage from "@/assets/hero-family.jpg";

const LifestyleSection = () => {
  return (
    <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
      <img
        src={heroImage}
        alt="Lifestyle européen"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/40" />
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12 w-full">
          <p className="font-display text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-primary-foreground leading-[1.05] max-w-2xl text-left">
            L'Europe, <span className="italic">sans le voyage.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
