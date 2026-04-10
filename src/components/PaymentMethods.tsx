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
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        <div className="max-w-xl mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium mb-5">
            Paiements sécurisés
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-4 text-foreground text-left leading-[1.1]">
            Modes de <span className="text-gradient-gold">paiement</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed max-w-[480px]">
            Paiements sécurisés et vérifiés avant chaque achat
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-8 max-w-[1100px]">
          {paymentMethods.map((method) => {
            const inner = (
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display text-lg font-medium text-foreground">{method.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{method.description}</p>
                </div>
              </div>
            );

            return method.link ? (
              <a key={method.name} href={method.link} target="_blank" rel="noopener noreferrer">
                {inner}
              </a>
            ) : (
              <div key={method.name}>{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
