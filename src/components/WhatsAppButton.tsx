"use client";

import { buildWhatsAppLink } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";

export default function WhatsAppButton({
  message,
  children,
  className = "",
  style,
  context,
}: {
  message?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  context: string;
}) {
  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click", { source: context })}
      className={className}
      style={style}
    >
      {children}
    </a>
  );
}
