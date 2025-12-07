import { Hero } from "@/components/sections/Hero";
import { Award, Heart, Users, Sparkles, Quote } from "lucide-react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function MaisonPage() {
  return (
    <div className="bg-palace-ivory">
      <Hero
        title="La Maison du Temps"
        subtitle="Notre Histoire"
        city="Genève"
        description="Une quête d'excellence au service de votre bien-être"
        ctaText="Découvrir nos soins"
        ctaHref="/soins"
        showVideo={false}
      />

      <section className="py-32 bg-gradient-to-b from-white via-palace-ivory/20 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-palace-gold rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-palace-green-pine rounded-full blur-3xl" />
        </div>

        <div className="container-palace max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <ScrollReveal direction="left" className="lg:col-span-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-palace-gold/20 to-palace-green-pine/20 rounded-lg blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-0 group-hover:opacity-100" />
                
                <div className="relative">
                  <div className="absolute -inset-4 border border-palace-gold/20 rounded-lg" />
                  <div className="absolute -inset-2 bg-gradient-to-br from-palace-gold/10 to-transparent rounded-lg" />
                  
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-2xl">
                    <Image
                      src="/images/darlene-honneux.jpg"
                      alt="Darlène Honneux, Directrice"
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority
                    />
                  </div>
                  
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 border-2 border-palace-gold/40 rounded-lg opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={0.2} className="lg:col-span-3 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-px w-12 bg-gradient-to-r from-palace-gold to-transparent" />
                  <p className="text-xs uppercase tracking-[0.3em] text-palace-gold font-medium">
                    Darlène Honneux
                  </p>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-palace-blue-deep leading-tight">
                  Directrice
                </h2>
              </div>

              <div className="relative">
                <Quote className="absolute -top-4 -left-2 h-12 w-12 text-palace-gold/20" />
                
                <blockquote className="relative pl-12 pr-8">
                  <p className="text-xl md:text-2xl lg:text-3xl font-light text-palace-anthracite/90 leading-relaxed italic">
                    Le temps n'est pas seulement ce qui passe, mais ce que l'on choisit de vivre.
                  </p>
                  
                  <div className="mt-8 pt-8 border-t border-palace-gold/20">
                    <p className="text-lg md:text-xl text-palace-anthracite/80 leading-relaxed font-light">
                      Le Temps Genève est né de cette conviction : offrir un espace où chaque instant retrouve sa valeur, où la précision et l'émotion se rejoignent.
                    </p>
                  </div>
                </blockquote>

                <div className="mt-8 h-1 w-24 bg-gradient-to-r from-palace-gold via-palace-gold/50 to-transparent rounded-full" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-palace-ivory">
        <div className="container-palace max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-heading text-palace-blue-deep mb-8 text-center">
            La Philosophie du Temps
          </h2>
          <div className="prose prose-lg max-w-none text-palace-anthracite/80">
            <p className="text-xl leading-relaxed mb-6">
              Maison du Temps est née d'une passion pour l'art du soin et la précision du service.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              Son essence s'inspire des plus belles maisons du monde — des lieux discrets où chaque détail compte, et où l'expérience devient un art maîtrisé.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              Nichée à Genève, à l'abri du regard, Maison du Temps est un lieu confidentiel, pensé pour celles et ceux qui recherchent plus qu'un soin : un moment suspendu, sur rendez-vous uniquement, dans une atmosphère calme et mesurée.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              Cette culture de la justesse et du service, fondée sur la rigueur, la précision et la sincérité du geste, se retrouve dans chaque expérience imaginée au sein de la Maison.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              Du massage aux soins visage, Maison du Temps allie profondeur, efficacité et ressenti.
            </p>
            <p className="text-xl leading-relaxed">
              Chaque détail a été pensé pour libérer les tensions, révéler la peau et offrir un instant rare, où l'on retrouve enfin la valeur du temps.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-palace">
          <h2 className="text-4xl md:text-5xl font-heading text-palace-blue-deep mb-16 text-center">
            Nos Valeurs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-palace-blue-deep/10 mb-6">
                <Award className="h-8 w-8 text-palace-blue-deep" />
              </div>
              <h3 className="text-xl font-heading mb-3 text-palace-blue-deep">Excellence</h3>
              <p className="text-palace-anthracite/70">
                Une quête permanente de la perfection dans chaque geste
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-palace-green-pine/10 mb-6">
                <Heart className="h-8 w-8 text-palace-green-pine" />
              </div>
              <h3 className="text-xl font-heading mb-3 text-palace-blue-deep">Bienveillance</h3>
              <p className="text-palace-anthracite/70">
                Une écoute attentive et un accompagnement sur-mesure
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-palace-blue-deep/10 mb-6">
                <Sparkles className="h-8 w-8 text-palace-blue-deep" />
              </div>
              <h3 className="text-xl font-heading mb-3 text-palace-blue-deep">Innovation</h3>
              <p className="text-palace-anthracite/70">
                Les techniques les plus avancées au service de votre beauté
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-palace-green-pine/10 mb-6">
                <Users className="h-8 w-8 text-palace-green-pine" />
              </div>
              <h3 className="text-xl font-heading mb-3 text-palace-blue-deep">Expertise</h3>
              <p className="text-palace-anthracite/70">
                Une équipe formée aux meilleures écoles internationales
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-palace-blue-deep text-palace-ivory">
        <div className="container-palace max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-heading mb-6">
            Notre Engagement Qualité
          </h2>
          <p className="text-xl text-palace-ivory/80 leading-relaxed">
            Nous sélectionnons avec soin nos partenaires et nos produits. 
            Chaque marque présente à la Maison du Temps répond à nos critères 
            d'excellence et partage nos valeurs de qualité, d'efficacité et de respect.
          </p>
        </div>
      </section>
    </div>
  );
}
