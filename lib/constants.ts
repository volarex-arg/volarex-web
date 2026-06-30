export const WHATSAPP_NUMBER = "541133335747"

export function whatsappUrl(text: string) {
  return `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`
}

export const WHATSAPP_URL = whatsappUrl("Hola, quiero más información.")
