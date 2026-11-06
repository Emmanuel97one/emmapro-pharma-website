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
    ...sitePages.filter((page) => page.key !== "product" && page.key !== "solutions").map((page) => ({ slug: page.slug })),
    ...features.map((feature) => ({ slug: feature.slug })),
    ...seoPages.map((page) => ({ slug: page.slug })),
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const sitePage = sitePageBySlug(slug, "en");
  if (sitePage) return localizedMetadata("en", `/${sitePage.slug}/`, `/fr/${sitePage.frSlug}/`, sitePage.title, sitePage.summary);
  const seoPage = seoPageBySlug(slug, "en");
  if (seoPage) return localizedMetadata("en", `/${seoPage.slug}/`, `/fr/${seoPage.frSlug}/`, seoPage.title, seoPage.summary, seoPage.keywords.en);
  const feature = featureBySlug(slug, "en");
  if (feature) {
    const enPath = featureHref(feature.id, "en");
    const frPath = featureHref(feature.id, "fr");
    return localizedMetadata("en", enPath, frPath, feature.title, feature.summary);
  }
  return {};
}

export default async function EnglishContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sitePage = sitePageBySlug(slug, "en");
  if (sitePage) {
    if (sitePage.key === "product") notFound();
    return <SiteFrame locale="en" alternateHref={`/fr/${sitePage.frSlug}/`}><MarketingPage page={sitePage} locale="en" /></SiteFrame>;
  }
  const seoPage = seoPageBySlug(slug, "en");
  if (seoPage) return <SiteFrame locale="en" alternateHref={`/fr/${seoPage.frSlug}/`}><SeoLanding page={seoPage} locale="en" /></SiteFrame>;
  const feature = featureBySlug(slug, "en");
  if (feature) return <SiteFrame locale="en" alternateHref={featureHref(feature.id, "fr")}><FeaturePage feature={feature} locale="en" /></SiteFrame>;
  notFound();
}
