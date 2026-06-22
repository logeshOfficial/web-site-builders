/** Shared SVG geometry for Concept A (Aries Edition) — synced with src/app/icon.svg */

/** Triangle frame — apex, bottom-right, bottom-left */
export const conceptATriangle = "M50 12 L88 82 H12 Z";

/**
 * Mirrored L — vertical stroke + horizontal foot to the left (bottom-left of triangle).
 * Backwards-L / inverted-L shape; reads left-to-right before the upright L.
 */
export const conceptAMirroredL = "M56 52 H34 V66 H26 V78 H56 Z";

/**
 * Upright L — vertical stroke + horizontal foot to the right (bottom-right of triangle).
 * Thick typographic letterform readable at favicon size.
 */
export const conceptAUprightL = "M44 52 H66 V66 H74 V78 H44 Z";
