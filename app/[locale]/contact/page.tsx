"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message envoyé ! Nous vous répondrons dans les plus brefs délais.");
  };

  return (
    <div className="min-h-screen bg-palace-ivory py-24">
      <div className="container-palace">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading text-palace-blue-deep mb-6">
            Nous Contacter
          </h1>
          <p className="text-xl text-palace-anthracite/70">
            Notre équipe est à votre écoute
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-heading text-palace-blue-deep mb-8">
              Informations de Contact
            </h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-palace-green-pine flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-lg text-palace-blue-deep mb-1">Adresse</h3>
                    <p className="text-palace-anthracite/70">
                      Rue du XXXI décembre 52<br />
                      1201 Genève, Suisse
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <Phone className="h-6 w-6 text-palace-green-pine flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-lg text-palace-blue-deep mb-1">Téléphone</h3>
                    <p className="text-palace-anthracite/70">+41 22 XXX XX XX</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <Mail className="h-6 w-6 text-palace-green-pine flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-lg text-palace-blue-deep mb-1">Email</h3>
                    <p className="text-palace-anthracite/70">contact@maisondutemps.ch</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <Clock className="h-6 w-6 text-palace-green-pine flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-lg text-palace-blue-deep mb-1">Horaires</h3>
                    <p className="text-palace-anthracite/70">
                      Lundi – Samedi<br />
                      10:00 – 19:00
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 bg-palace-anthracite/5 rounded-2xl h-64 flex items-center justify-center">
              <p className="text-palace-anthracite/40">Plan Google Maps</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-heading text-palace-blue-deep mb-8">
              Envoyez-nous un Message
            </h2>

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
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

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-palace-anthracite mb-2">
                      Sujet *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-palace-anthracite/20 focus:border-palace-blue-deep focus:outline-none focus:ring-2 focus:ring-palace-blue-deep/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-palace-anthracite mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-palace-anthracite/20 focus:border-palace-blue-deep focus:outline-none focus:ring-2 focus:ring-palace-blue-deep/20 resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
