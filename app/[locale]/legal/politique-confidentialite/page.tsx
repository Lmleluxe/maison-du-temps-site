export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-palace-ivory py-24">
      <div className="container-palace max-w-4xl">
        <h1 className="text-5xl font-heading text-palace-blue-deep mb-12">
          Politique de Confidentialité
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-heading text-palace-blue-deep mb-4">
              Collecte des données personnelles
            </h2>
            <p className="text-palace-anthracite/70">
              Nous collectons les données personnelles que vous nous fournissez volontairement lors de :
            </p>
            <ul className="list-disc list-inside text-palace-anthracite/70 space-y-2">
              <li>La prise de rendez-vous</li>
              <li>L'inscription à notre newsletter</li>
              <li>L'envoi d'un message via notre formulaire de contact</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-palace-blue-deep mb-4">
              Utilisation des données
            </h2>
            <p className="text-palace-anthracite/70">
              Vos données personnelles sont utilisées uniquement pour :
            </p>
            <ul className="list-disc list-inside text-palace-anthracite/70 space-y-2">
              <li>Gérer vos rendez-vous</li>
              <li>Vous envoyer nos communications (si vous y avez consenti)</li>
              <li>Améliorer nos services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-palace-blue-deep mb-4">
              Protection des données
            </h2>
            <p className="text-palace-anthracite/70">
              Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées 
              pour protéger vos données contre tout accès non autorisé, perte ou destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-palace-blue-deep mb-4">Vos droits</h2>
            <p className="text-palace-anthracite/70">
              Conformément à la loi suisse sur la protection des données, vous disposez d'un droit d'accès, 
              de rectification, de suppression et d'opposition concernant vos données personnelles.
            </p>
            <p className="text-palace-anthracite/70 mt-4">
              Pour exercer ces droits, contactez-nous à : contact@maisondutemps.ch
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-palace-blue-deep mb-4">Cookies</h2>
            <p className="text-palace-anthracite/70">
              Notre site utilise des cookies essentiels au fonctionnement du site et des cookies analytiques 
              (avec votre consentement) pour améliorer votre expérience de navigation.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
