import type { Metadata } from "next";
import "../globals.css";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Logiciel de gestion de pharmacie | EMMAPRO PHARMA",
    template: "%s | EMMAPRO PHARMA",
  },
  description: "EMMAPRO PHARMA propose un logiciel de gestion de pharmacie pour le stock, la dispensation, la finance, les multi-sites et le pilotage connecté.",
  keywords: [
    "logiciel de gestion de pharmacie",
    "logiciel pharmacie",
    "gestion stock pharmacie",
    "logiciel caisse pharmacie",
    "logiciel point de vente pharmacie",
    "gestion finance pharmacie",
    "logiciel multi-sites pharmacie",
  ],
  icons: { icon: "/favicon.svg" },
};

export default function FrenchRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
