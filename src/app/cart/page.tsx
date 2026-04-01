"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { routes } from '@/lib/routes';
import QuantityStepper from '@/components/ui/QuantityStepper';

const initialCartItems = [
  { id: 1, name: 'Wireless Mouse', price: 25.00, quantity: 2, imageSrc: siteConfig.placeholderImage, slug: 'wireless-mouse' },
  { id: 2, name: 'Mechanical Keyboard', price: 85.00, quantity: 1, imageSrc: siteConfig.placeholderImage, slug: 'mechanical-keyboard' },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const checkoutItems = cartItems.map((item) => ({
    slug: item.slug,
    name: item.name,
    price: item.price,
    quantity: item.quantity,
    imageSrc: item.imageSrc,
  }));

  const checkoutHref = `${routes.checkout}?source=cart&items=${encodeURIComponent(JSON.stringify(checkoutItems))}`;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-black">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-black">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/4">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center border-b border-primary-200 py-4">
                <div className="flex items-center flex-1">
                  <Link href={routes.product(item.slug)}>
                    <Image src={item.imageSrc} alt={item.name} width={100} height={100} className="rounded-lg" />
                  </Link>
                  <div className="ml-4">
                    <Link href={routes.product(item.slug)}>
                      <h2 className="text-xl font-bold text-black">{item.name}</h2>
                    </Link>
                    <p className="text-black">{siteConfig.currency}{item.price.toFixed(2)}</p>
                  </div>
                </div>

                <div className="w-32 flex justify-center">
                  <QuantityStepper
                    value={item.quantity}
                    onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
                    onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
                  />
                </div>

                <div className="w-24 text-right font-bold text-black">
                  {siteConfig.currency}{(item.price * item.quantity).toFixed(2)}
                </div>

                <div className="w-24 flex justify-center">
                  <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="md:w-1/4 md:pl-8 mt-8 md:mt-0">
            <div className="border p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-black">Summary</h2>
              <div className="flex justify-between mb-2 text-black">
                <span>Subtotal</span>
                <span>{siteConfig.currency}{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2 text-black">
                <span>Shipping</span>
                <span>{siteConfig.currency}5.00</span>
              </div>
              <div className="flex justify-between font-bold text-xl mt-4 text-black">
                <span>Total</span>
                <span>{siteConfig.currency}{(total + 5).toFixed(2)}</span>
              </div>
              <Link href={checkoutHref} className="block text-center w-full mt-4 bg-primary-500 text-white hover:bg-primary-600 px-6 py-3 rounded-lg hover:bg-primary-600">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
