import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { routes } from '@/lib/routes';

const Footer = () => {
  return (
    <footer className="bg-surface-inverse py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="font-heading mb-4 text-2xl font-bold text-white">{siteConfig.name}</h2>
            <p className="text-primary-100/80">
              Your one-stop shop for everything you need.
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-white">Information</h3>
            <ul className="space-y-2">
              <li><Link href={routes.about} className="text-primary-100/80 hover:text-white">About</Link></li>
              <li><Link href={routes.contact} className="text-primary-100/80 hover:text-white">Contact us</Link></li>
              <li><Link href={routes.privacyPolicy} className="text-primary-100/80 hover:text-white">Privacy Policy</Link></li>
              <li><Link href={routes.termsAndConditions} className="text-primary-100/80 hover:text-white">Terms & Condition</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4">
              {siteConfig.socialLinks.map((link) => (
                <a key={link.name} href={link.url} className="text-primary-100/80 hover:text-white">{link.name}</a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-white">Newsletter</h3>
            <form>
              <input type="email" placeholder="Your email" className="w-full rounded border border-primary-800 bg-primary-900/70 p-2 text-white placeholder:text-primary-100/50 focus:border-primary-500 focus:outline-none" />
              <button type="submit" className="mt-2 w-full rounded bg-primary-500 p-2 text-white hover:bg-primary-600">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-900 pt-4 text-center text-primary-100/80">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
