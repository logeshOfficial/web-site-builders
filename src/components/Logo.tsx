import Link from "next/link";
import { defaultLogoConceptId, logoConcepts } from "@/components/logos";
import { siteConfig } from "@/lib/site";

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
  subtitle,
  subtitleVisible = "sm",
  asLink = false,
  truncateName = false,
}: LogoProps) {
  const styles = themeStyles[theme];
  const wrapperClass = `group flex min-w-0 items-center justify-start gap-2.5 sm:gap-3 ${className}`;
  const subtitleClass =
    subtitleVisible === "always"
      ? `block text-xs leading-snug ${styles.subtext}`
      : `hidden text-[11px] leading-snug sm:block ${styles.subtext}`;

  const iconWrapperClass = defaultConcept
    ? `flex aspect-square h-full w-auto min-h-[36px] shrink-0 items-center justify-center sm:min-h-[52px] md:min-h-[62px] ${styles.box}`
    : `flex aspect-square h-full w-auto min-h-[36px] shrink-0 items-center justify-center rounded-lg sm:min-h-[52px] md:min-h-[62px] ${styles.box}`;

  const inner = (
    <>
      <span className={iconWrapperClass}>
        <BrandLogoMark
          className={defaultConcept ? "h-full w-full max-h-[36px] max-w-[36px] sm:max-h-none sm:max-w-none" : "h-8 w-8 sm:h-10 sm:w-10 md:h-full md:w-full md:max-h-[62px] md:max-w-[62px]"}
        />
      </span>
      {variant === "full" ? (
        <span className="flex min-w-0 flex-col justify-center leading-tight">
          <span
            className={`block font-semibold tracking-tight ${styles.text} ${
              truncateName
                ? "line-clamp-2 text-sm leading-snug sm:text-base md:line-clamp-none md:overflow-visible md:whitespace-nowrap md:text-lg"
                : "overflow-hidden text-ellipsis whitespace-nowrap text-lg sm:overflow-visible sm:whitespace-normal sm:text-xl md:text-2xl"
            }`}
          >
            {siteConfig.name}
          </span>
          {subtitle ? (
            <span className={subtitleClass}>{subtitle}</span>
          ) : null}
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
