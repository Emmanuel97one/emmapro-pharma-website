import Link from "next/link";
import Image from "next/image";
import { featureHref, pageHref } from "@/lib/routes";
import { absoluteUrl } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";
import type { Feature, Locale } from "@/content/product";
import { JsonLd } from "./json-ld";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

export function PageHero({
  locale,
  eyebrow,
  title,
  summary,
  actions = false,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  summary: string;
  actions?: boolean;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p className="hero-summary">{summary}</p>
        {actions && (
          <div className="hero-actions">
            <Link className="button" href={pageHref("contact", locale)}>{locale === "en" ? "Request a demo" : "Demander une démonstration"} <span aria-hidden="true">↗</span></Link>
            <Link className="button button-secondary" href={pageHref("product", locale)}>{locale === "en" ? "Explore the platform" : "Découvrir la plateforme"} <span aria-hidden="true">→</span></Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, summary }: { eyebrow?: string; title: string; summary?: string }) {
  return (
    <div className="section-heading">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {summary && <p>{summary}</p>}
    </div>
  );
}

export function FeatureCard({ feature, locale }: { feature: Feature; locale: Locale }) {
  return (
    <Link className="feature-card" href={featureHref(feature.id, locale)}>
      <span className="feature-icon" aria-hidden="true">{featureIcon[feature.id] ?? "✳"}</span>
      <span className="feature-card-copy">
        <strong>{locale === "en" ? feature.title : feature.titleFr}</strong>
        <span>{locale === "en" ? feature.summary : feature.summaryFr}</span>
        <span className="feature-card-action">{locale === "en" ? "Explore capability" : "Découvrir la capacité"} <span aria-hidden="true">→</span></span>
      </span>
      <span className="feature-arrow" aria-hidden="true">↗</span>
    </Link>
  );
}

const featureIcon: Record<string, string> = {
  operations: "◉",
  medicine: "✚",
  stock: "▦",
  procurement: "↗",
  dispensing: "＋",
  credit: "↔",
  recovery: "◈",
  finance: "◎",
  analytics: "⌁",
  insurance: "◇",
  wholesale: "⇄",
  quotation: "≡",
  expiry: "◷",
  declaration: "▤",
  multisite: "⌘",
  reports: "↗",
  compliance: "✓",
  configuration: "⚙",
  remote: "⌘",
};

export function ScreenshotFrame({
  src,
  alt,
  label,
  width = 1558,
  height = 895,
  priority = false,
}: {
  src: string;
  alt: string;
  label: string;
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  return (
    <figure className="screenshot-figure">
      <div className="browser-frame">
        <div className="browser-bar" aria-hidden="true"><span /><span /><span /><small>{siteConfig.name}</small></div>
        <Image src={src} alt={alt} width={width} height={height} loading={priority ? "eager" : "lazy"} priority={priority} />
      </div>
      <figcaption>{label}</figcaption>
    </figure>
  );
}

export function Breadcrumbs({ locale, items }: { locale: Locale; items: { label: string; href?: string }[] }) {
  const entries = [
    { label: locale === "en" ? "Home" : "Accueil", href: pageHref("home", locale) },
    ...items,
  ];
  return (
    <>
      <JsonLd value={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: entries.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.label,
          ...(item.href ? { item: absoluteUrl(item.href) } : {}),
        })),
      }} />
      <nav className="breadcrumbs container" aria-label={locale === "en" ? "Breadcrumb" : "Fil d’Ariane"}>
        <ol>
        {entries.map((item, index) => (
          <li key={`${item.label}-${index}`}>
            {index > 0 && <span aria-hidden="true">/</span>}
            {item.href && index !== entries.length - 1 ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
          </li>
        ))}
        </ol>
      </nav>
    </>
  );
}
