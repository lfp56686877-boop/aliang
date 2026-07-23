'use client';

import { WhatsAppIcon } from './icons';

export function WhatsAppButton() {
  const phoneNumber = '8618669317333';
  const message = encodeURIComponent(
    'Hello, I would like to inquire about medical device sourcing services.'
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:bg-[#128C7E] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      aria-label="Contact via WhatsApp"
    >
      <WhatsAppIcon className="w-6 h-6" />
      <span className="font-semibold text-sm hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
