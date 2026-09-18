import Image from "next/image";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { founderLifestylePhoto } from "@/lib/data/founderStory";

const outcomes = [
  "Better daily routines",
  "Improved fitness",
  "More consistency",
  "Smarter eating habits",
  "More energy through the day",
  "Greater confidence",
  "Real accountability",
  "A lifestyle that lasts",
];

export default function HealthTransformationSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container size="wide">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading
              align="left"
              title="This isn't only about losing weight."
              subtitle="It shows up in your day, your energy, and whether you can keep going after week three."
            />
            <ul className="grid grid-cols-2 gap-3">
              {outcomes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14.5px] text-ink">
                  <span className="mt-0.5 text-primary" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[13px] text-ink-faint">
              Lifestyle and fitness guidance — not medical treatment or a cure.
            </p>
          </div>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[360px] overflow-hidden rounded-sm">
            <Image
              src={founderLifestylePhoto.src}
              alt={founderLifestylePhoto.alt}
              fill
              sizes="360px"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
