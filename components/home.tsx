import Link from "next/link";
import { editions, features, type Locale } from "@/content/product";
import { guidePages, partnerPages } from "@/content/commercial";
import { featureHref, pageHref, partnerHref } from "@/lib/routes";
import { CtaBand, Eyebrow, FeatureCard, ScreenshotFrame, SectionHeading } from "./sections";
import { ProductVideo } from "./product-video";
import { JsonLd } from "./json-ld";
import { videoObjectSchema } from "@/lib/seo";

const homeCopy = {
  en: {
    heroEyebrow: "EMMAPRO PHARMA · PHARMACY MANAGEMENT SOFTWARE",
    heroTitle: "Pharmacy Management Software for Stock, POS, Finance and Multi-Site Operations.",
    heroText: "EMMAPRO PHARMA helps pharmacies manage medicine governance, stock, dispensing, billing, finance, expiry controls and multi-site operations in one connected platform.",
    explore: "Explore the platform",
    loginNote: "For pharmacy teams · Commercial platform",
    trust: ["Complete pharmacy platform", "Multi-user operations", "PostgreSQL-powered architecture", "Web & Remote Access with Ultra", "Multi-site management"],
    connectedEyebrow: "ONE CONNECTED PLATFORM",
    connectedTitle: "Less fragmentation. More operational clarity.",
    connectedText: "When medicine records, stock, dispensing and financial oversight live in disconnected tools, teams spend time reconciling information. EMMAPRO connects these workflows around the pharmacy operation.",
    familiesTitle: "A broad platform, organized around real work",
    familiesText: "Explore the capabilities by the way pharmacy teams operate—not as a long list of disconnected tools.",
    operationsEyebrow: "DAILY OPERATIONS",
    operationsTitle: "See what needs attention across the pharmacy.",
    operationsText: "The Operations Center brings operational indicators, medicine activity, stock alerts and expiry visibility into a management view. Teams can move from an overview into the relevant workflow.",
    stockEyebrow: "STOCK INTELLIGENCE",
    stockTitle: "Follow inventory from receiving to dispensing.",
    stockText: "Procurement, batches, movements, valuation and expiry are connected so teams can understand not only what is in stock, but how it got there and what may need review.",
    stockSteps: ["Receive & capture batches", "Monitor stock and movement", "Review expiry and exposure", "Dispense with traceability"],
    financeEyebrow: "FINANCIAL CONTROL & INSIGHTS",
    financeTitle: "Connect activity with business visibility.",
    financeText: "Review revenue, expenses, cost of goods, margins and trends in a management-oriented view. Use the information to support decisions—not as a substitute for professional accounting advice.",
    commercialTitle: "More than dispensing",
    commercialText: "Commercial and specialist workflows are part of the complete platform catalogue.",
    multiEyebrow: "GROW WITH YOUR NETWORK",
    multiTitle: "One pharmacy today. A clearer view across sites tomorrow.",
    multiText: "Pro-Plus and higher editions include Multi-Site Sync and Global Dashboard capabilities. Coordinate visibility while keeping authorized roles and each pharmacy environment in view.",
    reportsTitle: "Management reports, on a useful cadence.",
    reportsText: "Managers can configure and test daily, weekly or monthly reports and review delivery history. Recurring automatic delivery is handled by the Desktop scheduler, not the Web app.",
    videoTitle: "A guided look at EMMAPRO PHARMA",
    videoText: "A focused, 60-second introduction to the EMMAPRO PHARMA platform and the workflows it brings together.",
    editionsEyebrow: "FOUR CUMULATIVE EDITIONS",
    editionsTitle: "Start with the core. Extend when your operation needs more.",
    editionsText: "Every edition builds on the one before it. The Main Pharmacy Server PC is separate and does not count as a Client PC.",
    partnerEyebrow: "EMMAPRO PARTNER PROGRAMME",
    partnerTitle: "Bring pharmacy-management technology to your market.",
    partnerText: "EMMAPRO Tech works with Master Resellers and Authorized Resellers through controlled License Allocations and agreed partner terms.",
    securityTitle: "Controlled access. Separate environments.",
    securityText: "User roles and audit visibility support accountable operations. The public website stays separate from the private customer application and pharmacy databases.",
    resourcesTitle: "Professional resources for pharmacy teams",
    resourcesText: "A focused guide library for the management topics behind the software.",
    finalTitle: "See how EMMAPRO could fit your pharmacy.",
    finalText: "Request a product demonstration or talk with the team about an approved partner path.",
    learn: "Learn more",
    viewEditions: "Compare editions",
    allFeatures: "View all capabilities",
    contact: "Request a demo",
    partner: "Explore partner programme",
    current: "Current Ultra capability",
    groups: ["Operations & medicines", "Business & finance", "Commercial operations", "Management & growth", "Governance", "Web & access"],
    groupLinks: [["operations", "medicine", "stock", "procurement"], ["credit", "recovery", "finance", "analytics"], ["insurance", "wholesale", "quotation"], ["multisite", "reports"], ["expiry", "declaration", "compliance", "configuration"], ["remote"]],
    benefits: ["One pharmacy record foundation", "Traceable stock and batches", "Connected commercial workflows", "Management visibility by edition"],
  },
  fr: {
    heroEyebrow: "EMMAPRO PHARMA · LOGICIEL DE GESTION DE PHARMACIE",
    heroTitle: "Logiciel de gestion de pharmacie pour le stock, la caisse, la finance et les multi-sites.",
    heroText: "EMMAPRO PHARMA aide les pharmacies à piloter la gouvernance des médicaments, le stock, la dispensation, la facturation, la finance, le suivi des péremptions et les opérations multi-sites dans une plateforme connectée.",
    explore: "Découvrir la plateforme",
    loginNote: "Pour les équipes de pharmacie · Plateforme professionnelle",
    trust: ["Plateforme complète", "Opérations multi-utilisateurs", "Architecture PostgreSQL", "Accès Web et distant avec Ultra", "Gestion multi-sites"],
    connectedEyebrow: "UNE PLATEFORME CONNECTÉE",
    connectedTitle: "Moins de fragmentation. Plus de clarté opérationnelle.",
    connectedText: "Lorsque les fiches médicaments, les stocks, la dispensation et le suivi financier sont répartis dans des outils isolés, les équipes passent du temps à rapprocher les informations. EMMAPRO relie ces workflows autour de l’activité pharmaceutique.",
    familiesTitle: "Une plateforme étendue, organisée autour du métier",
    familiesText: "Explorez les capacités selon le fonctionnement des équipes, plutôt qu’une longue liste d’outils séparés.",
    operationsEyebrow: "OPÉRATIONS QUOTIDIENNES",
    operationsTitle: "Repérez les priorités dans toute la pharmacie.",
    operationsText: "Le Centre des opérations rassemble indicateurs, activité des médicaments, alertes de stock et visibilité sur les péremptions. Les équipes peuvent passer de la vue d’ensemble au workflow concerné.",
    stockEyebrow: "INTELLIGENCE DES STOCKS",
    stockTitle: "Suivez les stocks de la réception à la dispensation.",
    stockText: "Les achats, lots, mouvements, valorisations et péremptions sont reliés pour comprendre non seulement le stock disponible, mais aussi son parcours et les points à vérifier.",
    stockSteps: ["Réceptionner et saisir les lots", "Suivre stock et mouvements", "Examiner les péremptions", "Dispenser avec traçabilité"],
    financeEyebrow: "CONTRÔLE FINANCIER ET ANALYSES",
    financeTitle: "Reliez l’activité à la visibilité commerciale.",
    financeText: "Consultez revenus, dépenses, coût des ventes, marges et tendances dans une vue de pilotage. Ces informations soutiennent les décisions sans remplacer un conseil comptable professionnel.",
    commercialTitle: "Bien plus que la dispensation",
    commercialText: "Les workflows commerciaux et spécialisés font partie du catalogue complet.",
    multiEyebrow: "DÉVELOPPEZ VOTRE RÉSEAU",
    multiTitle: "Une pharmacie aujourd’hui. Une vue plus claire du réseau demain.",
    multiText: "Pro-Plus et les éditions supérieures incluent la synchronisation multi-sites et le tableau de bord global. Coordonnez la visibilité tout en respectant les rôles et environnements de chaque pharmacie.",
    reportsTitle: "Des rapports de gestion selon un rythme utile.",
    reportsText: "Les gestionnaires peuvent configurer et tester des rapports quotidiens, hebdomadaires ou mensuels et consulter l’historique des envois. Les envois automatiques récurrents sont gérés par le planificateur Desktop, et non par l’application Web.",
    videoTitle: "Découvrez EMMAPRO PHARMA en vidéo",
    videoText: "Une présentation de 60 secondes de la plateforme EMMAPRO PHARMA et des workflows qu’elle rassemble.",
    editionsEyebrow: "QUATRE ÉDITIONS CUMULATIVES",
    editionsTitle: "Commencez par le cœur. Étendez selon vos besoins.",
    editionsText: "Chaque édition reprend le contenu de la précédente. Le serveur principal est distinct et ne compte pas comme poste client.",
    partnerEyebrow: "PROGRAMME PARTENAIRE EMMAPRO",
    partnerTitle: "Proposez une technologie de gestion pharmaceutique sur votre marché.",
    partnerText: "EMMAPRO Tech travaille avec des revendeurs principaux et autorisés selon des allocations de licences contrôlées et des conditions convenues.",
    securityTitle: "Accès contrôlé. Environnements séparés.",
    securityText: "Les rôles utilisateurs et l’audit soutiennent la responsabilité. Le site public reste séparé de l’application client privée et des bases pharmaceutiques.",
    resourcesTitle: "Ressources professionnelles pour les équipes",
    resourcesText: "Des guides ciblés sur les enjeux de gestion derrière le logiciel.",
    finalTitle: "Découvrez EMMAPRO pour votre pharmacie.",
    finalText: "Demandez une démonstration ou échangez sur un parcours partenaire agréé.",
    learn: "En savoir plus",
    viewEditions: "Comparer les éditions",
    allFeatures: "Voir toutes les capacités",
    contact: "Demander une démonstration",
    partner: "Découvrir le programme partenaire",
    current: "Capacité actuelle d’Ultra",
    groups: ["Opérations et médicaments", "Gestion et finances", "Opérations commerciales", "Pilotage et croissance", "Gouvernance", "Web et accès"],
    groupLinks: [["operations", "medicine", "stock", "procurement"], ["credit", "recovery", "finance", "analytics"], ["insurance", "wholesale", "quotation"], ["multisite", "reports"], ["expiry", "declaration", "compliance", "configuration"], ["remote"]],
    benefits: ["Base de données des médicaments", "Stock et lots traçables", "Workflows commerciaux connectés", "Pilotage selon l’édition"],
  },
} as const;

