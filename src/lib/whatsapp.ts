const WHATSAPP_NUMBER = "918240242714";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi, I saw your transformation story and I'd like to understand how you help people with their wellness and lifestyle goals.";

export function buildWhatsAppLink(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildFormWhatsAppMessage(fields: { name: string; goal: string; challenge: string }): string {
  return `Hi, I'm ${fields.name || "interested in your program"}. I'd like to improve: ${
    fields.goal || "my health"
  }. My biggest challenge right now is: ${fields.challenge || "staying consistent"}. I'd like to understand how this works.`;
}
