import WhatsAppButton from "../WhatsAppButton";

export default function FinalCtaSection() {
  return (
    <section
      className="px-6 py-[72px] text-center"
      style={{ background: "var(--cta-band-bg)", color: "var(--cta-band-text)" }}
    >
      <div className="mx-auto max-w-[680px]">
        <h2
          className="font-display text-balance mb-4 font-semibold"
          style={{ fontSize: "clamp(28px,3.8vw,44px)", lineHeight: 1.25 }}
        >
          You Don&rsquo;t Have To Change Everything At Once.
        </h2>
        <p className="mb-8 text-[16px] opacity-85">Start by understanding what would work for you.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#consultation"
            className="rounded-[2px] px-[30px] py-4 text-[15.5px] font-bold"
            style={{
              background: "var(--cta-band-text)",
              color: "var(--cta-band-bg)",
              boxShadow: "0 0 0 2px oklch(96% 0.02 145 / 0.6)",
            }}
          >
            Book Your Free Consultation
          </a>
          <WhatsAppButton
            context="final_cta"
            className="rounded-[2px] border border-[oklch(80%_0.02_145)] px-[30px] py-4 text-[15.5px] font-bold"
          >
            Chat On WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
