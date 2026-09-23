import ClientStoriesGrid from "../ClientStoriesGrid";
import VideoStoriesGrid from "../VideoStoriesGrid";

export default function ProofWallSection() {
  return (
    <section id="proof" className="bg-cream-alt px-6 py-16">
      <div className="mx-auto max-w-[820px] text-center">
        <h2
          className="font-display text-balance mb-3 font-semibold text-ink"
          style={{ fontSize: "clamp(28px,3.6vw,42px)" }}
        >
          Real People. Real Journeys.
        </h2>
        <p className="mx-auto max-w-[520px] text-[15px] text-[var(--ink-faint-2)]">
          Real proof starts with mine: diabetes, a fatty liver, and surgery to remove a large fibroid &mdash;
          verified above. The transformations below are real clients, shared with permission &mdash; nothing
          invented.
        </p>
      </div>

      <div className="mx-auto mt-11 max-w-[1100px]">
        <h3 className="font-display mb-1.5 text-center text-[22px] font-semibold text-ink">Client Stories</h3>
        <p className="mb-7 text-center text-[13.5px] text-[var(--ink-faint)]">
          Real before-and-after journeys from real clients.
        </p>
        <ClientStoriesGrid />
      </div>

      <div className="mx-auto mt-8 max-w-[1100px]">
        <VideoStoriesGrid />
      </div>
    </section>
  );
}
