import Link from "next/link";
import { SiteFrame } from "@/components/site-shell";

export default function EnglishNotFound() {
  return <SiteFrame locale="en" alternateHref="/fr/"><section className="not-found"><span className="not-found-code">404</span><h1>This page could not be found.</h1><p>Use the platform catalogue or return to the homepage.</p><div><Link className="button" href="/">Go to homepage</Link><Link className="button button-secondary" href="/product/">Explore the product</Link></div></section></SiteFrame>;
}
