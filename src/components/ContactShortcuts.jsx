import React from 'react';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

export default function ContactShortcuts() {
  return (
    <div className="fixed right-5 z-30 flex flex-col gap-3" style={{ bottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}>
      <a
        href="https://wa.me/919745235226"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Entrain Growth Partners on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      >
        <FaWhatsapp className="h-7 w-7" aria-hidden="true" />
      </a>
      <a
        href="tel:+919745235226"
        aria-label="Call Entrain Growth Partners at +91 97452 35226"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#4355A5] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4355A5] md:hidden"
      >
        <Phone className="h-6 w-6" aria-hidden="true" />
      </a>
    </div>
  );
}
