import type { Metadata } from "next";
import { Lora, DM_Sans } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import GlobalVortex from "@/components/GlobalVortex";
import {
  siteDescription,
  siteKeywords,
  siteName,
  siteTitle,
  siteUrl,
} from "@/lib/site";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: siteKeywords,
  alternates: {
    canonical: "/",
    types: {
      "text/plain": [{ url: "/llms.txt", title: "Emberize para LLMs" }],
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: siteTitle,
    description:
      "Landing pages, SEO, GEO/AEO y asistentes de IA (texto y voz) para captar consultas en tu estudio de pilates.",
    url: siteUrl,
    siteName,
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Emberize — IA y SEO para estudios de pilates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/logo.png"],
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${lora.variable} ${dmSans.variable} antialiased scroll-smooth scroll-pt-22 scrollbar-none bg-night`}
    >
      <body className="bg-night text-ink font-sans scrollbar-none selection:bg-flame selection:text-white">
        <GlobalVortex />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
