"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import type { StoryCard } from "@/lib/data/founderStory";

export default function HeroStoryCards({
  cards,
  labelSize = "20px",
  helperText,
  topPadding = "22px",
}: {
  cards: StoryCard[];
  labelSize?: string;
  helperText?: string;
  topPadding?: string;
}) {
  const [idx, setIdx] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);

  function onScroll() {
    const el = scrollerRef.current;
    if (!el) return;
    const step = Math.max(1, el.clientWidth - 44);
    const next = Math.round(el.scrollLeft / step);
    if (next !== idx) setIdx(next);
  }

  return (
    <div className="block min-[800px]:hidden" style={{ padding: `${topPadding} 0 6px` }}>
      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className="flex gap-3 overflow-x-auto px-6 pb-1.5"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="relative shrink-0 overflow-hidden rounded-[14px]"
            style={{
              scrollSnapAlign: "center",
              flex: "0 0 calc(100% - 56px)",
              aspectRatio: "4 / 5",
              background: card.bg,
            }}
          >
            {card.isPhoto && card.photo && (
              <>
                <Image
                  src={card.photo.src}
                  alt={card.photo.alt}
                  fill
                  sizes="90vw"
                  className="object-cover object-top"
                  priority={i === 0}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, oklch(10% 0.01 85 / 0.85) 0%, oklch(10% 0.01 85 / 0.65) 38%, oklch(10% 0.01 85 / 0.35) 55%, oklch(10% 0.01 85 / 0.1) 68%, transparent 78%)",
                  }}
                />
              </>
            )}
            <div
              className="absolute inset-0 flex flex-col justify-end px-[22px] py-[26px]"
              style={
                card.isPhoto
                  ? {
                      color: card.textColor,
                      textShadow:
                        "0 1px 3px oklch(10% 0.01 85 / 0.9), 0 2px 10px oklch(10% 0.01 85 / 0.7)",
                    }
                  : { color: card.textColor }
              }
            >
              {card.eyebrow && (
                <div className="mb-2.5 text-[11.5px] font-bold tracking-[0.12em] uppercase opacity-85">
                  {card.eyebrow}
                </div>
              )}
              <div
                className="font-display mb-2.5 font-semibold"
                style={{ fontSize: card.titleSize, lineHeight: 1.15 }}
              >
                {card.title}
              </div>
              {card.sub && <div className="mb-4 text-[14.5px] leading-[1.5] opacity-90">{card.sub}</div>}
              {card.labels && (
                <div className="mb-1.5 flex flex-col gap-2">
                  {card.labels.map((label) => (
                    <div key={label} className="font-display font-semibold" style={{ fontSize: labelSize }}>
                      {label}
                    </div>
                  ))}
                </div>
              )}
              {card.hasCta && (
                <a
                  href={card.ctaHref}
                  className="mt-1 inline-block rounded-full px-[22px] py-[13px] text-[13.5px] font-bold"
                  style={{ background: card.ctaBg, color: card.ctaColor, width: "fit-content" }}
                >
                  {card.cta}
                </a>
              )}
              {card.hasCta2 && (
                <a
                  href={card.cta2Href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 inline-block rounded-full border px-[22px] py-[11px] text-[13.5px] font-bold"
                  style={{ borderColor: card.textColor, color: card.textColor, width: "fit-content" }}
                >
                  {card.cta2}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-0.5 flex justify-center gap-[7px]">
        {cards.map((_, i) => (
          <div
            key={i}
            className="h-[6px] rounded-[4px] transition-[width]"
            style={{ width: i === idx ? "20px" : "6px", background: i === idx ? "var(--forest)" : "var(--line-strong)" }}
          />
        ))}
      </div>
      {helperText && <div className="mt-2.5 text-center text-[13px] text-[var(--ink-faint)]">{helperText}</div>}
    </div>
  );
}
