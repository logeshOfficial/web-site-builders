"use client";

export function DesktopBrowserMockup({
  children,
  ring = false,
  className = "",
}: {
  children: React.ReactNode;
  ring?: boolean;
  className?: string;
}) {
  return (
    <div className={`mx-auto flex w-44 flex-col items-center sm:w-52 ${className}`}>
      <div
        className={`w-full overflow-hidden rounded-lg border-2 border-slate-600 bg-slate-700 shadow-2xl ${
          ring ? "ring-4 ring-teal-300 ring-offset-2 ring-offset-white" : ""
        }`}
      >
        <div className="flex items-center gap-2 border-b border-slate-600 px-2 py-1.5">
          <div className="flex shrink-0 gap-1" aria-hidden="true">
            <div className="h-2 w-2 rounded-full bg-red-400/90" />
            <div className="h-2 w-2 rounded-full bg-amber-400/90" />
            <div className="h-2 w-2 rounded-full bg-green-400/90" />
          </div>
          <div className="flex min-w-0 flex-1 items-center gap-1 rounded bg-slate-800/80 px-2 py-0.5">
            <svg
              className="h-2 w-2 shrink-0 text-slate-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <span className="truncate text-[8px] text-slate-400 sm:text-[9px]">google.com/search</span>
          </div>
        </div>

        <div className="bg-white">{children}</div>
      </div>

      <div
        className="mt-0.5 h-1 w-[108%] rounded-b-sm bg-gradient-to-b from-slate-500 to-slate-600"
        aria-hidden="true"
      />
      <div className="h-0.5 w-[125%] rounded-full bg-slate-400/80" aria-hidden="true" />
    </div>
  );
}
