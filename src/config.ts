/**
 * Dados para personalizar antes de publicar.
 * WhatsApp: somente números, com código do país e DDD (ex.: 5515999999999).
 * Não inclua +, espaços, parênteses ou hífens.
 */
export const siteConfig = {
  whatsappNumber: '+55 11 96291-3956',
  email: '@gmail.com',
  oabNumber: '',
  city: 'Sorocaba e região',
};

export function getWhatsAppUrl(message = 'Olá, Arthur. Gostaria de conversar sobre uma demanda jurídica.') {
  const number = siteConfig.whatsappNumber.replace(/\D/g, '');
  if (!number) return '';
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
