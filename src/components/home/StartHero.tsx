"use client";

import Image from "next/image";
import Container from "../Container";
import { track } from "@/lib/analytics";
import { storyChapters } from "@/lib/data/founderStory";

const before = storyChapters[0].image!;
const now = storyChapters[3].image!;

export default function StartHero() {
  return (
    <section className="pt-10 pb-8 sm:pt-14">
      <Container size="narrow">
        <div className="text-center">
          <div className="mb-4 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-accent-dark">
            A real transformation story
          </div>
          <h1 className="font-display text-balance text-[clamp(1.7rem,5.5vw,2.9rem)] font-semibold leading-[1.15] text-ink">
            I know what it feels like to look at yourself and think: I need to change.
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-[16px] leading-relaxed text-ink-soft">
            I was around 99&nbsp;kg and struggling with my health and lifestyle. Today I help others build
            healthier habits and stay accountable. This is wellness and lifestyle guidance, not medical
            treatment.
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3.5">
          <div className="relative aspect-[3/4] w-[38%] max-w-[170px] overflow-hidden rounded-sm">
            <Image src={before.src} alt={before.alt} fill sizes="170px" className="object-cover" priority />
          </div>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6 shrink-0 text-primary">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
          <div className="relative aspect-[3/4] w-[38%] max-w-[170px] overflow-hidden rounded-sm">
            <Image src={now.src} alt={now.alt} fill sizes="170px" className="object-cover object-top" priority />
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="#lead-form"
            onClick={() => track("hero_cta_click", { cta: "start_primary" })}
            className="inline-flex rounded-md bg-primary px-9 py-4 text-[16px] font-bold text-on-primary hover:bg-primary-dark"
          >
            Talk to Someone Who Has Been There
          </a>
          <p className="mt-3.5 text-[13px] text-ink-faint">
            Free consultation · No obligation · Individual journeys vary
          </p>
        </div>
      </Container>
    </section>
  );
}
