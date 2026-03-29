import Link from 'next/link';
import { ShoppingCart, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold text-black">
          <Link href="/">Kray</Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-black hover:text-primary-500">Home</Link>
          <Link href="/products" className="text-black hover:text-primary-500">Products</Link>
          <Link href="/categories" className="text-black hover:text-primary-500">Categories</Link>
          <Link href="/about" className="text-black hover:text-primary-500">About</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-black" />
            <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
          </Link>
          <Link href="/profile" className="text-black hover:text-primary-500">
            <User className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
