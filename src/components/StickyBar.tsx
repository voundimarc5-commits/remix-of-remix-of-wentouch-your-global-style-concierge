import { useEffect, useState } from "react";

const StickyBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-sm text-primary-foreground py-3 text-center text-sm tracking-wide transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      Livraison Europe → Cameroun en toute simplicité
    </div>
  );
};

export default StickyBar;
