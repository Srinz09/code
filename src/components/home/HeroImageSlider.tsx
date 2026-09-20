"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { HeroSlide } from "@/lib/data/founderStory";

export default function HeroImageSlider({
  slides,
  maxWidth = 460,
  edgeFade = false,
  overlayCard = false,
}: {
  slides: HeroSlide[];
  maxWidth?: number;
  edgeFade?: boolean;
  overlayCard?: boolean;
}) {
  const [slide, setSlide] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  const startXRef = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!dragging) setSlide((s) => (s === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, [dragging]);

  function onPointerDown(e: React.PointerEvent) {
    setDragging(true);
    startXRef.current = e.clientX;
    setDragX(0);
  }
  function onPointerMove(e: React.PointerEvent) {
    if (!dragging) return;
    setDragX(e.clientX - startXRef.current);
  }
  function onPointerUp() {
    if (!dragging) return;
    let next = slide;
    if (dragX < -50) next = Math.min(1, slide + 1);
    else if (dragX > 50) next = Math.max(0, slide - 1);
    setDragging(false);
    setDragX(0);
    setSlide(next);
  }

  const dragPx = dragging ? dragX : 0;
  const card = slides[slide];

  return (
    <div
      className="relative min-w-[280px] cursor-grab overflow-hidden bg-[oklch(90%_0.015_85)]"
      style={{ flex: `1 1 ${maxWidth}px`, maxWidth, aspectRatio: "3 / 4", touchAction: "pan-y" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      <div
        className="absolute inset-0 flex h-full"
        style={{
          width: "200%",
          transform: `translateX(calc(${-slide * 50}% + ${dragPx}px))`,
          transition: dragging ? "none" : "transform 0.3s ease",
        }}
      >
        {slides.map((s, i) => (
          <div key={i} className="relative h-full shrink-0" style={{ width: "50%" }}>
            <Image
              src={s.photo.src}
              alt={s.photo.alt}
              fill
              sizes="(min-width: 800px) 460px, 90vw"
              className="object-cover"
              draggable={false}
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {edgeFade && (
        <div
          className="pointer-events-none absolute top-0 right-0 bottom-0 w-14"
          style={{ background: "linear-gradient(to right, transparent, oklch(93% 0.02 85 / 0.85))" }}
        />
      )}

      {overlayCard && card.title && (
        <div
          className="absolute bottom-14 left-6 max-w-[78%] rounded-lg bg-cream-light px-[22px] py-5"
          style={{ boxShadow: "0 16px 36px oklch(20% 0.02 85 / 0.2)" }}
        >
          <div className="font-display mb-2 text-[19px] font-semibold leading-[1.3] text-ink">{card.title}</div>
          <div className="mb-3.5 text-[13.5px] leading-[1.55] text-[var(--ink-soft)]">{card.body}</div>
          <div className="inline-block rounded-[4px] bg-forest-soft px-3.5 py-2 text-[13px] font-bold text-forest">
            {card.badge}
          </div>
        </div>
      )}

      <div className="absolute inset-x-0 bottom-5 flex justify-center gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setSlide(i)}
            className="h-[7px] cursor-pointer rounded-[4px] transition-[width] duration-200"
            style={{ width: slide === i ? "22px" : "7px", background: slide === i ? "var(--forest)" : "var(--line-strong)" }}
          />
        ))}
      </div>
    </div>
  );
}
