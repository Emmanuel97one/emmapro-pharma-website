import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { guidePages } from "@/content/commercial";
import { ResourceDetail } from "@/components/page-views";
import { SiteFrame } from "@/components/site-shell";
import { localizedMetadata } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() { return guidePages.map((guide) => ({ slug: guide.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = guidePages.find((item) => item.slug === slug);
  return guide ? localizedMetadata("en", `/resources/${guide.slug}/`, `/fr/ressources/${guide.frSlug}/`, guide.title, guide.summary) : {};
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guidePages.find((item) => item.slug === slug);
  if (!guide) notFound();
  return <SiteFrame locale="en" alternateHref={`/fr/ressources/${guide.frSlug}/`}><ResourceDetail slug={slug} locale="en" /></SiteFrame>;
}
