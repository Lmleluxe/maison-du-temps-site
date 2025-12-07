import { Hero } from "@/components/sections/Hero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { Sparkles, Heart, Target, MapPin, Clock, Mail } from "lucide-react";

import servicesData from "@/data/services.json";
import testimonialsData from "@/data/testimonials.json";

export default function HomePage() {
  const featuredServices = servicesData.slice(0, 3);

  return (
    <div className="bg-palace-ivory">
      <Hero
        title="Nouveau. Précis. Essentiel."
        subtitle="Institut de beauté & bien-être"
        description="Des rituels d'exception, exécutés avec la précision suisse"
      />

      <section className="py-24 bg-white">
        <div className="container-palace">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading text-palace-blue-deep mb-6">
              Notre Manifesto
            </h2>
            <p className="text-xl text-palace-anthracite/70 max-w-2xl mx-auto">
              Trois piliers fondamentaux guident chacune de nos actions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-palace-blue-deep/10 mb-6">
                <Target className="h-8 w-8 text-palace-blue-deep" />
              </div>
              <h3 className="text-2xl font-heading mb-4 text-palace-blue-deep">Expertise</h3>
              <p className="text-palace-anthracite/70 leading-relaxed">
                Des protocoles exigeants, des mains expertes, des résultats visibles.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-palace-green-pine/10 mb-6">
                <Heart className="h-8 w-8 text-palace-green-pine" />
              </div>
              <h3 className="text-2xl font-heading mb-4 text-palace-blue-deep">Sérénité</h3>
              <p className="text-palace-anthracite/70 leading-relaxed">
                Un temps suspendu, un cadre feutré, une attention absolue.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-palace-blue-deep/10 mb-6">
                <Sparkles className="h-8 w-8 text-palace-blue-deep" />
              </div>
              <h3 className="text-2xl font-heading mb-4 text-palace-blue-deep">Précision</h3>
              <p className="text-palace-anthracite/70 leading-relaxed">
                Chaque geste compte. Chaque détail a du sens.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-palace">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading text-palace-blue-deep mb-6">
              Nos Soins Signature
            </h2>
            <p className="text-xl text-palace-anthracite/70 max-w-2xl mx-auto mb-8">
              Une sélection de nos rituels les plus emblématiques
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.slug} {...service} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/soins">
              <Button variant="outline" size="lg">
                Découvrir tous nos soins
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-palace-blue-deep text-palace-ivory">
        <div className="container-palace">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading mb-6">
              Ils parlent de nous
            </h2>
            <p className="text-xl text-palace-ivory/70 max-w-2xl mx-auto">
              Découvrez les expériences de nos clients
            </p>
          </div>

          <TestimonialsCarousel testimonials={testimonialsData} />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-palace">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading text-palace-blue-deep mb-6">
              Offrez un Temps Suspendu
            </h2>
            <p className="text-xl text-palace-anthracite/70 mb-8">
              Nos cartes-cadeaux sont une invitation au bien-être et à la sérénité.
            </p>
            <Link href="/reservation">
              <Button size="lg" variant="secondary">
                Découvrir nos cartes-cadeaux
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-palace">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading text-palace-blue-deep mb-6">
                Nous Trouver
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-palace-green-pine flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-palace-anthracite">Adresse</p>
                    <p className="text-palace-anthracite/70">
                      Rue du XXXI décembre 52<br />
                      1201 Genève, Suisse
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-palace-green-pine flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-palace-anthracite">Horaires</p>
                    <p className="text-palace-anthracite/70">
                      Lundi – Samedi<br />
                      10:00 – 19:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-palace-green-pine flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-palace-anthracite">Contact</p>
                    <p className="text-palace-anthracite/70">
                      contact@maisondutemps.ch<br />
                      +41 22 XXX XX XX
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/reservation">
                  <Button size="lg">Réserver votre moment</Button>
                </Link>
              </div>
            </div>

            <div className="bg-palace-anthracite/5 rounded-2xl h-96 flex items-center justify-center">
              <p className="text-palace-anthracite/40">Carte Google Maps</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
