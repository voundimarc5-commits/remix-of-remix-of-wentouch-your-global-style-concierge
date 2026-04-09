import { useState } from "react";
import { Send, Upload, User, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

type Gender = "femme" | "homme" | null;

const RequestForm = () => {
  const [gender, setGender] = useState<Gender>(null);
  const [formData, setFormData] = useState({
    productLink: "",
    details: "",
    name: "",
    whatsapp: "",
    city: "",
    screenshot: null as File | null,
    // Female questionnaire
    occasion: "",
    styleF: "",
    sizeF: "",
    brandsF: "",
    // Male questionnaire
    articleType: "",
    styleM: "",
    sizeM: "",
    brandsM: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Demande envoyée avec succès ! Nous vous contacterons sous 24h.");
    // Reset form
    setGender(null);
    setFormData({
      productLink: "",
      details: "",
      name: "",
      whatsapp: "",
      city: "",
      screenshot: null,
      occasion: "",
      styleF: "",
      sizeF: "",
      brandsF: "",
      articleType: "",
      styleM: "",
      sizeM: "",
      brandsM: "",
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, screenshot: e.target.files[0] });
    }
  };

  return (
    <section id="request" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Demande d'achat
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
              Partagez votre <span className="italic text-primary">envie</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Remplissez le formulaire ci-dessous et recevez votre devis
              personnalisé sous 24h.
            </p>
          </div>

          {/* Gender Selection */}
          {!gender && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up">
              <button
                onClick={() => setGender("femme")}
                className="group flex-1 max-w-xs bg-gradient-rose rounded-2xl p-8 text-center hover:shadow-luxury-hover transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-medium mb-2">Femme</h3>
                <p className="text-sm text-muted-foreground">
                  Mode, beauté, accessoires
                </p>
              </button>
              <button
                onClick={() => setGender("homme")}
                className="group flex-1 max-w-xs bg-secondary rounded-2xl p-8 text-center hover:shadow-luxury-hover transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-foreground/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="font-display text-xl font-medium mb-2">Homme</h3>
                <p className="text-sm text-muted-foreground">
                  Mode, tech, lifestyle
                </p>
              </button>
            </div>
          )}

          {/* Form */}
          {gender && (
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 md:p-10 shadow-luxury animate-fade-up"
            >
              {/* Back Button */}
              <button
                type="button"
                onClick={() => setGender(null)}
                className="text-sm text-muted-foreground hover:text-foreground mb-6 flex items-center gap-2"
              >
                ← Changer de catégorie
              </button>

              <div className="space-y-6">
                {/* Product Link */}
                <div>
                  <Label htmlFor="productLink" className="text-base font-medium">
                    Lien du produit ou du panier *
                  </Label>
                  <Input
                    id="productLink"
                    placeholder="https://www.zara.com/..."
                    value={formData.productLink}
                    onChange={(e) =>
                      setFormData({ ...formData, productLink: e.target.value })
                    }
                    required
                    className="mt-2 h-12"
                  />
                </div>

                {/* Details */}
                <div>
                  <Label htmlFor="details" className="text-base font-medium">
                    Détails (taille, couleur, quantité)
                  </Label>
                  <Textarea
                    id="details"
                    placeholder="Ex: Taille M, couleur noire, 2 exemplaires..."
                    value={formData.details}
                    onChange={(e) =>
                      setFormData({ ...formData, details: e.target.value })
                    }
                    className="mt-2 min-h-[100px]"
                  />
                </div>

                {/* Screenshot Upload */}
                <div>
                  <Label className="text-base font-medium">
                    Capture d'écran (optionnel)
                  </Label>
                  <div className="mt-2">
                    <label className="flex items-center justify-center gap-3 h-24 border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-primary/50 hover:bg-secondary/50 transition-colors">
                      <Upload className="w-5 h-5 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        {formData.screenshot
                          ? formData.screenshot.name
                          : "Glissez ou cliquez pour télécharger"}
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>

                {/* Questionnaire based on gender */}
                <div className="border-t border-border pt-6">
                  <p className="font-display text-lg font-medium mb-4">
                    Pour mieux vous conseiller
                  </p>

                  {gender === "femme" ? (
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm">Occasion</Label>
                        <Select
                          value={formData.occasion}
                          onValueChange={(value) =>
                            setFormData({ ...formData, occasion: value })
                          }
                        >
                          <SelectTrigger className="mt-1.5">
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="event">Événement</SelectItem>
                            <SelectItem value="dinner">Dîner</SelectItem>
                            <SelectItem value="daily">Quotidien</SelectItem>
                            <SelectItem value="gift">Cadeau</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-sm">Style préféré</Label>
                        <Select
                          value={formData.styleF}
                          onValueChange={(value) =>
                            setFormData({ ...formData, styleF: value })
                          }
                        >
                          <SelectTrigger className="mt-1.5">
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="elegant">Élégant</SelectItem>
                            <SelectItem value="trendy">Tendance</SelectItem>
                            <SelectItem value="classic">Classique</SelectItem>
                            <SelectItem value="luxury">Luxe</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-sm">Taille</Label>
                        <Input
                          placeholder="Ex: 38, M, 40..."
                          value={formData.sizeF}
                          onChange={(e) =>
                            setFormData({ ...formData, sizeF: e.target.value })
                          }
                          className="mt-1.5"
                        />
                      </div>
                      <div>
                        <Label className="text-sm">Marques préférées</Label>
                        <Input
                          placeholder="Optionnel"
                          value={formData.brandsF}
                          onChange={(e) =>
                            setFormData({ ...formData, brandsF: e.target.value })
                          }
                          className="mt-1.5"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm">Type d'article</Label>
                        <Select
                          value={formData.articleType}
                          onValueChange={(value) =>
                            setFormData({ ...formData, articleType: value })
                          }
                        >
                          <SelectTrigger className="mt-1.5">
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fashion">Mode</SelectItem>
                            <SelectItem value="shoes">Chaussures</SelectItem>
                            <SelectItem value="tech">Tech</SelectItem>
                            <SelectItem value="fragrance">Parfum</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-sm">Style</Label>
                        <Select
                          value={formData.styleM}
                          onValueChange={(value) =>
                            setFormData({ ...formData, styleM: value })
                          }
                        >
                          <SelectTrigger className="mt-1.5">
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="classic">Classique</SelectItem>
                            <SelectItem value="streetwear">Streetwear</SelectItem>
                            <SelectItem value="business">Business</SelectItem>
                            <SelectItem value="luxury">Luxe</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-sm">Taille</Label>
                        <Input
                          placeholder="Ex: L, 42, 44..."
                          value={formData.sizeM}
                          onChange={(e) =>
                            setFormData({ ...formData, sizeM: e.target.value })
                          }
                          className="mt-1.5"
                        />
                      </div>
                      <div>
                        <Label className="text-sm">Marques préférées</Label>
                        <Input
                          placeholder="Optionnel"
                          value={formData.brandsM}
                          onChange={(e) =>
                            setFormData({ ...formData, brandsM: e.target.value })
                          }
                          className="mt-1.5"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Contact Info */}
                <div className="border-t border-border pt-6">
                  <p className="font-display text-lg font-medium mb-4">
                    Vos coordonnées
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm">
                        Nom complet *
                      </Label>
                      <Input
                        id="name"
                        placeholder="Votre nom"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="whatsapp" className="text-sm">
                        Numéro WhatsApp *
                      </Label>
                      <Input
                        id="whatsapp"
                        placeholder="+237..."
                        value={formData.whatsapp}
                        onChange={(e) =>
                          setFormData({ ...formData, whatsapp: e.target.value })
                        }
                        required
                        className="mt-1.5"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="city" className="text-sm">
                        Ville de livraison au Cameroun *
                      </Label>
                      <Select
                        value={formData.city}
                        onValueChange={(value) =>
                          setFormData({ ...formData, city: value })
                        }
                      >
                        <SelectTrigger className="mt-1.5">
                          <SelectValue placeholder="Sélectionner votre ville" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="douala">Douala</SelectItem>
                          <SelectItem value="yaounde">Yaoundé</SelectItem>
                          <SelectItem value="bafoussam">Bafoussam</SelectItem>
                          <SelectItem value="bamenda">Bamenda</SelectItem>
                          <SelectItem value="garoua">Garoua</SelectItem>
                          <SelectItem value="maroua">Maroua</SelectItem>
                          <SelectItem value="other">Autre ville</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-foreground text-background hover:bg-foreground/90 h-14 text-base font-medium"
                >
                  Envoyer ma demande
                  <Send className="ml-2 w-5 h-5" />
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Nous vous répondrons sous 24 heures avec un devis détaillé.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default RequestForm;
