import type { Locale } from "./product";

export const partnerPages = [
  {
    slug: "master-reseller",
    frSlug: "revendeur-principal",
    title: "Master Reseller programme",
    titleFr: "Programme revendeur principal",
    summary: "Build a broader EMMAPRO distribution network with an agreed license allocation.",
    summaryFr: "Développez un réseau de distribution EMMAPRO grâce à une allocation de licences convenue.",
    body: "The Master Reseller programme is intended for established software distributors, technology companies and commercial partners. Under an applicable partner agreement, a Master Reseller may license customers directly and allocate part of its available capacity to Authorized Resellers in its network.",
    bodyFr: "Le programme revendeur principal s’adresse aux distributeurs de logiciels établis, entreprises technologiques et partenaires commerciaux. Selon l’accord applicable, un revendeur principal peut équiper directement ses clients et attribuer une partie de sa capacité disponible aux revendeurs autorisés de son réseau.",
    points: ["Agreed partner pricing and commercial terms", "Controlled License Allocation tracked by EMMAPRO Tech", "Ability to manage approved Authorized Resellers", "Sales materials and partner support as agreed"],
    pointsFr: ["Tarifs partenaires et conditions convenus", "Allocation de licences contrôlée par EMMAPRO Tech", "Gestion de revendeurs autorisés approuvés", "Supports commerciaux et accompagnement selon l’accord"],
  },
  {
    slug: "authorized-reseller",
    frSlug: "revendeur-autorise",
    title: "Authorized Reseller programme",
    titleFr: "Programme revendeur autorisé",
    summary: "Bring EMMAPRO to pharmacies through an approved local technology or commercial partner.",
    summaryFr: "Proposez EMMAPRO aux pharmacies en tant que partenaire technologique ou commercial local agréé.",
    body: "The Authorized Reseller programme supports approved IT companies, consultants and local technology providers who want to sell EMMAPRO to pharmacies. Resellers operate within their assigned License Allocation and the terms of their partner agreement.",
    bodyFr: "Le programme revendeur autorisé s’adresse aux sociétés informatiques, consultants et prestataires technologiques locaux agréés qui souhaitent proposer EMMAPRO aux pharmacies. Les revendeurs agissent dans la limite de leur allocation de licences et de leur accord partenaire.",
    points: ["Approved customer-facing distribution rights", "Allocation assigned by EMMAPRO Tech or an approved Master Reseller", "No transfer of EMMAPRO software or intellectual-property ownership"],
    pointsFr: ["Droits de distribution client approuvés", "Allocation attribuée par EMMAPRO Tech ou un revendeur principal agréé", "Aucun transfert de propriété du logiciel ou de la propriété intellectuelle EMMAPRO"],
  },
  {
    slug: "license-allocation",
    frSlug: "allocation-licences",
    title: "License Allocation",
    titleFr: "Allocation de licences",
    summary: "A controlled, traceable way to distribute customer licenses through approved partners.",
    summaryFr: "Un mécanisme contrôlé et traçable de distribution des licences clients via des partenaires agréés.",
    body: "EMMAPRO Tech assigns and centrally tracks partner License Allocations. A customer license uses available allocation. A Master Reseller may transfer an agreed portion to an Authorized Reseller under its network; that capacity is deducted from the Master Reseller and credited to the Authorized Reseller.",
    bodyFr: "EMMAPRO Tech attribue et suit centralement les allocations des partenaires. Une licence client consomme l’allocation disponible. Un revendeur principal peut transférer une capacité convenue à un revendeur autorisé de son réseau ; elle est débitée du premier et créditée au second.",
    points: ["EMMAPRO Tech remains the software vendor, product owner and license authority", "Partner status does not transfer intellectual-property ownership or unrestricted sublicensing rights", "Partner allocations are governed by commercial agreements and remain traceable"],
    pointsFr: ["EMMAPRO Tech reste l’éditeur, propriétaire du produit et autorité de licence", "Le statut partenaire ne transfère ni la propriété intellectuelle ni un droit illimité de sous-licence", "Les allocations sont régies par les accords commerciaux et restent traçables"],
  },
];

export const partnerApplications = {
  slug: "apply",
  frSlug: "devenir-partenaire",
  title: "Apply to become an EMMAPRO partner",
  titleFr: "Devenir partenaire EMMAPRO",
  summary: "Tell us about your organization, market and preferred partner path.",
  summaryFr: "Présentez votre organisation, votre marché et le partenariat souhaité.",
};

