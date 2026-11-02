import Link from "next/link";
import { features, type Feature, type Locale } from "@/content/product";
import { productPageCopy } from "@/content/product-details";
import { featureHref, pageHref } from "@/lib/routes";
import { Breadcrumbs, CtaBand, Eyebrow, PageHero, ScreenshotFrame, SectionHeading } from "./sections";
import { ProductIllustration } from "./product-illustration";

function localized<T extends Record<Locale, string>>(value: T, locale: Locale) {
  return value[locale];
}

export function ModuleDetailPage({ feature, locale }: { feature: Feature; locale: Locale }) {
  const content = productPageCopy[feature.id];

  if (!content) {
    throw new Error(`Missing product detail content for "${feature.id}".`);
  }

  const title = locale === "en" ? feature.title : feature.titleFr;
  const headline = localized(content.headline, locale);
  const relatedFeatures = content.connections
    .map((connection) => ({
      connection,
      feature: features.find((item) => item.id === connection.featureId),
    }))
    .filter((item): item is { connection: (typeof content.connections)[number]; feature: Feature } => Boolean(item.feature));

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={locale === "en" ? feature.group : feature.groupFr}
        title={title}
        summary={headline}
      />
      <Breadcrumbs locale={locale} items={[{ label: locale === "en" ? "Product" : "Produit", href: pageHref("product", locale) }, { label: title }]} />

      <section className="section module-introduction">
        <div className="container module-introduction-grid">
          <div className="module-introduction-copy">
            <Eyebrow>{locale === "en" ? "BUILT FOR PHARMACY OPERATIONS" : "CONÇU POUR LES OPÉRATIONS PHARMACEUTIQUES"}</Eyebrow>
            <h2>{locale === "en" ? "A practical view of the work this module supports." : "Une vue concrète des opérations prises en charge."}</h2>
            <p>{localized(content.introduction, locale)}</p>
            <div className="module-edition-pill">
              <span aria-hidden="true">●</span>
              {locale === "en" ? "Web access requires an active Ultra license" : "L’accès Web exige une licence Ultra active"}
            </div>
          </div>
          <div className="module-introduction-visual">
            {feature.image ? (
              <ScreenshotFrame
                src={feature.image}
                alt={locale === "en" ? `${title} interface in EMMAPRO PHARMA` : `Interface ${title} dans EMMAPRO PHARMA`}
                label={locale === "en" ? "Reviewed product interface · demonstration data" : "Interface vérifiée · données de démonstration"}
              />
            ) : feature.illustration ? (
              <ProductIllustration scene={feature.illustration} locale={locale} />
            ) : (
              <div className="workflow-visual">
                <span className="workflow-topline">{locale === "en" ? "EMMAPRO WORKFLOW" : "WORKFLOW EMMAPRO"}</span>
                <div className="workflow-center"><span className="workflow-mark">E</span><strong>{title}</strong></div>
                <div className="workflow-points">{content.capabilities.slice(0, 4).map((capability, index) => <div key={capability.id}><span>0{index + 1}</span><strong>{localized(capability.title, locale)}</strong></div>)}</div>
                <small>{locale === "en" ? "Illustrative capability map · no customer records" : "Schéma illustratif · aucun dossier client"}</small>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section section-muted module-capabilities">
        <div className="container">
          <SectionHeading
            eyebrow={locale === "en" ? "CAPABILITIES" : "CAPACITÉS"}
            title={localized(content.capabilitiesHeading, locale)}
            summary={localized(content.capabilitiesIntro, locale)}
          />
          <div className="module-capability-overview">
            {content.capabilities.map((capability) => (
              <a className="module-capability-card" key={capability.id} href={`#${capability.id}`}>
                <strong>{localized(capability.title, locale)}</strong>
                <span>{localized(capability.summary, locale)}</span>
                <span className="module-card-action">{locale === "en" ? "See details" : "Voir les détails"} <span aria-hidden="true">↓</span></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section module-capability-details" aria-label={localized(content.capabilitiesHeading, locale)}>
        <div className="container module-capability-detail-list">
          {content.capabilities.map((capability, index) => (
            <article className="module-capability-detail" id={capability.id} key={capability.id}>
              <div className="module-capability-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
              <div>
                <Eyebrow>{locale === "en" ? "CAPABILITY" : "CAPACITÉ"}</Eyebrow>
                <h2>{localized(capability.title, locale)}</h2>
                <p>{localized(capability.detail, locale)}</p>
                <div className="module-benefit">
                  <strong>{locale === "en" ? "Business value" : "Valeur métier"}</strong>
                  <span>{localized(capability.benefit, locale)}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {content.workflow && (
        <section className="section section-muted">
          <div className="container module-workflow">
            <SectionHeading title={localized(content.workflow.heading, locale)} summary={localized(content.workflow.introduction, locale)} />
            <ol>
              {content.workflow.steps.map((step, index) => (
                <li key={step.en}><span>{String(index + 1).padStart(2, "0")}</span><p>{localized(step, locale)}</p></li>
              ))}
            </ol>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow={locale === "en" ? "MANAGEMENT QUESTIONS" : "QUESTIONS DE GESTION"}
            title={localized(content.intelligenceHeading, locale)}
          />
          <div className="module-question-grid">
            {content.questions.map((item) => (
              <article className="module-question-card" key={item.question.en}>
                <h3>{localized(item.question, locale)}</h3>
                <p>{localized(item.answer, locale)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeading
            eyebrow={locale === "en" ? "CONNECTED WORKFLOWS" : "WORKFLOWS CONNECTÉS"}
            title={localized(content.connectionsHeading, locale)}
          />
          <div className="module-connections">
            {relatedFeatures.map(({ connection, feature: related }) => (
              <Link className="module-connection" href={featureHref(related.id, locale)} key={related.id}>
                <span>
                  <strong>{locale === "en" ? related.title : related.titleFr}</strong>
                  <span>{localized(connection.description, locale)}</span>
                </span>
                <span className="module-connection-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {feature.webAccess && (
        <section className="section module-web-scope">
          <div className="container module-web-scope-inner">
            <div>
              <Eyebrow>{locale === "en" ? "WEB & REMOTE ACCESS · ULTRA" : "ACCÈS WEB ET À DISTANCE · ULTRA"}</Eyebrow>
              <h2>{locale === "en" ? "The supported Web scope for this module." : "Le périmètre Web pris en charge pour ce module."}</h2>
              <p>{feature.webAccess[locale]}</p>
              <p className="module-governance">{localized(content.governance, locale)}</p>
            </div>
            <Link className="button button-secondary" href={featureHref("remote", locale)}>
              {locale === "en" ? "Explore Web & Remote Access" : "Découvrir l’accès Web et à distance"} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      )}

      <section className="section module-edition-section">
        <div className="container module-edition-content">
          <div>
            <Eyebrow>{locale === "en" ? "EDITION & ACCESS" : "ÉDITION ET ACCÈS"}</Eyebrow>
            <h2>{localized(content.editionHeading, locale)}</h2>
            <p>{localized(content.edition, locale)}</p>
          </div>
          <Link className="text-link" href={pageHref("editions", locale)}>
            {locale === "en" ? "Compare EMMAPRO editions" : "Comparer les éditions EMMAPRO"} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <div className="container"><CtaBand locale={locale} /></div>
    </>
  );
}
