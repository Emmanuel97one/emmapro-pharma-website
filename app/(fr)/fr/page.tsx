import type { Metadata } from "next";
import { HomePage } from "@/components/home";
import { SiteFrame } from "@/components/site-shell";
import { JsonLd } from "@/components/json-ld";
import { localizedMetadata, organizationSchema, softwareSchema } from "@/lib/seo";

export const metadata: Metadata = localizedMetadata(
  "fr",
  "/",
  "/fr/",
  "Logiciel de gestion de pharmacie pour le stock, la caisse, la finance et les multi-sites",
  "EMMAPRO PHARMA aide les pharmacies à piloter le stock, la dispensation, la facturation, la finance, le suivi des péremptions et les opérations multi-sites dans une plateforme connectée.",
);

export default function FrenchHome() {
  return (
    <SiteFrame locale="fr" alternateHref="/">
      <JsonLd value={organizationSchema} />
      <JsonLd value={softwareSchema} />
      <HomePage locale="fr" />
    </SiteFrame>
  );
}
