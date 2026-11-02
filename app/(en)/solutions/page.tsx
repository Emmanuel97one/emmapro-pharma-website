import type { Metadata } from "next";
import { sitePageBySlug } from "@/content/site-pages";
import { MarketingPage } from "@/components/page-views";
import { SiteFrame } from "@/components/site-shell";
import { localizedMetadata } from "@/lib/seo";

const page = sitePageBySlug("solutions", "en")!;
export const metadata: Metadata = localizedMetadata("en", "/solutions/", "/fr/solutions/", page.title, page.summary);

export default function SolutionsPage() {
  return <SiteFrame locale="en" alternateHref="/fr/solutions/"><MarketingPage page={page} locale="en" /></SiteFrame>;
}
