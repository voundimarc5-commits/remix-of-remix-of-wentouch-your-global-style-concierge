import { useState } from "react";
import { Send, Upload, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BreakdownItem {
  label?: string;
  amount?: number;
  [key: string]: unknown;
}

interface EstimationResult {
  quote_id?: string;
  currency?: string;
  total_estimate?: number;
  breakdown?: BreakdownItem[];
  total?: number;
  subtotal?: number;
  service_fee?: number;
  delivery_fee?: number;
  [key: string]: unknown;
}

const COUNTRY_OPTIONS = [
  { value: "CM", label: "🇨🇲 Cameroun" },
  { value: "GA", label: "🇬🇦 Gabon" },
  { value: "CI", label: "🇨🇮 Côte d'Ivoire" },
  { value: "SN", label: "🇸🇳 Sénégal" },
  { value: "CD", label: "🇨🇩 RD Congo" },
];

const HeroRequestForm = () => {
  const [form, setForm] = useState({
    order: "",
    name: "",
    email: "",
    phone: "",
    country: "CM",
  });
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [estimation, setEstimation] = useState<EstimationResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "https://order.wentouch.shop";
  };

  const formatXAF = (value: number) =>
    new Intl.NumberFormat("fr-FR", { style: "decimal" }).format(value) + " XAF";

  return (
    <form onSubmit={handleSubmit} className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-luxury border border-border">
      <div className="space-y-5">
        {/* Order Description */}
        <div>
          <Label htmlFor="order" className="text-sm font-medium">Votre commande *</Label>
          <Textarea
            id="order"
            placeholder="Collez ici les liens des articles que vous souhaitez commander (vous pouvez en mettre plusieurs).&#10;Précisez si possible la taille, la couleur et toute information utile."
            value={form.order}
            onChange={(e) => setForm({ ...form, order: e.target.value })}
            required
            className="mt-1.5 min-h-[140px] bg-background/50"
          />
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="name" className="text-sm font-medium">Nom complet *</Label>
            <Input id="name" placeholder="Votre nom" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="mt-1.5 h-11 bg-background/50" />
          </div>
          <div>
            <Label htmlFor="email" className="text-sm font-medium">E-mail *</Label>
            <Input id="email" type="email" placeholder="votre@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="mt-1.5 h-11 bg-background/50" />
          </div>
          <div>
            <Label htmlFor="phone" className="text-sm font-medium">Téléphone *</Label>
            <Input id="phone" placeholder="+237..." value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required className="mt-1.5 h-11 bg-background/50" />
          </div>
        </div>

        {/* Image Upload */}
        <label className="flex items-center justify-center gap-2 h-12 border border-dashed border-border rounded-lg cursor-pointer hover:border-primary/50 hover:bg-secondary/20 transition-colors">
          <Upload className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {screenshot ? screenshot.name : "Ajouter une capture d'écran (optionnel)"}
          </span>
          <input type="file" accept="image/*" onChange={(e) => setScreenshot(e.target.files?.[0] ?? null)} className="hidden" />
        </label>

        {/* Country Select */}
        <div>
          <Label htmlFor="country" className="text-sm font-medium">Pays *</Label>
          <Select value={form.country} onValueChange={(value) => setForm({ ...form, country: value })}>
            <SelectTrigger className="mt-1.5 h-11 bg-background/50">
              <SelectValue placeholder="Sélectionnez votre pays" />
            </SelectTrigger>
            <SelectContent>
              {COUNTRY_OPTIONS.map((c) => (
                <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Submit */}
        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90 h-12 text-base font-medium">
          {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
          {!isSubmitting && <Send className="ml-2 w-4 h-4" />}
        </Button>

        {/* Loading indicator */}
        {isSubmitting && (
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Calcul de votre estimation…</span>
          </div>
        )}

        {/* Error message */}
        {errorMessage && (
          <p className="text-center text-sm text-destructive">{errorMessage}</p>
        )}

        {/* Estimation Result */}
        {estimation && (
          <Card className="border-primary/20 bg-background/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Estimation de votre panier</CardTitle>
              {estimation.quote_id && (
                <p className="text-xs text-muted-foreground">Réf. : {estimation.quote_id}</p>
              )}
            </CardHeader>
            <CardContent className="space-y-2">
              {/* Legacy fields */}
              {estimation.subtotal != null && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Sous-total</span>
                  <span>{formatXAF(estimation.subtotal)}</span>
                </div>
              )}
              {estimation.service_fee != null && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Frais de service</span>
                  <span>{formatXAF(estimation.service_fee)}</span>
                </div>
              )}
              {estimation.delivery_fee != null && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Livraison</span>
                  <span>{formatXAF(estimation.delivery_fee)}</span>
                </div>
              )}
              {/* New breakdown array */}
              {estimation.breakdown?.map((item, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{item.label ?? `Ligne ${i + 1}`}</span>
                  <span>{item.amount != null ? formatXAF(item.amount) : "—"}</span>
                </div>
              ))}
              {(estimation.subtotal != null || estimation.service_fee != null || estimation.delivery_fee != null || estimation.breakdown?.length) && (
                <div className="border-t border-border my-2" />
              )}
              {(estimation.total_estimate ?? estimation.total) != null && (
                <div className="flex justify-between font-semibold text-base">
                  <span>Total estimé</span>
                  <span>{formatXAF((estimation.total_estimate ?? estimation.total)!)}{estimation.currency ? ` ${estimation.currency}` : ""}</span>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {!estimation && !isSubmitting && !errorMessage && (
          <p className="text-center text-xs text-muted-foreground">Réponse sous 24h avec un devis détaillé</p>
        )}
      </div>
    </form>
  );
};

export default HeroRequestForm;
