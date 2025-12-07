"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex justify-center mb-4">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-palace-green-pine text-palace-green-pine" />
            ))}
          </div>
          
          <blockquote className="text-xl md:text-2xl font-light text-palace-anthracite/90 mb-8 leading-relaxed italic">
            "{testimonials[currentIndex].text}"
          </blockquote>
          
          <div>
            <p className="font-heading text-lg text-palace-blue-deep">
              {testimonials[currentIndex].name}
            </p>
            <p className="text-sm text-palace-anthracite/60">
              {testimonials[currentIndex].location} · {testimonials[currentIndex].service}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="flex justify-center gap-4 mt-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={previous}
          aria-label="Témoignage précédent"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-8 bg-palace-blue-deep"
                  : "w-2 bg-palace-anthracite/20"
              }`}
              aria-label={`Aller au témoignage ${index + 1}`}
            />
          ))}
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={next}
          aria-label="Témoignage suivant"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
