import Link from "next/link";
import type { Feature, Locale } from "@/content/product";
import { pageHref } from "@/lib/routes";
import { Breadcrumbs, CtaBand, Eyebrow, PageHero, SectionHeading } from "./sections";

const copy = {
  en: {
    badge: "CURRENT CAPABILITY · AVAILABLE WITH ULTRA EDITION",
    requestDemo: "Request a Demo",
    exploreUltra: "Explore Ultra",
    devicesEyebrow: "YOUR PHARMACY BEYOND ONE WORKSTATION",
    devicesTitle: "Use the right screen for the work in front of you.",
    devicesIntro: "Once the private EMMAPRO Web application is deployed and configured for the pharmacy, authorized users can sign in from a PC, tablet or smartphone to review supported records and complete permitted workflows beyond the main workstation.",
    devices: [
      ["PC", "Review management dashboards, financial records and detailed operational workspaces."],
      ["Tablet", "Check batch, stock, expiry and customer-balance information while moving around the pharmacy."],
      ["Smartphone", "Quickly review supported alerts and records when away from a desk."],
    ],
    capabilitiesEyebrow: "WHAT YOU CAN MANAGE REMOTELY",
    capabilitiesTitle: "Specific work, within the Web app's supported scope.",
    groups: [
      {
        title: "Operations",
        items: [
          "Review Operations Center indicators for pharmacy activity, stock attention points, expiry exposure and frequently used medicines.",
          "Use Global Dashboard to review the latest synchronized summaries from configured sites. The figures come from uploaded snapshots, not live connections to every branch.",
          "Authorized managers can export medicine-data templates and preview CSV or Excel imports, review proposed changes and warnings, and commit imports only when Web writes are enabled for that deployment.",
        ],
      },
      {
        title: "Inventory & procurement",
        items: [
          "Review stock and batch records, stock movements and valuation, and identify low, slow-moving, dead or expiry-risk stock.",
          "Authorized managers can record and update procurement entries, supplier details and batch quantities, costs and expiry information, then use supported batch lifecycle controls.",
          "Use available return, stock-adjustment and expired-disposal workflows only when the user's role and permissions allow them.",
          "Authorized managers can configure official pharmacy details and generate an inventory declaration for preview, printing or PDF export.",
        ],
      },
      {
        title: "Sales & credit",
        items: [
          "Authorized staff can search medicine batches, create dispensing sales using supported cash, credit or insurance workflows, and review dispensing history.",
          "Review customer credit balances and recorded payments, and follow recovery activity and aging information.",
        ],
      },
      {
        title: "Finance & analytics",
        items: [
          "Managers and administrators can review financial dashboards, revenue and expense records, cost and margin analysis, and general-ledger information.",
          "Review sales, profit, product performance, business trends and expiry forecasts. Executive report export is not included in the current Web workflows.",
        ],
      },
      {
        title: "Insurance & commercial operations",
        items: [
          "Authorized managers can work with insurer and society records, beneficiaries, claims, statements, insurer payments, reconciliation and receivables aging.",
          "Use the wholesale workspace for supported customer, sales, order, payment and history workflows.",
          "Prepare quotations, manage customer and item details, review sales orders and use supported order-fulfilment workflows. Quote issue and cancellation are manager-controlled.",
        ],
      },
      {
        title: "Management & settings",
        items: [
          "Managers and administrators can maintain the authorized site list and initiate Multi-Site snapshot synchronization; dashboard data updates when a site snapshot is available.",
          "Managers and administrators can manage user access, review transaction audits and restore soft-deleted records through the controlled recovery console.",
          "Authorized users can manage supported operational settings and email-report configuration. Managers can also create a verified cloud backup from a server deployment, then review, restore or delete authorized backups through Cloud Synchronization. Automatic backup-slot scheduling and recurring email delivery remain Desktop-operated.",
        ],
      },
    ],
    controlEyebrow: "SAME BUSINESS RULES, SAME CONTROL",
    controlTitle: "Remote access does not expand a user's authority.",
    controlText: "The Web app is a broad operational workspace—not just a remote dashboard—with supported workflows across pharmacy, stock, dispensing, commercial, finance and administration modules. Every session requires an active Ultra license, an active EMMAPRO account and an authorized role; the Web app checks the permission required for each operation and stays within the configured pharmacy environment. This is not a one-for-one copy of every Desktop utility: some tools are excluded or planned, and some writes depend on deployment settings. Finance, insurance administration, procurement and multi-site administration have additional manager or administrator restrictions.",
    scenarioEyebrow: "DESIGNED FOR REAL MANAGEMENT",
    scenarioTitle: "Useful when the owner or manager is away from the counter.",
    scenarios: [
      ["Check stock exposure", "Review low-stock and expiry-risk information before deciding what needs attention."],
      ["Follow customer credit", "See recorded balances and payments, then review recovery activity with the authorized team."],
      ["Review business performance", "Use manager-authorized financial and analytics views to understand sales, expenses and trends."],
      ["Supervise connected sites", "Check synchronized site summaries and refresh them when authorized; confirm snapshot freshness before acting."],
    ],
    trustEyebrow: "PUBLIC WEBSITE VS PRIVATE APPLICATION",
    trustTitle: "The public site and pharmacy workspace have separate jobs.",
    publicLabel: "www.emmapro-pharma.com",
    publicText: "Public product information, resources and demo requests.",
    privateLabel: "app.emmapro-pharma.com",
    privateText: "Private sign-in for authorized EMMAPRO Web users.",
    trustNote: "The public website does not connect directly to customer pharmacy data or databases.",
    limitsEyebrow: "CLEAR SCOPE",
    limitsTitle: "What this page does not promise",
    limits: [
      "Live access to every branch: Global Dashboard uses configured, synchronized snapshots.",
      "Automatic email delivery from the Web app: recurring delivery remains controlled by the Desktop scheduler.",
      "Every desktop task on a phone: only supported Web screens and permissioned operations are available remotely.",
      "Executive report export or unrestricted wholesale price-list editing: these are not confirmed as available Web workflows.",
      "A one-for-one Desktop feature set: Data Integrity & Version Manager is excluded; Connection Health and Executive Report Export are not current Web workflows.",
      "Medicine master-record writes or migration imports in every deployment: both are controlled by server-side settings and disabled by default unless explicitly enabled.",
    ],
  },
  fr: {
    badge: "CAPACITÉ ACTUELLE · DISPONIBLE AVEC L’ÉDITION ULTRA",
    requestDemo: "Demander une démonstration",
    exploreUltra: "Découvrir Ultra",
    devicesEyebrow: "VOTRE PHARMACIE AU-DELÀ D’UN POSTE",
    devicesTitle: "Choisissez l’écran adapté à votre activité.",
    devicesIntro: "Une fois l’application privée EMMAPRO Web déployée et configurée pour la pharmacie, les utilisateurs autorisés peuvent se connecter depuis un PC, une tablette ou un smartphone pour consulter les données prises en charge et effectuer les workflows autorisés au-delà du poste principal.",
    devices: [
      ["PC", "Consultez les tableaux de bord, les données financières et les espaces de travail détaillés."],
      ["Tablette", "Vérifiez les lots, les stocks, les péremptions et les soldes clients pendant vos déplacements dans la pharmacie."],
      ["Smartphone", "Consultez rapidement les alertes et les données prises en charge lorsque vous êtes loin d’un bureau."],
    ],
    capabilitiesEyebrow: "CE QUE VOUS POUVEZ GÉRER À DISTANCE",
    capabilitiesTitle: "Des tâches précises, dans le périmètre pris en charge par l’application Web.",
    groups: [
      {
        title: "Opérations",
        items: [
          "Consultez les indicateurs du Centre des opérations : activité de la pharmacie, points de vigilance du stock, risques de péremption et médicaments fréquemment utilisés.",
          "Consultez dans le tableau de bord global les derniers résumés synchronisés des sites configurés. Les données proviennent de snapshots transmis, et non de connexions en direct à chaque succursale.",
          "Les gestionnaires autorisés peuvent exporter des modèles de données médicaments et prévisualiser les imports CSV ou Excel, examiner les changements et avertissements, puis enregistrer les imports uniquement si les écritures Web sont activées pour le déploiement.",
        ],
      },
      {
        title: "Stocks et approvisionnement",
        items: [
          "Consultez les stocks et les lots, les mouvements et la valorisation, puis repérez les stocks bas, à rotation lente, dormants ou exposés aux péremptions.",
          "Les gestionnaires autorisés peuvent saisir et modifier des achats, des fournisseurs et les quantités, coûts et péremptions des lots, puis utiliser les contrôles de cycle de vie disponibles.",
          "Les workflows de retours, d’ajustement de stock et de destruction des produits expirés sont soumis au rôle et aux permissions de l’utilisateur.",
          "Les gestionnaires autorisés peuvent configurer les informations officielles de la pharmacie et générer une déclaration d’inventaire à prévisualiser, imprimer ou exporter en PDF.",
        ],
      },
      {
        title: "Ventes et crédit",
        items: [
          "Le personnel autorisé peut rechercher des lots, effectuer des ventes avec les workflows de paiement comptant, crédit ou assurance pris en charge, et consulter l’historique des dispensations.",
          "Consultez les soldes de crédit et les paiements enregistrés, puis suivez l’activité de recouvrement et l’ancienneté des créances.",
        ],
      },
      {
        title: "Finance et analyses",
        items: [
          "Les gestionnaires et administrateurs peuvent consulter les tableaux de bord financiers, les revenus et dépenses, les analyses de coûts et de marges ainsi que les informations du grand livre.",
          "Consultez les ventes, profits, performances produits, tendances et prévisions de péremption. L’export de rapports exécutifs ne fait pas partie des workflows Web actuels.",
        ],
      },
      {
        title: "Assurance et opérations commerciales",
        items: [
          "Les gestionnaires autorisés peuvent gérer les organismes et sociétés, bénéficiaires, réclamations, relevés, paiements assureurs, rapprochements et ancienneté des créances.",
          "Utilisez l’espace de vente en gros pour les workflows pris en charge sur les clients, ventes, commandes, paiements et historiques.",
          "Préparez des devis, gérez les clients et articles, consultez les commandes et utilisez les workflows de réalisation pris en charge. L’émission et l’annulation des devis sont réservées aux gestionnaires.",
        ],
      },
      {
        title: "Pilotage et paramètres",
        items: [
          "Les gestionnaires et administrateurs peuvent gérer la liste des sites autorisés et lancer la synchronisation des snapshots. Les données du tableau de bord changent lorsqu’un snapshot de site est disponible.",
          "Les gestionnaires et administrateurs peuvent gérer les accès utilisateurs, consulter les audits de transactions et restaurer des enregistrements supprimés logiquement via la console contrôlée.",
          "Les utilisateurs autorisés peuvent gérer les paramètres opérationnels et la configuration des rapports e-mail pris en charge. Depuis un déploiement serveur, les gestionnaires peuvent aussi créer une sauvegarde cloud vérifiée, puis consulter, restaurer ou supprimer les sauvegardes autorisées via la Synchronisation cloud. La programmation automatique des sauvegardes et les envois récurrents de rapports restent gérés par Desktop.",
        ],
      },
    ],
    controlEyebrow: "MÊMES RÈGLES, MÊME CONTRÔLE",
    controlTitle: "L’accès à distance n’élargit pas les droits de l’utilisateur.",
    controlText: "L’application Web est un espace opérationnel étendu — et pas seulement un tableau de bord à distance — avec des workflows pris en charge pour la pharmacie, les stocks, la dispensation, les opérations commerciales, la finance et l’administration. Chaque session exige une licence Ultra active, un compte EMMAPRO actif et un rôle autorisé ; l’application vérifie la permission de chaque opération et reste dans l’environnement de la pharmacie configurée. Elle ne reproduit pas à l’identique tous les utilitaires Desktop : certains outils sont exclus ou planifiés, et certaines écritures dépendent de la configuration du déploiement. La finance, l’administration de l’assurance, les achats et l’administration multi-sites sont soumis à des restrictions supplémentaires.",
    scenarioEyebrow: "PENSÉ POUR LE PILOTAGE AU QUOTIDIEN",
    scenarioTitle: "Utile lorsque le propriétaire ou le gestionnaire est loin du comptoir.",
    scenarios: [
      ["Vérifier les risques de stock", "Consultez les stocks bas et les risques de péremption avant de décider des priorités."],
      ["Suivre le crédit client", "Consultez les soldes et paiements enregistrés, puis examinez le recouvrement avec l’équipe autorisée."],
      ["Examiner la performance", "Utilisez les vues financières et analytiques autorisées pour comprendre ventes, dépenses et tendances."],
      ["Suivre les sites connectés", "Consultez les résumés synchronisés et actualisez-les si vous y êtes autorisé ; vérifiez la date des données."],
    ],
    trustEyebrow: "SITE PUBLIC ET APPLICATION PRIVÉE",
    trustTitle: "Le site public et l’espace de travail pharmaceutique ont des rôles distincts.",
    publicLabel: "www.emmapro-pharma.com",
    publicText: "Informations produit, ressources et demandes de démonstration.",
    privateLabel: "app.emmapro-pharma.com",
    privateText: "Connexion privée réservée aux utilisateurs EMMAPRO autorisés.",
    trustNote: "Le site public ne se connecte pas directement aux données ni aux bases de données des pharmacies.",
    limitsEyebrow: "PÉRIMÈTRE CLAIR",
    limitsTitle: "Ce que cette page ne promet pas",
    limits: [
      "Un accès en direct à chaque succursale : le tableau de bord global utilise des snapshots configurés et synchronisés.",
      "L’envoi automatique d’e-mails par l’application Web : les envois récurrents restent contrôlés par le planificateur Desktop.",
      "Toutes les tâches Desktop sur téléphone : seuls les écrans et opérations Web autorisés sont accessibles à distance.",
      "L’export de rapports exécutifs ou la modification sans restriction des tarifs de gros : ces workflows Web ne sont pas confirmés.",
      "Une parité complète avec chaque outil Desktop : le Gestionnaire d’intégrité des données et versions est exclu ; le contrôle de connexion et l’export exécutif ne sont pas des workflows Web actuels.",
      "Les modifications du registre maître médicaments ou les imports de migration dans tous les déploiements : ces écritures dépendent de paramètres serveur et sont désactivées par défaut.",
    ],
  },
} as const;

