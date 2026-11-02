import Link from "next/link";
import { editions, features, type Locale } from "@/content/product";
import { guidePages, partnerPages, partnerApplications, solutions } from "@/content/commercial";
import type { SitePage } from "@/content/site-pages";
import { featureHref, pageHref, partnerHref, solutionHref } from "@/lib/routes";
import { Breadcrumbs, CtaBand, Eyebrow, FeatureCard, PageHero, ScreenshotFrame, SectionHeading } from "./sections";
import { ContactForm } from "./contact-form";
import { JsonLd } from "./json-ld";
import { absoluteUrl } from "@/lib/site-config";
import { ProductVideo } from "./product-video";
import { videoObjectSchema } from "@/lib/seo";
import { RemoteAccessPage } from "./remote-access-page";
import { ModuleDetailPage } from "./module-detail-page";

export function ProductCatalogue({ locale }: { locale: Locale }) {
  const grouped = [...new Set(features.map((feature) => locale === "en" ? feature.group : feature.groupFr))];
  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={locale === "en" ? "THE COMPLETE PLATFORM" : "LA PLATEFORME COMPLÈTE"}
        title={locale === "en" ? "A connected platform for pharmacy operations and business control." : "Une plateforme connectée pour les opérations et le pilotage de la pharmacie."}
        summary={locale === "en" ? "Explore the complete EMMAPRO PHARMA catalogue—from governed medicine records and stock intelligence to finance, commercial operations and Ultra Web & Remote Access." : "Découvrez le catalogue complet EMMAPRO PHARMA : fiches médicaments, intelligence des stocks, finance, opérations commerciales et accès Web à distance Ultra."}
      />
      <Breadcrumbs locale={locale} items={[{ label: locale === "en" ? "Product" : "Produit" }]} />
      <div className="container catalogue-content">
        {grouped.map((group) => (
          <section className="catalogue-group" key={group}>
            <SectionHeading title={group} />
            <div className="feature-grid">
              {features.filter((feature) => (locale === "en" ? feature.group : feature.groupFr) === group).map((feature) => <FeatureCard key={feature.id} feature={feature} locale={locale} />)}
            </div>
          </section>
        ))}
        <aside className="edition-note"><strong>{locale === "en" ? "Complete product catalogue, separate edition entitlements." : "Catalogue complet du produit, droits d’édition distincts."}</strong><p>{locale === "en" ? "This catalogue describes the finished platform. Advanced capabilities are available according to the Pro, Pro-Plus, Pro Max and Ultra license." : "Ce catalogue décrit la plateforme complète. Les capacités avancées dépendent de la licence Pro, Pro-Plus, Pro Max ou Ultra."}</p><Link className="text-link" href={pageHref("editions", locale)}>{locale === "en" ? "Compare editions" : "Comparer les éditions"} →</Link></aside>
      </div>
      <div className="container"><CtaBand locale={locale} /></div>
    </>
  );
}

export function FeaturePage({ feature, locale }: { feature: (typeof features)[number]; locale: Locale }) {
  if (feature.id === "remote") return <RemoteAccessPage feature={feature} locale={locale} />;
  return <ModuleDetailPage feature={feature} locale={locale} />;
}

