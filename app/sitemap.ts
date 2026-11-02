import type { MetadataRoute } from "next";
import { features } from "@/content/product";
import { productPageSlugs } from "@/content/product-details";
import { guidePages, partnerApplications, partnerPages, solutions } from "@/content/commercial";
import { seoPages } from "@/content/seo-pages";
import { sitePages } from "@/content/site-pages";
import { absoluteUrl } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    { en: "/", fr: "/fr/" },
    { en: "/product/", fr: "/fr/produit/" },
    ...sitePages.filter((page) => page.key !== "product").map((page) => ({ en: `/${page.slug}/`, fr: `/fr/${page.frSlug}/` })),
    ...features.map((feature) => {
      const slug = productPageSlugs[feature.id];
      return { en: `/product/${slug}/`, fr: `/fr/produit/${slug}/` };
    }),
    ...seoPages.map((page) => ({ en: `/${page.slug}/`, fr: `/fr/${page.frSlug}/` })),
    ...partnerPages.map((page) => ({ en: `/partners/${page.slug}/`, fr: `/fr/partenaires/${page.frSlug}/` })),
    { en: `/partners/${partnerApplications.slug}/`, fr: `/fr/partenaires/${partnerApplications.frSlug}/` },
    ...solutions.map((page) => ({ en: `/solutions/${page.slug}/`, fr: `/fr/solutions/${page.frSlug}/` })),
    ...guidePages.map((page) => ({ en: `/resources/${page.slug}/`, fr: `/fr/ressources/${page.frSlug}/` })),
  ];

  return paths.flatMap(({ en, fr }) => [
    { url: absoluteUrl(en), alternates: { languages: { en: absoluteUrl(en), fr: absoluteUrl(fr), "x-default": absoluteUrl(en) } } },
    { url: absoluteUrl(fr), alternates: { languages: { en: absoluteUrl(en), fr: absoluteUrl(fr), "x-default": absoluteUrl(en) } } },
  ]);
}
