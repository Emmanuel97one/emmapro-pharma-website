import { features, type Locale } from "@/content/product";
import { productPageSlugs } from "@/content/product-details";
import { sitePages } from "@/content/site-pages";

export function pageHref(key: string, locale: Locale) {
  if (key === "home") return locale === "en" ? "/" : "/fr/";
  if (key === "product") return locale === "en" ? "/product/" : "/fr/produit/";
  const page = sitePages.find((item) => item.key === key);
  if (page) return locale === "en" ? `/${page.slug}/` : `/fr/${page.frSlug}/`;
  return locale === "en" ? `/${key}/` : `/fr/${key}/`;
}

export function featureHref(id: string, locale: Locale) {
  const productSlug = productPageSlugs[id];
  if (!productSlug || !features.some((item) => item.id === id)) return pageHref("product", locale);
  return locale === "en" ? `/product/${productSlug}/` : `/fr/produit/${productSlug}/`;
}

export function partnerHref(slug: string, locale: Locale) {
  const french: Record<string, string> = {
    "master-reseller": "revendeur-principal",
    "authorized-reseller": "revendeur-autorise",
    "license-allocation": "allocation-licences",
    apply: "devenir-partenaire",
  };
  return locale === "en" ? `/partners/${slug}/` : `/fr/partenaires/${french[slug] ?? ""}/`;
}

export function solutionHref(slug: string, locale: Locale) {
  const french: Record<string, string> = {
    "independent-pharmacy": "pharmacie-independante",
    "multi-user": "multi-utilisateurs",
    "multi-site": "multi-sites",
    "owners-managers": "responsables",
    wholesale: "vente-en-gros",
  };
  return locale === "en" ? `/solutions/${slug}/` : `/fr/solutions/${french[slug] ?? ""}/`;
}

export function localizedPath(pathKey: string, locale: Locale) {
  if (pathKey === "/") return locale === "en" ? "/" : "/fr/";
  const productPath = pathKey.match(/^\/(?:product|fr\/produit)\/([^/]+)\/?$/);
  if (productPath && Object.values(productPageSlugs).includes(productPath[1])) {
    return locale === "en" ? `/product/${productPath[1]}/` : `/fr/produit/${productPath[1]}/`;
  }
  const match = features.find((feature) => pathKey === `/${feature.slug}/` || pathKey === `/${feature.frSlug}/`);
  if (match) return featureHref(match.id, locale);
  const page = sitePages.find((item) => pathKey === `/${item.slug}/` || pathKey === `/${item.frSlug}/`);
  if (page) return locale === "en" ? `/${page.slug}/` : `/fr/${page.frSlug}/`;
  return pathKey;
}

export function languageAlternates(enPath: string, frPath: string) {
  return {
    languages: {
      en: enPath,
      fr: frPath,
      "x-default": enPath,
    },
  };
}
