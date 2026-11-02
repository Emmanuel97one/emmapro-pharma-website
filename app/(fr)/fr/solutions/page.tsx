import type { Metadata } from "next";
import { sitePageBySlug } from "@/content/site-pages";
import { MarketingPage } from "@/components/page-views";
import { SiteFrame } from "@/components/site-shell";
import { localizedMetadata } from "@/lib/seo";

const page = sitePageBySlug("solutions", "fr")!;
export const metadata: Metadata = localizedMetadata("fr", "/solutions/", "/fr/solutions/", page.titleFr, page.summaryFr);

export default function SolutionsPageFr() {
  return <SiteFrame locale="fr" alternateHref="/solutions/"><MarketingPage page={page} locale="fr" /></SiteFrame>;
}
