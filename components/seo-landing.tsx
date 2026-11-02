import Link from "next/link";
import { features, type Locale } from "@/content/product";
import type { seoPages } from "@/content/seo-pages";
import { featureHref, pageHref } from "@/lib/routes";
import { Breadcrumbs, CtaBand, Eyebrow, PageHero } from "./sections";

type SeoPage = (typeof seoPages)[number];

export function SeoLanding({ page, locale }: { page: SeoPage; locale: Locale }) {
  const title = locale === "en" ? page.title : page.titleFr;
  const summary = locale === "en" ? page.summary : page.summaryFr;
  const body = locale === "en" ? page.body : page.bodyFr;
  const feature = features.find((item) => item.id === page.featureId);
  return (
    <>
      <PageHero locale={locale} eyebrow={locale === "en" ? "PHARMACY MANAGEMENT PLATFORM" : "PLATEFORME DE GESTION PHARMACEUTIQUE"} title={title} summary={summary} />
      <Breadcrumbs locale={locale} items={[{ label: locale === "en" ? "Solutions" : "Solutions", href: pageHref("solutions", locale) }, { label: title }]} />
      <section className="section"><div className="container narrative-grid"><div><Eyebrow>{locale === "en" ? "PRODUCT FIT" : "CAPACITÉS DU PRODUIT"}</Eyebrow><h2>{locale === "en" ? "Connected pharmacy work, from medicine to management." : "Reliez les activités pharmaceutiques, du médicament au pilotage."}</h2></div><div><p>{body}</p>{page.slug === "multi-user-pharmacy-software" && <div className="seat-summary"><span>Pro <b>1</b></span><span>Pro-Plus <b>2</b></span><span>Pro Max <b>5</b></span><span>Ultra <b>∞</b></span><small>{locale === "en" ? "Client PCs · Main Pharmacy Server PC excluded" : "Postes clients · serveur principal exclu"}</small></div>}</div></div></section>
      {feature && <section className="section section-muted"><div className="container related-feature"><div><Eyebrow>{locale === "en" ? "RELATED CAPABILITY" : "CAPACITÉ ASSOCIÉE"}</Eyebrow><h2>{locale === "en" ? feature.title : feature.titleFr}</h2><p>{locale === "en" ? feature.summary : feature.summaryFr}</p></div><Link className="button" href={featureHref(feature.id, locale)}>{locale === "en" ? "Explore capability" : "Découvrir la capacité"}<span aria-hidden="true">→</span></Link></div></section>}
      <div className="container"><CtaBand locale={locale} /></div>
    </>
  );
}
