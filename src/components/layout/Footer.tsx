import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Kray</h2>
            <p className="text-gray-300">
              Your one-stop shop for everything you need.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-primary-500">Home</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-primary-500">Products</Link></li>
              <li><Link href="/categories" className="text-gray-300 hover:text-primary-500">Categories</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-primary-500">About</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary-500">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-primary-500">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-primary-500">Instagram</a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form>
              <input type="email" placeholder="Your email" className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-primary-500" />
              <button type="submit" className="w-full mt-2 bg-primary-500 hover:bg-primary-600 text-white p-2 rounded">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-300">
          &copy; {new Date().getFullYear()} Kray. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
