"use client";

import { useState } from "react";
import Image from "next/image";
import { storyChapters } from "@/lib/data/founderStory";

const progressPhotos = {
  before: { src: "/images/founder/story-before.jpg", alt: "Before" },
  now: { src: "/images/founder/story-now.jpg", alt: "Now" },
};

function ChapterPlaceholder({ label }: { label: string }) {
  return (
    <div
      className="flex aspect-[4/3] items-center justify-center rounded-[2px] p-4 text-center"
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg,oklch(90% 0.02 85),oklch(90% 0.02 85) 12px,oklch(85% 0.02 85) 12px,oklch(85% 0.02 85) 24px)",
      }}
    >
      <div className="font-mono text-[12px]" style={{ color: "oklch(40% 0.015 85)" }}>
        {label}
      </div>
    </div>
  );
}

function BeforeAfterCompare() {
  const [pos, setPos] = useState(55);
  const percent = 100 - pos;
  // Compensates the clipped overlay's shrinking width so the "before" photo
  // renders at the full box size underneath it, instead of being squeezed.
  const innerWidth = 10000 / Math.max(1, percent);

  return (
    <div className="relative mx-auto aspect-[3/4] max-w-[520px] overflow-hidden rounded-[2px]">
      <Image src={progressPhotos.now.src} alt={progressPhotos.now.alt} fill sizes="520px" className="object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${percent}%` }}>
        <div className="relative h-full" style={{ width: `${innerWidth}%` }}>
          <Image
            src={progressPhotos.before.src}
            alt={progressPhotos.before.alt}
            fill
            sizes="520px"
            className="object-cover"
          />
        </div>
      </div>
      <div className="absolute top-0 bottom-0 w-[2px] bg-cream-light" style={{ left: `${percent}%` }} />
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute right-[6%] bottom-1 left-[6%] h-11"
        style={{ width: "88%", margin: "0 6%" }}
        aria-label="Drag to see the progress"
      />
    </div>
  );
}

export default function FounderStorySection() {
  return (
    <section id="story" className="px-6 py-16">
      <div className="mx-auto max-w-[900px]">
        <h2
          className="font-display text-balance mb-14 text-center font-semibold text-ink"
          style={{ fontSize: "clamp(28px,3.6vw,42px)" }}
        >
          This Isn&rsquo;t A Story I Read About. I Lived It.
        </h2>

        <div className="flex flex-col gap-16">
          {storyChapters.map((chapter) => (
            <div key={chapter.tag} className="flex flex-wrap items-center gap-10">
              <div className="min-w-[240px] flex-1" style={{ order: chapter.imgOrder }}>
                <ChapterPlaceholder label={chapter.imgLabel} />
              </div>
              <div className="min-w-[240px] flex-1">
                <div className="mb-2.5 text-[12.5px] font-semibold tracking-[0.1em] text-forest-light uppercase">
                  {chapter.tag}
                </div>
                <h3 className="font-display text-[24px] font-semibold text-ink">{chapter.title}</h3>
                <p className="mt-3 text-[15.5px] leading-[1.65]" style={{ color: "var(--ink-soft-3)" }}>
                  {chapter.body}
                </p>
                {chapter.tags && (
                  <div className="mt-3.5 flex flex-wrap gap-2">
                    {chapter.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-[2px] bg-forest-soft px-3 py-1.5 text-[12.5px] font-semibold"
                        style={{ color: "var(--forest-soft-text-2)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <div className="mb-6 text-center">
            <div className="mb-2.5 text-[12.5px] font-semibold tracking-[0.1em] text-forest-light uppercase">
              The Transformation
            </div>
            <h3 className="font-display text-[22px] font-semibold text-ink">Drag to see the progress.</h3>
          </div>
          <BeforeAfterCompare />
        </div>

        <p
          className="font-display text-balance mx-auto mt-14 mb-7 max-w-[720px] text-center font-semibold text-ink"
          style={{ fontSize: "clamp(24px,3vw,32px)", lineHeight: 1.35 }}
        >
          I Didn&rsquo;t Become Someone Else. I Slowly Became A Healthier Version Of Myself.
        </p>
        <div className="text-center">
          <a
            href="#consultation"
            className="inline-block rounded-[2px] bg-forest px-7 py-[15px] text-[15px] font-semibold text-cream-light"
          >
            Talk To Someone Who Has Been There
          </a>
        </div>
      </div>
    </section>
  );
}
