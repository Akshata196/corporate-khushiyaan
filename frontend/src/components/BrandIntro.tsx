export function BrandIntro() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="reveal">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
            About The Gift Hub
          </span>
          <h2 className="mt-4 text-3xl font-bold text-charcoal-900 sm:text-4xl">
            Gifting That Creates Lasting Impressions
          </h2>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-brand-500 to-gold-500" />
          <p className="mt-6 text-base leading-relaxed text-charcoal-700 sm:text-lg">
            At Corporate Khushiyaan – The Gift Hub, we specialize in curating thoughtful
            and bespoke corporate gifting solutions that strengthen relationships and
            create lasting impressions.
          </p>
          <p className="mt-4 text-base leading-relaxed text-charcoal-700 sm:text-lg">
            Every gift tells a story. We help businesses celebrate their employees,
            clients and partners with premium, tailor-made gifts designed around their
            occasion, budget and brand.
          </p>
        </div>
      </div>
    </section>
  );
}
