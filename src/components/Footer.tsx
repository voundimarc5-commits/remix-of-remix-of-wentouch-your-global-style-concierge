import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl font-semibold mb-4">
              Wen<span className="text-accent">touch</span>
            </h3>
            <p className="text-background/50 max-w-md leading-relaxed mb-6 text-sm">
              Votre conciergerie shopping premium. Accédez aux meilleures marques
              européennes depuis le Cameroun, en toute simplicité.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-background/20 flex items-center justify-center hover:bg-background/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@wentouch.com"
                className="w-10 h-10 border border-background/20 flex items-center justify-center hover:bg-background/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-background/40 mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#how-it-works", label: "Comment ça marche" },
                { href: "#why-wentouch", label: "Pourquoi nous" },
                { href: "#brands", label: "Marques" },
                { href: "#our-story", label: "Notre histoire" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-background/50 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-background/40 mb-6">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-background/50">
              <li>WhatsApp: +237 6XX XXX XXX</li>
              <li>contact@wentouch.com</li>
              <li>Douala & Yaoundé, Cameroun</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/30">
            © 2026 Wentouch. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-xs text-background/30">
            <a href="#" className="hover:text-background/60 transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-background/60 transition-colors">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
