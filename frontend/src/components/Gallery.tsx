const GALLERY_IMAGES = [
  {
    src: '/images/Gallary/1.jpeg',
    alt: 'Corporate hamper with chocolates and pralines',
    span: 'row-span-2',
  },
  {
    src: '/images/Gallary/9.jpeg',
    alt: 'Premium gift boxes with red ribbons',
    span: '',
  },
  {
    src: '/images/Gallary/3.jpeg',
    alt: 'Employee welcome kit celebration',
    span: '',
  },
  {
    src: '/images/Gallary/4.jpeg',
    alt: 'Festive Diwali hampers with marigold and lights',
    span: 'row-span-2',
  },
  {
    src: '/images/Gallary/5.jpeg',
    alt: 'Customized branded gift box with golden ribbon',
    span: '',
  },
  {
    src: '/images/Gallary/6.jpeg',
    alt: 'Executive gift with champagne',
    span: '',
  },
  {
    src: '/images/Gallary/7.jpeg',
    alt: 'Elegant gift packaging with satin ribbon',
    span: '',
  },
  {
    src: '/images/Gallary/25.jpeg',
    alt: 'Unboxing experience with elegant gift box',
    span: 'row-span-2',
  },
  {
    src: '/images/Gallary/11.jpeg',
    alt: 'Wellness gift set with candles and bath products',
    span: '',
  },
  {
    src: '/images/Gallary/15_2.jpeg',
    alt: 'Branded gift packaging with decorative elements',
    span: '',
  },
  {
    src: '/images/Gallary/24.jpeg',
    alt: 'Branded gift packaging with decorative elements',
    span: '',
  },
  {
    src: '/images/Gallary/12_2.jpeg',
    alt: 'Branded gift packaging with decorative elements',
    span: '',
  },
  {
    src: '/images/Gallary/20.jpeg',
    alt: 'Branded gift packaging with decorative elements',
    span: '',
  },
];

export function Gallery() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
            Gallery
          </span>
          <h2 className="mt-4 text-3xl font-bold text-charcoal-900 sm:text-4xl">
            A Glimpse of Our Gifting Experiences
          </h2>
        </div>

        <div className="reveal mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl shadow-md ring-1 ring-cream-200 ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