export function HomePage({ locale }: { locale: Locale }) {
  const text = homeCopy[locale];
  const groups = text.groupLinks.map((ids, index) => ({
    title: text.groups[index],
    items: ids.map((id) => features.find((feature) => feature.id === id)).filter((feature) => feature !== undefined),
  }));
  return (
    <>
      <JsonLd value={videoObjectSchema(locale)} />
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <Eyebrow>{text.heroEyebrow}</Eyebrow>
            <h1>{text.heroTitle}</h1>
            <p className="hero-summary">{text.heroText}</p>
            <div className="hero-actions">
              <Link className="button" href={pageHref("contact", locale)}>{text.contact}<span aria-hidden="true">↗</span></Link>
              <Link className="button button-secondary" href={pageHref("product", locale)}>{text.explore}<span aria-hidden="true">→</span></Link>
            </div>
            <p className="hero-note"><span className="status-dot" aria-hidden="true" />{text.loginNote}</p>
          </div>
          <div className="hero-visual">
            <div className="hero-orbit orbit-one" aria-hidden="true" />
            <div className="hero-orbit orbit-two" aria-hidden="true" />
            <ScreenshotFrame
              src="/assets/screenshots/emmapro-pharma-medicine-governance.png"
              alt={locale === "en" ? "EMMAPRO PHARMA medicine governance interface showing the medicine registry and classification modules" : "Interface EMMAPRO PHARMA de gouvernance des médicaments montrant le registre et les modules de classification"}
              label={locale === "en" ? "Reviewed EMMAPRO interface · demonstration data" : "Interface EMMAPRO vérifiée · données de démonstration"}
              width={1558}
              height={895}
              priority
            />
            <div className="hero-visual-note"><span className="mini-mark">E</span><span><strong>EMMAPRO PHARMA</strong><small>{locale === "en" ? "Connected pharmacy operations" : "Opérations pharmaceutiques connectées"}</small></span></div>
          </div>
        </div>
      </section>

      <div className="trust-strip">
        <div className="container trust-list">
          {text.trust.map((item, index) => <span key={item}><b aria-hidden="true">{["✓", "◉", "▤", "↗", "⌘"][index]}</b>{item}</span>)}
        </div>
      </div>

      <section className="section section-connected">
        <div className="container connected-grid">
          <div><Eyebrow>{text.connectedEyebrow}</Eyebrow><h2>{text.connectedTitle}</h2><p>{text.connectedText}</p></div>
          <div className="connected-visual" aria-label={locale === "en" ? "Connected pharmacy workflow" : "Workflow pharmaceutique connecté"}>
            <div className="connected-node node-main"><span className="node-symbol">E</span><strong>EMMAPRO</strong><small>PHARMA PLATFORM</small></div>
            {text.benefits.map((benefit, index) => <div className={`connected-node node-${index + 1}`} key={benefit}><span className="node-index">0{index + 1}</span><strong>{benefit}</strong></div>)}
            <span className="connection-line line-a" /><span className="connection-line line-b" /><span className="connection-line line-c" /><span className="connection-line line-d" />
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeading eyebrow={locale === "en" ? "CAPABILITY ECOSYSTEM" : "ÉCOSYSTÈME DE CAPACITÉS"} title={text.familiesTitle} summary={text.familiesText} />
          <div className="family-grid">
            {groups.map((group) => (
              <div className="family-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul>{group.items.map((feature) => <li key={feature.id}><Link href={featureHref(feature.id, locale)}><span aria-hidden="true">↗</span>{locale === "en" ? feature.title : feature.titleFr}</Link></li>)}</ul>
              </div>
            ))}
          </div>
          <div className="center-action"><Link className="text-link" href={pageHref("product", locale)}>{text.allFeatures}<span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div className="split-copy">
            <Eyebrow>{text.operationsEyebrow}</Eyebrow><h2>{text.operationsTitle}</h2><p>{text.operationsText}</p>
            <ul className="check-list">
              {(locale === "en"
                ? ["KPIs and activity summaries", "Stock alerts and expiry visibility", "Contextual access to detailed workflows"]
                : ["Indicateurs et résumés d’activité", "Alertes de stock et péremptions", "Accès contextuel aux workflows détaillés"]
              ).map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}
            </ul>
            <Link className="text-link" href={featureHref("operations", locale)}>{text.learn}<span aria-hidden="true">→</span></Link>
          </div>
          <div className="ops-panel">
            <div className="ops-panel-head"><span className="panel-indicator" /><span>{locale === "en" ? "OPERATIONS CENTER" : "CENTRE DES OPÉRATIONS"}</span><span className="panel-menu">•••</span></div>
            <div className="ops-panel-body">
              <div className="ops-sidebar"><span className="ops-logo">E</span><i /><i /><i /><i /><i /></div>
              <div className="ops-content">
                <span className="ops-label">{locale === "en" ? "PHARMACY OVERVIEW" : "VUE DE LA PHARMACIE"}</span>
                <div className="ops-title-line"><strong>{locale === "en" ? "Daily operations" : "Opérations quotidiennes"}</strong><span>{locale === "en" ? "Management view" : "Vue de gestion"}</span></div>
                <div className="ops-cards"><span /><span /><span /></div>
                <div className="ops-table"><b /><i /><i /><i /><i /></div>
                <div className="ops-footer"><span /><span /><span /></div>
                <p className="visual-caption">{locale === "en" ? "Illustrative workflow view · no customer data" : "Vue de workflow illustrative · sans donnée client"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container split-section split-reverse">
          <div className="stock-flow" aria-label={text.stockSteps.join(" → ")}>
            {text.stockSteps.map((step, index) => <div className="flow-step" key={step}><span>0{index + 1}</span><strong>{step}</strong>{index < text.stockSteps.length - 1 && <i aria-hidden="true">↓</i>}</div>)}
          </div>
          <div className="split-copy">
            <Eyebrow>{text.stockEyebrow}</Eyebrow><h2>{text.stockTitle}</h2><p>{text.stockText}</p>
            <Link className="text-link text-link-light" href={featureHref("stock", locale)}>{text.learn}<span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container finance-section">
          <div className="finance-intro"><Eyebrow>{text.financeEyebrow}</Eyebrow><h2>{text.financeTitle}</h2><p>{text.financeText}</p></div>
          <div className="finance-cards">
            {["finance", "analytics", "credit", "recovery"].map((id) => {
              const feature = features.find((item) => item.id === id)!;
              return <FeatureCard key={feature.id} feature={feature} locale={locale} />;
            })}
          </div>
          <div className="finance-proof"><span>{locale === "en" ? "Revenue" : "Revenus"}<b>↗</b></span><span>{locale === "en" ? "Expenses" : "Dépenses"}<b>↘</b></span><span>{locale === "en" ? "Margins" : "Marges"}<b>⌁</b></span><span>{locale === "en" ? "Trends" : "Tendances"}<b>⌗</b></span></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow={locale === "en" ? "COMMERCIAL OPERATIONS" : "OPÉRATIONS COMMERCIALES"} title={text.commercialTitle} summary={text.commercialText} />
          <div className="feature-grid feature-grid-4">
            {["insurance", "wholesale", "quotation", "dispensing"].map((id) => {
              const feature = features.find((item) => item.id === id)!;
              return <FeatureCard key={feature.id} feature={feature} locale={locale} />;
            })}
          </div>
        </div>
      </section>

      <section className="section multi-section">
        <div className="container multi-grid">
          <div>
            <Eyebrow>{text.multiEyebrow}</Eyebrow><h2>{text.multiTitle}</h2><p>{text.multiText}</p>
            <span className="edition-tag">PRO-PLUS +</span>
            <div className="hero-actions"><Link className="button" href={featureHref("multisite", locale)}>{text.learn}<span aria-hidden="true">→</span></Link></div>
          </div>
          <div className="network-visual">
            <div className="network-center"><span className="network-mark">E</span><strong>EMMAPRO</strong><small>{locale === "en" ? "GLOBAL VIEW" : "VUE GLOBALE"}</small></div>
            {[1, 2, 3].map((number) => <div className={`site-node site-node-${number}`} key={number}><span className="site-dot" /><strong>{locale === "en" ? `Pharmacy site 0${number}` : `Pharmacie · site 0${number}`}</strong><small>{locale === "en" ? "Authorized environment" : "Environnement autorisé"}</small></div>)}
            <span className="network-link network-link-one" /><span className="network-link network-link-two" /><span className="network-link network-link-three" />
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container report-grid">
          <div><Eyebrow>{locale === "en" ? "AUTOMATIC EMAIL REPORTS · PRO-PLUS +" : "RAPPORTS AUTOMATIQUES · PRO-PLUS +"}</Eyebrow><h2>{text.reportsTitle}</h2><p>{text.reportsText}</p><Link className="text-link" href={featureHref("reports", locale)}>{text.learn}<span aria-hidden="true">→</span></Link></div>
          <div className="report-visual">
            <div className="report-envelope"><span aria-hidden="true">✉</span></div>
            <div className="report-card"><span className="report-pill">{locale === "en" ? "SCHEDULED SUMMARY" : "SYNTHÈSE PLANIFIÉE"}</span><strong>{locale === "en" ? "Pharmacy management report" : "Rapport de gestion pharmacie"}</strong><span>{locale === "en" ? "Daily · Weekly · Monthly" : "Quotidien · Hebdomadaire · Mensuel"}</span><div className="report-bars"><i /><i /><i /><i /><i /><i /></div></div>
            <span className="report-arrow" aria-hidden="true">→</span>
            <div className="report-person"><span>EM</span><small>{locale === "en" ? "Manager" : "Responsable"}</small></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container video-section">
          <div><Eyebrow>{locale === "en" ? "PRODUCT TOUR" : "VISITE PRODUIT"}</Eyebrow><h2>{text.videoTitle}</h2><p>{text.videoText}</p></div>
          <ProductVideo locale={locale} />
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeading eyebrow={text.editionsEyebrow} title={text.editionsTitle} summary={text.editionsText} />
          <div className="edition-grid">
            {editions.map((edition, index) => (
              <article className={`edition-card ${index === 3 ? "edition-featured" : ""}`} key={edition.name}>
                <span className="edition-number">0{index + 1}</span><h3>{locale === "en" ? edition.name : edition.nameFr}</h3><p>{locale === "en" ? edition.tagline : edition.taglineFr}</p>
                <ul>{(locale === "en" ? edition.includes : edition.includesFr).map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
                <span className="workstation-count">{locale === "en" ? edition.workstation : edition.workstationFr}</span>
              </article>
            ))}
          </div>
          <div className="center-action"><Link className="text-link" href={pageHref("editions", locale)}>{text.viewEditions}<span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <section className="section">
        <div className="container partner-callout">
          <div className="partner-symbol" aria-hidden="true"><span>↗</span><span>↘</span><span>●</span></div>
          <div><Eyebrow>{text.partnerEyebrow}</Eyebrow><h2>{text.partnerTitle}</h2><p>{text.partnerText}</p></div>
          <div className="partner-paths">
            <Link href={partnerHref("master-reseller", locale)}>{locale === "en" ? partnerPages[0].title : partnerPages[0].titleFr}<span aria-hidden="true">↗</span></Link>
            <Link href={partnerHref("authorized-reseller", locale)}>{locale === "en" ? partnerPages[1].title : partnerPages[1].titleFr}<span aria-hidden="true">↗</span></Link>
            <Link href={pageHref("partners", locale)}>{text.partner}<span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container trust-card">
          <div><Eyebrow>{locale === "en" ? "SECURITY & GOVERNANCE" : "SÉCURITÉ ET GOUVERNANCE"}</Eyebrow><h2>{text.securityTitle}</h2><p>{text.securityText}</p><Link className="text-link text-link-light" href={pageHref("security", locale)}>{text.learn}<span aria-hidden="true">→</span></Link></div>
          <div className="trust-points">{(locale === "en" ? ["Role-aware access", "Audit & traceability", "Private application separation", "No public database connection"] : ["Accès selon les rôles", "Audit et traçabilité", "Application privée séparée", "Aucune connexion publique à la base"]).map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow={locale === "en" ? "PROFESSIONAL RESOURCES" : "RESSOURCES PROFESSIONNELLES"} title={text.resourcesTitle} summary={text.resourcesText} />
          <div className="guide-grid">
            {guidePages.map((guide) => <Link className="guide-card" href={locale === "en" ? `/resources/${guide.slug}/` : `/fr/ressources/${guide.frSlug}/`} key={guide.slug}><span className="guide-type">{locale === "en" ? "FIELD GUIDE" : "GUIDE PRATIQUE"}</span><strong>{locale === "en" ? guide.title : guide.titleFr}</strong><span>{locale === "en" ? guide.summary : guide.summaryFr}</span><i aria-hidden="true">↗</i></Link>)}
          </div>
        </div>
      </section>

      <div className="container"><CtaBand locale={locale} /></div>
    </>
  );
}
