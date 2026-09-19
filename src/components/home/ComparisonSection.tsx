import { comparisonRows } from "@/lib/data/content";

export default function ComparisonSection() {
  return (
    <section className="bg-cream-alt px-6 py-16">
      <div className="mx-auto max-w-[820px]">
        <h2
          className="font-display text-balance mb-11 text-center font-semibold text-ink"
          style={{ fontSize: "clamp(28px,3.6vw,42px)" }}
        >
          Doing It Alone Vs. Doing It With Guidance.
        </h2>
        <div className="overflow-hidden rounded-[2px] border border-line-soft bg-cream">
          {/* Desktop table */}
          <div className="hidden min-[800px]:block">
            <div className="grid text-[13.5px] font-bold" style={{ gridTemplateColumns: "1.4fr 1fr 1fr" }}>
              <div className="px-[18px] py-4" />
              <div className="px-3 py-4 text-center text-[var(--ink-faint)]">Alone</div>
              <div className="bg-forest px-3 py-4 text-center text-cream-light">With Guidance</div>
            </div>
            {comparisonRows.map((row) => (
              <div
                key={row.label}
                className="grid items-center border-t border-line-soft"
                style={{ gridTemplateColumns: "1.4fr 1fr 1fr" }}
              >
                <div className="px-[18px] py-4 text-[14.5px] font-semibold text-ink">{row.label}</div>
                <div className="px-3 py-4 text-center text-[13px] text-[var(--ink-faint)]">{row.alone}</div>
                <div className="bg-forest-soft px-3 py-4 text-center text-[13px] font-semibold text-forest">
                  {row.guided}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile stacked cards */}
          <div className="min-[800px]:hidden">
            {comparisonRows.map((row) => (
              <div key={row.label} className="border-t border-line-soft px-[18px] py-4 first:border-t-0">
                <div className="mb-2.5 text-[14px] font-bold text-ink">{row.label}</div>
                <div className="flex gap-2.5">
                  <div className="flex-1 rounded-[2px] bg-cream-alt px-3 py-2.5">
                    <div className="mb-1 text-[10.5px] font-bold tracking-[0.05em] text-[var(--ink-faint)] uppercase">
                      Alone
                    </div>
                    <div className="text-[13px] text-[var(--ink-soft-2)]">{row.alone}</div>
                  </div>
                  <div className="flex-1 rounded-[2px] bg-forest-soft px-3 py-2.5">
                    <div className="mb-1 text-[10.5px] font-bold tracking-[0.05em] text-forest uppercase">
                      With Guidance
                    </div>
                    <div className="text-[13px] font-semibold text-forest">{row.guided}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
