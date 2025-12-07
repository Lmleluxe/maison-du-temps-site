import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import brandsData from "@/data/brands.json";

export default function MarquesPage() {
  return (
    <div className="min-h-screen bg-palace-ivory">
      <section className="py-24 bg-palace-blue-deep text-palace-ivory">
        <div className="container-palace text-center">
          <h1 className="text-5xl md:text-6xl font-heading mb-6">Nos Marques Partenaires</h1>
          <p className="text-xl text-palace-ivory/80 max-w-2xl mx-auto">
            Une sélection rigoureuse de marques d'exception
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-palace">
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xl text-palace-anthracite/80 leading-relaxed text-center">
              À la Maison du Temps, nous travaillons exclusivement avec des maisons de cosmétique 
              reconnues pour leur excellence, leur innovation et leur engagement qualité. 
              Chaque partenariat est choisi pour garantir des résultats visibles et durables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {brandsData.map((brand) => (
              <Card key={brand.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-24 flex items-center justify-center mb-6 bg-palace-ivory rounded-lg">
                    <span className="text-2xl font-heading text-palace-blue-deep">{brand.name}</span>
                  </div>
                  <CardTitle className="text-palace-blue-deep text-center">{brand.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-palace-anthracite/70 text-center">{brand.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-palace max-w-3xl text-center">
          <h2 className="text-3xl font-heading text-palace-blue-deep mb-6">
            Distribution Exclusive
          </h2>
          <p className="text-palace-anthracite/70 text-lg">
            Certains de nos produits partenaires sont disponibles à la vente exclusive 
            dans notre institut. Renseignez-vous lors de votre visite.
          </p>
        </div>
      </section>
    </div>
  );
}
