import { identificationCards } from "@/lib/data/content";

export default function IdentificationSection() {
  return (
    <section id="identification" className="bg-cream-alt px-6 py-16">
      <div className="mx-auto max-w-[960px]">
        <h2
          className="font-display text-balance mb-10 text-center font-semibold text-ink"
          style={{ fontSize: "clamp(26px,3.4vw,38px)" }}
        >
          Maybe Your Story Feels A Little Like Mine.
        </h2>
        <div className="mb-9 grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {identificationCards.map((card) => (
            <div key={card.title} className="rounded-[2px] border border-line-soft bg-cream p-6">
              <div className="mb-2 text-[16px] font-semibold text-ink">{card.title}</div>
              <div className="text-[14.5px] leading-[1.55] text-[var(--ink-soft)]">{card.body}</div>
            </div>
          ))}
        </div>
        <p className="font-display mx-auto max-w-[680px] text-center text-[20px] leading-normal text-forest italic">
          I understand because I didn&rsquo;t start this journey as a fitness expert. I started as someone who
          needed to change.
        </p>
      </div>
    </section>
  );
}