export const solutions = [
  {
    slug: "independent-pharmacy",
    frSlug: "pharmacie-independante",
    title: "Independent pharmacy",
    titleFr: "Pharmacie indépendante",
    summary: "Connect dispensing, stock, procurement and finance in a single pharmacy platform.",
    summaryFr: "Reliez dispensation, stock, approvisionnement et finance dans une seule plateforme.",
    body: "For an independent pharmacy, EMMAPRO brings medicine records, batch-aware stock, dispensing, customer credit and financial workflows together. Begin with the core platform and add management capabilities as operational needs grow.",
    bodyFr: "Pour une pharmacie indépendante, EMMAPRO rassemble les fiches médicaments, les stocks par lot, la dispensation, le crédit client et les workflows financiers. Commencez par le cœur de plateforme et ajoutez des capacités selon l’évolution de vos besoins.",
  },
  {
    slug: "multi-user",
    frSlug: "multi-utilisateurs",
    title: "Multi-user pharmacy operations",
    titleFr: "Opérations pharmaceutiques multi-utilisateurs",
    summary: "Support coordinated work across authorized pharmacy roles and client PCs.",
    summaryFr: "Coordonnez le travail des rôles autorisés et des postes clients.",
    body: "EMMAPRO supports controlled multi-user pharmacy operations with role-based access and shared operational information. Client PC allowances depend on the licensed edition; the Main Pharmacy Server PC is separate and is not included in the client count.",
    bodyFr: "EMMAPRO prend en charge les opérations multi-utilisateurs avec accès selon les rôles et informations partagées. Le quota de postes clients dépend de l’édition ; le serveur principal est distinct et n’est pas inclus dans ce quota.",
  },
  {
    slug: "multi-site",
    frSlug: "multi-sites",
    title: "Multi-site pharmacy management",
    titleFr: "Gestion de pharmacies multi-sites",
    summary: "Extend synchronization and management visibility as pharmacy operations grow.",
    summaryFr: "Étendez la synchronisation et la visibilité de gestion à mesure que le réseau grandit.",
    body: "Pro-Plus and higher editions include Multi-Site Sync and Global Dashboard capabilities. These features help authorized teams coordinate site visibility while each pharmacy continues to operate within its approved environment.",
    bodyFr: "Les éditions Pro-Plus et supérieures incluent la synchronisation multi-sites et le tableau de bord global. Elles aident les équipes autorisées à coordonner la visibilité du réseau, chaque pharmacie restant dans son environnement approuvé.",
  },
  {
    slug: "owners-managers",
    frSlug: "responsables",
    title: "Owners & pharmacy managers",
    titleFr: "Propriétaires et responsables de pharmacie",
    summary: "Bring operational, financial and stock signals into a more useful management view.",
    summaryFr: "Rassemblez les signaux opérationnels, financiers et de stock dans une vue de pilotage utile.",
    body: "Management tools connect daily operations with sales, profitability, stock position, credit, expiry exposure and recurring reports where enabled. EMMAPRO helps managers review information; business decisions remain with the pharmacy team.",
    bodyFr: "Les outils de pilotage relient l’activité quotidienne aux ventes, à la rentabilité, au stock, au crédit, aux risques de péremption et aux rapports récurrents selon l’édition. EMMAPRO facilite l’analyse ; les décisions restent celles de l’équipe.",
  },
  {
    slug: "wholesale",
    frSlug: "vente-en-gros",
    title: "Wholesale operations",
    titleFr: "Opérations de vente en gros",
    summary: "Manage wholesale customers, sales orders, payments and history with Ultra.",
    summaryFr: "Gérez les clients grossistes, commandes, paiements et historique avec Ultra.",
    body: "Ultra includes a dedicated wholesale workspace for customer records, wholesale sales, orders, payments and history. It complements the broader pharmacy platform rather than replacing the standard dispensing workflow.",
    bodyFr: "Ultra inclut un espace dédié aux clients grossistes, ventes, commandes, paiements et historiques. Il complète la plateforme pharmaceutique sans remplacer le workflow de dispensation standard.",
  },
];

