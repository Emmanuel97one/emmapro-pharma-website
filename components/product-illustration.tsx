import type { Locale } from "@/content/product";

export type IllustrationScene =
  | "overview"
  | "governance"
  | "inventory"
  | "dispensing"
  | "finance"
  | "analytics"
  | "multisite"
  | "reports";

const sceneCopy: Record<IllustrationScene, Record<Locale, { title: string; caption: string }>> = {
  overview: {
    en: { title: "Operations overview", caption: "A connected view of pharmacy operations" },
    fr: { title: "Vue des opérations", caption: "Une vue connectée des opérations" },
  },
  governance: {
    en: { title: "Medicine governance", caption: "Medicine identity, classification and attributes" },
    fr: { title: "Gouvernance des médicaments", caption: "Identité, classification et attributs" },
  },
  inventory: {
    en: { title: "Stock intelligence", caption: "Inventory, batches and expiry review" },
    fr: { title: "Intelligence des stocks", caption: "Stocks, lots et suivi des péremptions" },
  },
  dispensing: {
    en: { title: "Dispensing workspace", caption: "A clear, traceable dispensing workflow" },
    fr: { title: "Espace de dispensation", caption: "Un workflow clair et traçable" },
  },
  finance: {
    en: { title: "Financial control", caption: "Revenue, expense and margin visibility" },
    fr: { title: "Contrôle financier", caption: "Visibilité sur revenus, dépenses et marges" },
  },
  analytics: {
    en: { title: "Analytics and insights", caption: "Operational trends for informed decisions" },
    fr: { title: "Analyses et indicateurs", caption: "Tendances opérationnelles pour éclairer les décisions" },
  },
  multisite: {
    en: { title: "Multi-site synchronization", caption: "Illustrative synchronization between authorized sites" },
    fr: { title: "Synchronisation multi-sites", caption: "Illustration de la synchronisation entre sites autorisés" },
  },
  reports: {
    en: { title: "Management reports", caption: "Scheduled reporting for authorized managers" },
    fr: { title: "Rapports de gestion", caption: "Rapports planifiés pour les responsables autorisés" },
  },
};

const navLabels: Record<Locale, string[]> = {
  en: ["Overview", "Medicines", "Inventory", "Dispensing", "Management"],
  fr: ["Vue d’ensemble", "Médicaments", "Stocks", "Dispensation", "Pilotage"],
};

