"use client";

import { track } from "@/lib/analytics";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { buildStartStoryCards, startHeroSlides } from "@/lib/data/founderStory";
import HeroStoryCards from "./HeroStoryCards";
import HeroImageSlider from "./HeroImageSlider";

const storyCards = buildStartStoryCards(buildWhatsAppLink());

export default function StartHero() {
  return (
    <div>
      <HeroStoryCards
        cards={storyCards}
        labelSize="19px"
        topPadding="18px"
        helperText="Free consultation · No obligation · Individual journeys vary"
      />

      <div className="hidden min-[800px]:flex min-[800px]:min-h-[520px] flex-wrap items-center">
        <div className="flex flex-1 flex-col justify-center px-11 py-14" style={{ flexBasis: 360 }}>
          <div className="mb-4 text-[12.5px] font-bold tracking-[0.12em] text-forest-light uppercase">
            A Real Transformation Story
          </div>
          <h1
            className="font-display mb-4 max-w-[440px] font-semibold text-ink"
            style={{ fontSize: "clamp(28px,3.8vw,40px)", lineHeight: 1.15 }}
          >
            I Know What It Feels Like To Look At Yourself And Think: I Need To Change.
          </h1>
          <p className="mb-3.5 max-w-[420px] text-[15.5px] leading-[1.6] text-[var(--ink-soft)]">
            I was nearly 99&nbsp;kg and struggling with my health and lifestyle. Today I help others build
            healthier habits and stay accountable.
          </p>
          <p className="mb-[26px] max-w-[400px] text-[13.5px] leading-[1.55] text-[var(--ink-faint)]">
            Busy work schedule, home-cooked meals, eating out with family &mdash; whatever your routine looks
            like, guidance is built around it. This is wellness and lifestyle guidance, not medical treatment.
          </p>
          <div>
            <a
              href="#lead-form"
              onClick={() => track("hero_cta_click")}
              className="inline-block rounded-[4px] bg-forest px-8 py-[17px] text-[15px] font-bold text-cream-light"
            >
              Book A Free Transformation Consultation &#8594;
            </a>
          </div>
        </div>

        <HeroImageSlider slides={startHeroSlides} maxWidth={440} />
      </div>
    </div>
  );
}
