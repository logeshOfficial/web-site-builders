import { logoColors } from "./colors";
import type { LogoProps } from "./types";

/** Isometric 3D triangle prism — L forms on visible faces */
export function LogoConceptF({ className, size = 120 }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      {/* Left face — slate, receding */}
      <path d="M50 16 L18 68 L18 78 L50 78 Z" fill={logoColors.slateMid} />
      {/* Right face — teal */}
      <path d="M50 16 L82 68 L82 78 L50 78 Z" fill={logoColors.teal} />
      {/* Top face — lighter teal */}
      <path d="M50 16 L82 68 L50 58 L18 68 Z" fill={logoColors.tealLight} />
      {/* Depth edge */}
      <path
        d="M18 68 L50 58 L82 68"
        fill="none"
        stroke={logoColors.tealDark}
        strokeWidth="1.5"
        opacity="0.6"
      />
      {/* L on left face */}
      <path
        d="M26 72 V48 H34 V64 H44 V72 Z"
        fill={logoColors.white}
        opacity="0.92"
      />
      {/* Inverted L on right face */}
      <path
        d="M74 72 V48 H66 V64 H56 V72 Z"
        fill={logoColors.slate}
        opacity="0.85"
      />
      {/* Isometric outline — apex to corners */}
      <path
        d="M50 16 L18 68 L82 68 Z"
        fill="none"
        stroke={logoColors.slate}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Base front edge */}
      <path
        d="M18 78 L50 78 L82 78"
        fill="none"
        stroke={logoColors.slate}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
