import type { Locale } from "./product";

export const seoPages = [
  {
    slug: "pharmacy-management-software",
    frSlug: "logiciel-gestion-pharmacie",
    title: "Pharmacy management software for connected operations",
    titleFr: "Logiciel de gestion de pharmacie pour des opérations connectées",
    summary: "EMMAPRO PHARMA connects medicine governance, inventory, dispensing, finance and management in one professional platform.",
    summaryFr: "EMMAPRO PHARMA relie la gouvernance des médicaments, le stock, la dispensation, la finance et le pilotage dans une plateforme professionnelle.",
    body: "A pharmacy management system needs to support more than checkout. EMMAPRO brings medicine records, batch-aware inventory, procurement, credit, financial control and analytics into a connected operating platform. Commercial, multi-site and Ultra remote-access capabilities extend the product according to the licensed edition.",
    bodyFr: "Un système de gestion de pharmacie doit aller au-delà de l’encaissement. EMMAPRO rassemble les fiches médicaments, les stocks par lot, l’approvisionnement, le crédit, le contrôle financier et les analyses. Les fonctions commerciales, multi-sites et d’accès à distance Ultra complètent le produit selon l’édition.",
    featureId: "operations",
  },
  {
    slug: "medicine-inventory-management",
    frSlug: "gestion-medicaments-pharmacie",
    title: "Medicine inventory management with governed records",
    titleFr: "Gestion des médicaments avec des fiches gouvernées",
    summary: "Organize medicine identities and classifications before connecting procurement, stock and dispensing.",
    summaryFr: "Organisez les identités et classifications des médicaments avant de relier achats, stock et dispensation.",
    body: "Consistent medicine records help teams interpret inventory and transaction information. EMMAPRO combines category and classification structures, a drug master registry and pharmaceutical attributes with connected stock workflows.",
    bodyFr: "Des fiches médicaments cohérentes aident les équipes à interpréter les stocks et transactions. EMMAPRO associe catégories, classifications, registre maître et attributs pharmaceutiques aux workflows de stock.",
    featureId: "medicine",
  },
  {
    slug: "pharmacy-pos-system",
    frSlug: "logiciel-point-de-vente-pharmacie",
    title: "Pharmacy POS connected to inventory and control",
    titleFr: "Logiciel de dispensation connecté au stock et au contrôle",
    summary: "Connect medicine sales and dispensing with stock allocation, payment and transaction history.",
    summaryFr: "Reliez ventes et dispensation aux allocations de stock, paiements et historiques de transaction.",
    body: "EMMAPRO includes a pharmacy dispensing and sales workflow, but the platform extends beyond POS. It connects medicine records, batch-aware stock, customer credit, procurement and financial visibility around daily pharmacy activity.",
    bodyFr: "EMMAPRO comprend un workflow de vente et dispensation, mais la plateforme va au-delà du point de vente. Elle relie fiches médicaments, stocks par lot, crédit client, approvisionnement et visibilité financière.",
    featureId: "dispensing",
  },
  {
    slug: "multi-user-pharmacy-software",
    frSlug: "logiciel-pharmacie-multi-utilisateurs",
    title: "Multi-user pharmacy software with role-aware operations",
    titleFr: "Logiciel de pharmacie multi-utilisateurs avec accès par rôle",
    summary: "Coordinate pharmacy work across authorized users and registered client PCs.",
    summaryFr: "Coordonnez le travail entre utilisateurs autorisés et postes clients enregistrés.",
    body: "EMMAPRO supports controlled multi-user work through user roles and shared operational information. Licensed client-PC allowances are Pro: 1, Pro-Plus: 2, Pro Max: 5 and Ultra: unlimited. The Main Pharmacy Server PC is separate and is not included in the client count.",
    bodyFr: "EMMAPRO prend en charge le travail multi-utilisateurs avec rôles et informations partagées. Les quotas de postes clients sont Pro : 1, Pro-Plus : 2, Pro Max : 5 et Ultra : illimité. Le serveur principal est distinct et n’est pas inclus dans le quota.",
    featureId: "compliance",
  },
];

export const seoPageBySlug = (slug: string, locale: Locale) =>
  seoPages.find((page) => (locale === "en" ? page.slug : page.frSlug) === slug);
