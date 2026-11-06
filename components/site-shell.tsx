import Link from "next/link";
import { features, productGroups, type Locale } from "@/content/product";
import { featureHref, pageHref, partnerHref } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";

const copy = {
  en: {
    home: "Home",
    product: "Product",
    solutions: "Solutions",
    tour: "Product tour",
    editions: "Editions",
    partners: "Partners",
    resources: "Resources",
    security: "Security",
    about: "About",
    contact: "Request a demo",
    login: "Customer login",
    ecosystem: "Explore the platform",
    explore: "View all capabilities",
    footerText: "Complete pharmacy management, inventory intelligence and business control.",
    productGroup: "Platform capabilities",
    company: "Company",
    partnerGroup: "Partners",
    legal: "Legal",
    guides: "Professional guides",
    email: "Email",
    whatsappBurundi: "WhatsApp",
    whatsappIndonesia: "WhatsApp",
    contactDetails: "Contact",
    privacy: "Privacy",
    terms: "Terms",
    cookies: "Cookies",
    language: "Language",
  },
  fr: {
    home: "Accueil",
    product: "Produit",
    solutions: "Solutions",
    tour: "Visite produit",
    editions: "Éditions",
    partners: "Partenaires",
    resources: "Ressources",
    security: "Sécurité",
    about: "À propos",
    contact: "Demander une démo",
    login: "Connexion client",
    ecosystem: "Découvrir la plateforme",
    explore: "Voir toutes les capacités",
    footerText: "Gestion complète de pharmacie, intelligence des stocks et pilotage de l’activité.",
    productGroup: "Capacités de la plateforme",
    company: "Entreprise",
    partnerGroup: "Partenaires",
    legal: "Informations légales",
    guides: "Guides professionnels",
    email: "E-mail",
    whatsappBurundi: "WhatsApp",
    whatsappIndonesia: "WhatsApp",
    contactDetails: "Contact",
    privacy: "Confidentialité",
    terms: "Conditions",
    cookies: "Cookies",
    language: "Langue",
  },
} as const;