export function RemoteAccessPage({ feature, locale }: { feature: Feature; locale: Locale }) {
  const text = copy[locale];
  const title = locale === "en" ? feature.title : feature.titleFr;

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={locale === "en" ? "WEB & REMOTE ACCESS" : "ACCÈS WEB ET À DISTANCE"}
        title={title}
        summary={locale === "en"
          ? "Manage supported EMMAPRO pharmacy operations beyond the main workstation—with the same account, permissions and pharmacy controls."
          : "Gérez les opérations EMMAPRO prises en charge au-delà du poste principal, avec le même compte, les mêmes permissions et les mêmes contrôles de pharmacie."}
        actions={false}
      />
      <Breadcrumbs locale={locale} items={[
        { label: locale === "en" ? "Product" : "Produit", href: pageHref("product", locale) },
        { label: title },
      ]} />
      <div className="container remote-access-top">
        <div className="remote-access-hero-actions">
          <span className="remote-access-badge"><span aria-hidden="true">●</span>{text.badge}</span>
          <div className="hero-actions">
            <Link className="button" href={pageHref("contact", locale)}>{text.requestDemo}<span aria-hidden="true">↗</span></Link>
            <Link className="button button-secondary" href={pageHref("editions", locale)}>{text.exploreUltra}<span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </div>

      <section className="section remote-access-devices">
        <div className="container">
          <SectionHeading eyebrow={text.devicesEyebrow} title={text.devicesTitle} summary={text.devicesIntro} />
          <div className="remote-access-device-grid">
            {text.devices.map(([name, description], index) => (
              <article className="remote-access-device-card" key={name}>
                <span className="remote-access-device-number">0{index + 1}</span>
                <h3>{name}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeading eyebrow={text.capabilitiesEyebrow} title={text.capabilitiesTitle} />
          <div className="remote-access-capability-grid">
            {text.groups.map((group, index) => (
              <article className="remote-access-capability-card" key={group.title}>
                <span className="remote-access-device-number">0{index + 1}</span>
                <h3>{group.title}</h3>
                <ul className="check-list">
                  {group.items.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section remote-access-control">
        <div className="container remote-access-control-inner">
          <div>
            <Eyebrow>{text.controlEyebrow}</Eyebrow>
            <h2>{text.controlTitle}</h2>
          </div>
          <p>{text.controlText}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow={text.scenarioEyebrow} title={text.scenarioTitle} />
          <div className="remote-access-scenario-grid">
            {text.scenarios.map(([titleText, description], index) => (
              <article className="remote-access-scenario" key={titleText}>
                <span className="remote-access-device-number">0{index + 1}</span>
                <div><h3>{titleText}</h3><p>{description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container remote-access-trust">
          <div>
            <Eyebrow>{text.trustEyebrow}</Eyebrow>
            <h2>{text.trustTitle}</h2>
            <p>{text.trustNote}</p>
          </div>
          <div className="remote-access-hosts">
            <article><strong>{text.publicLabel}</strong><p>{text.publicText}</p></article>
            <article><strong>{text.privateLabel}</strong><p>{text.privateText}</p></article>
          </div>
        </div>
      </section>

      <section className="section remote-access-limits">
        <div className="container">
          <SectionHeading eyebrow={text.limitsEyebrow} title={text.limitsTitle} />
          <ul className="remote-access-limit-list">
            {text.limits.map((item) => <li key={item}><span aria-hidden="true">—</span>{item}</li>)}
          </ul>
        </div>
      </section>

      <div className="container"><CtaBand locale={locale} /></div>
    </>
  );
}
