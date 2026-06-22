import type { ComponentType } from "react";
import type { LogoProps } from "./types";
import { LogoConcept1 } from "./LogoConcept1";
import { LogoConcept2 } from "./LogoConcept2";
import { LogoConcept3 } from "./LogoConcept3";
import { LogoConcept4 } from "./LogoConcept4";
import { LogoConcept5 } from "./LogoConcept5";
import { LogoConceptF } from "./LogoConceptF";
import { LogoConceptG } from "./LogoConceptG";
import { LogoConceptH } from "./LogoConceptH";
import { LogoConceptI } from "./LogoConceptI";
import { LogoConceptJ } from "./LogoConceptJ";

export {
  LogoConcept1,
  LogoConcept2,
  LogoConcept3,
  LogoConcept4,
  LogoConcept5,
  LogoConceptF,
  LogoConceptG,
  LogoConceptH,
  LogoConceptI,
  LogoConceptJ,
};
export { ariesPalettes, defaultAriesPalette, logoColors } from "./colors";
export type { AriesPaletteKey } from "./colors";
export type { LogoProps } from "./types";

export type LogoConceptMeta = {
  id: string;
  label: string;
  description: string;
  Component: ComponentType<LogoProps>;
};

export const logoConceptsNew: LogoConceptMeta[] = [
  {
    id: "concept-f",
    label: "Concept F",
    description: "Isometric 3D triangle prism — L forms on left and right faces.",
    Component: LogoConceptF,
  },
  {
    id: "concept-g",
    label: "Concept G",
    description: "Thin line-art triangle with an elegant minimal L pair inside.",
    Component: LogoConceptG,
  },
  {
    id: "concept-h",
    label: "Concept H",
    description: "Triangle silhouette built from two interlocking L brackets.",
    Component: LogoConceptH,
  },
  {
    id: "concept-i",
    label: "Concept I",
    description: "Bold modern fill — gold L and teal inverted L on slate triangle.",
    Component: LogoConceptI,
  },
  {
    id: "concept-j",
    label: "Concept J",
    description: "Circular badge with teal triangle-L monogram at center.",
    Component: LogoConceptJ,
  },
];

export const logoConceptsOriginal: LogoConceptMeta[] = [
  {
    id: "concept-a",
    label: "Concept A",
    description:
      "Aries Edition — maroon triangle (Mars), gold mirrored L (left), scarlet upright L (right).",
    Component: LogoConcept1,
  },
  {
    id: "concept-b",
    label: "Concept B",
    description: "Two L shapes forming the triangle edges and corners.",
    Component: LogoConcept2,
  },
  {
    id: "concept-c",
    label: "Concept C",
    description: "Solid teal triangle with a white L monogram cutout.",
    Component: LogoConcept3,
  },
  {
    id: "concept-d",
    label: "Concept D",
    description: "Rounded triangle badge with overlapping L and inverted L.",
    Component: LogoConcept4,
  },
  {
    id: "concept-e",
    label: "Concept E",
    description: "Minimal geometric split — diagonal divide, each half an L form.",
    Component: LogoConcept5,
  },
];

/** All concepts — new first, then original */
export const logoConcepts: LogoConceptMeta[] = [
  ...logoConceptsNew,
  ...logoConceptsOriginal,
];

/** Wired into Header, Footer, Logo, and favicon */
export const defaultLogoConceptId: string | null = "concept-a";
