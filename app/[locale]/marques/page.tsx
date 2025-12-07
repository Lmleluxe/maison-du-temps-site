import Image from "next/image";

export default function MarquesPage() {
  return (
    <main className="min-h-screen bg-palace-ivory">
      {/* En-tête */}
      <section className="pt-24 pb-12 bg-palace-ivory">
        <div className="container-palace text-center space-y-4">
          <p className="text-[0.75rem] tracking-[0.3em] uppercase text-palace-anthracite/60">
            MARQUES PARTENAIRES
          </p>
          <h1 className="text-4xl md:text-5xl font-heading tracking-[0.18em] text-palace-anthracite">
            MAISON DU TEMPS
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-10">
        <div className="container-palace max-w-4xl mx-auto text-center space-y-3">
          <p className="text-lg text-palace-anthracite/80 leading-relaxed">
            Chez Maison du Temps, nous collaborons uniquement avec des maisons
            de cosmétique et de parfum reconnues pour la précision de leurs
            protocoles, la noblesse de leurs actifs et l’exigence de leurs
            résultats.
          </p>
          <p className="text-base text-palace-anthracite/70 leading-relaxed">
            Chaque partenaire est choisi comme une extension de notre
            philosophie&nbsp;: sublimer le temps que vous vous accordez, avec
            des rituels sur-mesure et un accompagnement profondément
            personnalisé.
          </p>
        </div>
      </section>

      {/* NIANCE */}
      <section className="py-24 bg-white">
        <div className="container-palace grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div>
            <div className="relative h-[320px] md:h-[460px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.25)]">
              <Image
                src="/images/brands/niance-hero.png"
                alt="NIANCE"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>

          {/* Texte */}
          <div className="space-y-6 md:pl-4">
            <p className="text-[0.75rem] tracking-[0.26em] uppercase text-palace-anthracite/60">
              SOINS D’EXCELLENCE
            </p>
            <h2 className="text-3xl md:text-4xl font-heading text-palace-anthracite tracking-[0.16em]">
              NIANCE – L’anti-âge haute précision
            </h2>

            <div className="space-y-4 text-palace-anthracite/80 text-[0.98rem] leading-relaxed">
              <p>
                Marque suisse de haute cosmétique, NIANCE s’appuie sur une
                recherche avancée et des actifs d’exception pour cibler
                intensément les signes du temps. Les textures sont fines, les
                résultats mesurables, l’expérience sensorielle parfaitement
                maîtrisée.
              </p>
              <p>
                À la Maison du Temps, NIANCE est intégrée dans des protocoles
                sur-mesure, pensés pour restaurer l’éclat, la fermeté et la
                qualité de peau, tout en respectant les rythmes de vie de
                chaque personne.
              </p>
              <p>
                Chaque rituel NIANCE est conçu comme un moment de précision et
                de lâcher-prise&nbsp;: une alliance entre exigence
                scientifique et art du soin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAISON PARFUM (placeholder en attendant la marque) */}
      <section className="py-24 bg-palace-ivory">
        <div className="container-palace grid md:grid-cols-2 gap-16 items-center">
          {/* Texte en premier sur desktop */}
          <div className="space-y-6 md:pr-4 order-2 md:order-1">
            <p className="text-[0.75rem] tracking-[0.26em] uppercase text-palace-anthracite/60">
              PARFUMS D’ATMOSPHÈRE
            </p>
            <h2 className="text-3xl md:text-4xl font-heading text-palace-anthracite tracking-[0.16em]">
              Maison Parfum – Signature olfactive
            </h2>

            <div className="space-y-4 text-palace-anthracite/80 text-[0.98rem] leading-relaxed">
              <p>
                Une maison de parfum sera sélectionnée pour accompagner
                l’identité de la Maison du Temps et prolonger l’expérience au-delà
                de la cabine. L’objectif&nbsp;: créer une atmosphère olfactive
                reconnaissable, apaisante et subtilement luxueuse.
              </p>
              <p>
                Les parfums d’ambiance et brumes seront choisis pour leur
                composition raffinée, leur tenue délicate et leur capacité à
                dialoguer avec l’architecture, la lumière et les matières du
                lieu.
              </p>
              <p>
                Cette signature parfumée viendra compléter nos rituels, pour
                que chaque visite à la Maison du Temps soit immédiatement
                associée à une émotion et un sillage uniques.
              </p>
            </div>
          </div>

          {/* Image (met une vraie image dès que tu as la marque) */}
          <div className="order-1 md:order-2">
            <div className="relative h-[320px] md:h-[460px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.20)]">
              <Image
                src="/images/brands/parfum-hero.png"
                alt="Maison Parfum"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="pb-20 bg-white/70 border-t border-palace-anthracite/10">
        <div className="container-palace max-w-3xl text-center space-y-4 py-12">
          <h3 className="text-2xl md:text-3xl font-heading text-palace-anthracite tracking-[0.16em]">
            RITUELS SUR-MESURE
          </h3>
          <p className="text-palace-anthracite/70 text-base md:text-lg leading-relaxed">
            Lors de votre première visite, nous prenons le temps de comprendre
            votre peau, votre rythme de vie et vos attentes. C’est à partir de
            là que nous composons, avec nos marques partenaires, un protocole
            entièrement personnalisé&nbsp;: NIANCE, une maison de parfums ou
            une signature développée spécifiquement pour la Maison du Temps.
          </p>
        </div>
      </section>
    </main>
  );
}
