import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "./site-config";
import { languageAlternates } from "./routes";

export function localizedMetadata(
  locale: "en" | "fr",
  enPath: string,
  frPath: string,
  title: string,
  description: string,
): Metadata {
  const currentPath = locale === "en" ? enPath : frPath;
  return {
    title,
    description,
    keywords: [
      "pharmacy management software",
      "pharmacy software",
      "pharmacy stock management",
      "pharmacy POS system",
      "medicine inventory management",
      "pharmacy finance software",
      "multi-site pharmacy software",
    ],
    alternates: {
      canonical: absoluteUrl(currentPath),
      ...languageAlternates(absoluteUrl(enPath), absoluteUrl(frPath)),
    },
    robots: { index: siteConfig.indexable, follow: true },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title,
      description,
      url: absoluteUrl(currentPath),
      locale: locale === "en" ? "en_US" : "fr_FR",
      images: [{
        url: absoluteUrl("/assets/screenshots/emmapro-pharma-medicine-governance.png"),
        width: 1558,
        height: 895,
        alt: locale === "en" ? "Reviewed EMMAPRO PHARMA medicine governance interface" : "Interface vérifiée de gouvernance des médicaments EMMAPRO PHARMA",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{
        url: absoluteUrl("/assets/screenshots/emmapro-pharma-medicine-governance.png"),
        width: 1558,
        height: 895,
        alt: locale === "en" ? "EMMAPRO PHARMA medicine governance interface" : "Interface de gouvernance des médicaments EMMAPRO PHARMA",
      }],
    },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "EMMAPRO Tech",
  brand: "EMMAPRO PHARMA",
  url: siteConfig.siteUrl,
  logo: absoluteUrl("/favicon.svg"),
  email: siteConfig.contactEmail,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: siteConfig.contactEmail,
    telephone: `+${siteConfig.contactWhatsapp.replace(/\D/g, "")}`,
    availableLanguage: ["English", "French"],
  },
  ...(siteConfig.socialLinks.length > 0 ? { sameAs: siteConfig.socialLinks.map((link) => link.url) } : {}),
};

export const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "EMMAPRO PHARMA",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Windows",
  description: "Pharmacy management, inventory intelligence and business control platform.",
  url: siteConfig.siteUrl,
  image: absoluteUrl("/assets/screenshots/emmapro-pharma-medicine-governance.png"),
  featureList: [
    "Pharmacy operations and medicine governance",
    "Batch-aware stock and procurement management",
    "Dispensing, finance and management reporting",
    "Multi-site synchronization by edition",
    "Web and remote access with Ultra",
  ],
};

export function videoObjectSchema(locale: "en" | "fr") {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: locale === "en"
      ? "EMMAPRO PHARMA — 60-second platform overview"
      : "EMMAPRO PHARMA — présentation de la plateforme en 60 secondes",
    description: locale === "en"
      ? "A 60-second introduction to the EMMAPRO PHARMA pharmacy-management platform."
      : "Une présentation de 60 secondes de la plateforme de gestion de pharmacie EMMAPRO PHARMA.",
    inLanguage: locale,
    duration: "PT1M",
    thumbnailUrl: absoluteUrl("/assets/screenshots/emmapro-pharma-medicine-governance.png"),
    contentUrl: absoluteUrl("/assets/video/EMMAPRO_PHARMA_publicite_v2_60s_720p.mp4"),
    publisher: {
      "@type": "Organization",
      name: "EMMAPRO Tech",
      url: siteConfig.siteUrl,
    },
  };
}
