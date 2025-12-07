"use client";

import { useState } from "react";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { Button } from "@/components/ui/button";
import servicesData from "@/data/services.json";

const categories = ["Tous", "Soins du Visage", "Massages Signature", "Rituels Corps"];

export default function SoinsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredServices = selectedCategory === "Tous"
    ? servicesData
    : servicesData.filter((service) => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-palace-ivory py-24">
      <div className="container-palace">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading text-palace-blue-deep mb-6">
            Nos Soins
          </h1>
          <p className="text-xl text-palace-anthracite/70 max-w-2xl mx-auto">
            Découvrez notre sélection de rituels d'exception
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <ServiceCard key={service.slug} {...service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
