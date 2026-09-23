import { benefits } from "@/lib/data/content";

export default function WhyWorkWithMeSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-[1000px]">
        <h2
          className="font-display text-balance mb-12 text-center font-semibold text-ink"
          style={{ fontSize: "clamp(28px,3.6vw,42px)" }}
        >
          Why Work With Me Instead Of Doing It Alone?
        </h2>
        <div className="flex gap-3.5 overflow-x-auto pb-1.5 min-[800px]:grid min-[800px]:gap-5 min-[800px]:overflow-visible" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-[2px] border-t-2 border-forest bg-cream px-[18px] py-5 min-[800px]:rounded-none min-[800px]:bg-transparent min-[800px]:px-1 min-[800px]:py-[22px]"
              style={{ flex: "0 0 78%", scrollSnapAlign: "center" }}
            >
              <h3 className="font-display text-[18px] font-semibold text-ink">{b.title}</h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--ink-soft)]">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
