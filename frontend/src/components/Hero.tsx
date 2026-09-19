// import { Check, ArrowRight, Sparkles } from 'lucide-react';

// const TRUST_POINTS = [
//   'Customized Gifting',
//   'Premium Presentation',
//   'Quality Products',
//   'Timely Delivery',
// ];

// const HERO_IMAGE =
//   'https://images.pexels.com/photos/20699855/pexels-photo-20699855.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200';

// function scrollToSection(href: string) {
//   document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
// }

// export function Hero() {
//   return (
//     <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36">
//       {/* Decorative background */}
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl" />
//         <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-gold-400/15 blur-3xl" />
//       </div>

//       <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
//         {/* Left */}
//         <div className="reveal">
          

//          {/* Company Name */}
//          <div className="mb-5">
//            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600 sm:text-base">
//               Corporate Khushiyaan
//            </p>

//            <p className="mt-1 text-xs font-medium uppercase tracking-[0.22em] text-charcoal-500 sm:text-sm">
//               The Gift Hub
//            </p>
//          </div>

//         {/* Main Hero Heading */}
//         <h1 className="text-4xl font-bold leading-[1.1] text-charcoal-900 sm:text-5xl lg:text-[3.4rem]">
//             Thoughtful Gifts.
//             <br />
//             <span className="text-gradient-brand">Stronger Connections.</span>
//           </h1>

//           <p className="mt-5 max-w-lg text-base leading-relaxed text-charcoal-700 sm:text-lg">
//             Thoughtfully curated corporate gifting solutions designed to celebrate
//             employees, impress clients and create lasting connections.
//           </p>

//           <div className="mt-7 flex flex-col gap-3 sm:flex-row">
//             <button
//               onClick={() => scrollToSection('#contact')}
//               className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-600 hover:shadow-xl hover:shadow-brand-500/40"
//             >
//               Get a Quote
//               <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
//             </button>
//             <button
//               onClick={() => scrollToSection('#solutions')}
//               className="inline-flex items-center justify-center rounded-full border border-brand-300 bg-white px-7 py-3.5 text-sm font-semibold text-brand-600 transition-all hover:bg-brand-50 hover:shadow-md"
//             >
//               Explore Our Gifting
//             </button>
//           </div>

//           <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2.5">
//             {TRUST_POINTS.map((point) => (
//               <li key={point} className="flex items-center gap-2 text-sm font-medium text-charcoal-700">
//                 <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 text-brand-600">
//                   <Check size={12} strokeWidth={3} />
//                 </span>
//                 {point}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Right */}
//         <div className="reveal relative">
//           <div className="relative mx-auto max-w-md lg:max-w-none">
//             {/* Main image card */}
//             <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-charcoal-900/15 ring-1 ring-cream-200">
//               <img
//                 src={HERO_IMAGE}
//                 alt="Premium corporate gift hamper with chocolates and elegant packaging"
//                 className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/25 via-transparent to-transparent" />
//             </div>

//             {/* Floating accent card */}
//             <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur-sm sm:-left-6">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-md">
//                 <Sparkles size={20} />
//               </div>
//               <div>
//                 <p className="text-sm font-bold text-charcoal-900">Curated With Care</p>
//                 <p className="text-xs text-charcoal-700">Premium &amp; Personalized</p>
//               </div>
//             </div>

//             {/* Floating gift icon */}
//             <div className="absolute -right-3 top-6 animate-float rounded-2xl bg-gold-400/90 p-3 shadow-lg backdrop-blur-sm sm:-right-6">
//               <img src="/corporate_khushiyaan_the_gift_hub_logo.jpg" alt="Corporate Khushiyaan logo" className="h-10 w-10 rounded-lg object-cover" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// import { Check, ArrowRight, Sparkles } from 'lucide-react';

// const TRUST_POINTS = [
//   'Customized Gifting',
//   'Premium Presentation',
//   'Quality Products',
//   'Timely Delivery',
// ];

// const HERO_IMAGE =
//   'https://images.pexels.com/photos/20699855/pexels-photo-20699855.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200';

// const COMPANY_LOGO = '/corporate_khushiyaan_the_gift_hub_logo.jpg';

// function scrollToSection(href: string) {
//   document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
// }

// export function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-32"
//     >
//       {/* Decorative background */}
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl" />
//         <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-gold-400/15 blur-3xl" />
//       </div>

//       <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">

//         {/* ================= LEFT ================= */}
//         <div className="reveal">

//           {/* Company Branding */}
// <div className="mb-8 flex items-center gap-5 sm:gap-7">

//   {/* Company Logo */}
//   <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-white p-2.5 shadow-lg ring-1 ring-cream-200 sm:h-32 sm:w-32">
//     <img
//       src={COMPANY_LOGO}
//       alt="Corporate Khushiyaan - The Gift Hub logo"
//       className="h-full w-full object-contain"
//     />
//   </div>

//   {/* Company Name */}
//   <div className="min-w-0">

//     <h2 className="font-serif text-[3.5rem] font-bold leading-[0.86] tracking-[-0.035em] text-brand-600 sm:text-[4rem] lg:text-[4.5rem]">
//       Corporate
//       <br />
//       <span className="text-gradient-brand">
//         Khushiyaan
//       </span>
//     </h2>

//     {/* The Gift Hub */}
//     <div className="mt-4 flex items-center gap-3">
//       <span className="h-px w-10 bg-brand-400 sm:w-12" />

//       <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal-700 sm:text-sm">
//         The Gift Hub
//       </p>

//       <span className="h-px w-10 bg-brand-400 sm:w-12" />
//     </div>

//   </div>
// </div>

// {/* Main Hero Heading */}
// <h1 className="text-2xl font-bold leading-[1.15] tracking-[-0.01em] text-charcoal-900 sm:text-3xl lg:text-[1.9rem]">
//   Thoughtful Gifts.
//   <br />
//   <span className="text-gradient-brand">
//     Stronger Connections.
//   </span>
// </h1>

//           {/* Description */}
//           <p className="mt-5 max-w-lg text-base leading-relaxed text-charcoal-700 sm:text-lg">
//             Thoughtfully curated corporate gifting solutions designed to
//             celebrate employees, impress clients and create lasting
//             connections.
//           </p>

//           {/* CTA Buttons */}
//           <div className="mt-7 flex flex-col gap-3 sm:flex-row">
//             <button
//               onClick={() => scrollToSection('#contact')}
//               className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-600 hover:shadow-xl hover:shadow-brand-500/40"
//             >
//               Get a Quote

//               <ArrowRight
//                 size={16}
//                 className="transition-transform group-hover:translate-x-1"
//               />
//             </button>

//             <button
//               onClick={() => scrollToSection('#solutions')}
//               className="inline-flex items-center justify-center rounded-full border border-brand-300 bg-white px-7 py-3.5 text-sm font-semibold text-brand-600 transition-all hover:bg-brand-50 hover:shadow-md"
//             >
//               Explore Our Gifting
//             </button>
//           </div>

