import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { features, featureBySlug } from "@/content/product";
import { seoPageBySlug, seoPages } from "@/content/seo-pages";
import { sitePages, sitePageBySlug } from "@/content/site-pages";
import { featureHref } from "@/lib/routes";
import { MarketingPage, FeaturePage } from "@/components/page-views";
import { SeoLanding } from "@/components/seo-landing";
import { SiteFrame } from "@/components/site-shell";
import { localizedMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...sitePages.filter((page) => page.key !== "product" && page.key !== "solutions").map((page) => ({ slug: page.frSlug })),
    ...features.map((feature) => ({ slug: feature.frSlug })),
    ...seoPages.map((page) => ({ slug: page.frSlug })),
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const sitePage = sitePageBySlug(slug, "fr");
  if (sitePage) return localizedMetadata("fr", `/${sitePage.slug}/`, `/fr/${sitePage.frSlug}/`, sitePage.titleFr, sitePage.summaryFr);
  const feature = featureBySlug(slug, "fr");
  if (feature) {
    const enPath = featureHref(feature.id, "en");
    const frPath = featureHref(feature.id, "fr");
    return localizedMetadata("fr", enPath, frPath, feature.titleFr, feature.summaryFr);
  }
  const seoPage = seoPageBySlug(slug, "fr");
  if (seoPage) return localizedMetadata("fr", `/${seoPage.slug}/`, `/fr/${seoPage.frSlug}/`, seoPage.titleFr, seoPage.summaryFr);
  return {};
}

export default async function FrenchContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sitePage = sitePageBySlug(slug, "fr");
  if (sitePage) {
    if (sitePage.key === "product") notFound();
    return <SiteFrame locale="fr" alternateHref={`/${sitePage.slug}/`}><MarketingPage page={sitePage} locale="fr" /></SiteFrame>;
  }
  const feature = featureBySlug(slug, "fr");
  if (feature) return <SiteFrame locale="fr" alternateHref={featureHref(feature.id, "en")}><FeaturePage feature={feature} locale="fr" /></SiteFrame>;
  const seoPage = seoPageBySlug(slug, "fr");
  if (seoPage) return <SiteFrame locale="fr" alternateHref={`/${seoPage.slug}/`}><SeoLanding page={seoPage} locale="fr" /></SiteFrame>;
  notFound();
}