export function SiteHeader({ locale, alternateHref }: { locale: Locale; alternateHref: string }) {
  const text = copy[locale];
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href={pageHref("home", locale)} aria-label={`${siteConfig.name} — ${text.home}`}>
          <span className="brand-copy"><strong>EMMAPRO</strong><small>PHARMA</small></span>
        </Link>
        <nav className="desktop-nav" aria-label={locale === "en" ? "Main navigation" : "Navigation principale"}>
          <Link href={pageHref("home", locale)}>{text.home}</Link>
          <details className="nav-dropdown">
            <summary>{text.product}<span className="chevron" aria-hidden="true" /></summary>
            <div className="mega-menu">
              <div className="mega-heading">
                <span className="eyebrow">{text.productGroup}</span>
                <Link href={pageHref("product", locale)}>{text.explore} <span aria-hidden="true">→</span></Link>
              </div>
              <div className="mega-grid">
                {productGroups(locale).map((group) => (
                  <section className="mega-group" key={group.name}>
                    <h3>{group.name}</h3>
                    {group.items.map((feature) => (
                      <Link href={featureHref(feature.id, locale)} key={feature.id}>
                        {locale === "en" ? feature.title : feature.titleFr}
                      </Link>
                    ))}
                  </section>
                ))}
              </div>
            </div>
          </details>
          <Link href={pageHref("solutions", locale)}>{text.solutions}</Link>
          <Link href={pageHref("product-tour", locale)}>{text.tour}</Link>
          <Link href={pageHref("editions", locale)}>{text.editions}</Link>
          <Link href={pageHref("partners", locale)}>{text.partners}</Link>
          <Link href={pageHref("resources", locale)}>{text.resources}</Link>
          <Link href={pageHref("security", locale)}>{text.security}</Link>
        </nav>
        <div className="header-actions">
          <Link className="language-link" href={alternateHref} lang={locale === "en" ? "fr" : "en"} aria-label={locale === "en" ? "Voir cette page en français" : "View this page in English"}>
            {locale === "en" ? "FR" : "EN"}
          </Link>
          <Link className="login-link" href={siteConfig.appUrl} target="_blank" rel="noopener noreferrer" aria-label={text.login}>
            <span className="login-full">{text.login}</span>
            <span className="login-compact">{locale === "en" ? "Login" : "Connexion"}</span>
          </Link>
          <Link className="button button-small" href={pageHref("contact", locale)}>{text.contact}<span aria-hidden="true">↗</span></Link>
        </div>
        <details className="mobile-nav">
          <summary aria-label={locale === "en" ? "Open navigation" : "Ouvrir la navigation"}><span /><span /><span /></summary>
          <nav aria-label={locale === "en" ? "Mobile navigation" : "Navigation mobile"}>
            <Link href={pageHref("home", locale)}>{text.home}</Link>
            <Link href={pageHref("product", locale)}>{text.product}</Link>
            <Link href={pageHref("solutions", locale)}>{text.solutions}</Link>
            <Link href={pageHref("product-tour", locale)}>{text.tour}</Link>
            <Link href={pageHref("editions", locale)}>{text.editions}</Link>
            <Link href={pageHref("partners", locale)}>{text.partners}</Link>
            <Link href={pageHref("resources", locale)}>{text.resources}</Link>
            <Link href={pageHref("security", locale)}>{text.security}</Link>
            <Link href={pageHref("about", locale)}>{text.about}</Link>
            <Link href={siteConfig.appUrl} target="_blank" rel="noopener noreferrer">{text.login}</Link>
            <Link href={alternateHref}>{locale === "en" ? "Français" : "English"}</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const text = copy[locale];
  const featured = features.filter((feature) => ["operations", "stock", "finance", "multisite", "remote"].includes(feature.id));
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="brand brand-light" href={pageHref("home", locale)}>
            <span className="brand-copy"><strong>EMMAPRO</strong><small>PHARMA</small></span>
          </Link>
          <p>{text.footerText}</p>
          <span className="footer-company">EMMAPRO Tech · Software Vendor &amp; License Authority</span>
          <div className="footer-contact">
            <h2>{text.contactDetails}</h2>
            <a href={`mailto:${siteConfig.contactEmail}`}>
              <span aria-hidden="true">✉</span> {siteConfig.contactEmail}
            </a>
            <a href={siteConfig.contactWhatsappUrl} target="_blank" rel="noopener noreferrer">
              <span aria-hidden="true">◔</span> {text.whatsappBurundi}: {siteConfig.contactWhatsapp}
            </a>
            <a href={siteConfig.contactWhatsappIndonesiaUrl} target="_blank" rel="noopener noreferrer">
              <span aria-hidden="true">◔</span> {text.whatsappIndonesia}: {siteConfig.contactWhatsappIndonesia}
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h2>{text.product}</h2>
          {featured.map((feature) => <Link key={feature.id} href={featureHref(feature.id, locale)}>{locale === "en" ? feature.title : feature.titleFr}</Link>)}
          <Link href={pageHref("product", locale)}>{text.explore} →</Link>
        </div>
        <div className="footer-column">
          <h2>{text.company}</h2>
          <Link href={pageHref("solutions", locale)}>{text.solutions}</Link>
          <Link href={pageHref("product-tour", locale)}>{text.tour}</Link>
          <Link href={pageHref("editions", locale)}>{text.editions}</Link>
          <Link href={pageHref("about", locale)}>{text.about}</Link>
          <Link href={pageHref("contact", locale)}>{text.contact}</Link>
          <Link href={pageHref("resources", locale)}>{text.guides}</Link>
        </div>
        <div className="footer-column">
          <h2>{text.partnerGroup}</h2>
          <Link href={pageHref("partners", locale)}>{text.partners}</Link>
          <Link href={partnerHref("master-reseller", locale)}>{locale === "en" ? "Master Reseller" : "Revendeur principal"}</Link>
          <Link href={partnerHref("authorized-reseller", locale)}>{locale === "en" ? "Authorized Reseller" : "Revendeur autorisé"}</Link>
          <Link href={partnerHref("apply", locale)}>{locale === "en" ? "Become a partner" : "Devenir partenaire"}</Link>
        </div>
        <div className="footer-column">
          <h2>{text.legal}</h2>
          <Link href={pageHref("security", locale)}>{text.security}</Link>
          <Link href={pageHref("privacy", locale)}>{text.privacy}</Link>
          <Link href={pageHref("terms", locale)}>{text.terms}</Link>
          <Link href={pageHref("cookies", locale)}>{text.cookies}</Link>
          <Link href={siteConfig.appUrl} target="_blank" rel="noopener noreferrer">{text.login} ↗</Link>
        </div>
        {siteConfig.socialLinks.length > 0 && (
          <div className="footer-social">
            <h2>{locale === "en" ? "Follow EMMAPRO" : "Suivez EMMAPRO"}</h2>
            <div className="social-links">
              {siteConfig.socialLinks.map(({ platform, url }) => (
                <a key={platform} href={url} target="_blank" rel="noopener noreferrer" aria-label={`${platform} — EMMAPRO Tech`}>
                  <span className={`social-mark social-${platform.toLowerCase()}`} aria-hidden="true">
                    {platform === "LinkedIn" ? "in" : platform === "YouTube" ? "▶" : platform === "Instagram" ? "◎" : platform === "WhatsApp" ? "◔" : "f"}
                  </span>
                  <span>{platform}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} EMMAPRO Tech. {locale === "en" ? "All rights reserved." : "Tous droits réservés."}</span>
        <span>{text.language}: <Link href="/">English</Link> · <Link href="/fr/">Français</Link></span>
      </div>
    </footer>
  );
}

export function SiteFrame({
  locale,
  alternateHref,
  children,
}: {
  locale: Locale;
  alternateHref: string;
  children: React.ReactNode;
}) {
  return (
    <div lang={locale} className={`site-frame locale-${locale}`}>
      <a className="skip-link" href="#main-content">{locale === "en" ? "Skip to content" : "Aller au contenu"}</a>
      <SiteHeader locale={locale} alternateHref={alternateHref} />
      <main id="main-content">{children}</main>
      <SiteFooter locale={locale} />
    </div>
  );
}
