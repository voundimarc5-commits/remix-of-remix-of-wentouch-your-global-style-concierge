import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl font-semibold mb-4">
              Wen<span className="text-accent">touch</span>
            </h3>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed mb-6">
              Votre conciergerie d'achat international premium. Accédez aux
              meilleures marques européennes depuis le Cameroun.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@wentouch.com"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4 text-primary-foreground/90">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#how-it-works"
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  Comment ça marche
                </a>
              </li>
              <li>
                <a
                  href="#request"
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  Faire une demande
                </a>
              </li>
              <li>
                <a
                  href="#brands"
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  Marques accessibles
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4 text-primary-foreground/90">
              Contact
            </h4>
            <ul className="space-y-3 text-primary-foreground/60">
              <li>WhatsApp: +237 6XX XXX XXX</li>
              <li>Email: contact@wentouch.com</li>
              <li>Douala & Yaoundé, Cameroun</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50 flex items-center gap-2">
            © 2026 Wentouch. Tous droits réservés.
            <span className="inline-flex items-center gap-1 ml-2">
              <span className="text-base">🇨🇲</span>
              <span className="text-base">🇫🇷</span>
            </span>
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