export function MarketingPage({ page, locale }: { page: SitePage; locale: Locale }) {
  const title = locale === "en" ? page.title : page.titleFr;
  const summary = locale === "en" ? page.summary : page.summaryFr;
  const sections = page.sections;
  const faqSchema = page.key === "faq" ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: sections.map((section) => ({
      "@type": "Question",
      name: locale === "en" ? section.title : section.titleFr,
      acceptedAnswer: {
        "@type": "Answer",
        text: locale === "en" ? section.body : section.bodyFr,
      },
    })),
  } : null;
  return (
    <>
      {faqSchema && <JsonLd value={faqSchema} />}
      {page.key === "product-tour" && <JsonLd value={videoObjectSchema(locale)} />}
      <PageHero locale={locale} eyebrow={locale === "en" ? "EMMAPRO PHARMA" : "EMMAPRO PHARMA"} title={title} summary={summary} actions={page.key !== "contact"} />
      <Breadcrumbs locale={locale} items={[{ label: title }]} />
      {page.key === "editions" ? <EditionDetails locale={locale} /> : null}
      {page.key === "contact" ? (
        <section className="section section-muted"><div className="container contact-layout"><div><Eyebrow>{locale === "en" ? "REQUEST A DEMO" : "DEMANDE DE DÉMONSTRATION"}</Eyebrow><h2>{locale === "en" ? "Tell us what your pharmacy needs." : "Parlez-nous des besoins de votre pharmacie."}</h2><p>{locale === "en" ? "Your request is sent securely through the website to our contact provider." : "Votre demande est transmise de manière sécurisée à notre prestataire de contact via le site."}</p><p className="privacy-reminder">{locale === "en" ? "Please do not submit patient records or confidential pharmacy data." : "N’envoyez aucun dossier patient ni donnée confidentielle de pharmacie."}</p></div><ContactForm locale={locale} /></div></section>
      ) : null}
      {page.key === "product-tour" ? (
        <section className="section section-muted"><div className="container">
          <div className="product-tour-video"><ProductVideo locale={locale} /></div>
          <div className="tour-grid">
            <ScreenshotFrame src="/assets/screenshots/emmapro-pharma-medicine-governance.png" alt={locale === "en" ? "Reviewed EMMAPRO medicine governance interface showing registry and classification modules" : "Interface vérifiée de gouvernance des médicaments EMMAPRO montrant le registre et les classifications"} label={locale === "en" ? "Medicine governance · reviewed source screenshot" : "Gouvernance des médicaments · capture source vérifiée"} />
            <ScreenshotFrame src="/assets/screenshots/emmapro-pharma-quotation-sales-orders.png" alt={locale === "en" ? "EMMAPRO quotation form with no customer or transaction data" : "Formulaire de devis EMMAPRO sans donnée client ni transaction"} label={locale === "en" ? "Quotation workspace · blank demonstration form" : "Espace devis · formulaire de démonstration vierge"} width={1918} height={985} />
          </div>
        </div></section>
      ) : null}
      {page.key === "product" ? <ProductCatalogue locale={locale} /> : null}
      {page.key === "partners" ? <PartnerOverview locale={locale} /> : null}
      {page.key === "solutions" ? <SolutionOverview locale={locale} /> : null}
      {page.key === "resources" ? <ResourceOverview locale={locale} /> : null}
      {page.key === "security" ? <SecurityChecklist locale={locale} /> : null}
      {!["editions", "product", "partners", "solutions", "resources", "security"].includes(page.key) ? sections.map((section) => (
        <section className="section" key={section.title}>
          <div className="container narrative-grid">
            <div><Eyebrow>{locale === "en" ? "EMMAPRO PHARMA" : "EMMAPRO PHARMA"}</Eyebrow><h2>{locale === "en" ? section.title : section.titleFr}</h2></div>
            <div><p>{locale === "en" ? section.body : section.bodyFr}</p>{(locale === "en" ? section.points : section.pointsFr) && <ul className="check-list">{(locale === "en" ? section.points : section.pointsFr)?.map((point) => <li key={point}><span aria-hidden="true">✓</span>{point}</li>)}</ul>}</div>
          </div>
        </section>
      )) : null}
      {page.key !== "contact" && page.key !== "product" && page.key !== "product-tour" && page.key !== "editions" && <div className="container"><CtaBand locale={locale} /></div>}
      {page.key === "contact" ? null : null}
    </>
  );
}

