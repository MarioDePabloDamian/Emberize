import { faqs } from "@/lib/content/faq";
import { processSteps } from "@/lib/content/process";
import { servicesContent } from "@/lib/content/services";
import { legalController } from "@/lib/legal/contact";
import { siteDescription, siteName, siteTitle, siteUrl } from "@/lib/site";

const orgId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;
const webpageId = `${siteUrl}/#webpage`;
const serviceId = `${siteUrl}/#professional-service`;
const faqId = `${siteUrl}/#faq`;

export function buildJsonLdGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: siteName,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/logo.png`,
        },
        description: siteDescription,
        areaServed: {
          "@type": "Country",
          name: "España",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: legalController.email,
          url: `${siteUrl}/#contacto`,
          availableLanguage: ["es"],
          areaServed: "ES",
        },
        knowsAbout: [
          "Automatización con IA para estudios de pilates",
          "Chatbots y agentes de voz",
          "Landing pages de captación",
          "SEO local",
          "GEO (Generative Engine Optimization)",
          "AEO (Answer Engine Optimization)",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": serviceId,
        name: siteName,
        url: siteUrl,
        provider: { "@id": orgId },
        serviceType: "Automatización con IA y marketing digital para estudios de pilates",
        areaServed: "ES",
        description: siteDescription,
        knowsAbout: [
          "Automatización con IA para estudios de pilates",
          "Chatbots y agentes de voz",
          "Landing pages de captación",
          "SEO local",
          "GEO (Generative Engine Optimization)",
          "AEO (Answer Engine Optimization)",
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: siteName,
        description: siteDescription,
        inLanguage: "es-ES",
        publisher: { "@id": orgId },
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: siteUrl,
        name: siteTitle,
        description: siteDescription,
        isPartOf: { "@id": websiteId },
        about: { "@id": orgId },
        inLanguage: "es-ES",
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        url: `${siteUrl}/#faq`,
        isPartOf: { "@id": webpageId },
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
      {
        "@type": "ItemList",
        name: "Servicios de Emberize para estudios de pilates",
        itemListElement: servicesContent.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Service",
            name: s.name,
            description: s.text,
            provider: { "@id": orgId },
            areaServed: "ES",
            serviceType: s.name,
          },
        })),
      },
      {
        "@type": "HowTo",
        name: "Método Emberize para hacer crecer un estudio de pilates",
        description:
          "Proceso de diagnóstico, diseño, implementación y optimización de automatización con IA y SEO para estudios de pilates.",
        step: processSteps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.title,
          text: s.text,
        })),
      },
    ],
  };
}
