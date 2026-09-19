import { Stamp, MessageSquareHeart, Package, ListChecks, ArrowRight } from 'lucide-react';

const FEATURES = [
  { num: '01', icon: Stamp, title: 'Logo Branding', desc: 'Add your company logo to make every gift uniquely yours.' },
  { num: '02', icon: MessageSquareHeart, title: 'Personalized Messages', desc: 'Include handwritten or printed notes for a personal touch.' },
  { num: '03', icon: Package, title: 'Custom Packaging', desc: 'Beautiful packaging designed to match your brand identity.' },
  { num: '04', icon: ListChecks, title: 'Curated Product Selection', desc: 'Hand-picked products chosen to suit your occasion and recipients.' },
];

const CUSTOM_IMAGE =
  '/images/CustomizationSection.png';

function scrollToContact() {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
}

export function Customization() {
  return (
    <section className="bg-cream-100 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left — image */}
          <div className="reveal relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-charcoal-900/15 ring-1 ring-cream-200">
              <img
                src={CUSTOM_IMAGE}
                alt="Customized corporate gift hamper with red and gold ribbon"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-2xl bg-gradient-to-br from-gold-400 to-brand-500 opacity-20 blur-2xl" />
          </div>

          {/* Right — content */}
          <div className="reveal order-1 lg:order-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
              Customization
            </span>
            <h2 className="mt-4 text-3xl font-bold text-charcoal-900 sm:text-4xl">
              Make Every Gift Uniquely Yours
            </h2>
            <p className="mt-5 text-base leading-relaxed text-charcoal-700 sm:text-lg">
              From your company logo and personalized messages to custom packaging and
              carefully selected products, we create gifting experiences that truly
              represent your brand.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {FEATURES.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.num}
                    className="group rounded-2xl border border-cream-200 bg-white p-5 transition-all hover:border-brand-200 hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-500 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                        <Icon size={18} />
                      </div>
                      <span className="text-sm font-bold text-gold-500">{f.num}</span>
                    </div>
                    <h3 className="mt-3 text-sm font-bold text-charcoal-900">{f.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-charcoal-700">{f.desc}</p>
                  </div>
                );
              })}
            </div>

            <button
              onClick={scrollToContact}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-600 hover:shadow-xl"
            >
              Customize Your Gift
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
