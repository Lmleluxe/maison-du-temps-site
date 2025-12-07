import { Hero } from "@/components/sections/Hero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import services from "@/data/services.json";

export default function SoinsVisagePage() {
  const visageServices = services.filter(
    (service) => service.category === "Soins du Visage"
  );

  return (
    <div className="bg-palace-ivory">
      <Hero
        title="Soins du Visage"
        subtitle="Excellence & Précision"
        description="Des protocoles sur-mesure pour révéler l'éclat naturel de votre peau"
        ctaText="Réserver votre soin"
        ctaHref="/reservation"
        showVideo={true}
        backgroundVideo="/videos/soins-visage.mov"
      />

      <section className="py-24">
        <div className="container-palace">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visageServices.map((service, index) => (
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
