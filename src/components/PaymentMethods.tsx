import { CreditCard, Smartphone, Wallet } from "lucide-react";

const paymentMethods = [
  {
    icon: Wallet,
    name: "PayPal",
    description: "Paiement international",
    link: "https://www.paypal.com",
  },
  {
    icon: Smartphone,
    name: "Wave",
    description: "Transfert rapide",
    link: "https://www.wave.com",
  },
  {
    icon: Smartphone,
    name: "Orange Money",
    description: "Mobile Money Cameroun",
    link: "https://www.orange.cm/fr/orange-money.html",
  },
  {
    icon: CreditCard,
    name: "Carte Bancaire",
    description: "Visa, Mastercard",
    link: null,
  },
];

const PaymentMethods = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">
            Paiements sécurisés
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-4 text-foreground">
            Modes de <span className="text-gradient-gold">paiement</span>
          </h2>
          <p className="text-muted-foreground">
            Paiements sécurisés et vérifiés avant chaque achat
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
          {paymentMethods.map((method) => {
            const content = (
              <div className="flex items-center gap-3 bg-card rounded-xl px-5 py-4 shadow-luxury border border-border hover:shadow-luxury-hover hover:border-primary/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                  <method.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{method.name}</p>
                  <p className="text-xs text-muted-foreground">{method.description}</p>
                </div>
              </div>
            );

            return method.link ? (
              <a
                key={method.name}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                {content}
              </a>
            ) : (
              <div key={method.name}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
