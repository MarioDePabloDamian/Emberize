import type { Metadata } from "next";
import Script from "next/script";
import { Lora, DM_Sans } from "next/font/google";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://emberize.es";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Emberize — IA y SEO para Estudios de Pilates",
  description:
    "Agencia de automatización con IA especializada en estudios de pilates. Chatbots, agentes de voz, landing pages, SEO local y posicionamiento en buscadores con IA (GEO/AEO) que llenan tus clases.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Emberize — IA y SEO para Estudios de Pilates",
    description:
      "Automatiza la captación y gestión de alumnos de tu estudio de pilates con IA: chatbots, voz, landing pages, SEO local y GEO/AEO.",
    url: siteUrl,
    siteName: "Emberize",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/logo.png", alt: "Emberize" }],
  },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Emberize",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Agencia de automatización con IA, SEO local y optimización para buscadores con IA (GEO/AEO) especializada en estudios de pilates.",
  areaServed: "ES",
  knowsAbout: [
    "Automatización con IA para estudios de pilates",
    "Chatbots y agentes de voz",
    "Landing pages de captación",
    "SEO local",
    "GEO (Generative Engine Optimization)",
    "AEO (Answer Engine Optimization)",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <Script id="hash-nav" strategy="beforeInteractive">
          {`(function(){try{history.scrollRestoration="manual"}catch(e){}function s(){var h=location.hash;if(!h)return;var e=document.querySelector(h);if(!e)return;var t=e.getBoundingClientRect().top+scrollY-88;scrollTo({top:t,behavior:"instant"})}addEventListener("hashchange",s);function r(){s();setTimeout(s,0);setTimeout(s,100);setTimeout(s,300)}addEventListener("DOMContentLoaded",r);addEventListener("load",r)})();`}
        </Script>
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
