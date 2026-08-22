// Builds a wa.me click-to-chat link — opens WhatsApp with the message
// pre-filled so the patient can review and send it themselves. No API key,
// no backend, and it always works (unlike unofficial auto-send relays).
export function buildWhatsAppLink(phone, message) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}
