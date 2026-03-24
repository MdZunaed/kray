"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

const initialCartItems = [
  { id: 1, name: 'Wireless Mouse', price: 25.00, quantity: 2, imageSrc: siteConfig.placeholderImage },
  { id: 2, name: 'Mechanical Keyboard', price: 85.00, quantity: 1, imageSrc: siteConfig.placeholderImage },
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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-black">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-black">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/4">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center border-b py-4">
                <Image src={item.imageSrc} alt={item.name} width={100} height={100} className="rounded-lg" />
                <div className="ml-4 flex-grow">
                  <h2 className="text-xl font-bold text-black">{item.name}</h2>
                  <p className="text-black">{siteConfig.currency}{item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="border p-2 rounded w-20 text-center"
                  />
                  <button onClick={() => removeItem(item.id)} className="ml-4 text-red-500 hover:text-red-700">
                    Remove
                  </button>
                </div>
                <div className="ml-4 font-bold text-black">
                  {siteConfig.currency}{(item.price * item.quantity).toFixed(2)}
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
              <Link href="/checkout" className="block text-center w-full mt-4 bg-#74A662 text-primary-500 px-6 py-3 rounded-lg hover:bg-primary-600">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
