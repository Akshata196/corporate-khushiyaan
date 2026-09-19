// import { Instagram, Linkedin, Facebook, MessageCircle } from 'lucide-react';
// import { CONTACT, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '@/lib/config';

// const QUICK_LINKS = [
//   { label: 'Home', href: '#home' },
//   { label: 'About', href: '#about' },
//   { label: 'Gifting Solutions', href: '#solutions' },
//   { label: 'Why Us', href: '#why-us' },
//   { label: 'Our Process', href: '#process' },
//   { label: 'Contact', href: '#contact' },
// ];

// function scrollTo(href: string) {
//   document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
// }

// function openWhatsApp() {
//   const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
//   window.open(url, '_blank', 'noopener,noreferrer');
// }

// export function Footer() {
//   return (
//     <footer className="bg-charcoal-900 pt-14 pb-8">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="grid gap-10 lg:grid-cols-4">
//           {/* Brand */}
//           <div className="lg:col-span-2">
//             <div className="flex items-center gap-3">
//               <img src="/corporate_khushiyaan_the_gift_hub_logo.jpg" alt="Corporate Khushiyaan logo" className="h-16 w-auto" />
//               <span className="font-display text-2xl font-bold leading-none text-brand-400">Corporate Khushiyaan</span>
//             </div>
//             <p className="mt-2 text-sm font-semibold text-brand-300">The Gift Hub</p>
//             <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-200/60">
//               Thoughtful, personalized and premium corporate gifting solutions for
//               employees, clients and business partners.
//             </p>

//             {/* Social icons */}
//             <div className="mt-6 flex gap-3">
//               {[
//                 { icon: Instagram, label: 'Instagram' },
//                 { icon: Linkedin, label: 'LinkedIn' },
//                 { icon: Facebook, label: 'Facebook' },
//                 { icon: MessageCircle, label: 'WhatsApp', onClick: openWhatsApp },
//               ].map(({ icon: Icon, label, onClick }) => (
//                 <button
//                   key={label}
//                   onClick={onClick}
//                   aria-label={label}
//                   className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cream-200/70 transition-all hover:border-brand-400/40 hover:bg-brand-500 hover:text-white"
//                 >
//                   <Icon size={18} />
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
//             <ul className="mt-4 space-y-2.5">
//               {QUICK_LINKS.map((link) => (
//                 <li key={link.href}>
//                   <button
//                     onClick={() => scrollTo(link.href)}
//                     className="text-sm text-cream-200/60 transition-colors hover:text-brand-300"
//                   >
//                     {link.label}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
//             <ul className="mt-4 space-y-3 text-sm text-cream-200/60">
//               <li>
//                 <span className="block font-semibold text-cream-200/80">Phone</span>
//                 {CONTACT.phone}
//               </li>
//               <li>
//                 <span className="block font-semibold text-cream-200/80">Email</span>
//                 {CONTACT.email}
//               </li>
//               <li>
//                 <span className="block font-semibold text-cream-200/80">Location</span>
//                 {CONTACT.location}
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="mt-12 border-t border-white/10 pt-6">
//           <p className="text-center text-xs text-cream-200/50">
//             &copy; 2026 Corporate Khushiyaan &ndash; The Gift Hub. All Rights Reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }



import {
  Instagram,
  Linkedin,
  Facebook,
  MessageCircle,
} from 'lucide-react';

import {
  CONTACT,
  WHATSAPP_NUMBER,
  WHATSAPP_MESSAGE,
} from '@/lib/config';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Gifting Solutions', href: '#solutions' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Our Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({
    behavior: 'smooth',
  });
}

function openWhatsApp() {
  const url = `https://wa.me/${8446227102}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  window.open(url, '_blank', 'noopener,noreferrer');
}

export function Footer() {
  return (
    <footer className="bg-charcoal-900 pt-14 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-4">

          {/* =========================
              BRAND
          ========================== */}
          <div className="lg:col-span-2">

            <div className="flex items-center gap-3">
              <img
                src="/corporate_khushiyaan_the_gift_hub_logo.jpg"
                alt="Corporate Khushiyaan - The Gift Hub logo"
                className="h-16 w-auto"
              />

              <span className="font-display text-2xl font-bold leading-none text-brand-400">
                Corporate Khushiyaan
              </span>
            </div>

            <p className="mt-2 text-sm font-semibold text-brand-300">
              The Gift Hub
            </p>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-200/60">
              Thoughtful, personalized and premium corporate gifting solutions
              for employees, clients and business partners.
            </p>

            {/* =========================
                SOCIAL ICONS
            ========================== */}
            <div className="mt-6 flex gap-3">

              {/* Instagram */}
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cream-200/70 transition-all hover:border-brand-400/40 hover:bg-brand-500 hover:text-white"
              >
                <Instagram size={18} />
              </a>

              {/* LinkedIn */}
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cream-200/70 transition-all hover:border-brand-400/40 hover:bg-brand-500 hover:text-white"
              >
                <Linkedin size={18} />
              </a>

              {/* Facebook */}
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cream-200/70 transition-all hover:border-brand-400/40 hover:bg-brand-500 hover:text-white"
              >
                <Facebook size={18} />
              </a>

              {/* WhatsApp */}
              <button
                onClick={openWhatsApp}
                aria-label="WhatsApp"
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cream-200/70 transition-all hover:border-brand-400/40 hover:bg-brand-500 hover:text-white"
              >
                <MessageCircle size={18} />
              </button>

            </div>
          </div>

          {/* =========================
              QUICK LINKS
          ========================== */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-2.5">

              {QUICK_LINKS.map((link) => (
                <li key={link.href}>

                  <button
                    onClick={() => scrollTo(link.href)}
                    type="button"
                    className="text-sm text-cream-200/60 transition-colors hover:text-brand-300"
                  >
                    {link.label}
                  </button>

                </li>
              ))}

            </ul>
          </div>

          {/* =========================
              CONTACT
          ========================== */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>

            <ul className="mt-4 space-y-4 text-sm text-cream-200/60">

              {/* Phone */}
              <li>
                <span className="mb-1 block font-semibold text-cream-200/80">
                  Phone
                </span>

                <a
                  href={`tel:${CONTACT.phone}`}
                  className="transition-colors hover:text-brand-300"
                >
                  {CONTACT.phone}
                </a>
              </li>

              {/* Email */}
              <li>
                <span className="mb-1 block font-semibold text-cream-200/80">
                  Email
                </span>

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="break-all transition-colors hover:text-brand-300"
                >
                  {CONTACT.email}
                </a>
              </li>

              {/* Location */}
              <li>
                <span className="mb-1 block font-semibold text-cream-200/80">
                  Location
                </span>

                <span>
                  {CONTACT.location}
                </span>
              </li>

            </ul>
          </div>

        </div>

        {/* =========================
            COPYRIGHT
        ========================== */}
        <div className="mt-12 border-t border-white/10 pt-6">

          <p className="text-center text-xs text-cream-200/50">
            &copy; 2026 Corporate Khushiyaan &ndash; The Gift Hub.
            All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}