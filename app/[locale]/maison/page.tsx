"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Heart, Users, Sparkles } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function MaisonPage() {
  const pageRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll();
  const heroTranslateY = useTransform(scrollYProgress, [0, 0.25], [0, -40]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.7]);

  return (
    <div ref={pageRef} className="bg-palace-ivory">
      {/* HERO EDITORIAL MAISON */}
      <motion.section
        style={{ y: heroTranslateY, opacity: heroOpacity }}
        className="w-full border-b border-palace-anthracite/10 bg-gradient-to-b from-palace-ivory via-white to-palace-ivory/60"
      >
        <div className="container-palace max-w-5xl mx-auto py-20 md:py-24 text-center relative">
          <motion.div
            className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-palace-gold/15 blur-3xl"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
          <motion.div
            className="pointer-events-none absolute -bottom-16 right-10 h-40 w-40 rounded-full bg-palace-green-pine/15 blur-3xl"
            initial={{ opacity: 0, x: 40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-5 text-xs md:text-sm font-medium uppercase tracking-[0.3em] text-palace-anthracite/60"
          >
            Notre Histoire
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className="mb-5 font-heading text-4xl md:text-5xl lg:text-6xl text-palace-blue-deep leading-tight"
          >
            Maison du Temps
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="mx-auto max-w-2xl text-base md:text-lg text-palace-anthracite/80"
          >
            Une quête d&apos;excellence au service de votre bien-être.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            className="mt-8 flex justify-center"
          >
            <Link href="/soins">
              <Button
                size="lg"
                variant="secondary"
                className="min-w-[210px]"
              >
                Découvrir nos soins
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
            className="mt-12 flex flex-col items-center gap-2 text-xs text-palace-anthracite/50"
          >
            <span>Faire défiler</span>
            <span className="inline-flex h-9 w-[1px] bg-gradient-to-b from-palace-anthracite/40 to-transparent" />
          </motion.div>
        </div>
      </motion.section>

      {/* 1. LA PHILOSOPHIE DU TEMPS */}
      <section className="py-24 md:py-28 bg-palace-ivory">
        <div className="container-palace max-w-4xl">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-5xl font-heading text-palace-blue-deep mb-10 text-center">
              La Philosophie du Temps
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <div className="prose prose-lg max-w-none text-palace-anthracite/80 prose-headings:text-palace-blue-deep">
              <p className="text-xl leading-relaxed mb-6">
                Maison du Temps est née d&apos;une passion pour l&apos;art du soin et la précision du service.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                Son essence s&apos;inspire des plus belles maisons du monde, des lieux discrets où chaque détail compte, et où l&apos;expérience devient un art maîtrisé.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                Nichée à Genève, à l&apos;abri des regards, Maison du Temps est un lieu confidentiel, pensé pour celles et ceux qui recherchent plus qu&apos;un soin : un moment suspendu, sur rendez-vous uniquement, dans une atmosphère calme et mesurée.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                Cette culture de la justesse et du service, fondée sur la rigueur, la précision et la sincérité du geste, se retrouve dans chaque expérience imaginée au sein de la Maison.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                Du massage aux soins visage, Maison du Temps allie profondeur, efficacité et ressenti.
              </p>
              <p className="text-xl leading-relaxed">
                Chaque détail a été pensé pour libérer les tensions, révéler la peau et offrir un instant rare, où l&apos;on retrouve enfin la valeur du temps.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. PORTRAIT DARLÈNE – VERSION LUXE, ÉPURÉE */}
      <section className="py-28 bg-gradient-to-b from-white via-palace-ivory/20 to-white relative overflow-hidden">
        {/* halos de fond */}
        <motion.div
          className="pointer-events-none absolute top-16 right-24 w-80 h-80 bg-palace-gold/20 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0.8, x: 40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-10 left-10 w-80 h-80 bg-palace-green-pine/20 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
        />

        <div className="container-palace max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            {/* Portrait, plus petit et plus clean */}
            <ScrollReveal direction="left" className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="relative flex justify-center"
              >
                <div className="relative max-w-sm w-full">
                  <div className="absolute -inset-4 border border-palace-gold/20 rounded-2xl" />
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-xl bg-palace-ivory">
                    <Image
                      src="/images/darlene-honneux.jpg"
                      alt="Darlène Honneux, Directrice"
                      fill
                      className="object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
                      sizes="(max-width: 1024px) 80vw, 28vw"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Texte, sans gros guillemets, traitement très éditorial */}
            <ScrollReveal
              direction="right"
              delay={0.1}
              className="lg:col-span-3 space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="space-y-3"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-palace-anthracite/60">
                  Darlène Honneux
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-palace-blue-deep leading-tight">
                  Directrice
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                className="space-y-6"
              >
                {/* ligne fine au-dessus de la citation */}
                <div className="h-px w-16 bg-palace-gold/60 mb-2" />

                <p className="text-xl md:text-2xl lg:text-3xl font-light text-palace-anthracite/90 leading-relaxed italic">
                  Le temps n&apos;est pas seulement ce qui passe, mais ce que
                  l&apos;on choisit de vivre.
                </p>

                <p className="text-lg md:text-xl text-palace-anthracite/80 leading-relaxed font-light pt-4 border-t border-palace-anthracite/10">
                  Le Temps Genève est né de cette conviction : offrir un espace
                  où chaque instant retrouve sa valeur, où la précision et
                  l&apos;émotion se rejoignent.
                </p>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. NOTRE ENGAGEMENT QUALITÉ */}
      <section className="py-24 bg-palace-blue-deep text-palace-ivory relative overflow-hidden">
        <motion.div
          className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-white/10 to-transparent opacity-30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="container-palace max-w-4xl text-center relative z-10">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-5xl font-heading mb-6">
              Notre Engagement Qualité
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-xl text-palace-ivory/80 leading-relaxed">
              Nous sélectionnons avec soin nos partenaires et nos produits.
              Chaque marque présente à la Maison du Temps répond à nos critères
              d&apos;excellence et partage nos valeurs de qualité,
              d&apos;efficacité et de respect.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. NOS VALEURS */}
      <section className="py-24 bg-white">
        <div className="container-palace">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-5xl font-heading text-palace-blue-deep mb-16 text-center">
              Nos Valeurs
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* 1. Excellence */}
            <ScrollReveal direction="up" className="flex justify-center">
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="text-center px-4 py-6 rounded-2xl border border-palace-anthracite/8 bg-palace-ivory/40 shadow-sm"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-palace-blue-deep/10 mb-6">
                  <Award className="h-8 w-8 text-palace-blue-deep" />
                </div>
                <h3 className="text-xl font-heading mb-3 text-palace-blue-deep">
                  Excellence
                </h3>
                <p className="text-palace-anthracite/70 text-sm md:text-base">
                  Une quête permanente de la perfection dans chaque geste.
                </p>
              </motion.div>
            </ScrollReveal>

            {/* 2. Innovation */}
            <ScrollReveal direction="up" delay={0.05} className="flex justify-center">
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="text-center px-4 py-6 rounded-2xl border border-palace-anthracite/8 bg-palace-ivory/40 shadow-sm"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-palace-blue-deep/10 mb-6">
                  <Sparkles className="h-8 w-8 text-palace-blue-deep" />
                </div>
                <h3 className="text-xl font-heading mb-3 text-palace-blue-deep">
                  Innovation
                </h3>
                <p className="text-palace-anthracite/70 text-sm md:text-base">
                  Les techniques les plus avancées au service de votre beauté.
                </p>
              </motion.div>
            </ScrollReveal>

            {/* 3. Expertise */}
            <ScrollReveal direction="up" delay={0.1} className="flex justify-center">
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="text-center px-4 py-6 rounded-2xl border border-palace-anthracite/8 bg-palace-ivory/40 shadow-sm"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-palace-green-pine/10 mb-6">
                  <Users className="h-8 w-8 text-palace-green-pine" />
                </div>
                <h3 className="text-xl font-heading mb-3 text-palace-blue-deep">
                  Expertise
                </h3>
                <p className="text-palace-anthracite/70 text-sm md:text-base">
                  Une équipe formée aux meilleures écoles internationales.
                </p>
              </motion.div>
            </ScrollReveal>

            {/* 4. Bienveillance */}
            <ScrollReveal direction="up" delay={0.15} className="flex justify-center">
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="text-center px-4 py-6 rounded-2xl border border-palace-anthracite/8 bg-palace-ivory/40 shadow-sm"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-palace-green-pine/10 mb-6">
                  <Heart className="h-8 w-8 text-palace-green-pine" />
                </div>
                <h3 className="text-xl font-heading mb-3 text-palace-blue-deep">
                  Bienveillance
                </h3>
                <p className="text-palace-anthracite/70 text-sm md:text-base">
                  Une écoute attentive et un accompagnement sur-mesure.
                </p>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
