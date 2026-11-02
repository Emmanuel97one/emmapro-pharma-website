import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { solutions } from "@/content/commercial";
import { SolutionDetail } from "@/components/page-views";
import { SiteFrame } from "@/components/site-shell";
import { localizedMetadata } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() { return solutions.map((item) => ({ slug: item.frSlug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = solutions.find((solution) => solution.frSlug === slug);
  return item ? localizedMetadata("fr", `/solutions/${item.slug}/`, `/fr/solutions/${item.frSlug}/`, item.titleFr, item.summaryFr) : {};
}

export default async function SolutionPageFr({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = solutions.find((solution) => solution.frSlug === slug);
  if (!item) notFound();
  return <SiteFrame locale="fr" alternateHref={`/solutions/${item.slug}/`}><SolutionDetail slug={slug} locale="fr" /></SiteFrame>;
}
