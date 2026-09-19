// import { useEffect, useState } from 'react';
// import { MessageCircle } from 'lucide-react';
// import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '@/lib/config';

// export function WhatsAppButton() {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setVisible(window.scrollY > 200);
//     onScroll();
//     window.addEventListener('scroll', onScroll, { passive: true });
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   const openWhatsApp = () => {
//     const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
//     window.open(url, '_blank', 'noopener,noreferrer');
//   };

//   return (
//     <button
//       onClick={openWhatsApp}
//       aria-label="Chat with us on WhatsApp"
//       className={`group fixed bottom-5 right-5 z-50 flex items-center gap-0 transition-all duration-300 ${
//         visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-16 opacity-0'
//       }`}
//     >
//       {/* Label — desktop only */}
//       <span className="hidden items-center rounded-full bg-white py-2.5 pl-4 pr-3 text-sm font-semibold text-charcoal-800 shadow-lg transition-all group-hover:pr-4 sm:flex">
//         Chat with us
//       </span>
//       <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-500/30 transition-all group-hover:scale-110 group-hover:shadow-green-500/40 animate-pulse-soft sm:ml-2">
//         <MessageCircle size={26} fill="currentColor" />
//       </span>
//     </button>
//   );
// }



import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '@/lib/config';
import { FaWhatsapp } from 'react-icons/fa';

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsApp = () => {
    const url = `https://wa.me/${8446227102}?text=${encodeURIComponent(
      WHATSAPP_MESSAGE
    )}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">

      {/* Chat Bubble */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 mb-3 w-72 overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/10">

          {/* Header */}
          <div className="bg-brand-500 px-4 py-3 text-white">
            <div className="flex items-center justify-between">

              <div>
                <p className="font-semibold">
                  Corporate Khushiyaan
                </p>

                <p className="text-xs text-white/80">
                  The Gift Hub
                </p>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                type="button"
                aria-label="Close chat"
                className="rounded-full p-1 transition-colors hover:bg-white/10"
              >
                <X size={18} />
              </button>

            </div>
          </div>

          {/* Message */}
          <div className="bg-cream-50 px-4 py-4">

            <div className="rounded-xl rounded-tl-sm bg-white p-3 shadow-sm">
              <p className="text-sm leading-relaxed text-charcoal-800">
                👋 Hello! How can we help you with your corporate
                gifting requirements?
              </p>
            </div>

            <button
              onClick={openWhatsApp}
              type="button"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-600"
            >
              <FaWhatsapp size={30} />
              Chat on WhatsApp
            </button>

          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
  onClick={openWhatsApp}
  type="button"
  aria-label="Chat on WhatsApp"
  className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
>
  <FaWhatsapp size={30} />
</button>

    </div>
  );
}