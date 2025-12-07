export default function CGVPage() {
  return (
    <div className="min-h-screen bg-palace-ivory py-24">
      <div className="container-palace max-w-4xl">
        <h1 className="text-5xl font-heading text-palace-blue-deep mb-12">
          Conditions Générales de Vente
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-heading text-palace-blue-deep mb-4">
              Article 1 - Champ d'application
            </h2>
            <p className="text-palace-anthracite/70">
              Les présentes conditions générales s'appliquent à toutes les prestations de soins 
              et formations proposées par Maison du Temps à Genève.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-palace-blue-deep mb-4">
              Article 2 - Tarifs
            </h2>
            <p className="text-palace-anthracite/70">
              Les tarifs indiqués sur notre site et dans notre institut sont en francs suisses (CHF) 
              et incluent la TVA au taux en vigueur. Nous nous réservons le droit de modifier nos tarifs 
              à tout moment, les prestations étant facturées sur la base des tarifs en vigueur au moment 
              de la réservation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-palace-blue-deep mb-4">
              Article 3 - Réservation
            </h2>
            <p className="text-palace-anthracite/70">
              Les réservations peuvent être effectuées par téléphone, email ou via notre formulaire en ligne. 
              Toute réservation fait l'objet d'une confirmation de notre part.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-palace-blue-deep mb-4">
              Article 4 - Annulation et modification
            </h2>
            <p className="text-palace-anthracite/70">
              Toute annulation ou modification doit nous être notifiée au minimum 24 heures avant 
              le rendez-vous. En cas d'annulation tardive ou d'absence, nous nous réservons le droit 
              de facturer 50% du montant de la prestation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-palace-blue-deep mb-4">
              Article 5 - Paiement
            </h2>
            <p className="text-palace-anthracite/70">
              Le paiement s'effectue à la fin de la prestation, en espèces ou par carte bancaire. 
              Les cartes-cadeaux sont valables 12 mois à compter de leur date d'achat.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-palace-blue-deep mb-4">
              Article 6 - Responsabilité
            </h2>
            <p className="text-palace-anthracite/70">
              Nous vous recommandons de signaler toute condition médicale particulière avant votre soin. 
              En cas de doute, nous vous conseillons de consulter votre médecin au préalable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-palace-blue-deep mb-4">
              Article 7 - Litiges
            </h2>
            <p className="text-palace-anthracite/70">
              En cas de litige, nous privilégions une résolution à l'amiable. À défaut, les tribunaux 
              de Genève seront seuls compétents.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