export const guidePages = [
  {
    slug: "pharmacy-inventory-management-guide",
    frSlug: "guide-gestion-stock-pharmacie",
    title: "Pharmacy inventory management: a practical guide",
    titleFr: "Gestion des stocks en pharmacie : guide pratique",
    summary: "A practical framework for medicine records, batch visibility, movement and review.",
    summaryFr: "Une méthode pratique pour les fiches médicaments, les lots, les mouvements et le suivi.",
    sections: [
      ["Start with dependable medicine records", "Begin with consistent medicine identities, classifications, forms and attributes. Good records make procurement, stock tracking and dispensing easier to interpret."],
      ["Track stock through its lifecycle", "Review receipt, batch details, adjustments, returns and dispensing as connected events. A stock balance is more useful when its movement history can be understood."],
      ["Review risk and replenishment", "Use low-stock, expiry and slow-moving views as prompts for a manager’s review. Confirm decisions against actual local policy and supplier conditions."],
    ],
    sectionsFr: [
      ["Commencez par des fiches fiables", "Des identités, classifications, formes et attributs cohérents facilitent les achats, le suivi des stocks et la dispensation."],
      ["Suivez le cycle de vie du stock", "Consultez les réceptions, lots, ajustements, retours et dispensations comme des événements liés. Le solde est plus utile lorsque son historique est compréhensible."],
      ["Analysez les risques et le réapprovisionnement", "Utilisez les alertes de stock bas, de péremption et de rotation lente comme points de contrôle. Validez les décisions selon les règles locales et les conditions fournisseurs."],
    ],
    featureId: "stock",
  },
  {
    slug: "pharmacy-expiry-management-guide",
    frSlug: "guide-peremption-pharmacie",
    title: "Expiry management in a pharmacy",
    titleFr: "Gestion des péremptions en pharmacie",
    summary: "A structured approach to expiry forecasting, batch review and disposal records.",
    summaryFr: "Une approche structurée des prévisions, lots et enregistrements de destruction.",
    sections: [
      ["Use batch-level information", "Expiry dates are actionable when they stay connected to the batch and its available quantity. Review upcoming dates at a consistent cadence."],
      ["Prioritize by time and exposure", "A practical review considers time to expiry, quantity, movement and value. Use these indicators to prompt follow-up, not as an automatic disposal decision."],
      ["Record the outcome", "Document stock handling and disposal according to applicable pharmacy procedures. Maintain traceability for adjustments and decisions."],
    ],
    sectionsFr: [
      ["Utilisez les informations par lot", "Les dates de péremption sont exploitables lorsqu’elles restent liées au lot et à sa quantité disponible. Vérifiez régulièrement les échéances."],
      ["Priorisez selon le délai et l’exposition", "Une revue pratique tient compte du délai, de la quantité, du mouvement et de la valeur. Ces indicateurs guident le suivi sans décider automatiquement d’une destruction."],
      ["Enregistrez le résultat", "Documentez le traitement et la destruction selon les procédures applicables. Conservez la traçabilité des ajustements et décisions."],
    ],
    featureId: "expiry",
  },
  {
    slug: "multi-site-pharmacy-management-guide",
    frSlug: "guide-pharmacie-multi-sites",
    title: "Managing a growing multi-site pharmacy",
    titleFr: "Gérer un réseau de pharmacies en croissance",
    summary: "Consider site visibility, synchronization, user access and reporting as a network grows.",
    summaryFr: "Pensez à la visibilité, synchronisation, aux accès et rapports lors de la croissance du réseau.",
    sections: [
      ["Define what managers need to see", "Agree which stock, sales and operational signals are relevant across locations. Keep centralized views aligned with the authority and responsibilities of each role."],
      ["Set access and operating responsibilities", "Establish who can view, approve and maintain information at each site. Role-based access should reflect local responsibilities."],
      ["Review synchronization and reporting", "Set expectations for synchronization and management reports. Use the licensed features and the approved deployment architecture for each site."],
    ],
    sectionsFr: [
      ["Définissez les informations utiles aux responsables", "Déterminez les indicateurs de stock, ventes et opérations pertinents entre sites. Les vues centralisées doivent respecter les responsabilités de chaque rôle."],
      ["Définissez les accès et responsabilités", "Précisez qui peut consulter, approuver et maintenir les informations de chaque site. Les accès doivent refléter les responsabilités locales."],
      ["Vérifiez synchronisation et rapports", "Définissez les attentes de synchronisation et de reporting. Utilisez les fonctions licenciées et l’architecture approuvée pour chaque site."],
    ],
    featureId: "multisite",
  },
];

export function getPartnerPage(slug: string, locale: Locale) {
  return partnerPages.find((page) => (locale === "en" ? page.slug : page.frSlug) === slug);
}

export function getSolution(slug: string, locale: Locale) {
  return solutions.find((page) => (locale === "en" ? page.slug : page.frSlug) === slug);
}

export function getGuide(slug: string, locale: Locale) {
  return guidePages.find((page) => (locale === "en" ? page.slug : page.frSlug) === slug);
}
