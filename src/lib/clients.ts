export type ClientLogo = {
  name: string;
  href: string;
  logo?: string;
  /** Show the name beside a mark that does not include the business name. */
  showName?: boolean;
  /** Wide wordmark. Needs more room than a square mark. */
  wide?: boolean;
};

export const clients: ClientLogo[] = [
  {
    name: "BEE Health Studio",
    href: "https://beehealthstudio.com/",
    logo: "/clients/bee.png",
    wide: true,
  },
  {
    name: "META DENTAL",
    href: "https://share.google/TWBz5Z8laLMRQReR7",
    logo: "/clients/meta.svg",
    showName: true,
  },
  {
    name: "Dr. Shaheena's physio care",
    href: "https://share.google/2ScuMuhWLem1Kzryf",
    logo: "/clients/shaheena.svg",
    showName: true,
  },
  {
    name: "Sarah ProCare Clinic",
    href: "https://share.google/8Ht4OZ3rr0Dkol6b2",
    logo: "/clients/sarah.svg",
    wide: true,
  },
  {
    name: "Atmos Dental",
    href: "https://share.google/DLb6eN2N48bFXNyOJ",
    logo: "/clients/atmos.svg",
  },
  {
    name: "Cana Dream Events",
    href: "https://logeshofficial.github.io/CanaEventPlanners/",
    logo: "/clients/cana.svg",
    wide: true,
  },
  {
    name: "ProVizient",
    href: "https://provizient.com/",
    logo: "/clients/provizient.svg",
  },
  {
    name: "MySlotHub",
    href: "https://www.myslothub.com/",
    logo: "/clients/myslothub.svg",
    showName: true,
  },
  {
    name: "RVS Agri",
    href: "https://logeshofficial.github.io/RVS-Agri/",
    logo: "/clients/rvs.svg",
  },
];
