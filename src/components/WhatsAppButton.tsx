"use client";

import { buildWhatsAppLink } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";

export default function WhatsAppButton({
  message,
  children,
  className = "",
  context,
}: {
  message?: string;
  children?: React.ReactNode;
  className?: string;
  context: string;
}) {
  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click", { source: context })}
      className={className}
    >
      {children}
    </a>
  );
}