//           {/* Trust Points */}
//           <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2.5">
//             {TRUST_POINTS.map((point) => (
//               <li
//                 key={point}
//                 className="flex items-center gap-2 text-sm font-medium text-charcoal-700"
//               >
//                 <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 text-brand-600">
//                   <Check size={12} strokeWidth={3} />
//                 </span>

//                 {point}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* ================= RIGHT ================= */}
//         <div className="reveal relative">
//           <div className="relative mx-auto max-w-md lg:max-w-none">

//             {/* Main Image Card */}
//             <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-charcoal-900/15 ring-1 ring-cream-200">
//               <img
//                 src={HERO_IMAGE}
//                 alt="Premium corporate gift hamper with chocolates and elegant packaging"
//                 className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/25 via-transparent to-transparent" />
//             </div>

//             {/* Floating Accent Card */}
//             <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur-sm sm:-left-6">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-md">
//                 <Sparkles size={20} />
//               </div>

//               <div>
//                 <p className="text-sm font-bold text-charcoal-900">
//                   Curated With Care
//                 </p>

//                 <p className="text-xs text-charcoal-700">
//                   Premium &amp; Personalized
//                 </p>
//               </div>
//             </div>

//             {/* Floating Company Logo */}
//             <div className="absolute -right-3 top-6 animate-float rounded-2xl bg-gold-400/90 p-3 shadow-lg backdrop-blur-sm sm:-right-6">
//               <img
//                 src={COMPANY_LOGO}
//                 alt="Corporate Khushiyaan logo"
//                 className="h-10 w-10 rounded-lg object-contain"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




// import { Check, ArrowRight, Sparkles } from 'lucide-react';

// const TRUST_POINTS = [
//   'Customized Gifting',
//   'Premium Presentation',
//   'Quality Products',
//   'Timely Delivery',
// ];

// // const HERO_IMAGE =
// //   'https://images.pexels.com/photos/20699855/pexels-photo-20699855.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200';

// const HERO_IMAGE =
//   '/Hero_Section_Image.png';

// const COMPANY_LOGO = '/corporate_khushiyaan_the_gift_hub_logo.jpg';

// function scrollToSection(href: string) {
//   document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
// }

// export function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-32"
//     >
//       {/* Decorative background */}
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl" />
//         <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-gold-400/15 blur-3xl" />
//       </div>

//       <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">

//         {/* =========================================================
//             LEFT SIDE
//         ========================================================== */}
//         <div className="reveal">

//           {/* Company Branding */}
//           <div className="mb-8 flex items-center gap-5 sm:gap-7">

//             {/* Company Logo */}
//             <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-white p-2.5 shadow-lg ring-1 ring-cream-200 sm:h-32 sm:w-32">
//               <img
//                 src={COMPANY_LOGO}
//                 alt="Corporate Khushiyaan - The Gift Hub logo"
//                 className="h-full w-full object-contain"
//               />
//             </div>

//             {/* Company Name */}
//             <div className="min-w-0">

//               <h2 className="font-serif text-[3.5rem] font-bold leading-[0.86] tracking-[-0.035em] text-brand-600 sm:text-[4rem] lg:text-[4.5rem]">
//                 Corporate
//                 <br />
//                 <span className="text-gradient-brand">
//                   Khushiyaan
//                 </span>
//               </h2>

//               {/* The Gift Hub */}
//               <div className="mt-4 flex items-center gap-3">
//                 <span className="h-px w-10 bg-brand-400 sm:w-12" />

//                 <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal-700 sm:text-sm">
//                   The Gift Hub
//                 </p>

//                 <span className="h-px w-10 bg-brand-400 sm:w-12" />
//               </div>

//             </div>
//           </div>

//           {/* Company Tagline */}
//           <h1 className="max-w-xl text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-charcoal-900 sm:text-4xl lg:text-[2.6rem]">
//             Open the Box,
//             <br />
//             <span className="text-gradient-brand">
//               Unwrap the Joy
//             </span>
//           </h1>

//           {/* Supporting Description */}
//           <p className="mt-5 max-w-lg text-base leading-relaxed text-charcoal-700 sm:text-lg">
//             Thoughtfully curated corporate gifting solutions designed to
//             celebrate employees, impress clients and create lasting
//             connections.
//           </p>

//           {/* CTA Buttons */}
//           <div className="mt-7 flex flex-col gap-3 sm:flex-row">

//             <button
//               onClick={() => scrollToSection('#contact')}
//               className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-600 hover:shadow-xl hover:shadow-brand-500/40"
//             >
//               Get a Quote

//               <ArrowRight
//                 size={16}
//                 className="transition-transform group-hover:translate-x-1"
//               />
//             </button>

//             <button
//               onClick={() => scrollToSection('#solutions')}
//               className="inline-flex items-center justify-center rounded-full border border-brand-300 bg-white px-7 py-3.5 text-sm font-semibold text-brand-600 transition-all hover:bg-brand-50 hover:shadow-md"
//             >
//               Explore Our Gifting
//             </button>

//           </div>

//           {/* Trust Points */}
//           <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2.5">
//             {TRUST_POINTS.map((point) => (
//               <li
//                 key={point}
//                 className="flex items-center gap-2 text-sm font-medium text-charcoal-700"
//               >
//                 <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 text-brand-600">
//                   <Check size={12} strokeWidth={3} />
//                 </span>

//                 {point}
//               </li>
//             ))}
//           </ul>

//         </div>

//         {/* =========================================================
//             RIGHT SIDE
//         ========================================================== */}
//         <div className="reveal relative">

//           <div className="relative mx-auto max-w-md lg:max-w-none">

//             {/* Main Image Card */}
//             <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-charcoal-900/15 ring-1 ring-cream-200">

//               <img
//                 src={HERO_IMAGE}
//                 alt="Premium corporate gift hamper with chocolates and elegant packaging"
//                 className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
//               />

//               {/* Image Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/25 via-transparent to-transparent" />

//             </div>

//             {/* Floating Accent Card */}
//             <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur-sm sm:-left-6">

//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-md">
//                 <Sparkles size={20} />
//               </div>

//               <div>
//                 <p className="text-sm font-bold text-charcoal-900">
//                   Curated With Care
//                 </p>

//                 <p className="text-xs text-charcoal-700">
//                   Premium &amp; Personalized
//                 </p>
//               </div>

//             </div>

//             {/* Floating Company Logo */}
//             <div className="absolute -right-3 top-6 animate-float rounded-2xl bg-gold-400/90 p-3 shadow-lg backdrop-blur-sm sm:-right-6">

//               <img
//                 src={COMPANY_LOGO}
//                 alt="Corporate Khushiyaan logo"
//                 className="h-10 w-10 rounded-lg object-contain"
//               />

//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }





// import { Check, ArrowRight, Sparkles } from 'lucide-react';

// const TRUST_POINTS = [
//   'Customized Gifting',
//   'Premium Presentation',
//   'Quality Products',
//   'Timely Delivery',
// ];

// const HERO_IMAGE = '/Hero_Section_Image.png';

// const COMPANY_LOGO =
//   '/corporate_khushiyaan_the_gift_hub_logo.jpg';

