import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { solutions } from "@/content/commercial";
import { SolutionDetail } from "@/components/page-views";
import { SiteFrame } from "@/components/site-shell";
import { localizedMetadata } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() { return solutions.map((item) => ({ slug: item.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = solutions.find((solution) => solution.slug === slug);
  return item ? localizedMetadata("en", `/solutions/${item.slug}/`, `/fr/solutions/${item.frSlug}/`, item.title, item.summary) : {};
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = solutions.find((solution) => solution.slug === slug);
  if (!item) notFound();
  return <SiteFrame locale="en" alternateHref={`/fr/solutions/${item.frSlug}/`}><SolutionDetail slug={slug} locale="en" /></SiteFrame>;
}
