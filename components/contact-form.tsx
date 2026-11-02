"use client";

import { type FormEvent, useState } from "react";
import Link from "next/link";
import { pageHref } from "@/lib/routes";
import type { Locale } from "@/content/product";

type Props = {
  locale: Locale;
  partner?: boolean;
};

const translations = {
  en: {
    name: "Contact name",
    business: "Pharmacy / business name",
    country: "Country",
    email: "Business email",
    phone: "Phone / WhatsApp (optional)",
    locations: "Number of pharmacy locations",
    interest: "Primary interest",
    message: "How can we help?",
    consent: "I agree to be contacted about this enquiry.",
    privacy: "Privacy policy",
    submit: "Send request",
    sending: "Sending…",
    required: "Please complete all required fields and accept the privacy acknowledgement.",
    missing: "The contact form is not configured yet. Please try again later.",
    success: "Thank you. Your request has been sent.",
    failure: "We could not send your request. Please check your connection and try again.",
    locationsOptions: ["1 location", "2–5 locations", "6 or more locations"],
    interestOptions: ["Product demonstration", "Editions and licensing", "Multi-site management", "Web & Remote Access", "Partner programme", "Other"],
    partnerOptions: ["Master Reseller", "Authorized Reseller", "Direct pharmacy customer"],
  },
  fr: {
    name: "Nom du contact",
    business: "Nom de la pharmacie / entreprise",
    country: "Pays",
    email: "E-mail professionnel",
    phone: "Téléphone / WhatsApp (facultatif)",
    locations: "Nombre de sites pharmaceutiques",
    interest: "Votre intérêt principal",
    message: "Comment pouvons-nous vous aider ?",
    consent: "J’accepte d’être contacté au sujet de cette demande.",
    privacy: "Politique de confidentialité",
    submit: "Envoyer la demande",
    sending: "Envoi en cours…",
    required: "Veuillez remplir les champs obligatoires et accepter la mention de confidentialité.",
    missing: "Le formulaire de contact n’est pas encore configuré. Veuillez réessayer ultérieurement.",
    success: "Merci. Votre demande a été envoyée.",
    failure: "Votre demande n’a pas pu être envoyée. Vérifiez votre connexion et réessayez.",
    locationsOptions: ["1 site", "2 à 5 sites", "6 sites ou plus"],
    interestOptions: ["Démonstration du produit", "Éditions et licences", "Gestion multi-sites", "Accès Web et à distance", "Programme partenaire", "Autre"],
    partnerOptions: ["Revendeur principal", "Revendeur autorisé", "Pharmacie cliente"],
  },
};

export function ContactForm({ locale, partner = false }: Props) {
  const text = translations[locale];
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (!data.get("consent")) {
      setStatus("error");
      setMessage(text.required);
      return;
    }
    data.set("form_type", partner ? "partner" : "demo");
    data.set("locale", locale);
    const payload = Object.fromEntries(
      Array.from(data.entries()).filter((entry): entry is [string, string] => typeof entry[1] === "string"),
    );
    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { success?: boolean };
      if (!response.ok || !result.success) {
        setStatus("error");
        setMessage(response.status === 503 ? text.missing : text.failure);
        return;
      }
      form.reset();
      setStatus("success");
      setMessage(text.success);
    } catch {
      setStatus("error");
      setMessage(text.failure);
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-grid">
        <div className="form-honeypot" aria-hidden="true">
          <label>Leave this field empty<input name="botcheck" tabIndex={-1} autoComplete="off" /></label>
        </div>
        <label>{text.name}<input name="name" autoComplete="name" required maxLength={120} /></label>
        <label>{text.business}<input name="business" autoComplete="organization" required maxLength={160} /></label>
        <label>{text.country}<input name="country" autoComplete="country-name" required maxLength={100} /></label>
        <label>{text.email}<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
        <label>{text.phone}<input name="phone" type="tel" autoComplete="tel" maxLength={40} /></label>
        <label>{text.locations}
          <select name="locations" defaultValue="" required>
            <option value="" disabled>{locale === "en" ? "Select an option" : "Choisissez une option"}</option>
            {text.locationsOptions.map((option) => <option value={option} key={option}>{option}</option>)}
          </select>
        </label>
        {partner ? (
          <label className="form-full">{locale === "en" ? "Desired partner level" : "Niveau de partenariat souhaité"}
            <select name="partner_level" defaultValue="" required>
              <option value="" disabled>{locale === "en" ? "Select a partner path" : "Choisissez un parcours"}</option>
              {text.partnerOptions.map((option) => <option key={option}>{option}</option>)}
            </select>
          </label>
        ) : (
          <label className="form-full">{text.interest}
            <select name="interest" defaultValue="" required>
              <option value="" disabled>{locale === "en" ? "Select an interest" : "Choisissez un intérêt"}</option>
              {text.interestOptions.map((option) => <option key={option}>{option}</option>)}
            </select>
          </label>
        )}
        {partner && <>
          <label>{locale === "en" ? "Target market / territory (optional)" : "Marché / territoire cible (facultatif)"}<input name="target_market" maxLength={160} /></label>
          <label>{locale === "en" ? "Expected license volume (optional)" : "Volume de licences estimé (facultatif)"}<input name="expected_license_volume" maxLength={120} /></label>
          <label>{locale === "en" ? "Company website (optional)" : "Site web de l’entreprise (facultatif)"}<input name="website" type="url" maxLength={254} /></label>
          <label className="form-full">{locale === "en" ? "Relevant software / IT distribution experience (optional)" : "Expérience pertinente en distribution logicielle / informatique (facultatif)"}<textarea name="experience" rows={3} maxLength={1000} /></label>
        </>}
        <label className="form-full">{text.message}<textarea name="message" rows={5} required maxLength={2000} /></label>
        <label className="consent form-full"><input name="consent" type="checkbox" required /><span>{text.consent} <Link href={pageHref("privacy", locale)}>{text.privacy}</Link>.</span></label>
        <p className="form-note form-full">{locale === "en" ? "Please do not include patient data, passwords, license keys or sensitive pharmacy records." : "N’incluez aucune donnée patient, mot de passe, clé de licence ou dossier pharmaceutique sensible."}</p>
        <div className="form-actions form-full">
          <button className="button" type="submit" disabled={status === "sending"}>{status === "sending" ? text.sending : text.submit} <span aria-hidden="true">→</span></button>
          <p aria-live="polite" className={`form-status ${status}`}>{message}</p>
        </div>
      </div>
    </form>
  );
}
