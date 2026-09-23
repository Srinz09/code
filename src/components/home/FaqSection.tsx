"use client";

import { useState } from "react";
import type { Faq } from "@/lib/data/content";

export default function FaqSection({ faqs, variant }: { faqs: Faq[]; variant: "home" | "start" }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const home = variant === "home";

  return (
    <section id={home ? "faq" : undefined} className={home ? "bg-cream-alt px-6 py-16" : "px-6 py-14"}>
      <div className="mx-auto" style={{ maxWidth: home ? 720 : 640 }}>
        <h2
          className={`font-display text-balance text-center font-semibold text-ink ${home ? "mb-11" : "mb-7"}`}
          style={home ? { fontSize: "clamp(28px,3.6vw,42px)" } : { fontSize: "22px" }}
        >
          {home ? "Frequently Asked Questions" : "Quick Questions"}
        </h2>
        <div className="flex flex-col gap-0.5">
          {faqs.map((faq, i) => {
            const open = openIdx === i;
            return (
              <div key={faq.q} className={`border-b border-line ${home ? "px-1 py-[18px]" : "px-1 py-4"}`}>
                <div
                  onClick={() => setOpenIdx(open ? null : i)}
                  className={`flex cursor-pointer items-center justify-between gap-4 font-semibold text-ink ${
                    home ? "text-[15.5px]" : "text-[14.5px]"
                  }`}
                >
                  <span>{faq.q}</span>
                  <span className={`text-forest-light ${home ? "text-[20px]" : "text-[18px]"}`}>{open ? "−" : "+"}</span>
                </div>
                {open && (
                  <div
                    className={`text-[var(--ink-soft-2)] ${home ? "mt-3 text-[14.5px] leading-[1.65]" : "mt-2.5 text-[13.5px] leading-[1.6]"}`}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
