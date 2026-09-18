"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";

export default function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "Now",
}: {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const [pos, setPos] = useState(50);
  const [touched, setTouched] = useState(false);

  return (
    <div className="mx-auto max-w-md">
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm select-none">
        <img
          src={after.src}
          alt={after.alt}
          className="absolute inset-0 h-full w-full object-cover object-top"
          draggable={false}
        />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${100 - pos}%` }}>
          <img
            src={before.src}
            alt={before.alt}
            className="h-full w-full object-cover"
            style={{ width: `${(100 / (100 - pos)) * 100}%`, maxWidth: "none" }}
            draggable={false}
          />
        </div>
        <div
          className="absolute inset-y-0 w-[2px] bg-surface shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
          style={{ left: `${100 - pos}%` }}
        />
        <span className="absolute left-3 top-3 rounded-sm bg-black/45 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
          {beforeLabel}
        </span>
        <span className="absolute right-3 top-3 rounded-sm bg-black/45 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
          {afterLabel}
        </span>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => {
            setPos(Number(e.target.value));
            if (!touched) {
              setTouched(true);
              track("founder_story_interaction", { action: "before_after_slider" });
            }
          }}
          aria-label="Drag to compare before and now photos"
          className="absolute inset-x-6 bottom-4 h-1 cursor-pointer accent-primary"
        />
      </div>
      <p className="mt-3 text-center text-[13px] text-ink-faint">Drag to see the progress.</p>
    </div>
  );
}
