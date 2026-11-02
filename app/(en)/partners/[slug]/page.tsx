import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { partnerApplications, partnerPages } from "@/content/commercial";
import { PartnerDetail } from "@/components/page-views";
import { SiteFrame } from "@/components/site-shell";
import { localizedMetadata } from "@/lib/seo";

export const dynamicParams = false;

const allPartnerPages = [...partnerPages, partnerApplications];

export function generateStaticParams() {
  return allPartnerPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = allPartnerPages.find((item) => item.slug === slug);
  if (!page) return {};
  const title = "title" in page ? page.title : "EMMAPRO Partner Programme";
  const description = "summary" in page ? page.summary : "Explore the EMMAPRO partner distribution programme.";
  return localizedMetadata("en", `/partners/${page.slug}/`, `/fr/partenaires/${page.frSlug}/`, title, description);
}

export default async function EnglishPartnerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!allPartnerPages.some((page) => page.slug === slug)) notFound();
  return <SiteFrame locale="en" alternateHref={`/fr/partenaires/${allPartnerPages.find((page) => page.slug === slug)!.frSlug}/`}><PartnerDetail slug={slug} locale="en" /></SiteFrame>;
}
