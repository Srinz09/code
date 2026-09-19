"use client";

import { useEffect, useRef, useState } from "react";
import { trustStripItems } from "@/lib/data/content";

const loop = [...trustStripItems, ...trustStripItems];

function Dot() {
  return <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-forest-light" />;
}

export default function TrustStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const el = ref.current;
      if (!el || paused) return;
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 0) return;
      const next = el.scrollLeft + 1;
      el.scrollLeft = next >= max ? 0 : next;
    }, 30);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <div className="bg-cream-alt">
      {/* Mobile: auto-scrolling marquee */}
      <div
        ref={ref}
        onPointerDown={() => setPaused(true)}
        onPointerUp={() => setTimeout(() => setPaused(false), 1500)}
        className="flex gap-5 overflow-x-auto px-6 py-3.5 min-[800px]:hidden"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {loop.map((t, i) => (
          <div key={i} className="flex shrink-0 items-center gap-2 text-[13px] font-semibold whitespace-nowrap text-[var(--ink-soft-2)]">
            <Dot />
            {t}
          </div>
        ))}
      </div>

      {/* Desktop: static, wraps */}
      <div className="hidden flex-wrap justify-center gap-9 px-6 py-[18px] min-[800px]:flex">
        {trustStripItems.map((t) => (
          <div key={t} className="flex items-center gap-2 text-[13px] font-semibold text-[var(--ink-soft-2)]">
            <Dot />
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}
