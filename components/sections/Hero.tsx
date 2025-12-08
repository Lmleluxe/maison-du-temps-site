"use client";

import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  children?: ReactNode;
  id?: string; // optionnel si tu veux linker l’ancre plus tard
}

export function Hero({
  title,
  subtitle,
  description,
  className,
  children,
  id,
}: HeroProps) {
  return (
    <section
      id={id}
      role="banner"
      aria-labelledby="hero-title"
      className={cn(
        "relative min-h-[70vh] w-full overflow-hidden bg-black text-palace-ivory",
        className
      )}
    >
      {/* VIDÉO DE FOND – purement décorative */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          className="h-full w-full object-cover"
        >
          <source src="/videos/video-mainpage.webm" type="video/webm" />
          <source src="/videos/video-mainpage.mp4" type="video/mp4" />
        </video>

        {/* Couche de dégradé pour lisibilité du texte */}
        <div className="absolute inset-0 bg-black/55 md:bg-black/40" />
      </div>

      {/* CONTENU TEXTE */}
      <div className="container-palace relative z-10 flex min-h-[70vh] flex-col justify-center py-20 md:py-32">
        <div className="max-w-xl md:max-w-2xl">
          {subtitle && (
            <p className="mb-4 text-xs md:text-sm font-medium uppercase tracking-[0.25em] text-palace-ivory/70">
              {subtitle}
            </p>
          )}

          <h1
            id="hero-title"
            className="mb-6 font-heading text-3xl leading-tight md:text-6xl md:leading-tight"
          >
            {title}
          </h1>

          {description && (
            <p className="mb-8 max-w-xl text-sm leading-relaxed text-palace-ivory/80 md:text-lg">
              {description}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <Link href="/reservation">
              <Button
                size="lg"
                variant="secondary"
                className="min-w-[210px]"
              >
                Réserver votre moment
              </Button>
            </Link>

            <Link href="/maison">
              <Button
                size="lg"
                variant="outline"
                className="border-palace-ivory/60 text-palace-ivory hover:bg-palace-ivory hover:text-palace-blue-deep"
              >
                Découvrir la Maison du Temps
              </Button>
            </Link>
          </div>
        </div>

        {children && (
          <div className="mt-10 md:mt-16">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
