interface ContactEnvironment {
  WEB3FORMS_ACCESS_KEY?: string;
}

interface ContactContext {
  request: Request;
  env: ContactEnvironment;
}

const responseHeaders = { "Cache-Control": "no-store", "Content-Type": "application/json; charset=utf-8" };
const maxRequestLength = 12_000;

function jsonResponse(body: { success: boolean }, status: number) {
  return new Response(JSON.stringify(body), { status, headers: responseHeaders });
}

function readString(form: Record<string, unknown>, key: string, maxLength: number): string | null {
  const value = form[key];
  if (typeof value !== "string" || value.length > maxLength) return null;
  return value.trim();
}

async function readLimitedBody(request: Request): Promise<{ body: string } | { status: 400 | 413 }> {
  const declaredLength = request.headers.get("Content-Length");
  if (declaredLength && (!/^\d+$/.test(declaredLength) || Number(declaredLength) > maxRequestLength)) {
    return { status: Number(declaredLength) > maxRequestLength ? 413 : 400 };
  }

  const reader = request.body?.getReader();
  if (!reader) return { status: 400 };
  const chunks: Uint8Array[] = [];
  let length = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    length += value.byteLength;
    if (length > maxRequestLength) {
      await reader.cancel();
      return { status: 413 };
    }
    chunks.push(value);
  }

  const bytes = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return { body: new TextDecoder().decode(bytes) };
}

export async function onRequestPost({ request, env }: ContactContext): Promise<Response> {
  const origin = request.headers.get("Origin");
  if (origin && origin !== new URL(request.url).origin) return jsonResponse({ success: false }, 403);

  const requestBody = await readLimitedBody(request);
  if (!("body" in requestBody)) return jsonResponse({ success: false }, requestBody.status);

  let form: Record<string, unknown>;
  try {
    const parsed: unknown = JSON.parse(requestBody.body);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return jsonResponse({ success: false }, 400);
    }
    form = parsed as Record<string, unknown>;
  } catch {
    return jsonResponse({ success: false }, 400);
  }

  const honeypot = readString(form, "botcheck", 200);
  if (honeypot === null || honeypot !== "") return jsonResponse({ success: false }, 400);

  const name = readString(form, "name", 120);
  const business = readString(form, "business", 160);
  const country = readString(form, "country", 100);
  const email = readString(form, "email", 254);
  const phone = readString(form, "phone", 40);
  const locations = readString(form, "locations", 40);
  const message = readString(form, "message", 2000);
  const locale = readString(form, "locale", 2);
  const formType = readString(form, "form_type", 20);
  const consent = readString(form, "consent", 10);
  const partnerLevel = readString(form, "partner_level", 80);
  const interest = readString(form, "interest", 80);

  if (
    (Object.hasOwn(form, "phone") && phone === null) ||
    !name || !business || !country || !email || !message ||
    !locations || consent !== "on" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    (locale !== "en" && locale !== "fr") ||
    (formType !== "demo" && formType !== "partner") ||
    !["1 location", "2–5 locations", "6 or more locations", "1 site", "2 à 5 sites", "6 sites ou plus"].includes(locations) ||
    (formType === "partner" && (!partnerLevel || interest !== null)) ||
    (formType === "demo" && (!interest || partnerLevel !== null))
  ) {
    return jsonResponse({ success: false }, 400);
  }

  const allowedInterests = [
    "Product demonstration", "Editions and licensing", "Multi-site management", "Web & Remote Access", "Partner programme", "Other",
    "Démonstration du produit", "Éditions et licences", "Gestion multi-sites", "Accès Web et à distance", "Programme partenaire", "Autre",
  ];
  const allowedPartnerLevels = [
    "Master Reseller", "Authorized Reseller", "Direct pharmacy customer",
    "Revendeur principal", "Revendeur autorisé", "Pharmacie cliente",
  ];
  if (
    (interest !== null && !allowedInterests.includes(interest)) ||
    (partnerLevel !== null && !allowedPartnerLevels.includes(partnerLevel))
  ) {
    return jsonResponse({ success: false }, 400);
  }

  const accessKey = env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return jsonResponse({ success: false }, 503);

  const providerFields: Record<string, string> = {
    access_key: accessKey,
    subject: formType === "partner" ? "EMMAPRO partner enquiry" : "EMMAPRO PHARMA demo request",
    from_name: "EMMAPRO PHARMA website",
    name,
    business,
    country,
    email,
    phone: phone ?? "",
    locations,
    message,
    locale,
  };

  const optionalFields = formType === "partner" ? [
    "target_market",
    "expected_license_volume",
    "website",
    "experience",
  ] as const : [];
  for (const key of optionalFields) {
    if (!Object.hasOwn(form, key)) continue;
    const value = readString(form, key, key === "experience" ? 1000 : 254);
    if (value === null) return jsonResponse({ success: false }, 400);
    if (key === "website" && value) {
      try {
        const websiteUrl = new URL(value);
        if (websiteUrl.protocol !== "https:" && websiteUrl.protocol !== "http:") {
          return jsonResponse({ success: false }, 400);
        }
      } catch {
        return jsonResponse({ success: false }, 400);
      }
    }
    if (value) providerFields[key] = value;
  }
  if (partnerLevel) providerFields.partner_level = partnerLevel;
  if (interest) providerFields.interest = interest;

  let providerResponse: Response;
  try {
    providerResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(providerFields),
    });
  } catch (error) {
    console.error("Web3Forms contact submission failed.", error);
    return jsonResponse({ success: false }, 502);
  }

  let providerResult: { success?: boolean };
  try {
    providerResult = await providerResponse.json() as { success?: boolean };
  } catch (error) {
    console.error("Web3Forms returned an invalid response.", error);
    return jsonResponse({ success: false }, 502);
  }

  return providerResponse.ok && providerResult.success
    ? jsonResponse({ success: true }, 200)
    : jsonResponse({ success: false }, 502);
}
