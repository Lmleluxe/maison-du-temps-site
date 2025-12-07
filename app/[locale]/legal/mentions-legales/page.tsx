export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-palace-ivory py-24">
      <div className="container-palace max-w-4xl">
        <h1 className="text-5xl font-heading text-palace-blue-deep mb-12">Mentions Légales</h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-heading text-palace-blue-deep mb-4">Éditeur du site</h2>
            <p className="text-palace-anthracite/70">
              Maison du Temps<br />
              Rue du XXXI décembre 52<br />
              1201 Genève, Suisse
            </p>
            <p className="text-palace-anthracite/70">
              Email : contact@maisondutemps.ch<br />
              Téléphone : +41 22 XXX XX XX
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-palace-blue-deep mb-4">Hébergement</h2>
            <p className="text-palace-anthracite/70">
              Ce site est hébergé par Vercel Inc.<br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789, USA
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-palace-blue-deep mb-4">Propriété intellectuelle</h2>
            <p className="text-palace-anthracite/70">
              L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est protégé par le droit d'auteur.
              Toute reproduction, même partielle, est strictement interdite sans autorisation préalable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-palace-blue-deep mb-4">Crédits</h2>
            <p className="text-palace-anthracite/70">
              Conception et développement : Maison du Temps<br />
              © {new Date().getFullYear()} Maison du Temps. Tous droits réservés.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
