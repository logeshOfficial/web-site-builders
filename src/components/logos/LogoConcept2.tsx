import { logoColors } from "./colors";
import type { LogoProps } from "./types";

/** Two L shapes forming triangle edges and corners */
export function LogoConcept2({ className, size = 120 }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      {/* Left L — forms left edge + base of triangle */}
      <path
        d="M18 78 L18 28 L50 28"
        fill="none"
        stroke={logoColors.teal}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right inverted L — forms right edge + base */}
      <path
        d="M82 78 L82 28 L50 28"
        fill="none"
        stroke={logoColors.slate}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Apex connector — completes the triangle silhouette */}
      <path
        d="M50 28 L50 14"
        fill="none"
        stroke={logoColors.tealLight}
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Corner accents */}
      <circle cx="18" cy="78" r="4" fill={logoColors.teal} />
      <circle cx="82" cy="78" r="4" fill={logoColors.slate} />
      <circle cx="50" cy="14" r="3.5" fill={logoColors.tealLight} />
    </svg>
  );
}
