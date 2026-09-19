const CATEGORIES = [
  {
    label: 'Premium Gift Hampers',
    image: 'https://images.pexels.com/photos/20699854/pexels-photo-20699854.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    alt: 'Premium gift hamper with chocolates and sweets',
  },
  {
    label: 'Employee Gifts',
    image: 'https://images.pexels.com/photos/14524110/pexels-photo-14524110.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    alt: 'Colleagues exchanging employee gifts',
  },
  {
    label: 'Welcome Kits',
    image: 'https://images.pexels.com/photos/6519176/pexels-photo-6519176.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    alt: 'Employee welcome kit celebration',
  },
  {
    label: 'Festive Gifts',
    image: 'https://images.pexels.com/photos/8819776/pexels-photo-8819776.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    alt: 'Festive Diwali gifts with traditional decor',
  },
  {
    label: 'Executive Gifts',
    image: 'https://images.pexels.com/photos/13975271/pexels-photo-13975271.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    alt: 'Elegant executive gift boxes with red ribbons',
  },
  {
    label: 'Tech & Utility Gifts',
    image: 'https://images.pexels.com/photos/25450654/pexels-photo-25450654.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    alt: 'Tech gadgets and utility gift items',
  },
  {
    label: 'Wellness Gifts',
    image: '/images/FituredCategories_Wellness.png',
    alt: 'Wellness spa gift set with candles',
  },
  {
    label: 'Customized Gift Boxes',
    image: '/images/FituredCategories_CustomizedGiftBox.png',
    alt: 'Customized gift box with golden ribbon',
  },
];

export function FeaturedCategories() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
            Featured Categories
          </span>
          <h2 className="mt-4 text-3xl font-bold text-charcoal-900 sm:text-4xl">
            Something for Every Gifting Need
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.label}
              className="reveal group relative aspect-square overflow-hidden rounded-2xl shadow-md ring-1 ring-cream-200"
            >
              <img
                src={cat.image}
                alt={cat.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-sm font-bold text-white sm:text-base">{cat.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
