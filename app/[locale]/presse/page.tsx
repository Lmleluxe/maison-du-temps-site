import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Newspaper } from "lucide-react";

const pressItems = [
  {
    title: "Meilleur Institut de Beauté 2024",
    publication: "Geneva Luxury Magazine",
    date: "Octobre 2024",
    type: "award",
  },
  {
    title: "Un Havre de Paix au Cœur de Genève",
    publication: "Le Temps",
    date: "Septembre 2024",
    type: "article",
  },
  {
    title: "Excellence Suisse dans l'Art du Soin",
    publication: "Bilan",
    date: "Août 2024",
    type: "article",
  },
];

export default function PressePage() {
  return (
    <div className="min-h-screen bg-palace-ivory py-24">
      <div className="container-palace max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading text-palace-blue-deep mb-6">
            Presse & Distinctions
          </h1>
          <p className="text-xl text-palace-anthracite/70">
            Ils parlent de nous
          </p>
        </div>

        <div className="space-y-6">
          {pressItems.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-palace-blue-deep/10">
                    {item.type === "award" ? (
                      <Award className="h-6 w-6 text-palace-green-pine" />
                    ) : (
                      <Newspaper className="h-6 w-6 text-palace-blue-deep" />
                    )}
                  </div>
                  <div className="flex-grow">
                    <CardTitle className="text-palace-blue-deep mb-2">{item.title}</CardTitle>
                    <div className="flex items-center gap-3 text-sm text-palace-anthracite/60">
                      <span className="font-medium">{item.publication}</span>
                      <span>•</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
