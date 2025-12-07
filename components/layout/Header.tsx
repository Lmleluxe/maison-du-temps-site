"use client";

import { Link, usePathname, useRouter } from "@/i18n/routing";
import { Menu, X, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

const navigation = [
  { 
    name: "services", 
    href: "/soins",
    submenu: [
      { name: "face", href: "/soins/visage" },
      { name: "body", href: "/soins/corps" }
    ]
  },
  { name: "training", href: "/formations" },
  { name: "about", href: "/maison" },
  { name: "brands", href: "/marques" },
  { name: "prices", href: "/tarifs" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState<string | null>(null);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Navigation");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setLanguageMenuOpen(false);
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-shadow duration-300",
        scrolled && "shadow-lg"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Section supérieure avec logo */}
      <div className="bg-palace-ivory py-3 md:py-6 border-b border-palace-anthracite/5">
        <div className="container-palace relative">
          {/* Sélecteur de langue à gauche */}
          <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2">
            <div className="relative">
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded border border-palace-anthracite/20 hover:border-palace-gold transition-all bg-white/50 hover:bg-white"
              >
                <Globe className="h-4 w-4 text-palace-anthracite/60" />
                <span className="text-sm font-medium text-palace-blue-deep uppercase">
                  {locale}
                </span>
                <svg 
                  className={cn("h-4 w-4 text-palace-anthracite/60 transition-transform", languageMenuOpen && "rotate-180")} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <AnimatePresence>
                {languageMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-palace-anthracite/10 overflow-hidden z-50"
                  >
                    <button
                      onClick={() => changeLanguage('fr')}
                      className={cn(
                        "w-full px-4 py-2.5 text-left text-sm font-medium transition-colors flex items-center justify-between",
                        locale === 'fr'
                          ? "bg-palace-blue-deep text-white"
                          : "text-palace-anthracite hover:bg-palace-gold/10"
                      )}
                    >
                      <span>Français</span>
                      {locale === 'fr' && <span className="text-xs">✓</span>}
                    </button>
                    <button
                      onClick={() => changeLanguage('en')}
                      className={cn(
                        "w-full px-4 py-2.5 text-left text-sm font-medium transition-colors flex items-center justify-between",
                        locale === 'en'
                          ? "bg-palace-blue-deep text-white"
                          : "text-palace-anthracite hover:bg-palace-gold/10"
                      )}
                    >
                      <span>English</span>
                      {locale === 'en' && <span className="text-xs">✓</span>}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Logo centré */}
          <motion.div
            className="flex justify-center pr-12 lg:pr-0"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="group">
              <div className="flex items-center gap-2">
                <span className="inline-block w-1 h-10 md:h-12 bg-palace-gold" />
                <div className="flex flex-col items-center">
                  <span className="text-xl md:text-3xl font-heading font-semibold text-palace-blue-deep group-hover:text-palace-green-pine transition-colors duration-300 leading-none">
                    MAISON DU TEMPS
                  </span>
                  <span className="text-[10px] md:text-sm font-heading font-light text-palace-blue-deep/70 group-hover:text-palace-green-pine transition-colors duration-300 tracking-widest mt-0.5">
                    GENÈVE
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
          
          {/* Bouton Réserver à droite */}
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2">
            <Link href="/reservation">
              <button className="flex items-center gap-2 px-4 py-2 rounded border border-palace-anthracite/20 hover:border-palace-gold transition-all bg-white/50 hover:bg-white">
                <span className="text-sm font-medium text-palace-blue-deep uppercase tracking-wide">
                  {t("book")}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Menu mobile toggle */}
      <div className="flex lg:hidden absolute right-2 top-1/2 -translate-y-1/2">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-palace-blue-deep hover:bg-palace-gold/10 transition-colors border border-palace-anthracite/20"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Ouvrir le menu"
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-5 w-5" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-5 w-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Sous-menu de navigation avec fond foncé */}
      <nav
        className="hidden lg:block bg-palace-blue-deep shadow-lg"
        aria-label="Navigation principale"
      >
        <div className="container-palace">
          <div className="flex items-center justify-center gap-x-1 py-1">
            {navigation.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.3 }}
                className="relative"
                onMouseEnter={() => item.submenu && setSubmenuOpen(item.name)}
                onMouseLeave={() => setSubmenuOpen(null)}
              >
                {item.submenu ? (
                  <div>
                    <button
                      className="relative px-5 py-3 text-sm font-medium text-white/90 hover:text-white hover:bg-palace-green-pine/20 transition-all duration-300 uppercase tracking-wide flex items-center gap-1"
                    >
                      {t(item.name)}
                      <svg 
                        className={cn("h-4 w-4 transition-transform", submenuOpen === item.name && "rotate-180")} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {submenuOpen === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-palace-anthracite/10 overflow-hidden z-50"
                        >
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className="block px-4 py-3 text-sm font-medium text-palace-anthracite hover:bg-palace-gold/10 hover:text-palace-blue-deep transition-colors"
                            >
                              {t(subitem.name)}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="relative px-5 py-3 text-sm font-medium text-white/90 hover:text-white hover:bg-palace-green-pine/20 transition-all duration-300 block uppercase tracking-wide"
                  >
                    {t(item.name)}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-palace-ivory/95 backdrop-blur-xl border-t border-palace-gold/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-1 px-4 pb-6 pt-4">
              {navigation.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => setSubmenuOpen(submenuOpen === item.name ? null : item.name)}
                        className="w-full flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-palace-anthracite hover:bg-palace-gold/10 hover:text-palace-blue-deep transition-all"
                      >
                        <span>{t(item.name)}</span>
                        <svg 
                          className={cn("h-4 w-4 transition-transform", submenuOpen === item.name && "rotate-180")} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {submenuOpen === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 mt-1 space-y-1"
                          >
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.name}
                                href={subitem.href}
                                className="block rounded-lg px-4 py-2.5 text-sm font-medium text-palace-anthracite/80 hover:bg-palace-gold/10 hover:text-palace-blue-deep transition-all"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {t(subitem.name)}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block rounded-lg px-4 py-3 text-base font-medium text-palace-anthracite hover:bg-palace-gold/10 hover:text-palace-blue-deep transition-all"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t(item.name)}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <Link href="/reservation" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full mt-4">{t("book")}</Button>
                </Link>
              </motion.div>
              
              {/* Sélecteur de langue mobile */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="mt-6 pt-4 border-t border-palace-anthracite/10"
              >
                <div className="flex items-center gap-2 mb-2 px-4">
                  <Globe className="h-4 w-4 text-palace-anthracite/60" />
                  <span className="text-xs font-medium text-palace-anthracite/70 uppercase tracking-wide">Langue / Language</span>
                </div>
                <div className="space-y-1">
                  <button
                    onClick={() => {
                      changeLanguage('fr');
                      setMobileMenuOpen(false);
                    }}
                    className={cn(
                      "w-full px-4 py-2.5 text-left text-sm font-medium transition-all rounded-lg mx-2 flex items-center justify-between",
                      locale === 'fr'
                        ? "bg-palace-blue-deep text-white"
                        : "text-palace-anthracite hover:bg-palace-gold/10"
                    )}
                  >
                    <span>Français</span>
                    {locale === 'fr' && <span className="text-xs">✓</span>}
                  </button>
                  <button
                    onClick={() => {
                      changeLanguage('en');
                      setMobileMenuOpen(false);
                    }}
                    className={cn(
                      "w-full px-4 py-2.5 text-left text-sm font-medium transition-all rounded-lg mx-2 flex items-center justify-between",
                      locale === 'en'
                        ? "bg-palace-blue-deep text-white"
                        : "text-palace-anthracite hover:bg-palace-gold/10"
                    )}
                  >
                    <span>English</span>
                    {locale === 'en' && <span className="text-xs">✓</span>}
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
