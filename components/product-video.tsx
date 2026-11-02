import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Locale } from "@/content/product";

const videoDirectory = join(process.cwd(), "public", "assets", "video");
const videoFile = "EMMAPRO_PHARMA_publicite_v2_60s_720p.mp4";
const englishCaptions = "EMMAPRO_PHARMA_publicite_v2_60s_720p.en.vtt";
const frenchCaptions = "EMMAPRO_PHARMA_publicite_v2_60s_720p.fr.vtt";
const videoAvailable = existsSync(join(videoDirectory, videoFile));
const captionsAvailable = {
  en: existsSync(join(videoDirectory, englishCaptions)),
  fr: existsSync(join(videoDirectory, frenchCaptions)),
};

export function ProductVideo({ locale }: { locale: Locale }) {
  if (!videoAvailable) {
    return (
      <div className="video-placeholder" role="img" aria-label={locale === "en" ? "The EMMAPRO PHARMA platform overview video is not available in this build" : "La vidéo de présentation EMMAPRO PHARMA n’est pas disponible dans cette version"}>
        <div className="video-mark"><span aria-hidden="true">▶</span></div>
        <strong>EMMAPRO PHARMA</strong>
        <small>{locale === "en" ? "PLATFORM OVERVIEW" : "PRÉSENTATION DE LA PLATEFORME"}</small>
        <span className="video-status">{locale === "en" ? "Add the approved overview MP4 to the documented video asset folder." : "Ajoutez la vidéo MP4 approuvée dans le dossier vidéo indiqué."}</span>
      </div>
    );
  }

  return (
    <video
      className="product-video"
      controls
      preload="metadata"
      playsInline
      poster="/assets/video/emmapro-pharma-platform-overview-poster.svg"
      width="1280"
      height="720"
      aria-label={locale === "en" ? "60-second EMMAPRO PHARMA platform overview" : "Présentation de 60 secondes de la plateforme EMMAPRO PHARMA"}
    >
      <source src={`/assets/video/${videoFile}`} type="video/mp4" />
      {captionsAvailable[locale] && (
        <track
          kind="captions"
          src={`/assets/video/${locale === "en" ? englishCaptions : frenchCaptions}`}
          srcLang={locale}
          label={locale === "en" ? "English" : "Français"}
          default
        />
      )}
      {locale === "en" ? "Your browser does not support HTML video." : "Votre navigateur ne prend pas en charge la vidéo HTML."}
    </video>
  );
}
