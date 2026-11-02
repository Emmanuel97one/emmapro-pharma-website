import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { partnerApplications, partnerPages } from "@/content/commercial";
import { PartnerDetail } from "@/components/page-views";
import { SiteFrame } from "@/components/site-shell";
import { localizedMetadata } from "@/lib/seo";

export const dynamicParams = false;

const allPartnerPages = [...partnerPages, partnerApplications];

export function generateStaticParams() {
  return allPartnerPages.map((page) => ({ slug: page.frSlug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = allPartnerPages.find((item) => item.frSlug === slug);
  if (!page) return {};
  const title = "titleFr" in page ? page.titleFr : "Programme partenaire EMMAPRO";
  const description = "summaryFr" in page ? page.summaryFr : "Découvrez le programme de distribution partenaire EMMAPRO.";
  return localizedMetadata("fr", `/partners/${page.slug}/`, `/fr/partenaires/${page.frSlug}/`, title, description);
}

export default async function FrenchPartnerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!allPartnerPages.some((page) => page.frSlug === slug)) notFound();
  return <SiteFrame locale="fr" alternateHref={`/partners/${allPartnerPages.find((page) => page.frSlug === slug)!.slug}/`}><PartnerDetail slug={slug} locale="fr" /></SiteFrame>;
}
