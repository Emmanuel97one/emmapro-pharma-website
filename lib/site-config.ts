const socialProfiles: ReadonlyArray<{ platform: string; value: string | undefined }> = [
  { platform: "Facebook", value: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK_URL || "https://www.facebook.com/emmaprosofware" },
  { platform: "Instagram", value: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM_URL },
  { platform: "LinkedIn", value: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN_URL || "https://www.linkedin.com/in/irambona-emmanuel-bb458b28a" },
  { platform: "YouTube", value: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE_URL || "https://youtube.com/@emmapro-tech1" },
  { platform: "WhatsApp", value: process.env.NEXT_PUBLIC_SOCIAL_WHATSAPP_URL || "https://wa.me/25768517587" },
];
const contactWhatsapp = process.env.NEXT_PUBLIC_CONTACT_WHATSAPP_NUMBER?.trim() || "+257 68 517 587";
const contactWhatsappIndonesia = process.env.NEXT_PUBLIC_CONTACT_WHATSAPP_INDONESIA_NUMBER?.trim() || "+62 852 1183 3867";
const contactWhatsappDigits = contactWhatsapp.replace(/\D/g, "");
const contactWhatsappIndonesiaDigits = contactWhatsappIndonesia.replace(/\D/g, "");

if (!/^\d{8,15}$/.test(contactWhatsappDigits) || !/^\d{8,15}$/.test(contactWhatsappIndonesiaDigits)) {
  throw new Error("WhatsApp contact numbers must contain 8–15 international digits.");
}

export const siteConfig = {
  name: "EMMAPRO PHARMA",
  organization: "EMMAPRO Tech",
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || (process.env.NODE_ENV === "production" ? "https://www.emmapro-pharma.com" : "http://localhost:3000")).replace(/\/+$/, ""),
  appUrl: (process.env.NEXT_PUBLIC_APP_URL || "https://app.emmapro-pharma.com").replace(/\/+$/, ""),
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "emmapro.pharma@gmail.com",
  contactWhatsapp,
  contactWhatsappUrl: `https://wa.me/${contactWhatsappDigits}`,
  contactWhatsappIndonesia,
  contactWhatsappIndonesiaUrl: `https://wa.me/${contactWhatsappIndonesiaDigits}`,
  indexable: process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true"
    || (process.env.NEXT_PUBLIC_SITE_INDEXABLE !== "false" && process.env.NODE_ENV === "production"),
  socialLinks: socialProfiles.flatMap(({ platform, value }) => {
    if (!value) return [];

    let url: URL;
    try {
      url = new URL(value);
    } catch {
      throw new Error(`${platform} social URL must be an absolute HTTP(S) URL.`);
    }

    if (url.protocol !== "https:" && url.protocol !== "http:") {
      throw new Error(`${platform} social URL must use HTTP or HTTPS.`);
    }

    return [{ platform, url: url.toString() }];
  }),
};

export function absoluteUrl(path: string) {
  return new URL(path.replace(/^\/+/, ""), `${siteConfig.siteUrl}/`).toString();
}
