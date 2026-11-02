import type { Metadata } from "next";
import { SiteFrame } from "@/components/site-shell";
import { ProductCatalogue } from "@/components/page-views";
import { localizedMetadata } from "@/lib/seo";

export const metadata: Metadata = localizedMetadata("en", "/product/", "/fr/produit/", "EMMAPRO Product Catalogue", "Explore the complete EMMAPRO PHARMA product catalogue, from medicine governance and stock intelligence to finance, commercial operations and remote access.");

export default function ProductPage() {
  return <SiteFrame locale="en" alternateHref="/fr/produit/"><ProductCatalogue locale="en" /></SiteFrame>;
}
