import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";

export default function MassagesPage() {
  return (
    <div className="bg-palace-ivory">

      {/* HERO */}
      <section className="relative py-32 bg-palace-blue-deep text-palace-ivory">
        <div className="container-palace text-center">
          <h1 className="text-5xl md:text-6xl font-heading mb-6">
            Nos Massages
          </h1>
          <p className="text-xl text-palace-ivory/80 max-w-3xl mx-auto leading-relaxed">
            Chez Maison du Temps, chaque massage est pensé comme une expérience de reconnexion profonde — 
            une invitation à suspendre le rythme, libérer les tensions et rendre au corps toute sa fluidité naturelle.
          </p>
        </div>
      </section>

      {/* MASSAGES – ALLIANCE */}
      <section className="py-24">
        <div className="container-palace max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading text-palace-blue-deep mb-10">
            Alliance Corps & Esprit
          </h2>
        </div>

        <div className="container-palace grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Relaxant */}
          <div>
            <h3 className="text-palace-blue-deep font-heading text-2xl mb-4">
              Relaxant
            </h3>
            <p className="text-palace-anthracite/70 leading-relaxed">
              Une invitation à la lenteur et à la sérénité. Le geste devient fluide, enveloppant, profondément apaisant. 
              Chaque mouvement relâche les tensions et réharmonise l’énergie vitale pour un bien-être global du corps et de l’esprit.
            </p>
          </div>

          {/* Future Maman */}
          <div>
            <h3 className="text-palace-blue-deep font-heading text-2xl mb-4">
              Future Maman
            </h3>
            <p className="text-palace-anthracite/70 leading-relaxed">
              Un moment de douceur absolue, pensé pour accompagner les changements du corps et offrir légèreté et réconfort. 
              <br /><span className="text-sm italic">(À partir du 3e mois de grossesse)</span>
            </p>
          </div>

          {/* Équilibre */}
          <div>
            <h3 className="text-palace-blue-deep font-heading text-2xl mb-4">
              Équilibre des points d’appui
            </h3>
            <p className="text-palace-anthracite/70 leading-relaxed">
              Un soin court et ciblé, concentré sur les zones oubliées : mains, bras, pieds et jambes. 
              Idéal pour relancer la circulation, alléger les tensions et redonner vitalité au corps.
            </p>
          </div>
        </div>
      </section>

      {/* MASSAGES – RECUP */}
      <section className="py-24 bg-white">
        <div className="container-palace max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading text-palace-blue-deep mb-10">
            Récupération Musculaire
          </h2>
        </div>

        <div className="container-palace grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Signature */}
          <div>
            <h3 className="text-palace-blue-deep font-heading text-2xl mb-4">
              Signature — Le Temps Genève
            </h3>
            <p className="text-palace-anthracite/70 leading-relaxed">
              Manœuvres profondes, étirements précis et relâchement total. Une approche rythmée par la respiration, 
              à la fois puissante et délicate.
            </p>
          </div>

          {/* Deep Tissue */}
          <div>
            <h3 className="text-palace-blue-deep font-heading text-2xl mb-4">
              Deep Tissue
            </h3>
            <p className="text-palace-anthracite/70 leading-relaxed">
              Massage profond structuré, pensé pour dénouer les tensions musculaires et réactiver la vitalité du corps.
            </p>
          </div>

          {/* Réflexologie */}
          <div>
            <h3 className="text-palace-blue-deep font-heading text-2xl mb-4">
              Réflexologie Plantaire
            </h3>
            <p className="text-palace-anthracite/70 leading-relaxed">
              Stimulation des zones réflexes pour rétablir l’équilibre intérieur, éliminer les toxines et reconnecter le corps à ses appuis essentiels.
            </p>
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section className="py-24">
        <div className="container-palace max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-palace-blue-deep mb-10">
            Tarifs
          </h2>

          <div className="bg-white rounded-2xl shadow-md px-8 py-10">
            <table className="w-full text-left text-palace-anthracite">
              <tbody>
                <tr><td className="py-3">25 min</td><td className="py-3 text-right">80.–</td></tr>
                <tr><td className="py-3">50 min</td><td className="py-3 text-right">150.–</td></tr>
                <tr><td className="py-3">80 min</td><td className="py-3 text-right">230.–</td></tr>
                <tr><td className="py-3">120 min</td><td className="py-3 text-right">340.–</td></tr>
              </tbody>
            </table>
            <p className="mt-6 text-sm text-palace-anthracite/60">
              Tarifs toutes taxes comprises — CHF
            </p>
          </div>

          <div className="mt-12">
            <Link href="/reservation">
              <Button size="lg">Réserver votre massage</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
