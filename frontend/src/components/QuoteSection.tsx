import { useState, type FormEvent } from 'react';
import { API_URL } from '@/lib/api';
import {
  Send,
  CheckCircle2,
  Loader2,
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  Linkedin,
} from 'lucide-react';

type FormState = {
  full_name: string;
  company_name: string;
  email: string;
  phone: string;
  quantity: string;
  budget_per_gift: string;
  occasion: string;
  message: string;
};

const INITIAL: FormState = {
  full_name: '',
  company_name: '',
  email: '',
  phone: '',
  quantity: '',
  budget_per_gift: '',
  occasion: '',
  message: '',
};

const FIELD_BASE =
  'w-full rounded-xl border border-cream-200 bg-white px-4 py-3 text-sm text-charcoal-800 placeholder:text-charcoal-700/40 transition-colors focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200';

/*
 * Replace these placeholder details with the client's
 * actual company contact details before production.
 */
const CONTACT_DETAILS = {
  phone: '+91 8446227102',
  email: 'corporatekhushiyaan@gmail.com',
  whatsapp: 'https://wa.me/918446227102',
  instagram: 'https://www.instagram.com/corporatekhushiyaan_thegifthub/',
  linkedin: 'https://www.linkedin.com/company/corporate-khushiyaan-the-gift-hub/posts/?feedView=all',
};

export function QuoteSection() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const response = await fetch(`${API_URL}/api/quotes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: form.full_name,
          companyName: form.company_name || null,
          email: form.email,
          phone: form.phone,
          quantity: form.quantity ? Number(form.quantity) : null,
          budgetPerGift: form.budget_per_gift || null,
          occasion: form.occasion || null,
          message: form.message || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong.');
      }

      setStatus('success');
      setForm(INITIAL);
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-charcoal-900 py-16 sm:py-24"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-brand-500/15 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
            Get in Touch
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s Create Something Special
          </h2>

          <p className="mt-4 text-base leading-relaxed text-cream-200/80">
            Tell us what you have in mind, or connect with our gifting team
            directly. We&apos;ll help you create a thoughtful gifting
            experience for your employees, clients and partners.
          </p>
        </div>

        {/* Contact + Quote Form */}
        <div className="reveal mx-auto mt-10 grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">

          {/* =========================
              CONTACT DETAILS
          ========================== */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
              Contact Us
            </p>

            <h3 className="mt-3 font-serif text-3xl font-bold text-white">
              We&apos;d Love to Hear From You
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-cream-200/75">
              Have a gifting requirement or looking for a customized
              corporate gifting solution? Reach out to our team and
              let&apos;s create something memorable together.
            </p>

            <div className="mt-7 space-y-3">

              {/* Phone */}
              <a
                href={`tel:${CONTACT_DETAILS.phone}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                  <Phone size={19} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-medium text-cream-200/60">
                    Call Us
                  </p>

                  <p className="mt-1 truncate text-sm font-semibold text-white">
                    {CONTACT_DETAILS.phone}
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${CONTACT_DETAILS.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                  <Mail size={19} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-medium text-cream-200/60">
                    Email Us
                  </p>

                  <p className="mt-1 truncate text-sm font-semibold text-white">
                    {CONTACT_DETAILS.email}
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={CONTACT_DETAILS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                  <MessageCircle size={19} />
                </div>

                <div>
                  <p className="text-xs font-medium text-cream-200/60">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    Chat With Us
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={CONTACT_DETAILS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                  <Instagram size={19} />
                </div>

                <div>
                  <p className="text-xs font-medium text-cream-200/60">
                    Instagram
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    Follow Our Work
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={CONTACT_DETAILS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                  <Linkedin size={19} />
                </div>

                <div>
                  <p className="text-xs font-medium text-cream-200/60">
                    LinkedIn
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    Connect With Us
                  </p>
                </div>
              </a>

            </div>
          </div>

          {/* =========================
              QUOTE FORM
          ========================== */}
          <div>
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center rounded-3xl border border-brand-400/30 bg-white/5 px-6 py-16 text-center backdrop-blur-sm">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-500 text-white shadow-lg shadow-brand-500/30">
                  <CheckCircle2 size={32} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  Thank you!
                </h3>

                <p className="mt-2 text-base text-cream-200/80">
                  Our gifting team will get in touch with you shortly.
                </p>

                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 rounded-full border border-white/20 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Submit Another Request
                </button>

              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-white/10 bg-white/95 p-6 shadow-2xl backdrop-blur-sm sm:p-8"
              >

                <div className="grid gap-5 sm:grid-cols-2">

                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="full_name"
                      className="mb-1.5 block text-sm font-semibold text-charcoal-800"
                    >
                      Full Name <span className="text-brand-500">*</span>
                    </label>

                    <input
                      id="full_name"
                      name="full_name"
                      type="text"
                      required
                      value={form.full_name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={FIELD_BASE}
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <label
                      htmlFor="company_name"
                      className="mb-1.5 block text-sm font-semibold text-charcoal-800"
                    >
                      Company Name
                    </label>

                    <input
                      id="company_name"
                      name="company_name"
                      type="text"
                      value={form.company_name}
                      onChange={handleChange}
                      placeholder="Your company"
                      className={FIELD_BASE}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-semibold text-charcoal-800"
                    >
                      Work Email <span className="text-brand-500">*</span>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={FIELD_BASE}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-semibold text-charcoal-800"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 ..."
                      className={FIELD_BASE}
                    />
                  </div>

                  {/* Quantity */}
                  <div>
                    <label
                      htmlFor="quantity"
                      className="mb-1.5 block text-sm font-semibold text-charcoal-800"
                    >
                      Number of Gifts / Quantity
                    </label>

                    <input
                      id="quantity"
                      name="quantity"
                      type="text"
                      value={form.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 50"
                      className={FIELD_BASE}
                    />
                  </div>

                  {/* Budget */}
                  <div>
                    <label
                      htmlFor="budget_per_gift"
                      className="mb-1.5 block text-sm font-semibold text-charcoal-800"
                    >
                      Budget Per Gift
                    </label>

                    <input
                      id="budget_per_gift"
                      name="budget_per_gift"
                      type="text"
                      value={form.budget_per_gift}
                      onChange={handleChange}
                      placeholder="e.g. ₹500 – ₹1000"
                      className={FIELD_BASE}
                    />
                  </div>

                  {/* Occasion */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="occasion"
                      className="mb-1.5 block text-sm font-semibold text-charcoal-800"
                    >
                      Occasion
                    </label>

                    <select
                      id="occasion"
                      name="occasion"
                      value={form.occasion}
                      onChange={handleChange}
                      className={FIELD_BASE}
                    >
                      <option value="">Select an occasion</option>
                      <option value="Employee Gifting">
                        Employee Gifting
                      </option>
                      <option value="Client & Partner Gifts">
                        Client & Partner Gifts
                      </option>
                      <option value="Employee Onboarding">
                        Employee Onboarding
                      </option>
                      <option value="Festive Hampers">
                        Festive Hampers
                      </option>
                      <option value="Corporate Events">
                        Corporate Events
                      </option>
                      <option value="Custom Hampers">
                        Custom Hampers
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-semibold text-charcoal-800"
                    >
                      Gift Requirement / Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your gifting requirements..."
                      className={`${FIELD_BASE} resize-none`}
                    />
                  </div>

                </div>

                {/* Error Message */}
                {status === 'error' && (
                  <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                    {errorMsg}
                  </p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="group mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-600 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Get a Free Quote
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}