import { siteUrl } from "@/lib/site";

export const legalController = {
  fullName: "Mario De Pablo Damián",
  email: "mariodepablo2005@gmail.com",
  siteName: "Emberize",
  siteUrl,
} as const;

export const legalLastUpdated = "10 de julio de 2026";

export const legalPages = [
  { slug: "privacidad", href: "/privacidad/", label: "Privacidad" },
  { slug: "aviso-legal", href: "/aviso-legal/", label: "Aviso legal" },
  { slug: "cookies", href: "/cookies/", label: "Cookies" },
] as const;

export type LegalPageSlug = (typeof legalPages)[number]["slug"];