// function scrollToSection(href: string) {
//   document.querySelector(href)?.scrollIntoView({
//     behavior: 'smooth',
//   });
// }

// export function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative min-h-[calc(100vh-76px)] overflow-hidden bg-cream-50 pt-24 pb-12 sm:pt-28 lg:min-h-[calc(100vh-80px)] lg:pt-24"
//     >
//       {/* =====================================================
//           RIGHT SIDE HERO IMAGE
//           ===================================================== */}
//       <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[57%] lg:block">

//         {/* Main image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: `url('${HERO_IMAGE}')`,
//             clipPath: 'ellipse(100% 100% at 100% 50%)',
//           }}
//         />

//         {/* Soft cream transition over the left side of image */}
//         <div
//           className="absolute inset-y-0 left-0 w-[35%]"
//           style={{
//             background:
//               'linear-gradient(to right, rgba(255,250,244,1), rgba(255,250,244,0))',
//           }}
//         />

//         {/* Warm subtle image overlay */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               'linear-gradient(to bottom, rgba(255,255,255,0.04), rgba(120,55,20,0.08))',
//           }}
//         />
//       </div>

//       {/* =====================================================
//           DECORATIVE BACKGROUND ELEMENTS
//           ===================================================== */}
//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

//         <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-brand-200/20 blur-3xl" />

//         <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-gold-400/10 blur-3xl" />

//         <div className="absolute right-[42%] top-20 h-40 w-40 rounded-full bg-brand-100/20 blur-3xl" />

//       </div>

//       {/* =====================================================
//           MAIN CONTENT
//           ===================================================== */}
//       <div className="relative z-10 mx-auto flex min-h-[calc(100vh-140px)] max-w-7xl items-center px-4 sm:px-6 lg:px-8">

//         <div className="w-full lg:w-[55%]">

//           {/* =================================================
//               COMPANY BRANDING
//               ================================================= */}
//            <div className="reveal mb-7 flex items-center gap-5 sm:gap-7">

//             {/* Logo */}
//             <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-white p-2.5 shadow-lg ring-1 ring-cream-200 sm:h-28 sm:w-28">

//               <img
//                 src={COMPANY_LOGO}
//                 alt="Corporate Khushiyaan - The Gift Hub logo"
//                 className="h-full w-full object-contain"
//               />

//             </div> */


          

//             {/* Company Name */}
//             <div className="min-w-0">

//               <h2 className="font-serif text-[3.1rem] font-bold leading-[0.86] tracking-[-0.035em] text-brand-600 sm:text-[3.7rem] lg:text-[4rem]">

//                 Corporate
//                 <br />

//                 <span className="text-gradient-brand">
//                   Khushiyaan
//                 </span>

//               </h2>

//               {/* The Gift Hub */}
//               <div className="mt-4 flex items-center gap-3">

//                 <span className="h-px w-9 bg-brand-400 sm:w-12" />

//                 <p className="text-xs font-semibold uppercase tracking-[0.3em] text-charcoal-700 sm:text-sm">
//                   The Gift Hub
//                 </p>

//                 <span className="h-px w-9 bg-brand-400 sm:w-12" />

//               </div>

//             </div>
//           </div>

//           {/* =================================================
//               HERO HEADLINE
//               ================================================= */}
//           <div className="reveal">

//             {/* <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand-600">

//               <span className="h-px w-10 bg-brand-400" />

//               Corporate Gifting Solutions

//             </p> */}

//             <h1 className="max-w-2xl font-serif text-[3.2rem] font-bold leading-[0.98] tracking-[-0.035em] text-charcoal-900 sm:text-[4rem] lg:text-[4.5rem]">

//               Open the Box,

//               <br />

//               <span className="text-gradient-brand">
//                 Unwrap the Joy
//               </span>

//             </h1>

//             <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal-700 sm:text-lg">

//               Thoughtfully curated corporate gifting solutions designed
//               to celebrate employees, impress clients and create lasting
//               connections.

//             </p>

//           </div>

//           {/* =================================================
//               CTA BUTTONS
//               ================================================= */}
//           <div className="reveal mt-7 flex flex-col gap-3 sm:flex-row">

//             <button
//               onClick={() => scrollToSection('#contact')}
//               type="button"
//               className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-xl hover:shadow-brand-500/40"
//             >
//               Get a Quote

//               <ArrowRight
//                 size={17}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />

//             </button>

//             <button
//               onClick={() => scrollToSection('#solutions')}
//               type="button"
//               className="inline-flex items-center justify-center rounded-full border border-brand-300 bg-white/90 px-8 py-4 text-sm font-semibold text-brand-600 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
//             >
//               Explore Our Gifting
//             </button>

//           </div>

//           {/* =================================================
//               TRUST POINTS
//               ================================================= */}
//           <div className="reveal mt-9 grid max-w-xl grid-cols-2 gap-x-8 gap-y-4">

//             {TRUST_POINTS.map((point) => (
//               <div
//                 key={point}
//                 className="flex items-center gap-3"
//               >

//                 <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">

//                   <Check
//                     size={15}
//                     strokeWidth={3}
//                   />

//                 </span>

//                 <span className="text-sm font-medium text-charcoal-700">
//                   {point}
//                 </span>

//               </div>
//             ))}

//           </div>

//           {/* =================================================
//               SMALL BRAND MESSAGE
//               ================================================= */}
//           <div className="reveal mt-12 flex items-start gap-4">

//             <span className="mt-1 h-10 w-px bg-brand-500" />

//             <div>

//               <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
//                 More Than Gifts,
//               </p>

//               <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
//                 Stronger Relationships
//               </p>

//             </div>

//           </div>

//         </div>
//       </div>

//       {/* =====================================================
//           FLOATING LOGO BADGE
//           ===================================================== */}
//       <div className="absolute right-6 top-8 z-20 hidden rounded-2xl bg-white/90 p-3 shadow-xl backdrop-blur-md lg:block xl:right-10">

//         <img
//           src={COMPANY_LOGO}
//           alt="Corporate Khushiyaan logo"
//           className="h-10 w-10 object-contain"
//         />

//       </div>

//       {/* =====================================================
//           MOBILE HERO IMAGE
//           ===================================================== */}
//       <div className="relative z-10 mt-10 px-4 sm:px-6 lg:hidden">

//         <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-cream-200">

//           <img
//             src={HERO_IMAGE}
//             alt="Premium corporate gift hamper"
//             className="aspect-[4/3] w-full object-cover"
//           />

//           <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/10 via-transparent to-transparent" />

//           {/* Mobile Badge */}
//           <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">

//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-white">
//               <Sparkles size={18} />
//             </div>

//             <div>

//               <p className="text-sm font-bold text-charcoal-900">
//                 Curated With Care
//               </p>

//               <p className="text-xs text-charcoal-700">
//                 Premium &amp; Personalized
//               </p>

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }





// import { Check, ArrowRight, Sparkles } from 'lucide-react';

// const TRUST_POINTS = [
//   'Customized Gifting',
//   'Premium Presentation',
//   'Quality Products',
//   'Timely Delivery',
// ];

