import { logoColors } from "./colors";
import type { LogoProps } from "./types";

/** Triangle formed by two interlocking L brackets */
export function LogoConceptH({ className, size = 120 }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      {/* Left L bracket — forms left edge + lower-left of triangle */}
      <path
        d="M22 78 L22 32 L50 14 L50 38 L38 38 L38 78 Z"
        fill={logoColors.teal}
      />
      {/* Right inverted L bracket — interlocks with left */}
      <path
        d="M78 78 L78 32 L50 14 L50 38 L62 38 L62 78 Z"
        fill={logoColors.slate}
      />
      {/* Interlock notch — left bracket upper tab */}
      <path
        d="M38 38 L50 38 L50 52 L38 52 Z"
        fill={logoColors.slate}
      />
      {/* Interlock notch — right bracket lower tab */}
      <path
        d="M62 38 L50 38 L50 52 L62 52 Z"
        fill={logoColors.teal}
      />
      {/* Triangle base connector */}
      <path
        d="M22 78 L78 78"
        fill="none"
        stroke={logoColors.tealDark}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Outer triangle silhouette */}
      <path
        d="M50 14 L22 78 L78 78 Z"
        fill="none"
        stroke={logoColors.slateMid}
        strokeWidth="1.5"
        strokeLinejoin="round"
        opacity="0.5"
      />
    </svg>
  );
}
