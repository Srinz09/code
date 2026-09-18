import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { identificationCards } from "@/lib/data/content";

export default function IdentificationSection() {
  return (
    <section className="bg-sage py-16 sm:py-24">
      <Container>
        <SectionHeading title="Maybe your story feels a little like mine." />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {identificationCards.map((card) => (
            <div key={card.title} className="rounded-sm border border-line bg-surface p-6">
              <div className="mb-2 font-semibold text-[16px] text-ink">{card.title}</div>
              <div className="text-[14.5px] leading-relaxed text-ink-soft">{card.body}</div>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-xl text-center font-display text-[19px] italic leading-relaxed text-primary">
          I understand because I didn&rsquo;t start this journey as a fitness expert. I started as someone who
          needed to change.
        </p>
      </Container>
    </section>
  );
}
