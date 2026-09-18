const WHATSAPP_NUMBER = "918240242714";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi, I saw your transformation story and I'd like to understand how you help people with their health and lifestyle goals.";

export function buildWhatsAppLink(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
