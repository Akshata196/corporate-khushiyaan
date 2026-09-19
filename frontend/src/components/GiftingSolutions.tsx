import {
  Users,
  Handshake,
  UserPlus,
  PartyPopper,
  CalendarHeart,
  PackageSearch,
  ArrowRight,
} from 'lucide-react';

const SOLUTIONS = [
  {
    icon: Users,
    title: 'Employee Gifting',
    description: "Celebrate and appreciate your team with thoughtful gifts they'll genuinely enjoy.",
    image: 'https://images.pexels.com/photos/6285172/pexels-photo-6285172.jpeg?auto=compress&cs=tinysrgb&h=500&w=700',
    alt: 'Colleagues exchanging corporate gifts in an office',
  },
  {
    icon: Handshake,
    title: 'Client & Partner Gifts',
    description: 'Strengthen professional relationships with memorable and premium gifts.',
    // image: 'https://images.pexels.com/photos/824205/pexels-photo-824205.jpeg?auto=compress&cs=tinysrgb&h=500&w=700',
    image: '/images/Gifting_Solutions_2.png',
    alt: 'Elegant gift with champagne for a client',
  },
  {
    icon: UserPlus,
    title: 'Employee Onboarding',
    description: 'Welcome new team members with beautifully curated onboarding kits.',
    image: 'https://images.pexels.com/photos/7580812/pexels-photo-7580812.jpeg?auto=compress&cs=tinysrgb&h=500&w=700',
    alt: 'Office welcome kit for a new employee',
  },
  {
    icon: PartyPopper,
    title: 'Festive Hampers',
    description: 'Celebrate Diwali, New Year and special occasions with thoughtfully curated hampers.',
    image: 'https://images.pexels.com/photos/8819577/pexels-photo-8819577.jpeg?auto=compress&cs=tinysrgb&h=500&w=700',
    alt: 'Festive Diwali gift hampers with lights and flowers',
  },
  {
    icon: CalendarHeart,
    title: 'Corporate Events',
    description: 'Make conferences, events and celebrations more memorable with customized gifting.',
    image: 'https://images.pexels.com/photos/6950184/pexels-photo-6950184.jpeg?auto=compress&cs=tinysrgb&h=500&w=700',
    alt: 'Business event with attendees celebrating',
  },
  {
    icon: PackageSearch,
    title: 'Custom Hampers',
    description: 'Create a personalized combination of products based on your occasion, budget and brand.',
    image: '/images/Gifting_Solutions_6.png',
    alt: 'Custom gift box with golden ribbon',
  },
];

function scrollToContact() {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
}

export function GiftingSolutions() {
  return (
    <section id="solutions" className="bg-cream-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
            Gifting Solutions
          </span>
          <h2 className="mt-4 text-3xl font-bold text-charcoal-900 sm:text-4xl">
            Corporate Gifting, Curated for Every Occasion
          </h2>
          <p className="mt-4 text-base text-charcoal-700">
            From employee appreciation to festive celebrations, we have the perfect
            gifting solution for every moment that matters.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="reveal group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-cream-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 to-transparent" />
                  <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 shadow-md backdrop-blur-sm">
                    <Icon size={20} className="text-brand-500" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-charcoal-900">{card.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal-700">
                    {card.description}
                  </p>
                  <button
                    onClick={scrollToContact}
                    className="group/btn mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500 transition-colors hover:text-brand-600"
                  >
                    Enquire Now
                    <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
