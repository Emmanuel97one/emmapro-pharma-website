import Link from "next/link";
import { SiteFrame } from "@/components/site-shell";

export default function FrenchNotFound() {
  return <SiteFrame locale="fr" alternateHref="/"><section className="not-found"><span className="not-found-code">404</span><h1>Cette page est introuvable.</h1><p>Consultez le catalogue de la plateforme ou revenez à l’accueil.</p><div><Link className="button" href="/fr/">Accueil</Link><Link className="button button-secondary" href="/fr/produit/">Découvrir le produit</Link></div></section></SiteFrame>;
}
