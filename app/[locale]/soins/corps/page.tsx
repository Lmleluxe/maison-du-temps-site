import { Hero } from "@/components/sections/Hero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import services from "@/data/services.json";

export default function SoinsCorpsPage() {
  const corpsServices = services.filter(
    (service) => 
      service.category === "Rituels Corps" || 
      service.category === "Massages Signature"
  );

  return (
    <div className="bg-palace-ivory">
      <Hero
        title="Soins du Corps"
        subtitle="Détente & Régénération"
        description="Des rituels profonds pour libérer les tensions et retrouver l'harmonie"
        ctaText="Réserver votre soin"
        ctaHref="/reservation"
        showVideo={false}
      />

      <section className="py-24">
        <div className="container-palace">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corpsServices.map((service, index) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                title={service.title}
                category={service.category}
                summary={service.summary}
                durations={service.durations}
                priceFrom={service.priceFrom}
                image={service.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
