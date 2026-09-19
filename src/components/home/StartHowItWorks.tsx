import { startSteps } from "@/lib/data/content";

export default function StartHowItWorks() {
  return (
    <section className="px-6 py-14">
      <div className="mx-auto max-w-[800px]">
        <h2 className="font-display mb-8 text-center text-[24px] font-semibold text-ink">How It Works</h2>
        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
          {startSteps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="mx-auto mb-3 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-forest font-semibold text-cream-light">
                {s.num}
              </div>
              <div className="mb-1.5 text-[15px] font-semibold text-ink">{s.title}</div>
              <div className="text-[13.5px] leading-[1.5] text-[var(--ink-soft)]">{s.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
