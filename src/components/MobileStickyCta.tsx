import WhatsAppButton from "./WhatsAppButton";

export default function MobileStickyCta({
  primaryHref = "#consultation",
  primaryLabel = "Start Your Journey",
  context,
}: {
  primaryHref?: string;
  primaryLabel?: string;
  context: string;
}) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-line bg-bg/97 p-3 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))" }}
    >
      <a
        href={primaryHref}
        className="flex-1 rounded-md bg-primary py-3.5 text-center text-[14px] font-bold text-on-primary"
      >
        {primaryLabel}
      </a>
      <WhatsAppButton context={context} variant="ghost" className="flex-1 justify-center" showIcon={false}>
        WhatsApp
      </WhatsAppButton>
    </div>
  );
}
