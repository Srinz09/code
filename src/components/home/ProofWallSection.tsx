import ImageSlotPlaceholder from "../ImageSlotPlaceholder";
import { testimonialSlotIds, videoSlotIds } from "@/lib/data/testimonials";

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
          verified above. Client stories will join this wall as they&rsquo;re shared, never invented.
        </p>
      </div>

      <div className="mx-auto mt-11 max-w-[1100px]">
        <h3 className="font-display mb-1.5 text-center text-[22px] font-semibold text-ink">Client Stories</h3>
        <p className="mb-7 text-center text-[13.5px] text-[var(--ink-faint)]">
          Photo and video slots ready for real client stories as they&rsquo;re shared.
        </p>
        <div className="flex gap-3.5 overflow-x-auto pb-1.5 min-[800px]:grid min-[800px]:grid-cols-3 min-[800px]:gap-5 min-[800px]:overflow-visible">
          {testimonialSlotIds.map((id) => (
            <div
              key={id}
              className="overflow-hidden rounded-[2px] border border-line-soft bg-cream min-[800px]:flex-none"
              style={{ flex: "0 0 78%", scrollSnapAlign: "center" }}
            >
              <ImageSlotPlaceholder label="Drop client photo" radius={8} className="h-[200px] w-full" />
              <div className="px-1 pt-4 pb-1">
                <div className="mb-0.5 text-[14.5px] font-semibold text-ink">Client name</div>
                <div className="mb-2.5 text-[12.5px] font-semibold text-forest-light">Their goal</div>
                <div className="text-[13.5px] leading-[1.55] text-[var(--ink-soft-3)] italic">
                  Add their testimonial here once shared, with permission.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-[1100px]">
        <div className="flex gap-3.5 overflow-x-auto px-6 pb-1.5 min-[800px]:grid min-[800px]:grid-cols-4 min-[800px]:gap-4 min-[800px]:overflow-visible min-[800px]:px-6">
          {videoSlotIds.map((id) => (
            <div
              key={id}
              className="relative overflow-hidden rounded-[10px] min-[800px]:flex-none"
              style={{ flex: "0 0 62%", aspectRatio: "9 / 16", scrollSnapAlign: "center" }}
            >
              <ImageSlotPlaceholder label="Drop client video thumbnail" radius={10} className="h-full w-full" />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full" style={{ background: "oklch(98% 0.01 85 / 0.9)" }}>
                  <div
                    className="ml-1"
                    style={{
                      width: 0,
                      height: 0,
                      borderTop: "10px solid transparent",
                      borderBottom: "10px solid transparent",
                      borderLeft: "16px solid var(--forest)",
                    }}
                  />
                </div>
              </div>
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 px-3 py-2.5"
                style={{ background: "linear-gradient(to top, oklch(10% 0.01 85 / 0.6), transparent)" }}
              >
                <div className="text-[12.5px] font-semibold text-cream-light">Add client video</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
