import Link from "next/link";
import { defaultLogoConceptId, logoConcepts } from "@/components/logos";

type LogoTheme = "light" | "dark";

type LogoProps = {
  variant?: "icon" | "full";
  theme?: LogoTheme;
  className?: string;
  subtitle?: string;
  subtitleVisible?: "always" | "sm";
  asLink?: boolean;
  /** Header layout: wrap on small screens, full name on md+. */
  truncateName?: boolean;
};

/** SVG intrinsic size; display height follows the stacked text block (min 52px / 62px at sm+). */
const LOGO_ICON_SIZE = 62;

const defaultConcept = logoConcepts.find((c) => c.id === defaultLogoConceptId);

/** Triangle monogram fallback when no concept is selected */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 3.5L27.5 26.5H4.5L16 3.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 14.5V23H16.5"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.5 17.5V9H15.5"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Divider() {
  return (
    <span aria-hidden="true" className="mx-2 inline-block translate-y-[-1px] text-[#a6842d]">
      ·
    </span>
  );
}

function BrandLogoMark({ className }: { className?: string }) {
  if (defaultConcept) {
    const { Component } = defaultConcept;
    return <Component className={className} size={LOGO_ICON_SIZE} />;
  }
  return <LogoMark className={className} />;
}

const themeStyles: Record<
  LogoTheme,
  { box: string; text: string; subtext: string }
> = {
  light: {
    box: defaultConcept ? "shrink-0" : "bg-teal-600 text-white",
    text: "text-slate-900 group-hover:text-teal-700",
    subtext: "text-slate-500",
  },
  dark: {
    box: defaultConcept ? "shrink-0" : "bg-teal-500 text-white",
    text: "text-white group-hover:text-teal-200",
    subtext: "text-slate-400",
  },
};

export function Logo({
  variant = "icon",
  theme = "light",
  className = "",
  asLink = false,
}: LogoProps) {
  const styles = themeStyles[theme];
  const wrapperClass = `group flex min-w-0 items-center gap-2 sm:gap-3 ${className}`;

  const iconWrapperClass = defaultConcept
    ? `flex h-9 w-9 shrink-0 items-center justify-center sm:h-12 sm:w-12 ${styles.box}`
    : `flex h-9 w-9 shrink-0 items-center justify-center rounded-lg sm:h-12 sm:w-12 ${styles.box}`;

  const inner = (
    <>
      <span className={iconWrapperClass}>
        <BrandLogoMark className="h-full w-full" />
      </span>
      {variant === "full" ? (
        <span className="flex min-w-0 flex-col">
          <span className={`text-lg font-semibold leading-tight tracking-tight sm:text-xl ${styles.text}`}>
            levyntech
          </span>
          <span className={`hidden items-center text-sm leading-none min-[420px]:inline-flex ${styles.subtext}`}>
            Leverage
            <Divider />
            Innovation
            <Divider />
            Technology
          </span>
        </span>
      ) : null}
    </>
  );

  if (asLink) {
    return (
      <Link href="/" className={wrapperClass}>
        {inner}
      </Link>
    );
  }

  return <span className={wrapperClass}>{inner}</span>;
}
