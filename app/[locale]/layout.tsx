import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Playfair_Display } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import IntroPage from "@/components/ui/IntroPage";
import { routing } from '@/i18n/routing';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maison du Temps — L'art du soin à Genève",
  description: "Des rituels d'exception, exécutés avec la précision suisse.",
  keywords: ["spa", "beauté", "bien-être", "Genève", "soins", "massages", "institut"],
  openGraph: {
    title: "Maison du Temps — L'art du soin à Genève",
    description: "Des rituels d'exception, exécutés avec la précision suisse.",
    type: "website",
    locale: "fr_CH",
    siteName: "Maison du Temps",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${cormorant.variable} ${playfair.variable}`}>
      <body>
        <IntroPage />
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          <main className="pt-32 md:pt-36">{children}</main>
          <Footer />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
