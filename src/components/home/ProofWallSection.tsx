import Link from "next/link";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import TransformationCard from "./TransformationCard";
import { WrittenTestimonialCard, VideoTestimonialCard, WhatsAppProofCard } from "./ProofFormats";
import { transformations } from "@/lib/data/transformations";
import { writtenTestimonials, videoTestimonials, whatsappProof } from "@/lib/data/testimonials";

export default function ProofWallSection() {
  return (
    <section id="transformations" className="bg-sage py-16 sm:py-24">
      <Container size="wide">
        <SectionHeading
          eyebrow="The proof wall"
          title="Real people. Real journeys."
          subtitle="Every card below is a placeholder until a client's story is verified and they've agreed to share it — nothing here is invented."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {transformations.slice(0, 3).map((t) => (
            <TransformationCard key={t.id} t={t} />
          ))}
        </div>

        <div className="mt-12">
          <h3 className="mb-4 font-display text-[18px] font-semibold text-ink">Written reviews</h3>
          <div className="flex snap-x gap-4 overflow-x-auto pb-2">
            {writtenTestimonials.map((t) => (
              <div key={t.id} className="snap-start">
                <WrittenTestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="mb-4 font-display text-[18px] font-semibold text-ink">Video testimonials</h3>
          <div className="flex snap-x gap-4 overflow-x-auto pb-2">
            {videoTestimonials.map((t) => (
              <div key={t.id} className="snap-start">
                <VideoTestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="mb-4 font-display text-[18px] font-semibold text-ink">From WhatsApp</h3>
          <div className="flex snap-x gap-4 overflow-x-auto pb-2">
            {whatsappProof.map((p) => (
              <div key={p.id} className="snap-start">
                <WhatsAppProofCard p={p} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
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
