import Image from "next/image";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import PlaceholderMedia from "../PlaceholderMedia";
import BeforeAfterSlider from "../BeforeAfterSlider";
import WhatsAppButton from "../WhatsAppButton";
import { storyChapters } from "@/lib/data/founderStory";

export default function FounderStorySection() {
  const before = storyChapters[0].image!;
  const now = storyChapters[3].image!;

  return (
    <section id="story" className="py-16 sm:py-24">
      <Container>
        <SectionHeading title="This isn't a story I read about. I lived it." />

        <div className="flex flex-col gap-14 sm:gap-20">
          {storyChapters.map((chapter, i) => (
            <div
              key={chapter.tag}
              className="flex flex-wrap items-center gap-8 sm:gap-12"
              style={{ flexDirection: i % 2 === 1 ? "row-reverse" : "row" }}
            >
              <div className="min-w-[240px] flex-1">
                {chapter.image ? (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                    <Image
                      src={chapter.image.src}
                      alt={chapter.image.alt}
                      fill
                      sizes="(min-width: 640px) 45vw, 90vw"
                      className="object-cover object-top"
                    />
                  </div>
                ) : (
                  <PlaceholderMedia label={chapter.imagePlaceholderLabel ?? "[Photo]"} aspect="aspect-[4/3]" />
                )}
              </div>
              <div className="min-w-[240px] flex-1">
                <div className="mb-2.5 text-[12.5px] font-semibold uppercase tracking-[0.1em] text-accent-dark">
                  {chapter.tag}
                </div>
                <h3 className="font-display text-[24px] font-semibold text-ink">{chapter.title}</h3>
                <p className="mt-3 text-[15.5px] leading-relaxed text-ink-soft">{chapter.body}</p>
                {chapter.tags && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {chapter.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm bg-primary-soft px-3 py-1.5 text-[12.5px] font-semibold text-primary-dark"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="mb-6 text-center">
            <div className="mb-2 text-[12.5px] font-semibold uppercase tracking-[0.1em] text-accent-dark">
              The transformation
            </div>
            <h3 className="font-display text-[22px] font-semibold text-ink">Drag to see the progress.</h3>
          </div>
          <BeforeAfterSlider before={before} after={now} />
        </div>

        <p className="mx-auto mt-16 max-w-xl text-balance text-center font-display text-[clamp(1.4rem,3vw,2rem)] font-semibold leading-snug text-ink">
          I didn&rsquo;t become someone else. I slowly became a healthier version of myself.
        </p>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton context="founder_story" size="lg">
            Talk to someone who has been there
          </WhatsAppButton>
        </div>
      </Container>
    </section>
  );
}
