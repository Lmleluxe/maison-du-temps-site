"use client";

import { Link } from "@/i18n/routing";
import { Instagram, Facebook, Mail, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative bg-palace-blue-deep text-palace-ivory overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-palace-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-palace-green-pine rounded-full blur-3xl" />
      </div>

      <div className="container-palace py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-16 bg-palace-gold" />
              <div className="flex flex-col items-center">
                <h3 className="text-2xl md:text-3xl font-heading leading-none">
                  MAISON DU TEMPS
                </h3>
                <span className="text-xs md:text-sm font-heading font-light text-palace-ivory/70 tracking-widest mt-1">
                  GENÈVE
                </span>
              </div>
            </div>
            <p className="text-palace-ivory/70 text-sm md:text-base leading-relaxed mb-6">
              Des rituels d'exception, exécutés avec la précision suisse au
              cœur de Genève.
            </p>
            <div className="h-px w-20 bg-palace-gold/50" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-heading text-lg md:text-xl mb-6 text-palace-gold">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Soins", href: "/soins" },
                { name: "Formations", href: "/formations" },
                { name: "La Maison", href: "/maison" },
                { name: "Marques", href: "/marques" },
                { name: "Tarifs", href: "/tarifs" },
              ].map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="text-palace-ivory/70 hover:text-palace-gold transition-colors text-sm md:text-base group inline-flex items-center gap-2"
                  >
                    <span className="w-0 h-px bg-palace-gold group-hover:w-4 transition-all duration-300" />
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-heading text-lg md:text-xl mb-6 text-palace-gold">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm md:text-base text-palace-ivory/70 hover:text-palace-ivory transition-colors group">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-1 text-palace-gold group-hover:scale-110 transition-transform" />
                <span>
                  Rue du XXXI décembre 52<br />
                  1201 Genève, Suisse
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base text-palace-ivory/70 hover:text-palace-ivory transition-colors group">
                <Phone className="h-5 w-5 flex-shrink-0 text-palace-gold group-hover:scale-110 transition-transform" />
                <a href="tel:+41221234567">+41 22 XXX XX XX</a>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base text-palace-ivory/70 hover:text-palace-ivory transition-colors group">
                <Mail className="h-5 w-5 flex-shrink-0 text-palace-gold group-hover:scale-110 transition-transform" />
                <a href="mailto:contact@maisondutemps.ch">
                  contact@maisondutemps.ch
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-heading text-lg md:text-xl mb-6 text-palace-gold">
              Horaires
            </h4>
            <div className="flex items-start gap-3 mb-8">
              <Clock className="h-5 w-5 flex-shrink-0 mt-1 text-palace-gold" />
              <div className="text-palace-ivory/70 text-sm md:text-base">
                <p className="font-medium text-palace-ivory mb-2">
                  Lundi – Samedi
                </p>
                <p>10:00 – 19:00</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <motion.a
                href="#"
                className="text-palace-ivory/70 hover:text-palace-gold transition-colors bg-palace-ivory/10 p-3 rounded-full hover:bg-palace-gold/20"
                aria-label="Instagram"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="text-palace-ivory/70 hover:text-palace-gold transition-colors bg-palace-ivory/10 p-3 rounded-full hover:bg-palace-gold/20"
                aria-label="Facebook"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 pt-8 border-t border-palace-ivory/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-palace-ivory/50">
            <p className="text-center md:text-left">
              &copy; {new Date().getFullYear()} Maison du Temps. Tous droits
              réservés.
            </p>
            <div className="flex gap-8">
              <Link
                href="/legal/mentions-legales"
                className="hover:text-palace-gold transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/legal/politique-confidentialite"
                className="hover:text-palace-gold transition-colors"
              >
                Confidentialité
              </Link>
              <Link href="/cgv" className="hover:text-palace-gold transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
