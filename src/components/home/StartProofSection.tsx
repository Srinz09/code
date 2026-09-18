import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { WrittenTestimonialCard } from "./ProofFormats";
import { writtenTestimonials } from "@/lib/data/testimonials";

export default function StartProofSection() {
  return (
    <section className="bg-sage py-14 sm:py-20">
      <Container>
        <SectionHeading
          title="Real people. Real journeys."
          subtitle="Placeholders until a client's story is verified and shared with permission — nothing here is invented."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {writtenTestimonials.slice(0, 3).map((t) => (
            <WrittenTestimonialCard key={t.id} t={t} />
          ))}
        </div>
      </Container>
    </section>
  );
}
