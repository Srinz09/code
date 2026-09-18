"use client";

import Image from "next/image";
import Container from "../Container";
import WhatsAppButton from "../WhatsAppButton";
import TrustBadges from "../TrustBadges";
import { storyChapters } from "@/lib/data/founderStory";
import { track } from "@/lib/analytics";

const before = storyChapters[0].image!;
const now = storyChapters[3].image!;

export default function Hero() {
  return (
    <section className="pt-12 pb-14 sm:pt-16">
      <Container size="wide">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-accent-dark">
            A real transformation story
          </div>
          <h1 className="font-display text-balance text-[clamp(1.9rem,5.2vw,3.4rem)] font-semibold leading-[1.1] text-ink">
            I was once 99&nbsp;kg and struggling with my health. Today, I help others start their own
            transformation.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-ink-soft">
            If you&rsquo;re dealing with weight, low energy, inconsistent eating habits or just can&rsquo;t stay
            consistent — I&rsquo;ve personally been through that. Now I offer structured, 1:1 guidance and
            accountability to help you build a healthier routine. This is wellness and lifestyle support, not
            medical treatment.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#consultation"
              onClick={() => track("hero_cta_click", { cta: "primary" })}
              className="rounded-md bg-primary px-8 py-4 text-[15.5px] font-semibold text-on-primary hover:bg-primary-dark"
            >
              Book a Free Transformation Consultation
            </a>
            <a
              href="#story"
              onClick={() => track("hero_cta_click", { cta: "secondary" })}
              className="rounded-md border border-line px-8 py-4 text-[15.5px] font-semibold text-ink hover:border-ink-soft"
            >
              See My Story
            </a>
          </div>
          <TrustBadges className="mt-7 justify-center" />
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <figure className="w-[46%] max-w-[300px] min-w-[150px] sm:w-[260px]">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <Image src={before.src} alt={before.alt} fill sizes="300px" className="object-cover" priority />
            </div>
            <figcaption className="mt-2.5 text-center font-display text-[14px] italic text-ink-soft">
              Then — 99 kg
            </figcaption>
          </figure>
          <div className="flex flex-col items-center gap-1.5 px-1 text-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
            <span className="max-w-[110px] text-center text-[11px] font-semibold uppercase tracking-wide text-ink-faint">
              Nutrition · Routine · Accountability
            </span>
          </div>
          <figure className="w-[46%] max-w-[300px] min-w-[150px] sm:w-[260px]">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <Image src={now.src} alt={now.alt} fill sizes="300px" className="object-cover object-top" priority />
            </div>
            <figcaption className="mt-2.5 text-center font-display text-[14px] italic text-ink-soft">
              Now — a healthier lifestyle
            </figcaption>
          </figure>
        </div>

        <div className="mt-9 flex justify-center">
          <WhatsAppButton context="hero_secondary" variant="ghost">
            Have a question before you start? Chat on WhatsApp
          </WhatsAppButton>
        </div>
      </Container>
    </section>
  );
}
