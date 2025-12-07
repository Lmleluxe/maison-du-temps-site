"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useRef, useState } from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  city?: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  showVideo?: boolean;
}

export function Hero({
  title,
  subtitle,
  city,
  description,
  ctaText = "Réserver votre moment",
  ctaHref = "/reservation",
  backgroundImage,
  backgroundVideo = "/videos/background-hero.mov",
  showVideo = true,
}: HeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Vidéo en arrière-plan (optionnelle) */}
      {showVideo && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          {/* Overlay pour assurer la lisibilité du texte */}
          <div className="absolute inset-0 bg-palace-ivory/60 backdrop-blur-[2px]" />
        </div>
      )}
      {!showVideo && (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-palace-ivory via-white to-palace-ivory" />
      )}

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-palace-gold/5 rounded-full blur-3xl"
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
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-palace-green-pine/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="container-palace relative z-10 text-center px-4 py-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {subtitle && (
            <motion.div
              className="flex items-center justify-center mb-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="h-px w-12 bg-palace-gold" />
              <p className="text-palace-green-pine text-xs md:text-sm uppercase tracking-[0.3em] mx-4 font-medium">
                {subtitle}
              </p>
              <div className="h-px w-12 bg-palace-gold" />
            </motion.div>
          )}

          <div className="mb-12">
            {title.split(". ").map((word, i) => {
              const [isHovered, setIsHovered] = useState(false);
              
              return (
                <motion.div
                  key={i}
                  className="overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.8 }}
                >
                  <motion.h1
                    className="text-4xl md:text-6xl lg:text-7xl mb-2 leading-[1.1] uppercase font-playfair font-semibold relative inline-block cursor-default"
                    initial={{ 
                      y: 120, 
                      opacity: 0,
                      scale: 0.8,
                      rotateX: -25,
                      filter: "blur(10px)"
                    }}
                    animate={{ 
                      y: 0, 
                      opacity: 1,
                      scale: 1,
                      rotateX: 0,
                      filter: "blur(0px)"
                    }}
                    transition={{ 
                      delay: 0.4 + i * 0.15, 
                      duration: 1,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{ perspective: "1000px" }}
                  >
                    <motion.span
                      className="relative z-10"
                      animate={{
                        color: isHovered ? "#C9A961" : "#1A2332"
                      }}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut"
                      }}
                    >
                      {word.endsWith(".") ? word : word + "."}
                    </motion.span>
                    
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-palace-gold/10 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: isHovered ? "100%" : "-100%" }}
                      transition={{
                        duration: 0.8,
                        ease: "easeInOut"
                      }}
                      style={{ pointerEvents: "none" }}
                    />
                  </motion.h1>
                </motion.div>
              );
            })}
            {city && (
              <motion.p
                className="text-xs md:text-sm font-heading font-light text-palace-blue-deep/70 tracking-widest mt-2 uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                {city}
              </motion.p>
            )}
          </div>

          <motion.div
            className="h-1 w-24 bg-palace-gold mx-auto mb-16"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 96, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href={ctaHref}>
              <Button
                size="lg"
                className="text-base md:text-lg px-8 md:px-12 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {ctaText}
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut",
            }}
            className="w-8 h-12 border-2 border-palace-gold/40 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-white/20"
          >
            <motion.div
              animate={{ y: [0, 16, 0], opacity: [0.5, 1, 0.5] }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 bg-palace-gold rounded-full shadow-lg"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