function EditionDetails({ locale }: { locale: Locale }) {
  return (
    <section className="section section-muted">
      <div className="container edition-grid edition-grid-page">
        {editions.map((edition, index) => (
          <article className={`edition-card ${index === 3 ? "edition-featured" : ""}`} key={edition.name}>
            <span className="edition-number">0{index + 1}</span>
            <h2>{locale === "en" ? edition.name : edition.nameFr}</h2>
            <p>{locale === "en" ? edition.tagline : edition.taglineFr}</p>
            <ul>{(locale === "en" ? edition.includes : edition.includesFr).map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
            <span className="workstation-count">{locale === "en" ? edition.workstation : edition.workstationFr}</span>
          </article>
        ))}
      </div>
      <div className="container"><p className="edition-footnote">{locale === "en" ? "The Main Pharmacy Server PC is separate and is not counted in the Client-PC allowance. Confirm final feature availability against the applicable license." : "Le serveur principal de la pharmacie est distinct et n’est pas compté dans le quota des postes clients. Vérifiez la disponibilité finale selon la licence applicable."}</p></div>
    </section>
  );
}

function PartnerOverview({ locale }: { locale: Locale }) {
  return (
    <section className="section section-muted"><div className="container">
      <div className="partner-hierarchy">
        <div className="hierarchy-vendor"><span>01</span><strong>EMMAPRO Tech</strong><small>{locale === "en" ? "Software Vendor · Product Owner · License Authority" : "Éditeur · Propriétaire du produit · Autorité de licence"}</small></div>
        <i aria-hidden="true">↓</i>
        <div className="hierarchy-roles">
          <article className="hierarchy-role hierarchy-master">
            <span>02</span><strong>{locale === "en" ? "Master Reseller" : "Revendeur principal"}</strong>
            <p>{locale === "en" ? "May license customers directly and allocate part of its available capacity to approved Authorized Resellers." : "Peut équiper directement des clients et attribuer une partie de sa capacité disponible à des revendeurs autorisés agréés."}</p>
            <small>{locale === "en" ? "Agreed License Allocation" : "Allocation de licences convenue"}</small>
          </article>
          <article className="hierarchy-role">
            <span>03</span><strong>{locale === "en" ? "Authorized Reseller" : "Revendeur autorisé"}</strong>
            <p>{locale === "en" ? "May receive an allocation from EMMAPRO Tech or an approved Master Reseller and license end customers under agreed terms." : "Peut recevoir une allocation d’EMMAPRO Tech ou d’un revendeur principal agréé et équiper des clients finaux selon les conditions convenues."}</p>
            <small>{locale === "en" ? "Approved customer distribution" : "Distribution client approuvée"}</small>
          </article>
          <article className="hierarchy-role hierarchy-customer">
            <span>04</span><strong>{locale === "en" ? "Direct Customer" : "Client direct"}</strong>
            <p>{locale === "en" ? "A pharmacy licenses EMMAPRO for its own authorized use; no resale rights are included." : "Une pharmacie utilise EMMAPRO selon sa licence ; aucun droit de revente n’est inclus."}</p>
            <small>{locale === "en" ? "Customer license" : "Licence client"}</small>
          </article>
        </div>
      </div>
      <div className="feature-grid feature-grid-3 partner-card-grid">
        {partnerPages.map((item) => <Link className="partner-info-card" href={partnerHref(item.slug, locale)} key={item.slug}><span className="eyebrow">{locale === "en" ? "PARTNER PATH" : "PARCOURS PARTENAIRE"}</span><strong>{locale === "en" ? item.title : item.titleFr}</strong><span>{locale === "en" ? item.summary : item.summaryFr}</span><i aria-hidden="true">↗</i></Link>)}
      </div>
      <div className="partner-apply-callout"><div><h2>{locale === "en" ? "Interested in distributing EMMAPRO?" : "Vous souhaitez distribuer EMMAPRO ?"} </h2><p>{locale === "en" ? "Tell us about your experience, territory and preferred partner level." : "Présentez votre expérience, votre territoire et le niveau de partenariat souhaité."}</p></div><Link className="button" href={partnerHref("apply", locale)}>{locale === "en" ? "Apply to partner" : "Candidater"}<span aria-hidden="true">↗</span></Link></div>
    </div></section>
  );
}

export function PartnerDetail({ slug, locale }: { slug: string; locale: Locale }) {
  if (slug === partnerApplications.slug || slug === partnerApplications.frSlug) {
    return (
      <>
        <PageHero locale={locale} eyebrow={locale === "en" ? "PARTNER PROGRAMME" : "PROGRAMME PARTENAIRE"} title={locale === "en" ? partnerApplications.title : partnerApplications.titleFr} summary={locale === "en" ? partnerApplications.summary : partnerApplications.summaryFr} actions={false} />
        <Breadcrumbs locale={locale} items={[{ label: locale === "en" ? "Partners" : "Partenaires", href: pageHref("partners", locale) }, { label: locale === "en" ? "Apply" : "Candidater" }]} />
        <section className="section section-muted"><div className="container contact-layout"><div><Eyebrow>{locale === "en" ? "PARTNER APPLICATION" : "CANDIDATURE PARTENAIRE"}</Eyebrow><h2>{locale === "en" ? "Start a commercial conversation." : "Engagez une discussion commerciale."}</h2><p>{locale === "en" ? "Applications are reviewed against the applicable commercial and partner requirements. Submitting this form does not grant reseller status or license authority." : "Les candidatures sont étudiées selon les critères commerciaux et partenaires applicables. L’envoi de ce formulaire n’accorde ni statut de revendeur ni autorité de licence."}</p></div><ContactForm locale={locale} partner /></div></section>
      </>
    );
  }
  const item = partnerPages.find((page) => (locale === "en" ? page.slug : page.frSlug) === slug);
  if (!item) return null;
  const title = locale === "en" ? item.title : item.titleFr;
  return (
    <>
      <PageHero locale={locale} eyebrow={locale === "en" ? "EMMAPRO PARTNER PROGRAMME" : "PROGRAMME PARTENAIRE EMMAPRO"} title={title} summary={locale === "en" ? item.summary : item.summaryFr} />
      <Breadcrumbs locale={locale} items={[{ label: locale === "en" ? "Partners" : "Partenaires", href: pageHref("partners", locale) }, { label: title }]} />
      <section className="section"><div className="container narrative-grid"><div><Eyebrow>{locale === "en" ? "A GOVERNED COMMERCIAL MODEL" : "UN MODÈLE COMMERCIAL ENCADRÉ"}</Eyebrow><h2>{locale === "en" ? "Clear roles. Controlled distribution." : "Des rôles clairs. Une distribution contrôlée."}</h2></div><div><p>{locale === "en" ? item.body : item.bodyFr}</p><ul className="check-list">{(locale === "en" ? item.points : item.pointsFr).map((point) => <li key={point}><span aria-hidden="true">✓</span>{point}</li>)}</ul></div></div></section>
      <div className="container"><CtaBand locale={locale} /></div>
    </>
  );
}

function SolutionOverview({ locale }: { locale: Locale }) {
  return <section className="section section-muted"><div className="container"><div className="feature-grid feature-grid-3">{solutions.map((solution) => <Link className="solution-card" href={solutionHref(solution.slug, locale)} key={solution.slug}><span className="eyebrow">{locale === "en" ? "SOLUTION" : "SOLUTION"}</span><strong>{locale === "en" ? solution.title : solution.titleFr}</strong><span>{locale === "en" ? solution.summary : solution.summaryFr}</span><i aria-hidden="true">↗</i></Link>)}</div></div></section>;
}

export function SolutionDetail({ slug, locale }: { slug: string; locale: Locale }) {
  const item = solutions.find((solution) => (locale === "en" ? solution.slug : solution.frSlug) === slug);
  if (!item) return null;
  const title = locale === "en" ? item.title : item.titleFr;
  return (
    <>
      <PageHero locale={locale} eyebrow={locale === "en" ? "PHARMACY SOLUTION" : "SOLUTION PHARMACEUTIQUE"} title={title} summary={locale === "en" ? item.summary : item.summaryFr} />
      <Breadcrumbs locale={locale} items={[{ label: locale === "en" ? "Solutions" : "Solutions", href: pageHref("solutions", locale) }, { label: title }]} />
      <section className="section"><div className="container narrative-grid"><div><Eyebrow>{locale === "en" ? "OPERATING CONTEXT" : "CONTEXTE OPÉRATIONNEL"}</Eyebrow><h2>{locale === "en" ? "Connected capabilities for your operating model." : "Des capacités connectées à votre organisation."}</h2></div><div><p>{locale === "en" ? item.body : item.bodyFr}</p><div className="related-links">{features.slice(0, 5).map((feature) => <Link key={feature.id} href={featureHref(feature.id, locale)}>{locale === "en" ? feature.title : feature.titleFr}<span aria-hidden="true">→</span></Link>)}</div></div></div></section>
      <div className="container"><CtaBand locale={locale} /></div>
    </>
  );
}

export function ResourceOverview({ locale }: { locale: Locale }) {
  return (
    <section className="section section-muted"><div className="container guide-grid">
      {guidePages.map((guide) => <Link className="guide-card" href={locale === "en" ? `/resources/${guide.slug}/` : `/fr/ressources/${guide.frSlug}/`} key={guide.slug}><span className="guide-type">{locale === "en" ? "PROFESSIONAL GUIDE" : "GUIDE PROFESSIONNEL"}</span><strong>{locale === "en" ? guide.title : guide.titleFr}</strong><span>{locale === "en" ? guide.summary : guide.summaryFr}</span><i aria-hidden="true">↗</i></Link>)}
    </div></section>
  );
}

export function ResourceDetail({ slug, locale }: { slug: string; locale: Locale }) {
  const guide = guidePages.find((item) => (locale === "en" ? item.slug : item.frSlug) === slug);
  if (!guide) return null;
  const title = locale === "en" ? guide.title : guide.titleFr;
  const bodySections = locale === "en" ? guide.sections : guide.sectionsFr;
  const feature = features.find((item) => item.id === guide.featureId);
  return (
    <>
      <JsonLd value={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description: locale === "en" ? guide.summary : guide.summaryFr,
        inLanguage: locale,
        mainEntityOfPage: absoluteUrl(locale === "en" ? `/resources/${guide.slug}/` : `/fr/ressources/${guide.frSlug}/`),
        author: { "@type": "Organization", name: "EMMAPRO Tech" },
        publisher: { "@type": "Organization", name: "EMMAPRO Tech" },
      }} />
      <PageHero locale={locale} eyebrow={locale === "en" ? "PROFESSIONAL GUIDE" : "GUIDE PROFESSIONNEL"} title={title} summary={locale === "en" ? guide.summary : guide.summaryFr} actions={false} />
      <Breadcrumbs locale={locale} items={[{ label: locale === "en" ? "Resources" : "Ressources", href: pageHref("resources", locale) }, { label: title }]} />
      {bodySections.map(([heading, body]) => (
        <section className="section guide-section" key={heading}><div className="container narrative-grid"><div><Eyebrow>{locale === "en" ? "PRACTICAL REVIEW" : "REPÈRE PRATIQUE"}</Eyebrow><h2>{heading}</h2></div><div><p>{body}</p></div></div></section>
      ))}
      {feature && <section className="section section-muted"><div className="container related-feature"><div><Eyebrow>{locale === "en" ? "RELATED EMMAPRO CAPABILITY" : "CAPACITÉ EMMAPRO ASSOCIÉE"}</Eyebrow><h2>{locale === "en" ? feature.title : feature.titleFr}</h2><p>{locale === "en" ? feature.summary : feature.summaryFr}</p></div><Link className="button" href={featureHref(feature.id, locale)}>{locale === "en" ? "Explore capability" : "Découvrir"}<span aria-hidden="true">→</span></Link></div></section>}
    </>
  );
}

