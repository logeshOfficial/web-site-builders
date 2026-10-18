import type { ReactNode } from "react";
import type { SkillId } from "@/lib/offers";

const ink = "#142033";
const pine = "#0f6e62";
const gold = "#a6842d";
const paper = "#fffdf8";

function Frame({ children, label }: { children: ReactNode; label: string }) {
  return (
    <svg viewBox="0 0 360 220" role="img" aria-label={label} className="h-auto w-full">
      <rect width="360" height="220" rx="28" fill={paper} />
      {children}
    </svg>
  );
}

function DesktopScene({ label }: { label: string }) {
  return (
    <Frame label={label}>
      <rect x="78" y="28" width="204" height="128" rx="12" fill={ink} />
      <rect x="90" y="40" width="180" height="104" rx="6" fill={paper} />
      <rect x="102" y="54" width="72" height="10" rx="5" fill={pine} />
      <rect x="102" y="74" width="156" height="8" rx="4" fill="#d9d3c6" />
      <rect x="102" y="90" width="120" height="8" rx="4" fill="#d9d3c6" />
      <rect x="102" y="112" width="64" height="18" rx="9" fill={gold} />
      <rect x="148" y="156" width="64" height="10" rx="3" fill={ink} />
      <rect x="118" y="166" width="124" height="8" rx="3" fill="#cfc6b4" />
    </Frame>
  );
}

function WebsiteScene({ label }: { label: string }) {
  return (
    <Frame label={label}>
      <rect x="46" y="36" width="188" height="148" rx="16" fill={paper} stroke={ink} strokeWidth="3" />
      <circle cx="68" cy="56" r="5" fill={gold} />
      <circle cx="84" cy="56" r="5" fill={pine} />
      <rect x="64" y="76" width="92" height="12" rx="6" fill={ink} />
      <rect x="64" y="98" width="150" height="8" rx="4" fill="#d9d3c6" />
      <rect x="64" y="114" width="110" height="8" rx="4" fill="#d9d3c6" />
      <rect x="64" y="140" width="70" height="22" rx="11" fill={pine} />
      <rect x="248" y="78" width="70" height="120" rx="14" fill={ink} />
      <rect x="256" y="90" width="54" height="86" rx="6" fill={paper} />
      <rect x="264" y="102" width="38" height="8" rx="4" fill={gold} />
      <rect x="264" y="118" width="38" height="6" rx="3" fill="#d9d3c6" />
      <rect x="264" y="130" width="28" height="6" rx="3" fill="#d9d3c6" />
    </Frame>
  );
}

function SeoScene({ label }: { label: string }) {
  return (
    <Frame label={label}>
      <circle cx="168" cy="108" r="62" fill={paper} stroke={ink} strokeWidth="3" />
      <path d="M168 62c18 16 28 32 28 48s-10 30-28 44c-18-14-28-28-28-44s10-32 28-48z" fill={pine} />
      <circle cx="168" cy="108" r="10" fill={gold} />
      <path d="M168 98v-22" stroke={paper} strokeWidth="4" strokeLinecap="round" />
      <rect x="70" y="36" width="92" height="28" rx="14" fill={ink} />
      <circle cx="86" cy="50" r="6" fill={gold} />
      <rect x="98" y="46" width="48" height="8" rx="4" fill={paper} />
    </Frame>
  );
}

function GbpScene({ label }: { label: string }) {
  return (
    <Frame label={label}>
      <rect x="78" y="28" width="204" height="164" rx="18" fill={paper} stroke={ink} strokeWidth="3" />
      <rect x="96" y="46" width="56" height="56" rx="12" fill={pine} />
      <circle cx="124" cy="68" r="10" fill={gold} />
      <rect x="112" y="82" width="24" height="8" rx="4" fill={paper} />
      <rect x="164" y="50" width="96" height="12" rx="6" fill={ink} />
      <rect x="164" y="70" width="72" height="8" rx="4" fill={gold} />
      <rect x="164" y="86" width="88" height="8" rx="4" fill="#d9d3c6" />
      <rect x="96" y="118" width="44" height="36" rx="8" fill="#efe8d8" />
      <rect x="148" y="118" width="44" height="36" rx="8" fill="#efe8d8" />
      <rect x="200" y="118" width="60" height="36" rx="8" fill={gold} />
      <rect x="96" y="164" width="164" height="10" rx="5" fill="#d9d3c6" />
    </Frame>
  );
}

export function SkillScene({ id, label }: { id: SkillId; label: string }) {
  if (id === "software") return <DesktopScene label={label} />;
  if (id === "website") return <WebsiteScene label={label} />;
  if (id === "seo") return <SeoScene label={label} />;
  return <GbpScene label={label} />;
}

export function SupportMarks() {
  return (
    <svg viewBox="0 0 720 120" role="img" aria-hidden="true" className="h-auto w-full">
      <rect width="720" height="120" rx="24" fill="#142033" />
      <circle cx="78" cy="60" r="22" fill="#a6842d" />
      <path d="M70 60h16M78 52v16" stroke="#142033" strokeWidth="3" strokeLinecap="round" />
      <rect x="118" y="46" width="120" height="12" rx="6" fill="#fffdf8" />
      <rect x="118" y="66" width="86" height="8" rx="4" fill="#8ea39c" />
      <circle cx="310" cy="60" r="22" fill="#0f6e62" />
      <path d="M300 60l7 7 14-16" fill="none" stroke="#fffdf8" strokeWidth="3" strokeLinecap="round" />
      <rect x="350" y="46" width="130" height="12" rx="6" fill="#fffdf8" />
      <rect x="350" y="66" width="90" height="8" rx="4" fill="#8ea39c" />
      <rect x="530" y="38" width="44" height="44" rx="12" fill="#fffdf8" />
      <rect x="542" y="50" width="20" height="20" rx="4" fill="#a6842d" />
      <rect x="586" y="46" width="100" height="12" rx="6" fill="#fffdf8" />
      <rect x="586" y="66" width="72" height="8" rx="4" fill="#8ea39c" />
    </svg>
  );
}
