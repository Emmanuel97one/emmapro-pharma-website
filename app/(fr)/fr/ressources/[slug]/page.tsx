import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { guidePages } from "@/content/commercial";
import { ResourceDetail } from "@/components/page-views";
import { SiteFrame } from "@/components/site-shell";
import { localizedMetadata } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() { return guidePages.map((guide) => ({ slug: guide.frSlug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = guidePages.find((item) => item.frSlug === slug);
  return guide ? localizedMetadata("fr", `/resources/${guide.slug}/`, `/fr/ressources/${guide.frSlug}/`, guide.titleFr, guide.summaryFr) : {};
}

export default async function ResourcePageFr({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guidePages.find((item) => item.frSlug === slug);
  if (!guide) notFound();
  return <SiteFrame locale="fr" alternateHref={`/resources/${guide.slug}/`}><ResourceDetail slug={slug} locale="fr" /></SiteFrame>;
}