// const HERO_IMAGE = '/Hero_Section_Image.png';

// const COMPANY_LOGO =
//   '/corporate_khushiyaan_the_gift_hub_logo.jpg';

// function scrollToSection(href: string) {
//   document.querySelector(href)?.scrollIntoView({
//     behavior: 'smooth',
//   });
// }

// export function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative min-h-[calc(100vh-76px)] overflow-hidden bg-cream-50 pt-24 pb-12 sm:pt-28 lg:min-h-[calc(100vh-80px)] lg:pt-24"
//     >
//       {/* =====================================================
//           RIGHT SIDE HERO IMAGE
//           ===================================================== */}
//       <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[57%] lg:block">

//         {/* Main image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: `url('${HERO_IMAGE}')`,
//             clipPath: 'ellipse(100% 100% at 100% 50%)',
//           }}
//         />

//         {/* Soft cream transition over the left side of image */}
//         <div
//           className="absolute inset-y-0 left-0 w-[35%]"
//           style={{
//             background:
//               'linear-gradient(to right, rgba(255,250,244,1), rgba(255,250,244,0))',
//           }}
//         />

//         {/* Warm subtle image overlay */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               'linear-gradient(to bottom, rgba(255,255,255,0.04), rgba(120,55,20,0.08))',
//           }}
//         />
//       </div>

//       {/* =====================================================
//           DECORATIVE BACKGROUND ELEMENTS
//           ===================================================== */}
//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

//         <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-brand-200/20 blur-3xl" />

//         <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-gold-400/10 blur-3xl" />

//         <div className="absolute right-[42%] top-20 h-40 w-40 rounded-full bg-brand-100/20 blur-3xl" />

//       </div>

//       {/* =====================================================
//           MAIN CONTENT
//           ===================================================== */}
//       <div className="relative z-10 mx-auto flex min-h-[calc(100vh-140px)] max-w-7xl items-center px-4 sm:px-6 lg:px-8">

//         <div className="w-full lg:w-[55%]">

//           {/* =================================================
//               COMPANY BRANDING
//               ================================================= */}
//           <div className="reveal mb-8 flex items-center gap-6 sm:gap-8">

//             {/* Logo */}
//             <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-white p-3 shadow-lg ring-1 ring-cream-200 sm:h-36 sm:w-36 lg:h-40 lg:w-40">

//               <img
//                 src={COMPANY_LOGO}
//                 alt="Corporate Khushiyaan - The Gift Hub logo"
//                 className="h-full w-full object-contain"
//               />

//             </div>

//             {/* Company Name */}
//             <div className="min-w-0">

//               <h2 className="font-serif text-[3.8rem] font-extrabold leading-[0.9] tracking-[-0.02em] text-brand-600 sm:text-[4.6rem] lg:text-[5.2rem]">

//                 Corporate
//                 <br />

//                 <span className="text-gradient-brand">
//                   Khushiyaan
//                 </span>

//               </h2>

//               {/* The Gift Hub */}
//               <div className="mt-5 flex items-center gap-3">

//                 <span className="h-px w-10 bg-brand-400 sm:w-14" />

//                 <p className="text-sm font-bold uppercase tracking-[0.35em] text-charcoal-700 sm:text-base">
//                   The Gift Hub
//                 </p>

//                 <span className="h-px w-10 bg-brand-400 sm:w-14" />

//               </div>

//             </div>
//           </div>

//           {/* =================================================
//               HERO HEADLINE
//               ================================================= */}
//           <div className="reveal">

//             {/* <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand-600">

//               <span className="h-px w-10 bg-brand-400" />

//               Corporate Gifting Solutions

//             </p> */}

//             <h1 className="max-w-2xl font-serif text-[3.2rem] font-bold leading-[0.98] tracking-[-0.035em] text-charcoal-900 sm:text-[4rem] lg:text-[4.5rem]">

//               Open the Box,

//               <br />

//               <span className="text-gradient-brand">
//                 Unwrap the Joy
//               </span>

//             </h1>

//             <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal-700 sm:text-lg">

//               Thoughtfully curated corporate gifting solutions designed
//               to celebrate employees, impress clients and create lasting
//               connections.

//             </p>

//           </div>

//           {/* =================================================
//               CTA BUTTONS
//               ================================================= */}
//           <div className="reveal mt-9 flex flex-col gap-3 sm:flex-row">

//             <button
//               onClick={() => scrollToSection('#contact')}
//               type="button"
//               className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-xl hover:shadow-brand-500/40"
//             >
//               Get a Quote

//               <ArrowRight
//                 size={17}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />

//             </button>

//             <button
//               onClick={() => scrollToSection('#solutions')}
//               type="button"
//               className="inline-flex items-center justify-center rounded-full border border-brand-300 bg-white/90 px-8 py-4 text-sm font-semibold text-brand-600 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
//             >
//               Explore Our Gifting
//             </button>

//           </div>

//           {/* =================================================
//               TRUST POINTS
//               ================================================= */}
//           <div className="reveal mt-9 grid max-w-xl grid-cols-2 gap-x-8 gap-y-4">

//             {TRUST_POINTS.map((point) => (
//               <div
//                 key={point}
//                 className="flex items-center gap-3"
//               >

//                 <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">

//                   <Check
//                     size={15}
//                     strokeWidth={3}
//                   />

//                 </span>

//                 <span className="text-sm font-medium text-charcoal-700">
//                   {point}
//                 </span>

//               </div>
//             ))}

//           </div>

//           {/* =================================================
//               SMALL BRAND MESSAGE
//               ================================================= */}
//           <div className="reveal mt-12 flex items-start gap-4">

//             <span className="mt-1 h-10 w-px bg-brand-500" />

//             <div>

//               <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
//                 More Than Gifts,
//               </p>

//               <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
//                 Stronger Relationships
//               </p>

//             </div>

//           </div>

//         </div>
//       </div>

//       {/* =====================================================
//           FLOATING LOGO BADGE
//           ===================================================== */}
//       <div className="absolute right-6 top-8 z-20 hidden rounded-2xl bg-white/90 p-3 shadow-xl backdrop-blur-md lg:block xl:right-10">

//         <img
//           src={COMPANY_LOGO}
//           alt="Corporate Khushiyaan logo"
//           className="h-10 w-10 object-contain"
//         />

//       </div>

//       {/* =====================================================
//           MOBILE HERO IMAGE
//           ===================================================== */}
//       <div className="relative z-10 mt-10 px-4 sm:px-6 lg:hidden">

//         <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-cream-200">

//           <img
//             src={HERO_IMAGE}
//             alt="Premium corporate gift hamper"
//             className="aspect-[4/3] w-full object-cover"
//           />

//           <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/10 via-transparent to-transparent" />

//           {/* Mobile Badge */}
//           <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">

//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-white">
//               <Sparkles size={18} />
//             </div>

//             <div>

//               <p className="text-sm font-bold text-charcoal-900">
//                 Curated With Care
//               </p>

//               <p className="text-xs text-charcoal-700">
//                 Premium &amp; Personalized
//               </p>

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }



