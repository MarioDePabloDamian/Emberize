import type { Metadata } from "next";
import Script from "next/script";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://emberize.es";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Emberize — IA para Escuelas de Artes Marciales",
  description:
    "Agencia de automatización con IA especializada en escuelas de artes marciales y deportes de contacto. Automatización, chatbots, landing pages y agentes de voz que llenan tu tatami.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Emberize — IA para Escuelas de Artes Marciales",
    description:
      "Automatiza la captación y gestión de alumnos de tu escuela con IA: chatbots, voz, landing pages y flujos automáticos.",
    url: siteUrl,
    siteName: "Emberize",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/logo.png", alt: "Emberize" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bebas.variable} ${dmSans.variable} h-full antialiased scroll-smooth scroll-pt-22 overflow-x-hidden scrollbar-none motion-reduce:scroll-auto`}
    >
      <body className="min-h-full flex flex-col bg-night text-ink font-sans overflow-x-hidden scrollbar-none selection:bg-flame selection:text-white">
        {children}
        <Script
          src="https://link.msgsndr.com/js/external-tracking.js"
          data-tracking-id="tk_15fc8c0b0a794e1e99062d7ab7604771"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
