import Link from "next/link";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import TransformationCard from "./TransformationCard";
import { transformations } from "@/lib/data/transformations";

const moreProofTypes = [
  { label: "Written reviews", icon: "✍️" },
  { label: "Video stories", icon: "🎥" },
  { label: "WhatsApp proof", icon: "💬" },
];

export default function ProofWallSection() {
  return (
    <section id="transformations" className="bg-sage py-16 sm:py-24">
      <Container size="wide">
        <SectionHeading eyebrow="The proof wall" title="Real people. Real journeys." subtitle="Placeholders for now — added once a client's story is verified and shared with permission." />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {transformations.slice(0, 3).map((t) => (
            <TransformationCard key={t.id} t={t} compact />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {moreProofTypes.map((p) => (
            <span
              key={p.label}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-[13px] font-medium text-ink-soft"
            >
              <span aria-hidden="true">{p.icon}</span>
              {p.label} — coming soon
            </span>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/transformations"
            className="inline-flex rounded-md border border-ink-faint/50 px-6 py-3 text-[14.5px] font-semibold text-ink hover:border-ink-soft"
          >
            See more transformations
          </Link>
        </div>
      </Container>
    </section>
  );
}
