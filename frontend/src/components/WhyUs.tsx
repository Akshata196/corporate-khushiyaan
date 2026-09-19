import { Heart, Wand2, Gift, ShieldCheck, Truck } from 'lucide-react';

const REASONS = [
  {
    icon: Heart,
    title: 'Thoughtful Curation',
    desc: 'Every hamper is carefully selected with purpose.',
  },
  {
    icon: Wand2,
    title: 'Personalized Gifting',
    desc: 'Create gifts around your brand, occasion and recipients.',
  },
  {
    icon: Gift,
    title: 'Premium Presentation',
    desc: 'Beautiful packaging that makes the first impression count.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Focus',
    desc: 'We care about the products, presentation and overall experience.',
  },
  {
    icon: Truck,
    title: 'Timely Execution',
    desc: 'Professional handling from curation to delivery.',
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
            Why Corporate Khushiyaan
          </span>
          <h2 className="mt-4 text-3xl font-bold text-charcoal-900 sm:text-4xl">
            Why Choose Corporate Khushiyaan?
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className={`reveal group relative overflow-hidden rounded-2xl border border-cream-200 bg-cream-50 p-7 transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg ${
                  i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-lg shadow-brand-500/20 transition-transform group-hover:scale-110">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-charcoal-900">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-700">{reason.desc}</p>
                <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-gold-400/10 transition-transform group-hover:scale-150" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
