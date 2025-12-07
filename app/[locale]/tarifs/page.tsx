"use client";

import servicesData from "@/data/services.json";
import formationsData from "@/data/formations.json";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";
import { Sparkles, Gift, Calendar } from "lucide-react";

export default function TarifsPage() {
  const servicesByCategory = servicesData.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof servicesData>);

  return (
    <div className="min-h-screen bg-palace-ivory">
      <section className="relative py-32 bg-gradient-to-br from-palace-blue-deep via-palace-blue-deep to-palace-green-pine/20 text-palace-ivory overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-palace-gold rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container-palace text-center relative z-10">
          <motion.div
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="h-px w-12 bg-palace-gold" />
            <Sparkles className="h-5 w-5 mx-4 text-palace-gold" />
            <div className="h-px w-12 bg-palace-gold" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-heading mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nos Tarifs
          </motion.h1>

          <motion.div
            className="h-1 w-24 bg-palace-gold mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />

          <motion.p
            className="text-xl md:text-2xl text-palace-ivory/90 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Des prestations d'exception à des tarifs transparents
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-palace max-w-6xl">
          <div className="space-y-16">
            {Object.entries(servicesByCategory).map(([category, services], catIndex) => (
              <ScrollReveal key={category} delay={catIndex * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-palace-anthracite/10 hover:shadow-2xl transition-all duration-500">
                  <div className="bg-gradient-to-r from-palace-ivory via-white to-palace-ivory p-6 border-b border-palace-gold/20">
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-8 bg-palace-gold" />
                      <h2 className="text-3xl font-heading text-palace-blue-deep">
                        {category}
                      </h2>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-palace-ivory/50">
                        <tr>
                          <th className="text-left py-5 px-6 font-heading text-palace-blue-deep">
                            Soin
                          </th>
                          <th className="text-center py-5 px-6 font-heading text-palace-blue-deep">
                            Durée
                          </th>
                          <th className="text-right py-5 px-6 font-heading text-palace-blue-deep">
                            Prix
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {services.map((service, index) => (
                          <motion.tr
                            key={service.slug}
                            className="border-b border-palace-anthracite/5 last:border-0 hover:bg-palace-gold/5 transition-colors group"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                          >
                            <td className="py-5 px-6">
                              <Link
                                href={`/soins/${service.slug}`}
                                className="hover:text-palace-blue-deep transition-colors font-medium group-hover:text-palace-green-pine flex items-center gap-2"
                              >
                                <span className="w-0 h-px bg-palace-gold group-hover:w-3 transition-all duration-300" />
                                {service.title}
                              </Link>
                            </td>
                            <td className="text-center py-5 px-6 text-palace-anthracite/70">
                              <span className="bg-palace-ivory/50 rounded-full px-3 py-1 text-sm">
                                {service.durations.join(" / ")} min
                              </span>
                            </td>
                            <td className="text-right py-5 px-6 font-heading text-xl text-palace-blue-deep">
                              CHF {service.priceFrom}+
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={0.3}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-palace-anthracite/10 hover:shadow-2xl transition-all duration-500">
                <div className="bg-gradient-to-r from-palace-ivory via-white to-palace-ivory p-6 border-b border-palace-gold/20">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-palace-gold" />
                    <h2 className="text-3xl font-heading text-palace-blue-deep">
                      Formations Professionnelles
                    </h2>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-palace-ivory/50">
                      <tr>
                        <th className="text-left py-5 px-6 font-heading text-palace-blue-deep">
                          Formation
                        </th>
                        <th className="text-center py-5 px-6 font-heading text-palace-blue-deep">
                          Durée
                        </th>
                        <th className="text-right py-5 px-6 font-heading text-palace-blue-deep">
                          Prix
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {formationsData.map((formation, index) => (
                        <motion.tr
                          key={formation.id}
                          className="border-b border-palace-anthracite/5 last:border-0 hover:bg-palace-gold/5 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05, duration: 0.4 }}
                        >
                          <td className="py-5 px-6 font-medium">
                            {formation.title}
                          </td>
                          <td className="text-center py-5 px-6 text-palace-anthracite/70">
                            <span className="bg-palace-ivory/50 rounded-full px-3 py-1 text-sm">
                              {formation.duration}
                            </span>
                          </td>
                          <td className="text-right py-5 px-6 font-heading text-xl text-palace-blue-deep">
                            CHF {formation.priceFrom}
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-20 space-y-8">
              <div className="bg-gradient-to-br from-palace-blue-deep/5 via-palace-gold/5 to-palace-green-pine/5 rounded-2xl p-8 md:p-10 border border-palace-gold/20">
                <h3 className="text-2xl md:text-3xl font-heading text-palace-blue-deep mb-6 flex items-center gap-3">
                  <Gift className="h-7 w-7 text-palace-gold" />
                  Informations Tarifaires
                </h3>
                <ul className="text-palace-anthracite/70 space-y-3 text-base md:text-lg leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-palace-gold rounded-full mt-2 flex-shrink-0" />
                    Les prix indiqués sont en francs suisses (CHF) et incluent la TVA.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-palace-gold rounded-full mt-2 flex-shrink-0" />
                    Cartes cadeaux disponibles pour tous nos soins.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-palace-gold rounded-full mt-2 flex-shrink-0" />
                    Forfaits et abonnements personnalisés sur demande.
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <Link href="/reservation">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" className="shadow-xl hover:shadow-2xl transition-all">
                      <Calendar className="h-5 w-5 mr-2" />
                      Réserver votre soin
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
