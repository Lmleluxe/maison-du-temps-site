"use client";

import { Link } from "@/i18n/routing";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface ServiceCardProps {
  slug: string;
  title: string;
  category: string;
  summary: string;
  durations: number[];
  priceFrom: number;
  image?: string;
  index?: number;
}

export function ServiceCard({
  slug,
  title,
  category,
  summary,
  durations,
  priceFrom,
  image,
  index = 0,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="h-full flex flex-col hover:shadow-2xl transition-all duration-500 group border-palace-anthracite/10 hover:border-palace-gold/30 bg-white/50 backdrop-blur-sm overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-palace-gold/0 via-palace-gold/0 to-palace-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-palace-gold/0 via-palace-gold to-palace-gold/0"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        <CardHeader className="relative z-10">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-xs md:text-sm text-palace-green-pine uppercase tracking-[0.2em] font-medium">
              <Sparkles className="h-3 w-3" />
              {category}
            </div>
            <motion.div
              animate={{ rotate: isHovered ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="h-4 w-4 text-palace-gold" />
            </motion.div>
          </div>
          
          <CardTitle className="text-xl md:text-2xl text-palace-blue-deep group-hover:text-palace-green-pine transition-colors duration-300 leading-tight">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-grow relative z-10">
          <p className="text-palace-anthracite/70 leading-relaxed mb-6 text-sm md:text-base">
            {summary}
          </p>

          <div className="flex items-center gap-2 text-sm text-palace-anthracite/60 bg-palace-ivory/50 rounded-full px-4 py-2 w-fit">
            <Clock className="h-4 w-4 text-palace-gold" />
            <span className="font-medium">{durations.join(" / ")} min</span>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between items-center border-t border-palace-anthracite/5 pt-6 relative z-10">
          <div>
            <span className="text-xs text-palace-anthracite/60 uppercase tracking-wider block mb-1">
              À partir de
            </span>
            <div className="text-2xl md:text-3xl font-heading text-palace-blue-deep flex items-baseline gap-1">
              <span>CHF</span>
              <motion.span
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.3 }}
              >
                {priceFrom}
              </motion.span>
            </div>
          </div>

          <Link href={`/soins/${slug}`}>
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 group-hover:bg-palace-gold/10 group-hover:text-palace-blue-deep transition-all duration-300"
            >
              Découvrir
              <motion.div
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
