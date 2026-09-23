import { homeSteps } from "@/lib/data/content";

export default function HowItWorksSection() {
  return (
    <section id="how" className="bg-cream-alt px-6 py-16">
      <div className="mx-auto max-w-[1040px]">
        <h2
          className="font-display text-balance mb-[52px] text-center font-semibold text-ink"
          style={{ fontSize: "clamp(28px,3.6vw,42px)" }}
        >
          Your First Step Doesn&rsquo;t Have To Be Complicated.
        </h2>
        <div
          className="flex gap-4 overflow-x-auto pb-1.5 min-[800px]:grid min-[800px]:gap-[22px] min-[800px]:overflow-visible"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
        >
          {homeSteps.map((s) => (
            <div
              key={s.num}
              className="rounded-[2px] bg-cream px-4 py-5 text-center min-[800px]:rounded-none min-[800px]:bg-transparent min-[800px]:px-0 min-[800px]:py-0"
              style={{ flex: "0 0 68%", scrollSnapAlign: "center" }}
            >
              <div className="font-display mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-forest font-semibold text-cream-light">
                {s.num}
              </div>
              <div className="mb-2 text-[16px] font-semibold text-ink">{s.title}</div>
              <div className="text-[14px] leading-[1.55] text-[var(--ink-soft)]">{s.body}</div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#consultation"
            className="inline-block rounded-[2px] bg-forest px-7 py-[15px] text-[15px] font-semibold text-cream-light"
          >
            Take The First Step
          </a>
        </div>
      </div>
    </section>
  );
}