// import { Check, ArrowRight, Sparkles } from 'lucide-react';

// const TRUST_POINTS = [
//   'Customized Gifting',
//   'Premium Presentation',
//   'Quality Products',
//   'Timely Delivery',
// ];

// const HERO_IMAGE = '/Hero_Section_Image.png';

// const COMPANY_LOGO =
//   '/corporate_khushiyaan_the_gift_hub_logo.jpg';

// function scrollToSection(href: string) {
//   document.querySelector(href)?.scrollIntoView({
//     behavior: 'smooth',
//   });
// }

// export function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative min-h-[calc(100vh-76px)] overflow-hidden bg-cream-50 pt-24 pb-12 sm:pt-28 lg:min-h-[calc(100vh-80px)] lg:pt-24"
//     >
//       {/* =====================================================
//           RIGHT SIDE HERO IMAGE
//           ===================================================== */}
//       <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[57%] lg:block">

//         {/* Main image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: `url('${HERO_IMAGE}')`,
//             clipPath: 'ellipse(100% 100% at 100% 50%)',
//           }}
//         />

//         {/* Soft cream transition over the left side of image */}
//         <div
//           className="absolute inset-y-0 left-0 w-[35%]"
//           style={{
//             background:
//               'linear-gradient(to right, rgba(255,250,244,1), rgba(255,250,244,0))',
//           }}
//         />

//         {/* Warm subtle image overlay */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               'linear-gradient(to bottom, rgba(255,255,255,0.04), rgba(120,55,20,0.08))',
//           }}
//         />
//       </div>

//       {/* =====================================================
//           DECORATIVE BACKGROUND ELEMENTS
//           ===================================================== */}
//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

//         <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-brand-200/20 blur-3xl" />

//         <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-gold-400/10 blur-3xl" />

//         <div className="absolute right-[42%] top-20 h-40 w-40 rounded-full bg-brand-100/20 blur-3xl" />

//       </div>

//       {/* =====================================================
//           MAIN CONTENT
//           ===================================================== */}
//       <div className="relative z-10 mx-auto flex min-h-[calc(100vh-140px)] max-w-7xl items-center px-4 sm:px-6 lg:px-8">

//         <div className="w-full lg:w-[55%]">

//           {/* =================================================
//               COMPANY BRANDING
//               ================================================= */}
//           <div className="reveal mb-6 flex items-center gap-6 sm:gap-8">

//             {/* Logo */}
//             <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-white p-3 shadow-lg ring-1 ring-cream-200 sm:h-36 sm:w-36 lg:h-40 lg:w-40">

//               <img
//                 src={COMPANY_LOGO}
//                 alt="Corporate Khushiyaan - The Gift Hub logo"
//                 className="h-full w-full object-contain"
//               />

//             </div>

//             {/* Company Name */}
//             <div className="min-w-0">

//               <h2 className="font-serif text-[3.8rem] font-extrabold leading-[0.9] tracking-[-0.02em] text-brand-600 sm:text-[4.6rem] lg:text-[5.2rem]">

//                 Corporate
//                 <br />

//                 <span className="text-gradient-brand">
//                   Khushiyaan
//                 </span>

//               </h2>

//               {/* The Gift Hub */}
//               <p className="mt-4 text-sm font-bold uppercase tracking-[0.4em] text-brand-600 sm:text-base">
//                 The Gift Hub
//               </p>

//             </div>
//           </div>

//           {/* =================================================
//               HERO TAGLINE
//               ================================================= */}
//           <div className="reveal">

            
//             {/* Company Name */}
// <div className="min-w-0">

//   <h2 className="font-serif text-[3.8rem] font-extrabold leading-[0.9] tracking-[-0.02em] text-brand-600 sm:text-[4.6rem] lg:text-[5.2rem]">

//     Corporate
//     <br />

//     <span className="text-gradient-brand">
//       Khushiyaan
//     </span>

//   </h2>

//   {/* The Gift Hub */}
//   <p className="mt-4 text-sm font-bold uppercase tracking-[0.4em] text-brand-600 sm:text-base">
//     The Gift Hub
//   </p>

// </div>

//             <p className="max-w-xl font-serif text-xl italic leading-snug text-charcoal-800 sm:text-2xl lg:text-[1.75rem]">

//               "Open the Box,{' '}
//               <span className="text-gradient-brand not-italic font-semibold">
//                 Unwrap the Joy
//               </span>
//               "

//             </p>

//             <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal-700 sm:text-lg">

//               Thoughtfully curated corporate gifting solutions designed
//               to celebrate employees, impress clients and create lasting
//               connections.

//             </p>

//           </div>

//           {/* =================================================
//               CTA BUTTONS
//               ================================================= */}
//           <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row">

//             <button
//               onClick={() => scrollToSection('#contact')}
//               type="button"
//               className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-xl hover:shadow-brand-500/40"
//             >
//               Get a Quote

//               <ArrowRight
//                 size={17}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />

//             </button>

//             <button
//               onClick={() => scrollToSection('#solutions')}
//               type="button"
//               className="inline-flex items-center justify-center rounded-full border border-brand-300 bg-white/90 px-8 py-4 text-sm font-semibold text-brand-600 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
//             >
//               Explore Our Gifting
//             </button>

//           </div>

//           {/* =================================================
//               TRUST POINTS
//               ================================================= */}
//           <div className="reveal mt-9 grid max-w-xl grid-cols-2 gap-x-8 gap-y-4">

//             {TRUST_POINTS.map((point) => (
//               <div
//                 key={point}
//                 className="flex items-center gap-3"
//               >

//                 <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">

//                   <Check
//                     size={15}
//                     strokeWidth={3}
//                   />

//                 </span>

//                 <span className="text-sm font-medium text-charcoal-700">
//                   {point}
//                 </span>

//               </div>
//             ))}

//           </div>

//           {/* =================================================
//               SMALL BRAND MESSAGE
//               ================================================= */}
//           <div className="reveal mt-12 flex items-start gap-4">

//             <span className="mt-1 h-10 w-px bg-brand-500" />

//             <div>

//               <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
//                 More Than Gifts,
//               </p>

//               <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
//                 Stronger Relationships
//               </p>

//             </div>

//           </div>

//         </div>
//       </div>

//       {/* =====================================================
//           FLOATING LOGO BADGE
//           ===================================================== */}
//       <div className="absolute right-6 top-8 z-20 hidden rounded-2xl bg-white/90 p-3 shadow-xl backdrop-blur-md lg:block xl:right-10">

//         <img
//           src={COMPANY_LOGO}
//           alt="Corporate Khushiyaan logo"
//           className="h-10 w-10 object-contain"
//         />

//       </div>

//       {/* =====================================================
//           MOBILE HERO IMAGE
//           ===================================================== */}
//       <div className="relative z-10 mt-10 px-4 sm:px-6 lg:hidden">

//         <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-cream-200">

//           <img
//             src={HERO_IMAGE}
//             alt="Premium corporate gift hamper"
//             className="aspect-[4/3] w-full object-cover"
//           />

//           <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/10 via-transparent to-transparent" />

