import type { Metadata } from "next";

import { LogoDownloadContent } from "@/app/_content/LogoDownloadContent";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Logo Downloads",
  description: `Download official ${siteConfig.name} logo files (SVG and PNG).`,
  robots: { index: false, follow: false },
};

export default function LogoDownloadPage() {
  return <LogoDownloadContent />;
}
