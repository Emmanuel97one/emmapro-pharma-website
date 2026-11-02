import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { features } from "@/content/product";
import { productFeatureId, productPageSlugs } from "@/content/product-details";
import { FeaturePage } from "@/components/page-views";
import { SiteFrame } from "@/components/site-shell";
import { featureHref } from "@/lib/routes";
import { localizedMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.values(productPageSlugs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const featureId = productFeatureId(slug);
  const feature = features.find((item) => item.id === featureId);
  if (!feature) return {};
  return localizedMetadata("fr", featureHref(feature.id, "en"), featureHref(feature.id, "fr"), feature.titleFr, feature.summaryFr);
}

export default async function FrenchProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const featureId = productFeatureId(slug);
  const feature = features.find((item) => item.id === featureId);
  if (!feature) notFound();

  return <SiteFrame locale="fr" alternateHref={featureHref(feature.id, "en")}><FeaturePage feature={feature} locale="fr" /></SiteFrame>;
}
