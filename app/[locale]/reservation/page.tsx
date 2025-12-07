"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import servicesData from "@/data/services.json";

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Demande de réservation envoyée ! Nous vous contacterons sous 24h.");
  };

  return (
    <div className="min-h-screen bg-palace-ivory py-24">
      <div className="container-palace max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading text-palace-blue-deep mb-6">
            Réserver votre Moment
          </h1>
          <p className="text-xl text-palace-anthracite/70">
            Complétez le formulaire ci-dessous et nous vous contacterons sous 24h
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-palace-blue-deep">Demande de Réservation</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-palace-anthracite mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-palace-anthracite/20 focus:border-palace-blue-deep focus:outline-none focus:ring-2 focus:ring-palace-blue-deep/20"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-palace-anthracite mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-palace-anthracite/20 focus:border-palace-blue-deep focus:outline-none focus:ring-2 focus:ring-palace-blue-deep/20"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-palace-anthracite mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-palace-anthracite/20 focus:border-palace-blue-deep focus:outline-none focus:ring-2 focus:ring-palace-blue-deep/20"
                  />
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-palace-anthracite mb-2">
                    Date souhaitée *
                  </label>
                  <input
                    type="date"
                    id="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-palace-anthracite/20 focus:border-palace-blue-deep focus:outline-none focus:ring-2 focus:ring-palace-blue-deep/20"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-palace-anthracite mb-2">
                  Soin souhaité *
                </label>
                <select
                  id="service"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-palace-anthracite/20 focus:border-palace-blue-deep focus:outline-none focus:ring-2 focus:ring-palace-blue-deep/20"
                >
                  <option value="">Sélectionnez un soin</option>
                  {servicesData.map((service) => (
                    <option key={service.slug} value={service.slug}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-palace-anthracite mb-2">
                  Message (optionnel)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-palace-anthracite/20 focus:border-palace-blue-deep focus:outline-none focus:ring-2 focus:ring-palace-blue-deep/20 resize-none"
                  placeholder="Informations complémentaires..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Envoyer ma demande
              </Button>

              <p className="text-sm text-palace-anthracite/60 text-center">
                Nous vous répondrons dans les 24 heures pour confirmer votre rendez-vous
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