//           {/* Mobile Badge */}
//           <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">

//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-white">
//               <Sparkles size={18} />
//             </div>

//             <div>

//               <p className="text-sm font-bold text-charcoal-900">
//                 Curated With Care
//               </p>

//               <p className="text-xs text-charcoal-700">
//                 Premium &amp; Personalized
//               </p>

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }




// import { Check, ArrowRight, Sparkles } from 'lucide-react';

// const TRUST_POINTS = [
//   'Customized Gifting',
//   'Premium Presentation',
//   'Quality Products',
//   'Timely Delivery',
// ];

// const HERO_IMAGE = '/Hero_Section_Image.png';

// const COMPANY_LOGO =
//   '/corporate_khushiyaan_the_gift_hub_logo.jpg';

// function scrollToSection(href: string) {
//   document.querySelector(href)?.scrollIntoView({
//     behavior: 'smooth',
//   });
// }

// export function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative min-h-[calc(100vh-76px)] overflow-hidden bg-cream-50 pt-24 pb-12 sm:pt-28 lg:min-h-[calc(100vh-80px)] lg:pt-24"
//     >
//       {/* =====================================================
//           RIGHT SIDE HERO IMAGE
//           ===================================================== */}
//       <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[57%] lg:block">

//         {/* Main image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: `url('${HERO_IMAGE}')`,
//             clipPath: 'ellipse(100% 100% at 100% 50%)',
//           }}
//         />

//         {/* Soft cream transition over the left side of image */}
//         <div
//           className="absolute inset-y-0 left-0 w-[35%]"
//           style={{
//             background:
//               'linear-gradient(to right, rgba(255,250,244,1), rgba(255,250,244,0))',
//           }}
//         />

//         {/* Warm subtle image overlay */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               'linear-gradient(to bottom, rgba(255,255,255,0.04), rgba(120,55,20,0.08))',
//           }}
//         />
//       </div>

//       {/* =====================================================
//           DECORATIVE BACKGROUND ELEMENTS
//           ===================================================== */}
//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

//         <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-brand-200/20 blur-3xl" />

//         <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-gold-400/10 blur-3xl" />

//         <div className="absolute right-[42%] top-20 h-40 w-40 rounded-full bg-brand-100/20 blur-3xl" />

//       </div>

//       {/* =====================================================
//           MAIN CONTENT
//           ===================================================== */}
//       <div className="relative z-10 mx-auto flex min-h-[calc(100vh-140px)] max-w-7xl items-center px-4 sm:px-6 lg:px-8">

//         <div className="w-full lg:w-[55%]">

//           {/* =================================================
//               COMPANY BRANDING
//               ================================================= */}
//           <div className="reveal mb-6 flex items-center gap-6 sm:gap-8">

//             {/* Logo */}
//             <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-white p-3 shadow-lg ring-1 ring-cream-200 sm:h-36 sm:w-36 lg:h-40 lg:w-40">

//               <img
//                 src={COMPANY_LOGO}
//                 alt="Corporate Khushiyaan - The Gift Hub logo"
//                 className="h-full w-full object-contain"
//               />

//             </div>

//             {/* Company Name */}
//             <div className="min-w-0">

//               <h2 className="font-serif text-[3.8rem] font-extrabold leading-[0.9] tracking-[-0.02em] text-brand-600 sm:text-[4.6rem] lg:text-[5.2rem]">

//                 Corporate
//                 <br />

//                 <span className="text-gradient-brand">
//                   Khushiyaan
//                 </span>

//               </h2>

//               {/* The Gift Hub */}
//               <p className="mt-4 text-sm font-bold uppercase tracking-[0.4em] text-brand-600 sm:text-base">
//                 The Gift Hub
//               </p>

//             </div>
//           </div>

//           {/* =================================================
//               HERO TAGLINE
//               ================================================= */}
//           <div className="reveal">

//             <p className="max-w-xl font-serif text-xl italic leading-snug text-charcoal-800 sm:text-2xl lg:text-[1.75rem]">

//               "Open the Box,{' '}
//               <span className="text-gradient-brand not-italic font-semibold">
//                 Unwrap the Joy
//               </span>
//               "

//             </p>

//             <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal-700 sm:text-lg">

//               Thoughtfully curated corporate gifting solutions designed
//               to celebrate employees, impress clients and create lasting
//               connections.

//             </p>

//           </div>

//           {/* =================================================
//               CTA BUTTONS
//               ================================================= */}
//           <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row">

//             <button
//               onClick={() => scrollToSection('#contact')}
//               type="button"
//               className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-xl hover:shadow-brand-500/40"
//             >
//               Get a Quote

//               <ArrowRight
//                 size={17}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />

//             </button>

//             <button
//               onClick={() => scrollToSection('#solutions')}
//               type="button"
//               className="inline-flex items-center justify-center rounded-full border border-brand-300 bg-white/90 px-8 py-4 text-sm font-semibold text-brand-600 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
//             >
//               Explore Our Gifting
//             </button>

//           </div>

//           {/* =================================================
//               TRUST POINTS
//               ================================================= */}
//           <div className="reveal mt-9 grid max-w-xl grid-cols-2 gap-x-8 gap-y-4">

//             {TRUST_POINTS.map((point) => (
//               <div
//                 key={point}
//                 className="flex items-center gap-3"
//               >

//                 <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">

//                   <Check
//                     size={15}
//                     strokeWidth={3}
//                   />

//                 </span>

//                 <span className="text-sm font-medium text-charcoal-700">
//                   {point}
//                 </span>

//               </div>
//             ))}

//           </div>

//           {/* =================================================
//               SMALL BRAND MESSAGE
//               ================================================= */}
//           <div className="reveal mt-12 flex items-start gap-4">

//             <span className="mt-1 h-10 w-px bg-brand-500" />

//             <div>

//               <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
//                 More Than Gifts,
//               </p>

//               <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
//                 Stronger Relationships
//               </p>

//             </div>

//           </div>

//         </div>
//       </div>

//       {/* =====================================================
//           FLOATING LOGO BADGE
//           ===================================================== */}
//       <div className="absolute right-6 top-8 z-20 hidden rounded-2xl bg-white/90 p-3 shadow-xl backdrop-blur-md lg:block xl:right-10">

//         <img
//           src={COMPANY_LOGO}
//           alt="Corporate Khushiyaan logo"
//           className="h-10 w-10 object-contain"
//         />

//       </div>

//       {/* =====================================================
//           MOBILE HERO IMAGE
//           ===================================================== */}
//       <div className="relative z-10 mt-10 px-4 sm:px-6 lg:hidden">

//         <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-cream-200">

//           <img
//             src={HERO_IMAGE}
//             alt="Premium corporate gift hamper"
//             className="aspect-[4/3] w-full object-cover"
//           />

//           <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/10 via-transparent to-transparent" />

//           {/* Mobile Badge */}
//           <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">

//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-white">
//               <Sparkles size={18} />
//             </div>

//             <div>

//               <p className="text-sm font-bold text-charcoal-900">
//                 Curated With Care
//               </p>

