import { siteConfig } from '@/config/site';
import { Clock3, Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-secondary-50/40">
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-primary-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 top-24 h-72 w-72 rounded-full bg-secondary-200/60 blur-3xl" />

      <div className="container relative mx-auto px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-4 py-1.5 text-sm font-medium text-primary-800 shadow-sm">
            <Sparkles className="h-4 w-4" />
            Contact {siteConfig.name}
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-primary-950 sm:text-5xl">
            Let&apos;s Build Something Great Together
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
            Questions, feedback, or partnership ideas, our team is ready to help. Send us a message and
            we&apos;ll get back to you quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="rounded-2xl border border-primary-200 bg-white/90 p-6 shadow-xl backdrop-blur-sm lg:col-span-3 md:p-8">
            <h2 className="text-2xl font-bold text-primary-900">Send us a message</h2>
            <p className="mt-2 text-sm text-gray-600">We usually reply within one business day.</p>
            <form action="#" method="POST" className="mt-6 space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    placeholder="Enter your first name"
                    className="mt-2 block w-full rounded-lg border border-primary-200 bg-white px-4 py-3 text-gray-900 shadow-sm transition focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    placeholder="Enter your last name"
                    className="mt-2 block w-full rounded-lg border border-primary-200 bg-white px-4 py-3 text-gray-900 shadow-sm transition focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  className="mt-2 block w-full rounded-lg border border-primary-200 bg-white px-4 py-3 text-gray-900 shadow-sm transition focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us how we can help"
                  className="mt-2 block w-full rounded-lg border border-primary-200 bg-white px-4 py-3 text-gray-900 shadow-sm transition focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
                  defaultValue={""}
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-primary-700"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-2xl font-bold text-primary-900">Contact information</h3>
            <div className="rounded-2xl border border-primary-200 bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="rounded-lg bg-primary-100 p-2 text-primary-700">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <a
                    className="text-base font-semibold text-primary-800 hover:text-primary-900"
                    href={`mailto:${siteConfig.name.toLowerCase()}@example.com`}
                  >
                    {siteConfig.name.toLowerCase()}@example.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-primary-200 bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="rounded-lg bg-secondary-100 p-2 text-secondary-700">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone</p>
                  <p className="text-base font-semibold text-gray-800">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-primary-200 bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="rounded-lg bg-primary-100 p-2 text-primary-700">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-500">Office</p>
                  <p className="text-base font-semibold text-gray-800">123 Example St, City, State 12345</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-secondary-200 bg-secondary-50 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="rounded-lg bg-white p-2 text-secondary-700">
                  <Clock3 className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-secondary-700">Support Hours</p>
                  <p className="text-base font-semibold text-secondary-900">Mon - Sat, 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-primary-200 bg-white/80 p-5 text-center shadow-sm">
          <p className="text-sm text-gray-600">
            Prefer direct support? Email us at{" "}
            <a className="font-semibold text-primary-800 hover:text-primary-900" href={`mailto:${siteConfig.name.toLowerCase()}@example.com`}>
              {siteConfig.name.toLowerCase()}@example.com
            </a>{" "}
            and include your order ID for faster help.
          </p>
        </div>
      </div>
    </div>
  );
}