export function SecurityChecklist({ locale }: { locale: Locale }) {
  const items = locale === "en"
    ? [["Public/private separation", "Marketing pages and lead forms are separate from customer login and pharmacy operations."], ["Role-aware access", "Authorized roles and permissions support accountable use within the operational application."], ["Audit and traceability", "Operational activity and transactions can be reviewed through the product’s audit capabilities."], ["No public database connection", "This marketing site does not connect to customer PostgreSQL, private APIs, credentials or internal ports."]]
    : [["Séparation public/privé", "Les pages marketing et formulaires sont séparés de la connexion client et des opérations."], ["Accès selon les rôles", "Les rôles et permissions autorisés favorisent une utilisation responsable dans l’application."], ["Audit et traçabilité", "L’activité et les transactions peuvent être examinées grâce aux fonctions d’audit du produit."], ["Aucune connexion publique à la base", "Le site marketing ne se connecte ni à PostgreSQL client, ni aux API privées, identifiants ou ports internes."]];
  return <section className="section section-muted"><div className="container security-grid">{items.map(([title, body], index) => <article className="security-card" key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{body}</p></article>)}</div></section>;
}

export function PartnerPathLinks({ locale }: { locale: Locale }) {
  return <div className="partner-path-links">{partnerPages.map((item) => <Link href={partnerHref(item.slug, locale)} key={item.slug}>{locale === "en" ? item.title : item.titleFr}<span aria-hidden="true">→</span></Link>)}</div>;
}
