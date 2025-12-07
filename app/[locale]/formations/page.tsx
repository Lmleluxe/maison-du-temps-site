"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { Clock, Award, CheckCircle, Sparkles } from "lucide-react";
import formationsData from "@/data/formations.json";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

export default function FormationsPage() {
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
            Formations Professionnelles
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
            Transmission d'excellence pour praticiennes et établissements haut de gamme
          </motion.p>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="container-palace">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            {formationsData.map((formation, index) => (
              <ScrollReveal key={formation.id} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full flex flex-col border-palace-anthracite/10 hover:border-palace-gold/30 transition-all duration-500 hover:shadow-2xl bg-white/80 backdrop-blur-sm overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-palace-gold/0 via-palace-gold/0 to-palace-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <motion.div
                      className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-palace-gold/0 via-palace-gold to-palace-gold/0"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.4 }}
                    />

                    <CardHeader className="relative z-10">
                      <CardTitle className="text-2xl text-palace-blue-deep group-hover:text-palace-green-pine transition-colors duration-300">
                        {formation.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm text-palace-anthracite/60 mt-4 pt-4 border-t border-palace-anthracite/5">
                        <div className="flex items-center gap-2 bg-palace-ivory/50 rounded-full px-3 py-1.5">
                          <Clock className="h-4 w-4 text-palace-gold" />
                          <span className="font-medium">{formation.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-palace-ivory/50 rounded-full px-3 py-1.5">
                          <Award className="h-4 w-4 text-palace-gold" />
                          <span className="font-medium">{formation.level}</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="flex-grow relative z-10">
                      <p className="text-palace-anthracite/70 mb-6 leading-relaxed">
                        {formation.summary}
                      </p>

                      <div className="bg-palace-ivory/30 rounded-xl p-4">
                        <h4 className="font-heading text-lg mb-3 text-palace-blue-deep flex items-center gap-2">
                          <div className="w-1 h-5 bg-palace-gold" />
                          Modules
                        </h4>
                        <ul className="space-y-2.5">
                          {formation.modules.map((module, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-palace-green-pine flex-shrink-0 mt-0.5" />
                              <span className="text-palace-anthracite/70">
                                {module}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>

                    <CardFooter className="flex flex-col items-start gap-4 border-t border-palace-anthracite/5 pt-6 relative z-10">
                      <div className="w-full">
                        <p className="text-xs uppercase tracking-wider text-palace-anthracite/60 mb-2">
                          À partir de
                        </p>
                        <p className="text-4xl font-heading text-palace-blue-deep flex items-baseline gap-2">
                          <span className="text-lg">CHF</span>
                          {formation.priceFrom}
                        </p>
                      </div>

                      {formation.certification && (
                        <div className="flex items-center gap-2 text-sm text-palace-green-pine bg-palace-green-pine/10 rounded-full px-4 py-2">
                          <Award className="h-4 w-4" />
                          Certification incluse
                        </div>
                      )}

                      <Link href="/contact" className="w-full">
                        <Button className="w-full group-hover:shadow-lg transition-all">
                          Demander des informations
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-palace-ivory via-white to-palace-ivory relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-palace-gold rounded-full blur-3xl" />
        </div>

        <ScrollReveal>
          <div className="container-palace text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-heading text-palace-blue-deep mb-6">
              Prochaines Sessions
            </h2>
            <div className="h-1 w-16 bg-palace-gold mx-auto mb-8" />
            <p className="text-lg text-palace-anthracite/70 mb-10 max-w-xl mx-auto">
              Contactez-nous pour réserver votre place et débuter votre parcours d'excellence
            </p>
            <Link href="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="shadow-xl hover:shadow-2xl transition-all">
                  Nous Contacter
                </Button>
              </motion.div>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
