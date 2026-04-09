import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#how-it-works", label: "Comment ça marche" },
    { href: "#why-wentouch", label: "Pourquoi nous" },
    { href: "#brands", label: "Marques" },
    { href: "#our-story", label: "Notre histoire" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center">
            <span
              className={`font-display text-xl md:text-2xl font-semibold tracking-tight transition-colors ${
                scrolled ? "text-foreground" : "text-background"
              }`}
            >
              Wen<span className={scrolled ? "text-accent" : "text-accent"}>touch</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  scrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-background/70 hover:text-background"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium px-6 rounded-none"
            >
              <a href="https://order.wentouch.shop">Commander</a>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 ${scrolled ? "text-foreground" : "text-background"}`}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-6 border-t border-border bg-background animate-fade-up rounded-b-xl">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium mt-4 rounded-none"
              >
                <a href="https://order.wentouch.shop" onClick={() => setIsOpen(false)}>
                  Commander
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
