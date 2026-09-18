import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { socialCategories, instagramUrl, instagramHandle } from "@/lib/data/social";

export default function SocialSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={`@${instagramHandle}`}
          title="Follow the real, everyday version of this."
          subtitle="Not a highlight reel — the real routines and meals behind the guidance."
        />
        <div className="flex flex-wrap justify-center gap-2.5">
          {socialCategories.map((cat) => (
            <span
              key={cat.label}
              className="rounded-full border border-line bg-surface px-4 py-2 text-[13.5px] font-medium text-ink"
            >
              {cat.label}
            </span>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md border border-line px-6 py-3 text-[14.5px] font-semibold text-ink hover:border-ink-soft"
          >
            Follow on Instagram
          </a>
        </div>
      </Container>
    </section>
  );
}
