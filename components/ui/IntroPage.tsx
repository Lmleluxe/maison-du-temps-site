"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function IntroPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");

    if (!hasSeenIntro) {
      setIsVisible(true);
      sessionStorage.setItem("hasSeenIntro", "true");
      
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white overflow-hidden"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          {/* Effet de glow doré en arrière-plan */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.15, 0.15, 0] }}
            transition={{ 
              duration: 3.5, 
              times: [0, 0.3, 0.7, 1],
              ease: "easeInOut" 
            }}
          >
            <div className="w-96 h-96 bg-gradient-radial from-palace-gold/40 via-palace-gold/10 to-transparent rounded-full blur-3xl" />
          </motion.div>

          {/* Logo principal avec animations */}
          <div className="relative flex items-center justify-center z-10">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ 
                scale: [0.85, 1.02, 1],
                opacity: [0, 1, 1, 1]
              }}
              transition={{
                duration: 2.5,
                times: [0, 0.5, 0.7, 1],
                ease: [0.34, 1.56, 0.64, 1]
              }}
              className="relative"
            >
              {/* Cercles concentriques animés */}
              <motion.div
                className="absolute inset-0 -m-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: [0, 0.3, 0.3, 0],
                  scale: [0.9, 1.1, 1.2, 1.3]
                }}
                transition={{
                  duration: 3,
                  times: [0, 0.2, 0.7, 1],
                  ease: "easeOut"
                }}
              >
                <div className="w-full h-full border border-palace-gold/20 rounded-full" />
              </motion.div>

              <motion.div
                className="absolute inset-0 -m-12"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ 
                  opacity: [0, 0.2, 0.2, 0],
                  scale: [0.85, 1.15, 1.25, 1.35]
                }}
                transition={{
                  duration: 3.2,
                  delay: 0.2,
                  times: [0, 0.2, 0.7, 1],
                  ease: "easeOut"
                }}
              >
                <div className="w-full h-full border border-palace-gold/15 rounded-full" />
              </motion.div>

              {/* Logo avec effet de luminosité */}
              <motion.div
                initial={{ filter: "brightness(1)" }}
                animate={{ 
                  filter: [
                    "brightness(1)",
                    "brightness(1.05)",
                    "brightness(1.02)",
                    "brightness(1)"
                  ]
                }}
                transition={{
                  duration: 2.5,
                  times: [0, 0.4, 0.7, 1],
                  ease: "easeInOut"
                }}
              >
                <Image
                  src="/images/logo-intro.png"
                  alt="Maison du Temps"
                  width={500}
                  height={500}
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
                  priority
                />
              </motion.div>

              {/* Particules dorées subtiles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-palace-gold/40 rounded-full"
                  style={{
                    top: `${20 + i * 10}%`,
                    left: `${15 + i * 12}%`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 0.6, 0],
                    scale: [0, 1.5, 0],
                    y: [-20, 20, 40]
                  }}
                  transition={{
                    duration: 2,
                    delay: 0.5 + i * 0.15,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Texte élégant sous le logo */}
          <motion.div
            className="absolute bottom-20 left-0 right-0 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -10] }}
            transition={{
              duration: 3.5,
              times: [0, 0.3, 0.7, 1],
              ease: "easeInOut"
            }}
          >
            <p className="text-palace-anthracite/40 text-xs uppercase tracking-[0.3em] font-light">
              Maison du Temps
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