//               <p className="text-xs text-charcoal-700">
//                 Premium &amp; Personalized
//               </p>

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }



// import { Check, ArrowRight, Sparkles } from 'lucide-react';

// const TRUST_POINTS = [
//   'Customized Gifting',
//   'Premium Presentation',
//   'Quality Products',
//   'Timely Delivery',
// ];

// const HERO_IMAGE = '/Hero_Section_Image.png';

// const COMPANY_LOGO =
//   '/corporate_khushiyaan_the_gift_hub_logo.jpg';

// function scrollToSection(href: string) {
//   document.querySelector(href)?.scrollIntoView({
//     behavior: 'smooth',
//   });
// }

// export function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative min-h-[calc(100vh-76px)] overflow-hidden bg-cream-50 pt-20 pb-12 sm:pt-24 lg:min-h-[calc(100vh-80px)] lg:pt-16"
//     >
//       {/* =====================================================
//           RIGHT SIDE HERO IMAGE
//           ===================================================== */}
//       <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[56%] lg:block">
//         {/* Main image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: `url('${HERO_IMAGE}')`,
//             clipPath: 'ellipse(100% 100% at 100% 50%)',
//           }}
//         />

//         {/* Soft cream transition */}
//         <div
//           className="absolute inset-y-0 left-0 w-[38%]"
//           style={{
//             background:
//               'linear-gradient(to right, rgba(255,250,244,1), rgba(255,250,244,0))',
//           }}
//         />

//         {/* Warm subtle overlay */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               'linear-gradient(to bottom, rgba(255,255,255,0.03), rgba(120,55,20,0.10))',
//           }}
//         />

//         {/* Bottom soft fade */}
//         <div
//           className="absolute bottom-0 left-0 right-0 h-32"
//           style={{
//             background:
//               'linear-gradient(to top, rgba(255,250,244,0.35), transparent)',
//           }}
//         />
//       </div>

//       {/* =====================================================
//           DECORATIVE BACKGROUND ELEMENTS
//           ===================================================== */}
//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-brand-200/20 blur-3xl" />

//         <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-gold-400/10 blur-3xl" />

//         <div className="absolute right-[42%] top-20 h-40 w-40 rounded-full bg-brand-100/20 blur-3xl" />
//       </div>

//       {/* =====================================================
//           MAIN CONTENT
//           ===================================================== */}
//       <div className="relative z-10 mx-auto flex min-h-[calc(100vh-140px)] max-w-7xl items-center px-5 sm:px-8 lg:px-8">
//         <div className="w-full lg:w-[52%] xl:w-[54%]">

//           {/* =================================================
//               COMPANY BRANDING
//               Logo ABOVE company name and tagline
//               ================================================= */}
//           <div className="reveal flex flex-col items-start">

//             {/* Large Company Logo */}
//             <div
//               className="
//                 flex
//                 h-28 w-28
//                 items-center justify-center
//                 rounded-2xl
//                 bg-white
//                 p-3
//                 shadow-xl
//                 ring-1 ring-cream-200
//                 sm:h-36 sm:w-36
//                 lg:h-40 lg:w-40
//               "
//             >
//               <img
//                 src={COMPANY_LOGO}
//                 alt="Corporate Khushiyaan - The Gift Hub logo"
//                 className="h-full w-full object-contain"
//               />
//             </div>

//             {/* Company Name */}
//             <div className="mt-6">

//               <h1
//                 className="
//                   font-serif
//                   text-[2.8rem]
//                   font-extrabold
//                   leading-[0.95]
//                   tracking-[-0.025em]
//                   text-brand-600
//                   sm:text-[3.7rem]
//                   lg:text-[4.4rem]
//                   xl:text-[4.8rem]
//                 "
//               >
//                 Corporate
//                 <br />

//                 <span className="text-gradient-brand">
//                   Khushiyaan
//                 </span>
//               </h1>

//               {/* The Gift Hub */}
//               <div className="mt-4 flex items-center gap-3">
//                 <span className="h-px w-8 bg-brand-400" />

//                 <p
//                   className="
//                     text-xs
//                     font-bold
//                     uppercase
//                     tracking-[0.42em]
//                     text-brand-600
//                     sm:text-sm
//                   "
//                 >
//                   The Gift Hub
//                 </p>

//                 <span className="h-px w-8 bg-brand-400" />
//               </div>

//             </div>
//           </div>

//           {/* =================================================
//               HERO TAGLINE
//               ================================================= */}
//           <div className="reveal mt-8">

//             <p
//               className="
//                 max-w-xl
//                 font-serif
//                 text-2xl
//                 italic
//                 leading-snug
//                 text-charcoal-900
//                 sm:text-3xl
//                 lg:text-[2rem]
//               "
//             >
//               Open the Box,{' '}
//               <span className="text-gradient-brand not-italic font-semibold">
//                 Unwrap the Joy
//               </span>
//             </p>

//             <p
//               className="
//                 mt-5
//                 max-w-xl
//                 text-base
//                 leading-relaxed
//                 text-charcoal-700
//                 sm:text-lg
//               "
//             >
//               Thoughtfully curated corporate gifting solutions designed
//               to celebrate employees, impress clients and create lasting
//               connections.
//             </p>

//           </div>

//           {/* =================================================
//               CTA BUTTONS
//               ================================================= */}
//           <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row">

//             {/* Primary CTA */}
//             <button
//               onClick={() => scrollToSection('#contact')}
//               type="button"
//               className="
//                 group
//                 inline-flex
//                 items-center
//                 justify-center
//                 gap-2
//                 rounded-full
//                 bg-brand-500
//                 px-8
//                 py-4
//                 text-sm
//                 font-semibold
//                 text-white
//                 shadow-lg
//                 shadow-brand-500/30
//                 transition-all
//                 duration-300
//                 hover:-translate-y-0.5
//                 hover:bg-brand-600
//                 hover:shadow-xl
//                 hover:shadow-brand-500/40
//               "
//             >
//               Get a Quote

//               <ArrowRight
//                 size={17}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </button>

//             {/* Secondary CTA */}
//             <button
//               onClick={() => scrollToSection('#solutions')}
//               type="button"
//               className="
//                 inline-flex
//                 items-center
//                 justify-center
//                 rounded-full
//                 border
//                 border-brand-300
//                 bg-white/90
//                 px-8
//                 py-4
//                 text-sm
//                 font-semibold
//                 text-brand-600
//                 shadow-sm
//                 backdrop-blur-sm
//                 transition-all
//                 duration-300
//                 hover:-translate-y-0.5
//                 hover:bg-white
//                 hover:shadow-md
//               "
//             >
//               Explore Our Gifting
//             </button>

//           </div>

//           {/* =================================================
//               TRUST POINTS
//               ================================================= */}
//           <div
//             className="
//               reveal
//               mt-9
//               grid
//               max-w-xl
//               grid-cols-1
//               gap-y-4
//               sm:grid-cols-2
//               sm:gap-x-8
//             "
//           >
//             {TRUST_POINTS.map((point) => (
//               <div
//                 key={point}
//                 className="flex items-center gap-3"
//               >
//                 <span
//                   className="
//                     flex
//                     h-8
//                     w-8
//                     shrink-0
//                     items-center
//                     justify-center
//                     rounded-full
//                     bg-brand-100
//                     text-brand-600
//                   "
//                 >
//                   <Check
//                     size={15}
//                     strokeWidth={3}
//                   />
//                 </span>

