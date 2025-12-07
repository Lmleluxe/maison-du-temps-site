import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { Clock, CheckCircle, ArrowLeft } from "lucide-react";
import servicesData from "@/data/services.json";

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-palace-ivory">
      <div className="h-96 bg-palace-blue-deep/10 flex items-center justify-center">
        <div className="container-palace text-center">
          <p className="text-palace-green-pine text-sm uppercase tracking-wide mb-4">
            {service.category}
          </p>
          <h1 className="text-5xl md:text-6xl font-heading text-palace-blue-deep mb-6">
            {service.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-palace-anthracite/70">
            <Clock className="h-5 w-5" />
            <span>{service.durations.join(' / ')} minutes</span>
            <span>•</span>
            <span>à partir de CHF {service.priceFrom}</span>
          </div>
        </div>
      </div>

      <div className="container-palace py-16">
        <Link href="/soins" className="inline-flex items-center gap-2 text-palace-blue-deep hover:underline mb-12">
          <ArrowLeft className="h-4 w-4" />
          Retour aux soins
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-heading text-palace-blue-deep mb-6">Description</h2>
              <p className="text-lg text-palace-anthracite/80 leading-relaxed">
                {service.description}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading text-palace-blue-deep mb-6">Bienfaits</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-palace-green-pine flex-shrink-0 mt-0.5" />
                    <span className="text-palace-anthracite/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-heading text-palace-blue-deep mb-6">Durées & Tarifs</h2>
              <div className="bg-white rounded-2xl p-8">
                {service.durations.map((duration, index) => (
                  <div key={index} className="flex justify-between items-center py-4 border-b border-palace-anthracite/10 last:border-0">
                    <span className="font-medium">{duration} minutes</span>
                    <span className="text-2xl font-heading text-palace-blue-deep">
                      CHF {service.priceFrom + (index * 50)}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-heading text-palace-blue-deep mb-6">
                Réserver ce soin
              </h3>
              <p className="text-palace-anthracite/70 mb-6">
                Offrez-vous un moment d'exception dans notre institut genevois.
              </p>
              <Link href="/reservation">
                <Button size="lg" className="w-full">
                  Réserver maintenant
                </Button>
              </Link>
              <p className="text-sm text-palace-anthracite/60 mt-4 text-center">
                Réponse sous 24h
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
