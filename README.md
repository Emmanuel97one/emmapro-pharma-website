# EMMAPRO PHARMA public website

The public marketing site is a static-exported Next.js App Router project. It is separate from the desktop application, private web application and customer databases.

## Local development

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`. To verify and preview the production export:

```powershell
npm run typecheck
npm run build
npm run preview
```

The static preview listens on `http://localhost:4173` by default (`PORT` can override it).

## Environment

Copy `.env.example` to `.env.local` for public build configuration. Set `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_APP_URL`, and—when needed—the public contact and approved social profile URLs. EMMAPRO's supplied public email, Burundi and Indonesia WhatsApp numbers, Facebook, LinkedIn and YouTube profiles are configured as defaults; Instagram remains unset until an official profile is supplied.

The Web3Forms access key must never be set as a `NEXT_PUBLIC_*` variable: it is used only by the server-side Pages Function as `WEB3FORMS_ACCESS_KEY`. The contact form posts to `/api/contact`; the function validates and limits fields, rejects cross-origin submissions, and forwards only approved fields to Web3Forms. It also includes a honeypot, but production deployments should additionally configure edge rate limiting for `POST /api/contact` (for example, five requests per minute per IP). Do not log request bodies or contact data.

The static export itself does not include server functions. Cloudflare Pages detects the root `functions/` directory alongside the `out/` build output and runs `/api/contact` there. For local function testing, use `npx wrangler pages dev out` after building, with `WEB3FORMS_ACCESS_KEY` set as a local Wrangler secret (for example in an untracked `.dev.vars` file). A static-only host must provide an equivalent server-side endpoint; the form will not submit directly to Web3Forms from a browser.

`NEXT_PUBLIC_SITE_INDEXABLE` explicitly accepts `true` or `false`. If unset, production builds are indexable and development builds are not. Set it to `false` for staging/preview deployments and set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin so canonical URLs and the sitemap match the deployed site.

The public footer and Organization schema read the official Facebook, Instagram, LinkedIn, YouTube and WhatsApp URLs from the corresponding `NEXT_PUBLIC_SOCIAL_*_URL` variables. Leave a profile unset until its official EMMAPRO account URL is confirmed; invalid non-HTTP(S) URLs fail the build rather than becoming unsafe links.

## Product screenshots and video

The homepage hero and product tour use the two reviewed EMMAPRO source captures; the eight capability visuals are original 3840 × 2160 vector illustrations and remain sharp at 4K and higher display sizes. Those illustrations are illustrative—not real screenshots or photographs—and contain no customer records or live business values. Original source captures remain in `IMAGE_ Screenshots/`; captures containing names, customer or patient details, live finance, license status or operational records are intentionally excluded from public pages.

The supplied 60-second `EMMAPRO_PHARMA_publicite_v2_60s_720p.mp4` is served from `public/assets/video/` with an original 4K-vector poster. The source video is 720p and is served without artificial upscaling. If a mastered higher-resolution export or approved subtitles become available, replace the MP4 using the same filename and add `EMMAPRO_PHARMA_publicite_v2_60s_720p.en.vtt` and/or `EMMAPRO_PHARMA_publicite_v2_60s_720p.fr.vtt` beside it.

## Hosting

`next.config.ts` creates a static `out/` export for Cloudflare Pages or compatible static hosting. Publish that directory and configure the final site/app origins, form provider values, and indexability through build environment variables. `public/_headers` supplies baseline static-host security headers; enable HSTS only when the production domain and HTTPS configuration are ready.

For Cloudflare Pages, use `npm run build` as the build command and `out` as the output directory, with the project root set to this website directory so Pages can detect `functions/`. Add `WEB3FORMS_ACCESS_KEY` as a server-side secret in the Pages settings—not a build-time `NEXT_PUBLIC_*` variable. Configure the site/app origins, confirmed social URLs, indexability, and edge rate limiting there. These settings allow the domain and account URLs to be replaced without source edits.
