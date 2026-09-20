"use client";

import { track } from "@/lib/analytics";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { buildHomeStoryCards, homeHeroSlides } from "@/lib/data/founderStory";
import HeroStoryCards from "./HeroStoryCards";
import HeroImageSlider from "./HeroImageSlider";

const storyCards = buildHomeStoryCards(buildWhatsAppLink());

export default function Hero() {
  return (
    <div id="hero">
      <HeroStoryCards cards={storyCards} labelSize="20px" />

      <div className="hidden min-[800px]:flex min-[800px]:min-h-[560px] flex-wrap items-center">
        <div className="flex flex-1 flex-col justify-center px-11 py-16" style={{ flexBasis: 380 }}>
          <div className="mb-[18px] text-[12.5px] font-bold tracking-[0.12em] text-forest-light uppercase">
            A Real Transformation Story
          </div>
          <h1
            className="font-display mb-4 max-w-[440px] font-semibold text-ink"
            style={{ fontSize: "clamp(30px,4vw,44px)", lineHeight: 1.14 }}
          >
            You Don&rsquo;t Need It Figured Out. You Just Need To Start.
          </h1>
          <p className="mb-6 max-w-[420px] text-[15.5px] leading-[1.6] text-[var(--ink-soft)]">
            I went from 99&nbsp;KG and struggling with my health to a healthier, more consistent life. Now I help
            others do the same &mdash; with structure and accountability.
          </p>
          <div className="mb-7 max-w-[400px] rounded-[4px] border border-line px-4 py-3.5 text-[13.5px] leading-[1.55] text-[var(--ink-soft-2)]">
            Wellness and lifestyle guidance, not medical treatment. Individual results vary.
          </div>
          <div>
            <a
              href="#consultation"
              onClick={() => track("hero_cta_click")}
              className="animate-cta-pulse inline-block rounded-[4px] bg-forest px-8 py-[17px] text-[15px] font-bold text-cream-light"
            >
              Book A Free Transformation Consultation &#8594;
            </a>
          </div>
        </div>

        <HeroImageSlider slides={homeHeroSlides} maxWidth={480} edgeFade overlayCard />
      </div>
    </div>
  );
}
