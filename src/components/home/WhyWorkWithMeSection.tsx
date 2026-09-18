import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { benefits } from "@/lib/data/content";

export default function WhyWorkWithMeSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading title="Why work with me instead of doing it alone?" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="border-t-2 border-primary pt-5">
              <h3 className="font-display text-[18px] font-semibold text-ink">{b.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{b.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
