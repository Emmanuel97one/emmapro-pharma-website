import type { Metadata } from "next";
import "../globals.css";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Pharmacy Management Software | EMMAPRO PHARMA",
    template: "%s | EMMAPRO PHARMA",
  },
  description: "EMMAPRO PHARMA is pharmacy management software for stock, dispensing, finance, multi-site operations and connected pharmacy reporting.",
  keywords: [
    "pharmacy management software",
    "pharmacy software",
    "pharmacy POS system",
    "pharmacy inventory management",
    "medicine stock management",
    "pharmacy finance software",
    "multi-site pharmacy software",
  ],
  icons: { icon: "/favicon.svg" },
};

export default function EnglishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
