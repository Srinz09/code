import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function MobileStickyCta({
  primaryHref = "#consultation",
  inset = false,
}: {
  primaryHref?: string;
  inset?: boolean;
}) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[60] hidden max-[799px]:flex gap-2 border-t border-line px-3.5 py-2.5 backdrop-blur-[8px]"
      style={{
        background: "oklch(96% 0.015 85 / 0.97)",
        paddingBottom: "calc(10px + env(safe-area-inset-bottom))",
      }}
    >
      <a
        href={primaryHref}
        className="flex-1 rounded-[2px] bg-forest py-[13px] text-center text-[14px] font-bold text-cream-light"
        style={inset ? { boxShadow: "0 0 0 2px var(--cream-light) inset" } : undefined}
      >
        Book Free Consultation
      </a>
      <a
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 rounded-[2px] border py-[13px] text-center text-[14px] font-bold text-ink"
        style={{ borderColor: "var(--line-faint)" }}
      >
        WhatsApp Me
      </a>
    </div>
  );
}
