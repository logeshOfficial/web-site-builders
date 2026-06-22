"use client";

import Link from "next/link";
import { interpolate, useTranslation } from "@/contexts/LanguageContext";
import { siteConfig } from "@/lib/site";

type LogoAsset = {
  file: string;
  label: string;
  detail: string;
};

function DownloadList({ assets }: { assets: LogoAsset[] }) {
  const { t } = useTranslation();

  return (
    <ul className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white">
      {assets.map(({ file, label, detail }) => (
        <li key={file}>
          <a
            href={`/logo/${file}`}
            download
            className="flex flex-col gap-0.5 px-5 py-4 transition hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between"
          >
            <span>
              <span className="block font-medium text-slate-900">{label}</span>
              <span className="block text-sm text-slate-500">{detail}</span>
            </span>
            <span className="mt-2 shrink-0 text-sm font-semibold text-teal-700 sm:mt-0">
              {interpolate(t.logoDownload.downloadFile, { file })}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function LogoDownloadContent() {
  const { t } = useTranslation();
  const ld = t.logoDownload;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-sm font-medium text-teal-700">{ld.eyebrow}</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{ld.title}</h1>
      <p className="mt-4 text-slate-600">{ld.intro}</p>

      <div className="mt-10 flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo/concept-a-512.png"
          alt=""
          width={80}
          height={80}
          className="h-20 w-20 shrink-0"
        />
        <div>
          <p className="font-semibold text-slate-900">{siteConfig.name}</p>
          <p className="text-sm text-slate-500">{ld.conceptLabel}</p>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-slate-900">{ld.vectorTitle}</h2>
        <p className="mt-1 text-sm text-slate-500">{ld.vectorSubtitle}</p>
        <div className="mt-4">
          <DownloadList assets={[...ld.assets.vector]} />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-slate-900">{ld.rasterTitle}</h2>
        <p className="mt-1 text-sm text-slate-500">{ld.rasterSubtitle}</p>
        <div className="mt-4">
          <DownloadList assets={[...ld.assets.raster]} />
        </div>
      </section>

      <p className="mt-10 text-sm text-slate-500">
        {ld.readmePrefix}{" "}
        <Link href="/logo/README.txt" className="text-teal-700 underline hover:text-teal-800">
          README.txt
        </Link>{" "}
        {ld.readmeSuffix}
      </p>
    </div>
  );
}
