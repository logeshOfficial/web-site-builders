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
    <div className="flex w-full min-w-0 flex-col items-center justify-center gap-4 p-4">
      <div className="flex w-full max-w-full flex-col items-center gap-5 sm:gap-6 md:flex-row md:items-end md:justify-center md:gap-6 lg:gap-8">
        <div className="flex w-full min-w-0 max-w-xs flex-col items-center gap-1.5 sm:max-w-none">
          <span className="text-center text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs">
            {mobileLabel}
          </span>
          <div className="w-full min-w-0">{mobile}</div>
        </div>
        <div className="flex w-full min-w-0 max-w-xs flex-col items-center gap-1.5 sm:max-w-none">
          <span className="text-center text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs">
            {desktopLabel}
          </span>
          <div className="w-full min-w-0">{desktop}</div>
        </div>
      </div>
      {footer}
    </div>
  );
}
