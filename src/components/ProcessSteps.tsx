import { processSteps } from "@/lib/site";

export function ProcessSteps() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How we work</h2>
          <p className="mt-4 text-lg text-slate-400">
            A clear, stress-free process from first call to launch—and beyond.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.step} className="relative">
              <span className="text-5xl font-bold text-teal-500/30">{step.step}</span>
              <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
