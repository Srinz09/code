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
          subtitle="Not a highlight reel — the routines, meals and client journeys behind the guidance, as they actually happen."
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {socialCategories.map((cat) => (
            <div key={cat.label} className="rounded-sm border border-line bg-surface p-4">
              <div className="text-[14px] font-semibold text-ink">{cat.label}</div>
              <div className="mt-1 text-[12.5px] leading-relaxed text-ink-faint">{cat.description}</div>
            </div>
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