function SceneContent({ scene, locale }: { scene: IllustrationScene; locale: Locale }) {
  const isFrench = locale === "fr";

  if (scene === "multisite") {
    return (
      <>
        <rect x="320" y="286" width="1180" height="500" rx="22" fill="#f7fafc" stroke="#e1e9ef" />
        <text x="362" y="340" className="ill-label">{isFrench ? "SYNCHRONISATION AUTORISÉE" : "AUTHORIZED SYNCHRONIZATION"}</text>
        <rect x="795" y="382" width="235" height="104" rx="18" fill="#eaf7f1" stroke="#bfe7d2" />
        <circle cx="834" cy="434" r="18" fill="#09875d" />
        <path d="M826 434l6 6 11-13" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <text x="865" y="428" className="ill-strong">{isFrench ? "Centre" : "Control center"}</text>
        <text x="865" y="455" className="ill-muted">{isFrench ? "Accès selon les rôles" : "Role-based access"}</text>
        <path d="M850 486v64M910 486v64M970 486v64" stroke="#6ea995" strokeWidth="3" strokeDasharray="7 9" />
        <path d="M825 532l25 24 25-24M885 532l25 24 25-24M945 532l25 24 25-24" fill="none" stroke="#07875d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {[365, 770, 1175].map((x, index) => (
          <g key={x}>
            <rect x={x} y="588" width="280" height="145" rx="17" fill="#fff" stroke="#dce6ed" />
            <circle cx={x + 38} cy="628" r="18" fill={index === 1 ? "#eaf1ff" : "#e8f5ef"} />
            <path d={`M${x + 31} 628h14M${x + 38} 621v14`} stroke={index === 1 ? "#2867e8" : "#07875d"} strokeWidth="3" strokeLinecap="round" />
            <text x={x + 68} y="624" className="ill-strong">{isFrench ? `Site 0${index + 1}` : `Site 0${index + 1}`}</text>
            <text x={x + 25} y="674" className="ill-muted">{isFrench ? "Environnement autorisé" : "Authorized environment"}</text>
            <rect x={x + 25} y="696" width="92" height="20" rx="10" fill="#e8f5ef" />
            <text x={x + 71} y="710" className="ill-status" textAnchor="middle">{isFrench ? "PRÊT" : "READY"}</text>
          </g>
        ))}
        <rect x="362" y="757" width="1120" height="1" fill="#e4ebf0" />
        <text x="362" y="774" className="ill-muted">{isFrench ? "Schéma conceptuel — aucune donnée client affichée" : "Conceptual diagram — no customer data shown"}</text>
      </>
    );
  }

  if (scene === "governance") {
    return (
      <>
        <rect x="320" y="286" width="1180" height="500" rx="22" fill="#fff" stroke="#e1e9ef" />
        <text x="360" y="342" className="ill-label">{isFrench ? "REGISTRE PHARMACEUTIQUE" : "PHARMACEUTICAL REGISTRY"}</text>
        <rect x="360" y="370" width="1100" height="62" rx="12" fill="#f4f7fa" />
        <circle cx="395" cy="401" r="12" fill="#dce8f3" />
        <text x="425" y="406" className="ill-muted">{isFrench ? "Rechercher dans le registre" : "Search the medicine registry"}</text>
        <rect x="360" y="458" width="330" height="274" rx="16" fill="#f8fbff" stroke="#e1e9ef" />
        <rect x="712" y="458" width="330" height="274" rx="16" fill="#f7fbf8" stroke="#e1e9ef" />
        <rect x="1064" y="458" width="396" height="274" rx="16" fill="#fbf9ff" stroke="#e1e9ef" />
        <circle cx="405" cy="507" r="20" fill="#e7efff" /><path d="M397 507h16M405 499v16" stroke="#2867e8" strokeWidth="3" strokeLinecap="round" />
        <circle cx="757" cy="507" r="20" fill="#e8f5ef" /><path d="M749 507h16M757 499v16" stroke="#07875d" strokeWidth="3" strokeLinecap="round" />
        <circle cx="1109" cy="507" r="20" fill="#f0eaff" /><path d="M1102 507h14M1109 500v14" stroke="#7552d9" strokeWidth="3" strokeLinecap="round" />
        <text x="440" y="512" className="ill-strong">{isFrench ? "Catégories" : "Categories"}</text>
        <text x="792" y="512" className="ill-strong">{isFrench ? "Fiche médicament" : "Medicine record"}</text>
        <text x="1144" y="512" className="ill-strong">{isFrench ? "Attributs" : "Attributes"}</text>
        {[0, 1, 2, 3].map((row) => (
          <g key={row}>
            <rect x="386" y={548 + row * 39} width="12" height="12" rx="3" fill="#c6d6e5" />
            <rect x="410" y={550 + row * 39} width={176 - row * 13} height="8" rx="4" fill="#dce5ed" />
            <rect x="738" y={548 + row * 39} width="12" height="12" rx="3" fill="#b9ddca" />
            <rect x="762" y={550 + row * 39} width={174 - row * 11} height="8" rx="4" fill="#dce5ed" />
            <rect x="1090" y={548 + row * 39} width="12" height="12" rx="3" fill="#d1c5f3" />
            <rect x="1114" y={550 + row * 39} width={218 - row * 11} height="8" rx="4" fill="#dce5ed" />
          </g>
        ))}
        <rect x="360" y="750" width="1100" height="1" fill="#e4ebf0" />
        <text x="360" y="775" className="ill-muted">{isFrench ? "Présentation illustrative — sans dossiers ni données réels" : "Illustrative interface — no real records or data"}</text>
      </>
    );
  }

  if (scene === "inventory") {
    return (
      <>
        <rect x="320" y="286" width="1180" height="500" rx="22" fill="#fff" stroke="#e1e9ef" />
        <text x="360" y="342" className="ill-label">{isFrench ? "VUE DU STOCK" : "INVENTORY OVERVIEW"}</text>
        <rect x="360" y="368" width="700" height="246" rx="16" fill="#f9fbfd" stroke="#e7edf2" />
        <text x="392" y="407" className="ill-strong">{isFrench ? "Mouvements par période" : "Stock movement over time"}</text>
        {[0, 1, 2, 3].map((row) => <line key={row} x1="395" y1={454 + row * 43} x2="1024" y2={454 + row * 43} stroke="#e9eef3" />)}
        <path d="M398 558 C460 533 470 492 532 511 S620 555 683 488 S793 467 847 492 S925 460 1020 449" fill="none" stroke="#07875d" strokeWidth="5" strokeLinecap="round" />
        <path d="M398 577 C460 566 488 545 532 557 S620 524 683 548 S793 512 847 529 S925 520 1020 508" fill="none" stroke="#5790f4" strokeWidth="4" strokeLinecap="round" />
        <rect x="1082" y="368" width="378" height="246" rx="16" fill="#f8fbff" stroke="#e7edf2" />
        <text x="1112" y="407" className="ill-strong">{isFrench ? "Suivi des lots" : "Batch review"}</text>
        {[0, 1, 2].map((row) => <g key={row}><rect x="1112" y={438 + row * 52} width="318" height="40" rx="8" fill="#fff" stroke="#e9eef3" /><circle cx="1133" cy={458 + row * 52} r="7" fill={row === 1 ? "#e2a13c" : "#0a9a69"} /><rect x="1151" y={453 + row * 52} width="100" height="9" rx="4" fill="#d7e1e9" /><rect x="1360" y={451 + row * 52} width="48" height="14" rx="7" fill={row === 1 ? "#fff0d9" : "#e8f5ef"} /></g>)}
        <rect x="360" y="638" width="1100" height="116" rx="14" fill="#f8fafc" />
        <text x="386" y="675" className="ill-strong">{isFrench ? "Mouvements récents" : "Recent stock activity"}</text>
        {[0, 1, 2].map((row) => <g key={row}><circle cx="396" cy={704 + row * 17} r="4" fill="#07875d" /><rect x="411" y={700 + row * 17} width={540 - row * 35} height="7" rx="4" fill="#d8e2eb" /><rect x="1310" y={700 + row * 17} width="96" height="7" rx="4" fill="#e6edf2" /></g>)}
        <text x="360" y="775" className="ill-muted">{isFrench ? "Données d’illustration — aucune quantité ni valeur client" : "Illustrative data — no customer quantities or values"}</text>
      </>
    );
  }

  if (scene === "dispensing") {
    return (
      <>
        <rect x="320" y="286" width="1180" height="500" rx="22" fill="#fff" stroke="#e1e9ef" />
        <text x="360" y="342" className="ill-label">{isFrench ? "ESPACE DE DISPENSATION" : "DISPENSING WORKSPACE"}</text>
        <rect x="360" y="368" width="708" height="374" rx="16" fill="#f9fbfd" stroke="#e7edf2" />
        <rect x="386" y="390" width="655" height="48" rx="10" fill="#eef3f8" />
        <circle cx="411" cy="414" r="10" fill="#cbd9e7" />
        <text x="436" y="419" className="ill-muted">{isFrench ? "Rechercher un médicament" : "Search medicines"}</text>
        <rect x="386" y="454" width="655" height="34" rx="7" fill="#10243b" />
        <text x="402" y="476" className="ill-white">{isFrench ? "PRODUIT" : "PRODUCT"}</text>
        <text x="676" y="476" className="ill-white">{isFrench ? "LOT" : "BATCH"}</text>
        <text x="848" y="476" className="ill-white">{isFrench ? "DISPONIBILITÉ" : "AVAILABILITY"}</text>
        {[0, 1, 2, 3].map((row) => <g key={row}><rect x="386" y={500 + row * 50} width="655" height="42" rx="6" fill={row % 2 === 0 ? "#fff" : "#f4f7fa"} /><rect x="402" y={516 + row * 50} width="170" height="8" rx="4" fill="#cbd8e4" /><rect x="676" y={516 + row * 50} width="83" height="8" rx="4" fill="#dce5ec" /><rect x="848" y={511 + row * 50} width="128" height="18" rx="9" fill="#e8f5ef" /></g>)}
        <rect x="1090" y="368" width="370" height="374" rx="16" fill="#f8fbff" stroke="#e7edf2" />
        <text x="1120" y="410" className="ill-strong">{isFrench ? "Paiement et récapitulatif" : "Payment and summary"}</text>
        {[0, 1, 2].map((row) => <g key={row}><rect x="1120" y={442 + row * 55} width="310" height="42" rx="9" fill="#fff" stroke="#e6edf2" /><rect x="1140" y={459 + row * 55} width="105" height="8" rx="4" fill="#d2dee7" /><rect x="1340" y={459 + row * 55} width="56" height="8" rx="4" fill="#d2dee7" /></g>)}
        <rect x="1120" y="626" width="310" height="52" rx="10" fill="#07875d" />
        <text x="1275" y="658" className="ill-white" textAnchor="middle">{isFrench ? "FINALISER" : "COMPLETE SALE"}</text>
        <text x="360" y="775" className="ill-muted">{isFrench ? "Workflow illustratif — sans donnée patient ou transactionnelle" : "Illustrative workflow — no patient or transaction data"}</text>
      </>
    );
  }

  if (scene === "finance") {
    return (
      <>
        <rect x="320" y="286" width="1180" height="500" rx="22" fill="#fff" stroke="#e1e9ef" />
        <text x="360" y="342" className="ill-label">{isFrench ? "SUIVI FINANCIER" : "FINANCIAL OVERVIEW"}</text>
        {[0, 1, 2].map((card) => <g key={card}><rect x={360 + card * 365} y="370" width="340" height="91" rx="14" fill={["#eef8f3", "#f2f6ff", "#faf6ff"][card]} /><rect x={384 + card * 365} y="392" width="100" height="8" rx="4" fill="#c8d6e2" /><rect x={384 + card * 365} y="415" width="174" height="16" rx="8" fill={["#07875d", "#2867e8", "#7255d8"][card]} opacity=".82" /><circle cx={664 + card * 365} cy="414" r="17" fill="#fff" /></g>)}
        <rect x="360" y="482" width="695" height="246" rx="16" fill="#f9fbfd" stroke="#e7edf2" />
        <text x="390" y="520" className="ill-strong">{isFrench ? "Tendances commerciales" : "Business trends"}</text>
        {[0, 1, 2, 3].map((row) => <line key={row} x1="392" y1={557 + row * 39} x2="1020" y2={557 + row * 39} stroke="#e8eef3" />)}
        <path d="M398 662 C465 650 482 586 545 610 S646 634 703 574 S801 588 852 545 S949 579 1017 535" fill="none" stroke="#07875d" strokeWidth="5" strokeLinecap="round" />
        <rect x="1076" y="482" width="384" height="246" rx="16" fill="#fbfcfe" stroke="#e7edf2" />
        <text x="1106" y="520" className="ill-strong">{isFrench ? "Catégories de dépenses" : "Expense categories"}</text>
        {[0, 1, 2, 3].map((row) => <g key={row}><circle cx="1120" cy={559 + row * 38} r="6" fill={["#07875d", "#2867e8", "#be8b31", "#8b69d6"][row]} /><rect x="1138" y={555 + row * 38} width={176 - row * 16} height="8" rx="4" fill="#d9e3eb" /><rect x="1371" y={555 + row * 38} width="48" height="8" rx="4" fill="#e5ebf0" /></g>)}
        <text x="360" y="775" className="ill-muted">{isFrench ? "Schéma illustratif — aucun montant ni dossier financier client" : "Illustrative view — no customer financial amounts or records"}</text>
      </>
    );
  }

  if (scene === "analytics") {
    return (
      <>
        <rect x="320" y="286" width="1180" height="500" rx="22" fill="#fff" stroke="#e1e9ef" />
        <text x="360" y="342" className="ill-label">{isFrench ? "ANALYSES ET INDICATEURS" : "ANALYTICS AND INSIGHTS"}</text>
        <rect x="360" y="370" width="1100" height="338" rx="16" fill="#fbfcfe" stroke="#e7edf2" />
        <text x="394" y="411" className="ill-strong">{isFrench ? "Tendances opérationnelles" : "Operational trends"}</text>
        {[0, 1, 2, 3, 4].map((row) => <line key={row} x1="408" y1={458 + row * 44} x2="1414" y2={458 + row * 44} stroke="#e9eef3" />)}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((bar) => {
          const heights = [78, 118, 92, 152, 126, 181, 139, 196, 158, 218, 180, 236];
          return <rect key={bar} x={440 + bar * 76} y={694 - heights[bar]} width="38" height={heights[bar]} rx="8" fill={bar % 3 === 1 ? "#3d78ed" : "#0a9a69"} opacity=".8" />;
        })}
        <rect x="360" y="730" width="1100" height="31" rx="8" fill="#f1f5f8" />
        <rect x="385" y="741" width="210" height="8" rx="4" fill="#cedbe6" />
        <rect x="632" y="741" width="130" height="8" rx="4" fill="#cedbe6" />
        <rect x="800" y="741" width="174" height="8" rx="4" fill="#cedbe6" />
        <text x="360" y="779" className="ill-muted">{isFrench ? "Graphique conceptuel — aucune mesure réelle représentée" : "Conceptual chart — no real measurements represented"}</text>
      </>
    );
  }

  if (scene === "reports") {
    return (
      <>
        <rect x="320" y="286" width="1180" height="500" rx="22" fill="#fff" stroke="#e1e9ef" />
        <text x="360" y="342" className="ill-label">{isFrench ? "RAPPORTS DE GESTION" : "MANAGEMENT REPORTING"}</text>
        <rect x="360" y="370" width="650" height="338" rx="16" fill="#fbfcfe" stroke="#e7edf2" />
        <text x="392" y="412" className="ill-strong">{isFrench ? "Planification des rapports" : "Report schedule"}</text>
        <rect x="392" y="440" width="586" height="49" rx="10" fill="#f1f5f8" />
        {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <g key={`${day}-${index}`}><text x={431 + index * 75} y="470" className="ill-muted" textAnchor="middle">{isFrench ? ["L", "M", "M", "J", "V", "S", "D"][index] : day}</text><circle cx={431 + index * 75} cy="524" r="13" fill={index === 2 || index === 5 ? "#07875d" : "#e7edf2"} /><circle cx={431 + index * 75} cy="574" r="13" fill={index === 1 || index === 4 ? "#2867e8" : "#e7edf2"} /></g>)}
        <text x="392" y="637" className="ill-muted">{isFrench ? "Quotidien · hebdomadaire · mensuel" : "Daily · weekly · monthly"}</text>
        <rect x="1032" y="370" width="428" height="338" rx="16" fill="#f8fbff" stroke="#e7edf2" />
        <circle cx="1080" cy="422" r="24" fill="#eaf1ff" />
        <path d="M1068 422h24M1080 410v24" stroke="#2867e8" strokeWidth="3" strokeLinecap="round" />
        <text x="1120" y="420" className="ill-strong">{isFrench ? "Synthèse de gestion" : "Management summary"}</text>
        <rect x="1064" y="467" width="364" height="150" rx="10" fill="#fff" stroke="#e4ebf1" />
        <rect x="1084" y="489" width="206" height="10" rx="5" fill="#cbd8e4" />
        <rect x="1084" y="514" width="324" height="8" rx="4" fill="#e0e7ed" />
        <rect x="1084" y="535" width="292" height="8" rx="4" fill="#e0e7ed" />
        <rect x="1084" y="566" width="324" height="31" rx="7" fill="#eaf6f0" />
        <text x="1084" y="659" className="ill-muted">{isFrench ? "Envoi selon la configuration et les droits" : "Delivery follows configuration and access rights"}</text>
        <text x="360" y="775" className="ill-muted">{isFrench ? "Aucune adresse ni donnée client affichée" : "No customer addresses or records shown"}</text>
      </>
    );
  }

  return (
    <>
      <rect x="320" y="286" width="1180" height="500" rx="22" fill="#fff" stroke="#e1e9ef" />
      <text x="360" y="342" className="ill-label">{isFrench ? "CENTRE DES OPÉRATIONS" : "OPERATIONS CENTER"}</text>
      {[0, 1, 2].map((card) => <g key={card}><rect x={360 + card * 365} y="370" width="340" height="90" rx="14" fill={["#f0f8f4", "#f2f6ff", "#fbf7ee"][card]} /><circle cx={394 + card * 365} cy="415" r="15" fill={["#07875d", "#2867e8", "#c48a28"][card]} opacity=".85" /><rect x={425 + card * 365} y="400" width="110" height="8" rx="4" fill="#cbd8e4" /><rect x={425 + card * 365} y="419" width="178" height="7" rx="4" fill="#dce5ed" /></g>)}
      <rect x="360" y="482" width="700" height="246" rx="16" fill="#fbfcfe" stroke="#e7edf2" />
      <text x="390" y="520" className="ill-strong">{isFrench ? "Activité opérationnelle" : "Operational activity"}</text>
      {[0, 1, 2, 3].map((row) => <g key={row}><circle cx="402" cy={558 + row * 39} r="8" fill={["#07875d", "#2867e8", "#c48a28", "#7d67ca"][row]} /><rect x="424" y={554 + row * 39} width={380 - row * 31} height="8" rx="4" fill="#d7e1e9" /><rect x="424" y={570 + row * 39} width="238" height="6" rx="3" fill="#e8edf2" /></g>)}
      <rect x="1080" y="482" width="380" height="246" rx="16" fill="#f9fbfd" stroke="#e7edf2" />
      <text x="1110" y="520" className="ill-strong">{isFrench ? "Priorités" : "Attention points"}</text>
      {[0, 1, 2].map((row) => <g key={row}><rect x="1110" y={545 + row * 48} width="320" height="37" rx="8" fill="#fff" stroke="#e8edf2" /><circle cx="1131" cy={563 + row * 48} r="6" fill={row === 1 ? "#c48a28" : "#07875d"} /><rect x="1148" y={559 + row * 48} width={166 - row * 18} height="8" rx="4" fill="#d7e1e9" /></g>)}
      <text x="360" y="775" className="ill-muted">{isFrench ? "Illustration de présentation — aucune donnée client" : "Presentation illustration — no customer data"}</text>
    </>
  );
}