//                 <span className="text-sm font-medium text-charcoal-700">
//                   {point}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* =================================================
//               SMALL BRAND MESSAGE
//               ================================================= */}
//           <div className="reveal mt-10 flex items-start gap-4 lg:mt-12">

//             <span className="mt-1 h-10 w-px bg-brand-500" />

//             <div>
//               <p
//                 className="
//                   text-xs
//                   font-semibold
//                   uppercase
//                   tracking-[0.3em]
//                   text-brand-600
//                 "
//               >
//                 More Than Gifts,
//               </p>

//               <p
//                 className="
//                   mt-1
//                   text-xs
//                   font-semibold
//                   uppercase
//                   tracking-[0.3em]
//                   text-brand-600
//                 "
//               >
//                 Stronger Relationships
//               </p>
//             </div>

//           </div>

//         </div>
//       </div>

//       {/* =====================================================
//           MOBILE HERO IMAGE
//           ===================================================== */}
//       <div className="relative z-10 mt-12 px-5 sm:px-8 lg:hidden">

//         <div
//           className="
//             relative
//             overflow-hidden
//             rounded-3xl
//             shadow-xl
//             ring-1
//             ring-cream-200
//           "
//         >
//           <img
//             src={HERO_IMAGE}
//             alt="Premium corporate gift hamper"
//             className="aspect-[4/3] w-full object-cover"
//           />

//           {/* Image overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/15 via-transparent to-transparent" />

//           {/* Mobile Badge */}
//           <div
//             className="
//               absolute
//               bottom-4
//               left-4
//               flex
//               items-center
//               gap-3
//               rounded-2xl
//               bg-white/95
//               px-4
//               py-3
//               shadow-lg
//               backdrop-blur-sm
//             "
//           >
//             <div
//               className="
//                 flex
//                 h-10
//                 w-10
//                 items-center
//                 justify-center
//                 rounded-xl
//                 bg-gradient-to-br
//                 from-brand-400
//                 to-brand-600
//                 text-white
//               "
//             >
//               <Sparkles size={18} />
//             </div>

//             <div>
//               <p className="text-sm font-bold text-charcoal-900">
//                 Curated With Care
//               </p>

//               <p className="text-xs text-charcoal-700">
//                 Premium &amp; Personalized
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>

//     </section>
//   );
// }



import { Check, ArrowRight, Sparkles } from 'lucide-react';

const TRUST_POINTS = [
  'Customized Gifting',
  'Premium Presentation',
  'Quality Products',
  'Timely Delivery',
];

const HERO_IMAGE = '/Hero_Section_Image.png';

function scrollToSection(href: string) {
  document.querySelector(href)?.scrollIntoView({
    behavior: 'smooth',
  });
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-76px)] overflow-hidden bg-cream-50 pt-20 pb-12 sm:pt-24 lg:min-h-[calc(100vh-80px)] lg:pt-16"
    >
      {/* =========================================================
          DESKTOP HERO IMAGE
      ========================================================= */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[56%] lg:block">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${HERO_IMAGE}')`,
            clipPath: 'ellipse(100% 100% at 100% 50%)',
          }}
        />

        {/* Left image fade */}
        <div
          className="absolute inset-y-0 left-0 w-[38%]"
          style={{
            background:
              'linear-gradient(to right, rgba(255,250,244,1), rgba(255,250,244,0))',
          }}
        />

        {/* Subtle image overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(255,255,255,0.03), rgba(120,55,20,0.10))',
          }}
        />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background:
              'linear-gradient(to top, rgba(255,250,244,0.35), transparent)',
          }}
        />
      </div>

      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-brand-200/20 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-gold-400/10 blur-3xl" />

        <div className="absolute right-[42%] top-20 h-40 w-40 rounded-full bg-brand-100/20 blur-3xl" />
      </div>

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-140px)] max-w-7xl items-center px-5 sm:px-8 lg:px-8">
        <div className="w-full lg:w-[52%] xl:w-[54%]">

          {/* =====================================================
              HERO HEADING
          ===================================================== */}
          <div className="reveal">

            {/* Small eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-2 backdrop-blur-sm">
              <Sparkles
                size={15}
                className="text-brand-500"
              />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600 sm:text-sm">
                The Gift Hub
              </span>
            </div>

            {/* Main heading */}
            <h1 className="mt-7 max-w-3xl font-serif text-[3.1rem] font-extrabold leading-[0.98] tracking-[-0.035em] text-charcoal-900 sm:text-[4rem] lg:text-[4.6rem] xl:text-[5rem]">
              Thoughtful Gifts.
              <br />

              <span className="text-gradient-brand">
                Stronger Connections.
              </span>
            </h1>
          </div>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}
          <div className="reveal mt-7">
            <p className="max-w-xl text-base leading-relaxed text-charcoal-700 sm:text-lg">
              Thoughtfully curated corporate gifting solutions designed
              to celebrate employees, impress clients and create lasting
              connections.
            </p>
          </div>

          {/* =====================================================
              CTA BUTTONS
          ===================================================== */}
          <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row">
            {/* Get Quote */}
            <button
              onClick={() => scrollToSection('#contact')}
              type="button"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-xl hover:shadow-brand-500/40"
            >
              Get a Quote

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            {/* Explore */}
            <button
              onClick={() => scrollToSection('#solutions')}
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-brand-300 bg-white/90 px-8 py-4 text-sm font-semibold text-brand-600 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
            >
              Explore Our Gifting
            </button>
          </div>

          {/* =====================================================
              TRUST POINTS
          ===================================================== */}
          <div className="reveal mt-9 grid max-w-xl grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-8">
            {TRUST_POINTS.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                  <Check
                    size={15}
                    strokeWidth={3}
                  />
                </span>

                <span className="text-sm font-medium text-charcoal-700">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* =====================================================
              BRAND MESSAGE
          ===================================================== */}
          <div className="reveal mt-10 flex items-start gap-4 lg:mt-12">
            <span className="mt-1 h-10 w-px bg-brand-500" />

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
                More Than Gifts,
              </p>

              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
                Stronger Relationships
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          MOBILE HERO IMAGE
      ========================================================= */}
      <div className="relative z-10 mt-12 px-5 sm:px-8 lg:hidden">
        <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-cream-200">

          <img
            src={HERO_IMAGE}
            alt="Premium corporate gift hamper"
            className="aspect-[4/3] w-full object-cover"
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/15 via-transparent to-transparent" />

          {/* Mobile image information card */}
          <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-white">
              <Sparkles size={18} />
            </div>

            <div>
              <p className="text-sm font-bold text-charcoal-900">
                Curated With Care
              </p>

              <p className="text-xs text-charcoal-700">
                Premium &amp; Personalized
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}