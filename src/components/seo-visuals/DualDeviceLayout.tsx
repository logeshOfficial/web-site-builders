"use client";

export function DualDeviceLayout({
  mobileLabel,
  desktopLabel,
  mobile,
  desktop,
  footer,
}: {
  mobileLabel: string;
  desktopLabel: string;
  mobile: React.ReactNode;
  desktop: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <div className="flex flex-col items-center gap-5 md:flex-row md:items-end md:justify-center md:gap-6 lg:gap-8">
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs">
            {mobileLabel}
          </span>
          {mobile}
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs">
            {desktopLabel}
          </span>
          {desktop}
        </div>
      </div>
      {footer}
    </div>
  );
}
