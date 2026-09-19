import { ClipboardList, Lightbulb, CheckCircle2, Truck, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    icon: ClipboardList,
    title: 'Share Your Requirement',
    desc: 'Tell us your occasion, quantity, budget and preferences.',
  },
  {
    num: '02',
    icon: Lightbulb,
    title: 'Get Curated Options',
    desc: 'We suggest suitable gift ideas based on your requirements.',
  },
  {
    num: '03',
    icon: CheckCircle2,
    title: 'Customize & Approve',
    desc: 'Finalize products, branding, packaging and presentation.',
  },
  {
    num: '04',
    icon: Truck,
    title: 'We Deliver',
    desc: 'Your gifts are carefully packed and delivered.',
  },
];

function scrollToContact() {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
}

export function OurProcess() {
  return (
    <section id="process" className="bg-cream-100 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
            Our Process
          </span>
          <h2 className="mt-4 text-3xl font-bold text-charcoal-900 sm:text-4xl">
            From Idea to Gift Box — Simple &amp; Seamless
          </h2>
        </div>

        <div className="relative mt-14">
          {/* Connector line — desktop */}
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-brand-200 via-gold-400 to-brand-200 lg:block" />

          <div className="grid gap-8 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="reveal relative flex flex-col items-center text-center lg:items-start lg:text-left">
                  {/* Step circle */}
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg ring-4 ring-cream-100 transition-transform hover:scale-110">
                    <Icon size={24} className="text-brand-500" />
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-[10px] font-bold text-white shadow-md">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="mt-5 text-base font-bold text-charcoal-900">{step.title}</h3>
                  <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-charcoal-700">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="reveal mt-12 text-center">
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-600 hover:shadow-xl"
          >
            Start Your Gifting Journey
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