export function ProductIllustration({ scene, locale }: { scene: IllustrationScene; locale: Locale }) {
  const copy = sceneCopy[scene][locale];
  const titleId = `illustration-title-${scene}-${locale}`;
  const descriptionId = `illustration-description-${scene}-${locale}`;
  return (
    <figure className={`product-illustration product-illustration-${scene}`}>
      <svg
        aria-labelledby={`${titleId} ${descriptionId}`}
        className="product-illustration-art"
        height="2160"
        role="img"
        viewBox="0 0 1600 900"
        width="3840"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id={titleId}>{copy.title}</title>
        <desc id={descriptionId}>{copy.caption}. {locale === "en" ? "Illustrative design with no real customer data." : "Visuel illustratif sans données réelles de clients."}</desc>
        <defs>
          <linearGradient id={`canvas-${scene}`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#edf5f2" />
            <stop offset="1" stopColor="#f4f7fb" />
          </linearGradient>
          <filter id={`shadow-${scene}`} height="140%" width="140%" x="-20%" y="-20%">
            <feDropShadow dx="0" dy="10" floodColor="#183a50" floodOpacity=".08" stdDeviation="14" />
          </filter>
          <style>{`.ill-label{fill:#63798a;font:700 14px Inter,Segoe UI,Arial,sans-serif;letter-spacing:2px}.ill-strong{fill:#17334b;font:700 17px Inter,Segoe UI,Arial,sans-serif}.ill-muted{fill:#718596;font:500 14px Inter,Segoe UI,Arial,sans-serif}.ill-status{fill:#08764f;font:800 10px Inter,Segoe UI,Arial,sans-serif;letter-spacing:1px}.ill-white{fill:#fff;font:700 12px Inter,Segoe UI,Arial,sans-serif;letter-spacing:.7px}`}</style>
        </defs>
        <rect width="1600" height="900" fill={`url(#canvas-${scene})`} />
        <rect x="24" y="22" width="1552" height="70" rx="17" fill="#fff" filter={`url(#shadow-${scene})`} />
        <rect x="46" y="39" width="37" height="37" rx="11" fill="#07875d" />
        <path d="M57 58c7-13 18-11 20-10-2 12-10 18-21 17 2-4 5-7 11-10" fill="#fff" />
        <text x="96" y="62" fill="#16334b" fontFamily="Inter,Segoe UI,Arial,sans-serif" fontSize="17" fontWeight="800" letterSpacing="1">EMMAPRO <tspan fill="#07875d">PHARMA</tspan></text>
        <rect x="1300" y="45" width="188" height="25" rx="12" fill="#eaf6f0" />
        <circle cx="1320" cy="57" r="5" fill="#07875d" />
        <text x="1335" y="62" fill="#36725d" fontFamily="Inter,Segoe UI,Arial,sans-serif" fontSize="11" fontWeight="700">{locale === "fr" ? "ESPACE D’ILLUSTRATION" : "ILLUSTRATIVE VIEW"}</text>
        <rect x="24" y="110" width="250" height="762" rx="17" fill="#102b42" />
        <text x="50" y="150" fill="#8ea8bb" fontFamily="Inter,Segoe UI,Arial,sans-serif" fontSize="11" fontWeight="700" letterSpacing="1.5">EMMAPRO</text>
        {navLabels[locale].map((label, index) => (
          <g key={label}>
            <rect x="42" y={178 + index * 58} width="214" height="43" rx="9" fill={index === 0 ? "#1b785f" : "transparent"} />
            <circle cx="62" cy={199 + index * 58} r="5" fill={index === 0 ? "#d0f0df" : "#829bae"} />
            <text x="79" y={204 + index * 58} fill={index === 0 ? "#fff" : "#bdcbd5"} fontFamily="Inter,Segoe UI,Arial,sans-serif" fontSize="13" fontWeight={index === 0 ? "700" : "500"}>{label}</text>
          </g>
        ))}
        <rect x="294" y="110" width="1282" height="762" rx="17" fill="#fff" filter={`url(#shadow-${scene})`} />
        <text x="326" y="162" fill="#19354e" fontFamily="Inter,Segoe UI,Arial,sans-serif" fontSize="29" fontWeight="750">{copy.title}</text>
        <text x="328" y="192" fill="#74889a" fontFamily="Inter,Segoe UI,Arial,sans-serif" fontSize="14">{copy.caption}</text>
        <SceneContent scene={scene} locale={locale} />
      </svg>
      <figcaption>{copy.caption}</figcaption>
    </figure>
  );
}
