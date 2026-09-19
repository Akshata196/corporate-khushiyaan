import { ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '@/lib/config';

function scrollToContact() {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
}

function openWhatsApp() {
  const url = `https://wa.me/${8446227102}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 py-16 sm:py-20">
      {/* Decorative pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full border-4 border-white" />
        <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full border-4 border-white" />
        <div className="absolute right-1/3 top-1/2 h-20 w-20 rounded-full border-4 border-white" />
      </div>

      <div className="reveal relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Make Every Gift a Memorable One.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-cream-100/90 sm:text-lg">
          Because every gift is an opportunity to build a stronger connection.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand-600 shadow-lg transition-all hover:shadow-xl"
          >
            Get a Quote
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={openWhatsApp}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
          >
            <MessageCircle size={16} />
            WhatsApp Us
          </button>
        </div>
      </div>
    </section>
  );
}
