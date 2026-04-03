"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Menu, MapPin, Search, ShoppingCart, TicketPercent, User, Wallet } from 'lucide-react';
import { useCart } from '@/features/cart/providers/CartProvider';
import { routes } from '@/lib/routes';

const Header = () => {
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const accountMenuRef = useRef<HTMLDivElement>(null);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (accountMenuRef.current && !accountMenuRef.current.contains(event.target as Node)) {
        setIsAccountMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 shadow-sm backdrop-blur">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-heading text-3xl font-bold text-heading">
          <Link href={routes.home}>Kray</Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href={routes.home} className="text-foreground hover:text-primary-500">Home</Link>
          <Link href={routes.products} className="text-foreground hover:text-primary-500">Products</Link>
          <Link href={routes.categories} className="text-foreground hover:text-primary-500">Categories</Link>
          <Link href={routes.about} className="text-foreground hover:text-primary-500">About</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href={routes.search} className="text-foreground hover:text-primary-500" aria-label="Search products">
            <Search className="h-6 w-6" />
          </Link>
          <Link href={routes.cart} className="relative">
            <ShoppingCart className="h-6 w-6 text-foreground" />
            <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs rounded-full h-5 min-w-5 px-1 flex items-center justify-center">{totalItems}</span>
          </Link>
          <div className="hidden items-center gap-2 sm:flex">
            <Link
              href={routes.login}
              className="rounded-md border border-primary-300 px-2 py-1 text-xs font-medium text-primary-700 hover:bg-primary-50 sm:px-3 sm:py-1.5 sm:text-sm"
            >
              Login
            </Link>
            <Link
              href={routes.register}
              className="rounded-md bg-primary-600 px-2 py-1 text-xs font-medium text-white hover:bg-primary-700 sm:px-3 sm:py-1.5 sm:text-sm"
            >
              Register
            </Link>
          </div>
          <div className="relative" ref={accountMenuRef}>
            <button
              type="button"
              onClick={() => setIsAccountMenuOpen((prev) => !prev)}
              className="text-foreground hover:text-primary-500"
              aria-label="Open account menu"
              aria-expanded={isAccountMenuOpen}
            >
              <Menu className="h-6 w-6" />
            </button>
            {isAccountMenuOpen && (
              <div className="absolute right-0 top-8 z-50 mt-2 w-52 rounded-lg border border-border bg-surface p-2 shadow-lg">
                <div className="sm:hidden">
                  <Link
                    href={routes.login}
                    onClick={() => setIsAccountMenuOpen(false)}
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-primary-50 hover:text-primary-800"
                  >
                    <User className="h-4 w-4" />
                    Login
                  </Link>
                  <Link
                    href={routes.register}
                    onClick={() => setIsAccountMenuOpen(false)}
                    className="mb-1 flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-primary-50 hover:text-primary-800"
                  >
                    <User className="h-4 w-4" />
                    Register
                  </Link>
                </div>
                <Link
                  href={routes.account}
                  onClick={() => setIsAccountMenuOpen(false)}
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-primary-50 hover:text-primary-800"
                >
                  <User className="h-4 w-4" />
                  Profile
                </Link>
                <Link
                  href={routes.accountAddress}
                  onClick={() => setIsAccountMenuOpen(false)}
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-primary-50 hover:text-primary-800"
                >
                  <MapPin className="h-4 w-4" />
                  Address
                </Link>
                <Link
                  href={routes.accountOrders}
                  onClick={() => setIsAccountMenuOpen(false)}
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-primary-50 hover:text-primary-800"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Orders
                </Link>
                <Link
                  href={routes.accountWallet}
                  onClick={() => setIsAccountMenuOpen(false)}
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-primary-50 hover:text-primary-800"
                >
                  <Wallet className="h-4 w-4" />
                  Wallet
                </Link>
                <Link
                  href={routes.accountCoupon}
                  onClick={() => setIsAccountMenuOpen(false)}
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-primary-50 hover:text-primary-800"
                >
                  <TicketPercent className="h-4 w-4" />
                  Coupon
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
