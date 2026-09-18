"use client";

import { buildWhatsAppLink } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import WhatsAppIcon from "./WhatsAppIcon";

type Variant = "primary" | "ghost" | "outline-light";
type Size = "md" | "sm" | "lg" | "icon";

const variantClasses: Record<Variant, string> = {
  primary: "bg-[#25A85C] text-white hover:bg-[#1f9350]",
  ghost: "border border-line text-ink hover:border-ink-soft bg-transparent",
  "outline-light": "border border-white/40 text-on-primary hover:border-white/70 bg-transparent",
};

const sizeClasses: Record<Size, string> = {
  lg: "px-8 py-4 text-base rounded-md gap-2.5",
  md: "px-6 py-3.5 text-[15px] rounded-md gap-2",
  sm: "px-4 py-2.5 text-sm rounded-md gap-1.5",
  icon: "w-14 h-14 rounded-full p-0 justify-center",
};

export default function WhatsAppButton({
  message,
  children,
  variant = "primary",
  size = "md",
  className = "",
  context,
  showIcon = true,
}: {
  message?: string;
  children?: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  context: string;
  showIcon?: boolean;
}) {
  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click", { context })}
      className={`inline-flex items-center font-semibold whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      aria-label={size === "icon" ? "Message on WhatsApp" : undefined}
    >
      {showIcon && <WhatsAppIcon className={size === "icon" ? "w-6 h-6" : "w-[1.1em] h-[1.1em]"} />}
      {children}
    </a>
  );
}
