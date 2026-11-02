import type { Metadata } from "next";
import { SiteFrame } from "@/components/site-shell";
import { ProductCatalogue } from "@/components/page-views";
import { localizedMetadata } from "@/lib/seo";

export const metadata: Metadata = localizedMetadata("fr", "/product/", "/fr/produit/", "Catalogue du produit EMMAPRO", "Découvrez le catalogue complet EMMAPRO PHARMA : gouvernance des médicaments, stocks, finance, opérations commerciales et accès à distance.");

export default function ProduitPage() {
  return <SiteFrame locale="fr" alternateHref="/product/"><ProductCatalogue locale="fr" /></SiteFrame>;
}
