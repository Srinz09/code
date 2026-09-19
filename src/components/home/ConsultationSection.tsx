import LeadForm from "./LeadForm";

export default function ConsultationSection({ variant, page }: { variant: "home" | "start"; page: string }) {
  if (variant === "start") {
    return (
      <section id="lead-form" className="bg-cream-alt px-6 py-16">
        <div className="mx-auto max-w-[560px]">
          <h2 className="font-display mb-2 text-center text-[26px] font-semibold text-ink">Book A Free Consultation</h2>
          <p className="mb-7 text-center text-[14.5px] text-[var(--ink-soft)]">Takes less than a minute.</p>
          <LeadForm variant="start" page={page} />
        </div>
      </section>
    );
  }

  return (
    <section id="consultation" className="px-6 py-16">
      <div className="mx-auto max-w-[640px]">
        <div className="mb-9 text-center">
          <h2
            className="font-display text-balance mb-3 font-semibold text-ink"
            style={{ fontSize: "clamp(26px,3.4vw,36px)" }}
          >
            You Don&rsquo;t Need To Have Everything Figured Out Before You Start.
          </h2>
          <p className="text-[16px] text-[var(--ink-soft)]">Start with a conversation.</p>
        </div>
        <LeadForm variant="home" page={page} />
      </div>
    </section>
  );
}
