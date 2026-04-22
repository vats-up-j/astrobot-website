/**
 * Central configuration. Change values here and they propagate everywhere.
 */

export const WHATSAPP_NUMBER = '919999999999';

export function waLink(message = 'Hi HoroTalk') {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
