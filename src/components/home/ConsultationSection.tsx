import Container from "../Container";
import LeadForm from "./LeadForm";

export default function ConsultationSection({
  id = "consultation",
  title = "You don't need to have everything figured out before you start.",
  subtitle = "Start with a conversation.",
  variant = "full",
}: {
  id?: string;
  title?: string;
  subtitle?: string;
  variant?: "full" | "short";
}) {
  return (
    <section id={id} className="py-16 sm:py-24">
      <Container size="narrow">
        <div className="mb-8 text-center">
          <h2 className="font-display text-balance text-[clamp(1.5rem,3.6vw,2.1rem)] font-semibold text-ink">
            {title}
          </h2>
          <p className="mt-2.5 text-[16px] text-ink-soft">{subtitle}</p>
        </div>
        <LeadForm variant={variant} />
        <p className="mx-auto mt-6 max-w-md text-center text-[12.5px] leading-relaxed text-ink-faint">
          This free consultation covers your goals, lifestyle and challenges, and whether this guidance is a
          good fit for you. It is not a medical diagnosis.
        </p>
      </Container>
    </section>
  );
}
