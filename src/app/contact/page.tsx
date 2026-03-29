import { siteConfig } from '@/config/site';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">Contact Us</h2>
          <p className="mt-2 text-3xl font-extrabold text-black tracking-tight sm:text-4xl">
            Get in touch
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            We&apos;d love to hear from you! Please fill out the form below or use our contact details to reach out.
          </p>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-black">Send us a message</h3>
              <form action="#" method="POST" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                    <div className="mt-1">
                      <input type="text" name="first-name" id="first-name" autoComplete="given-name" placeholder="Enter your first name" className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                    <div className="mt-1">
                      <input type="text" name="last-name" id="last-name" autoComplete="family-name" placeholder="Enter your last name"   className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <div className="mt-1">
                      <input id="email" name="email" type="email" autoComplete="email" placeholder="Enter your email"  className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <div className="mt-1">
                      <textarea id="message" name="message" rows={4} placeholder="Enter your message" className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-primary-500 focus:border-primary-500 border border-gray-300 rounded-md" defaultValue={""} />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2 mt-6">
                  <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black">Contact information</h3>
              <div className="mt-6 space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-base text-gray-500">
                      <a href={`mailto:${siteConfig.name.toLowerCase()}@example.com`}>{siteConfig.name.toLowerCase()}@example.com</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-base text-gray-500">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-base text-gray-500">123 Example St, City, State 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}