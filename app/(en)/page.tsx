import type { Metadata } from "next";
import { HomePage } from "@/components/home";
import { SiteFrame } from "@/components/site-shell";
import { JsonLd } from "@/components/json-ld";
import { localizedMetadata } from "@/lib/seo";
import { organizationSchema, softwareSchema } from "@/lib/seo";

export const metadata: Metadata = localizedMetadata(
  "en",
  "/",
  "/fr/",
  "Pharmacy Management Software for Stock, POS, Finance and Multi-Site Operations",
  "EMMAPRO PHARMA helps pharmacies manage stock, dispensing, billing, finance, expiry tracking and multi-site operations with one connected platform.",
);

export default function Home() {
  return (
    <SiteFrame locale="en" alternateHref="/fr/">
      <JsonLd value={organizationSchema} />
      <JsonLd value={softwareSchema} />
      <HomePage locale="en" />
    </SiteFrame>
  );
}
