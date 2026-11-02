import type { Locale } from "./product";

export type SitePage = {
  key: string;
  slug: string;
  frSlug: string;
  title: string;
  titleFr: string;
  summary: string;
  summaryFr: string;
  sections: { title: string; titleFr: string; body: string; bodyFr: string; points?: string[]; pointsFr?: string[] }[];
};

export const sitePages: SitePage[] = [
  {
    key: "product",
    slug: "product",
    frSlug: "produit",
    title: "One connected pharmacy platform",
    titleFr: "Une plateforme de pharmacie connectée",
    summary: "Bring medicine governance, stock, dispensing, finance and management workflows together in one pharmacy platform.",
    summaryFr: "Rassemblez la gouvernance des médicaments, le stock, la dispensation, la finance et le pilotage dans une seule plateforme.",
    sections: [
      { title: "A complete capability catalogue", titleFr: "Un catalogue complet de capacités", body: "EMMAPRO covers the connected work behind a pharmacy: governed medicine records, batch-aware inventory, procurement, dispensing, credit, finance, analytics and commercial operations.", bodyFr: "EMMAPRO couvre les activités connectées de la pharmacie : fiches médicaments gouvernées, inventaire par lot, approvisionnement, dispensation, crédit, finance, analyses et opérations commerciales." },
      { title: "A platform, not only a point of sale", titleFr: "Une plateforme, pas seulement un point de vente", body: "The product catalogue includes quotation and sales orders, expiry and disposal, audit and configuration, multi-site management, reporting and Ultra Web & Remote Access.", bodyFr: "Le catalogue comprend les devis et commandes, les péremptions et destructions, l’audit et la configuration, le multi-sites, les rapports et l’accès Web à distance Ultra." },
    ],
  },
  {
    key: "editions",
    slug: "editions",
    frSlug: "editions",
    title: "Choose the right EMMAPRO edition",
    titleFr: "Choisissez l’édition EMMAPRO adaptée",
    summary: "Compare Pro, Pro-Plus, Pro Max and Ultra through a clear cumulative progression.",
    summaryFr: "Comparez Pro, Pro-Plus, Pro Max et Ultra selon une progression cumulative claire.",
    sections: [
      { title: "Start with the complete core", titleFr: "Commencez par le cœur complet", body: "Pro establishes the core EMMAPRO PHARMA platform. Higher editions add management and specialist capabilities without removing the foundation.", bodyFr: "Pro constitue le cœur complet de la plateforme EMMAPRO PHARMA. Les éditions supérieures ajoutent des capacités de gestion et spécialisées sans retirer cette base." },
      { title: "Workstation allowance", titleFr: "Quota de postes clients", body: "Pro includes 1 client PC, Pro-Plus 2, Pro Max 5 and Ultra unlimited client PCs. The Main Pharmacy Server PC is separate and is not counted against the client allowance.", bodyFr: "Pro inclut 1 poste client, Pro-Plus 2, Pro Max 5 et Ultra un nombre illimité de postes clients. Le serveur principal de la pharmacie est distinct et n’est pas compté dans ce quota." },
    ],
  },
  {
    key: "product-tour",
    slug: "product-tour",
    frSlug: "visite-produit",
    title: "Explore the EMMAPRO product tour",
    titleFr: "Découvrez la visite produit EMMAPRO",
    summary: "See how the platform connects medicine governance, daily operations and management visibility.",
    summaryFr: "Découvrez comment la plateforme relie la gouvernance des médicaments, les opérations et le pilotage.",
    sections: [
      { title: "Real product screens, carefully selected", titleFr: "Des écrans réels, sélectionnés avec soin", body: "The available source screenshots include operational and financial records that are not suitable for public release. This tour uses only neutral, reviewed interface captures; other modules are explained without exposing private data.", bodyFr: "Les captures sources disponibles contiennent des données opérationnelles et financières qui ne peuvent pas être publiées. Cette visite n’utilise que des écrans neutres vérifiés ; les autres modules sont présentés sans exposer de données privées." },
      { title: "A connected workflow", titleFr: "Un workflow connecté", body: "Start with medicine records, follow stock and procurement by batch, then connect dispensing, credit and financial oversight.", bodyFr: "Commencez par les fiches médicaments, suivez le stock et les achats par lot, puis reliez la dispensation, le crédit et le suivi financier." },
    ],
  },
  {
    key: "partners",
    slug: "partners",
    frSlug: "partenaires",
    title: "Build with the EMMAPRO partner network",
    titleFr: "Développez votre activité avec le réseau EMMAPRO",
    summary: "A governed partner programme for Master Resellers, Authorized Resellers and pharmacy customers.",
    summaryFr: "Un programme encadré pour les revendeurs principaux, revendeurs autorisés et pharmacies clientes.",
    sections: [
      { title: "A clear commercial structure", titleFr: "Une structure commerciale claire", body: "EMMAPRO Tech is the software vendor and license authority. Approved partners distribute EMMAPRO under agreed commercial terms and controlled license allocations.", bodyFr: "EMMAPRO Tech est l’éditeur du logiciel et l’autorité de licence. Les partenaires agréés distribuent EMMAPRO selon les conditions convenues et des allocations de licences contrôlées." },
      { title: "Choose your path", titleFr: "Choisissez votre parcours", body: "Established distributors can explore the Master Reseller programme. Local technology providers can apply as Authorized Resellers. Pharmacies can request a product demonstration directly.", bodyFr: "Les distributeurs établis peuvent découvrir le programme de revendeur principal. Les prestataires technologiques locaux peuvent candidater comme revendeurs autorisés. Les pharmacies peuvent demander une démonstration." },
    ],
  },
  {
    key: "resources",
    slug: "resources",
    frSlug: "ressources",
    title: "Professional resources & guides",
    titleFr: "Ressources et guides professionnels",
    summary: "Practical guides for pharmacy inventory, expiry control, credit and multi-site management.",
    summaryFr: "Des guides pratiques sur le stock, les péremptions, le crédit et la gestion multi-sites.",
    sections: [
      { title: "Useful, focused product education", titleFr: "Des ressources utiles et ciblées", body: "This resource centre is a small buyer-support library, not a daily news feed. Each guide focuses on a practical pharmacy-management topic and links to relevant EMMAPRO capabilities.", bodyFr: "Ce centre est une bibliothèque d’aide à la décision, pas un fil d’actualités quotidien. Chaque guide traite d’un sujet concret et renvoie aux capacités EMMAPRO pertinentes." },
    ],
  },
  {
    key: "security",
    slug: "security",
    frSlug: "securite",
    title: "Security, access and operational trust",
    titleFr: "Sécurité, accès et confiance opérationnelle",
    summary: "Separate the public marketing website from the private pharmacy application and customer data.",
    summaryFr: "Séparez le site public de l’application privée et des données des pharmacies.",
    sections: [
      { title: "Public and private stay separate", titleFr: "Le public et le privé restent séparés", body: "The public website presents product information and uses an external form provider for enquiries. Customer authentication and pharmacy operations belong to the separate EMMAPRO application.", bodyFr: "Le site public présente le produit et utilise un prestataire de formulaire externe pour les demandes. L’authentification client et les opérations appartiennent à l’application EMMAPRO séparée." },
      { title: "Controlled operations", titleFr: "Des opérations contrôlées", body: "EMMAPRO supports user and role controls, audit visibility and transaction traceability. The public website does not connect to customer PostgreSQL databases, internal APIs or private operational services.", bodyFr: "EMMAPRO prend en charge les utilisateurs, rôles, journaux d’audit et la traçabilité des transactions. Le site public ne se connecte ni aux bases PostgreSQL, ni aux API internes, ni aux services opérationnels privés." },
      { title: "Remote access with Ultra", titleFr: "Accès à distance avec Ultra", body: "Authorized Ultra users reach the private Web application through its own access architecture. The marketing site does not proxy or expose that environment.", bodyFr: "Les utilisateurs Ultra autorisés accèdent à l’application Web privée selon son architecture propre. Le site marketing ne relaie ni n’expose cet environnement." },
    ],
  },
  {
    key: "about",
    slug: "about",
    frSlug: "a-propos",
    title: "About EMMAPRO PHARMA",
    titleFr: "À propos d’EMMAPRO PHARMA",
    summary: "A pharmacy-management platform built to connect daily operations with business control.",
    summaryFr: "Une plateforme de gestion pharmaceutique qui relie les opérations quotidiennes au pilotage.",
    sections: [
      { title: "Built around pharmacy work", titleFr: "Conçu autour du travail en pharmacie", body: "EMMAPRO PHARMA brings medicine governance, stock intelligence, procurement, dispensing, finance and management tools into one product family.", bodyFr: "EMMAPRO PHARMA rassemble la gouvernance des médicaments, l’intelligence des stocks, l’approvisionnement, la dispensation, la finance et les outils de pilotage." },
      { title: "EMMAPRO Tech", titleFr: "EMMAPRO Tech", body: "EMMAPRO Tech is the software vendor and central license authority for the EMMAPRO product and partner programme.", bodyFr: "EMMAPRO Tech est l’éditeur et l’autorité centrale de licence du produit EMMAPRO et de son programme de partenaires." },
    ],
  },
  {
    key: "contact",
    slug: "contact",
    frSlug: "contact",
    title: "Request an EMMAPRO demonstration",
    titleFr: "Demandez une démonstration EMMAPRO",
    summary: "Tell us about your pharmacy or partner interest and the EMMAPRO team can follow up.",
    summaryFr: "Parlez-nous de votre pharmacie ou de votre projet de partenariat.",
    sections: [
      { title: "A focused first conversation", titleFr: "Un premier échange ciblé", body: "Share your business name, country, email, pharmacy locations and primary interest. Please do not include passwords, patient information, license keys or sensitive operational data.", bodyFr: "Indiquez le nom de votre entreprise, le pays, l’e-mail, le nombre de sites et votre intérêt principal. N’incluez aucun mot de passe, donnée patient, clé de licence ou donnée opérationnelle sensible." },
    ],
  },
  {
    key: "solutions",
    slug: "solutions",
    frSlug: "solutions",
    title: "Solutions for pharmacy teams",
    titleFr: "Des solutions pour les équipes de pharmacie",
    summary: "Explore EMMAPRO workflows for independent pharmacies, managers and growing multi-site operations.",
    summaryFr: "Découvrez les workflows EMMAPRO pour les pharmacies indépendantes, responsables et réseaux multi-sites.",
    sections: [
      { title: "One platform, different operating needs", titleFr: "Une plateforme, différents besoins opérationnels", body: "Select a solution view to understand how EMMAPRO capabilities support a particular pharmacy context. Feature and edition availability varies by license.", bodyFr: "Choisissez un parcours pour découvrir comment les capacités EMMAPRO répondent à un contexte particulier. Les fonctions disponibles varient selon la licence." },
    ],
  },
  {
    key: "privacy",
    slug: "privacy-policy",
    frSlug: "confidentialite",
    title: "Privacy policy",
    titleFr: "Politique de confidentialité",
    summary: "How the public website handles information submitted through its enquiry forms.",
    summaryFr: "Comment le site public traite les informations envoyées via ses formulaires.",
    sections: [
      { title: "Information you submit", titleFr: "Informations que vous transmettez", body: "Demo and partner enquiry forms request business contact details and the information needed to respond. Do not send patient data, passwords, license keys or other sensitive operational information.", bodyFr: "Les formulaires de démonstration et de partenariat demandent les coordonnées professionnelles nécessaires au suivi. N’envoyez aucune donnée patient, mot de passe, clé de licence ou autre information opérationnelle sensible." },
      { title: "Form provider and retention", titleFr: "Prestataire de formulaire et conservation", body: "Enquiry submissions are forwarded to the external form provider selected by EMMAPRO through a same-origin server-side endpoint. The provider’s privacy and retention terms apply to its processing; the provider access key is not sent to your browser. Contact EMMAPRO through the published support channels for questions about a specific submission.", bodyFr: "Les demandes sont transmises au prestataire externe choisi par EMMAPRO via un endpoint serveur de même origine. Les règles de confidentialité et de conservation de ce prestataire s’appliquent à son traitement ; sa clé d’accès n’est pas envoyée à votre navigateur. Contactez EMMAPRO via les coordonnées de support publiées pour toute question sur une demande." },
    ],
  },
  {
    key: "terms",
    slug: "terms",
    frSlug: "conditions",
    title: "Website terms",
    titleFr: "Conditions d’utilisation du site",
    summary: "Terms for using this public EMMAPRO PHARMA website.",
    summaryFr: "Conditions d’utilisation du site public EMMAPRO PHARMA.",
    sections: [
      { title: "Product information", titleFr: "Informations produit", body: "Website content is general product information. Edition availability and commercial terms are governed by the applicable EMMAPRO license and partner or customer agreement.", bodyFr: "Le contenu du site présente des informations générales sur le produit. La disponibilité des éditions et les conditions commerciales relèvent de la licence EMMAPRO et de l’accord client ou partenaire applicable." },
      { title: "No operational service", titleFr: "Aucun service opérationnel", body: "This public website does not provide pharmacy operations, customer login or access to operational records. Customer login links to the separate application.", bodyFr: "Ce site public ne fournit pas de service de gestion pharmaceutique, de connexion client ni d’accès aux dossiers opérationnels. Le lien client mène à l’application séparée." },
    ],
  },
  {
    key: "cookies",
    slug: "cookie-policy",
    frSlug: "cookies",
    title: "Cookie policy",
    titleFr: "Politique relative aux cookies",
    summary: "This website is designed to operate without advertising trackers or a database-backed profile.",
    summaryFr: "Ce site est conçu sans traceurs publicitaires ni profilage avec base de données.",
    sections: [
      { title: "Essential site operation", titleFr: "Fonctionnement essentiel", body: "The public website uses only the browser storage and cookies required by its framework. Contact requests are forwarded server-side to the selected external form provider; no analytics or advertising identifiers are configured by default.", bodyFr: "Le site public utilise uniquement le stockage et les cookies nécessaires à son fonctionnement. Les demandes de contact sont transmises côté serveur au prestataire externe choisi ; aucun identifiant analytique ou publicitaire n’est configuré par défaut." },
    ],
  },
  {
    key: "faq",
    slug: "faq",
    frSlug: "questions-frequentes",
    title: "Frequently asked questions",
    titleFr: "Questions fréquentes",
    summary: "Answers about product scope, editions, workstations and remote access.",
    summaryFr: "Réponses sur le produit, les éditions, les postes et l’accès à distance.",
    sections: [
      { title: "Is EMMAPRO only a POS?", titleFr: "EMMAPRO est-il uniquement un point de vente ?", body: "No. It covers medicine governance, stock, procurement, dispensing, credit, financial control, analytics, insurance, wholesale, quotations, expiry, multi-site management and more.", bodyFr: "Non. Il couvre la gouvernance des médicaments, le stock, l’approvisionnement, la dispensation, le crédit, la finance, les analyses, l’assurance, la vente en gros, les devis, les péremptions et le multi-sites." },
      { title: "Which edition includes remote access?", titleFr: "Quelle édition inclut l’accès à distance ?", body: "Web & Remote Access is a current capability included with Ultra.", bodyFr: "L’accès Web et à distance est une capacité actuelle incluse avec Ultra." },
      { title: "Does the server count as a client PC?", titleFr: "Le serveur compte-t-il comme poste client ?", body: "No. The Main Pharmacy Server PC is separate and is not counted against the client workstation allowance.", bodyFr: "Non. Le serveur principal est distinct et n’est pas compté dans le quota des postes clients." },
    ],
  },
];

export const sitePageBySlug = (slug: string, locale: Locale) =>
  sitePages.find((page) => (locale === "en" ? page.slug : page.frSlug) === slug);

export const englishToFrenchSlug = (slug: string) =>
  sitePages.find((page) => page.slug === slug)?.frSlug ?? slug;

export const frenchToEnglishSlug = (slug: string) =>
  sitePages.find((page) => page.frSlug === slug)?.slug ?? slug;
