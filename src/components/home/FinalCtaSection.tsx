import Container from "../Container";
import WhatsAppButton from "../WhatsAppButton";

export default function FinalCtaSection() {
  return (
    <section className="bg-primary py-20 text-center sm:py-28">
      <Container size="narrow">
        <h2 className="font-display text-balance text-[clamp(1.7rem,4vw,2.6rem)] font-semibold leading-tight text-on-primary">
          You don&rsquo;t have to change everything at once.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[16px] text-on-primary/85">
          You just need to take the right first step.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#consultation"
            className="rounded-md bg-on-primary px-8 py-4 text-[15.5px] font-bold text-primary-dark"
          >
            Book Your Free Consultation
          </a>
          <WhatsAppButton context="final_cta" variant="outline-light" size="lg">
            Chat on WhatsApp
          </WhatsAppButton>
        </div>
      </Container>
    </section>
  );
}
