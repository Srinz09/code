"use client";

import { useState } from "react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { faqs as allFaqs, type Faq } from "@/lib/data/content";

export default function FaqSection({ faqs = allFaqs, compact = false }: { faqs?: Faq[]; compact?: boolean }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className={compact ? "" : "bg-sage py-16 sm:py-24"}>
      <Container size="narrow">
        {!compact && <SectionHeading title="Frequently asked questions" />}
        <div className="flex flex-col">
          {faqs.map((faq, i) => {
            const open = openIdx === i;
            return (
              <div key={faq.q} className="border-b border-line py-4">
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 text-left text-[15.5px] font-semibold text-ink"
                >
                  <span>{faq.q}</span>
                  <span className="text-[20px] text-accent-dark" aria-hidden="true">
                    {open ? "−" : "+"}
                  </span>
                </button>
                {open && <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">{faq.a}</p>}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
