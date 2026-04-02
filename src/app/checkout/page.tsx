"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CreditCard, MapPin, ShieldCheck, Truck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { routes } from "@/lib/routes";

type CheckoutItem = {
  slug: string;
  name: string;
  price: number;
  quantity: number;
  imageSrc?: string;
};

const catalog: Record<string, Omit<CheckoutItem, "quantity">> = {
  "wireless-mouse": {
    slug: "wireless-mouse",
    name: "Wireless Mouse",
    price: 25.0,
    imageSrc: siteConfig.placeholderImage,
  },
  "mechanical-keyboard": {
    slug: "mechanical-keyboard",
    name: "Mechanical Keyboard",
    price: 85.0,
    imageSrc: siteConfig.placeholderImage,
  },
  "t-shirt": {
    slug: "t-shirt",
    name: "T-Shirt",
    price: 15.0,
    imageSrc: siteConfig.placeholderImage,
  },
  jeans: {
    slug: "jeans",
    name: "Jeans",
    price: 45.0,
    imageSrc: siteConfig.placeholderImage,
  },
  novel: {
    slug: "novel",
    name: "Novel",
    price: 12.0,
    imageSrc: siteConfig.placeholderImage,
  },
  cookbook: {
    slug: "cookbook",
    name: "Cookbook",
    price: 22.0,
    imageSrc: siteConfig.placeholderImage,
  },
};

function CheckoutPageContent() {
  const searchParams = useSearchParams();
  const [placingOrder, setPlacingOrder] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const items = useMemo<CheckoutItem[]>(() => {
    const source = searchParams.get("source");

    if (source === "cart") {
      const rawItems = searchParams.get("items");
      if (!rawItems) return [];
      try {
        const parsed = JSON.parse(rawItems) as CheckoutItem[];
        return parsed.filter((item) => item.quantity > 0);
      } catch {
        return [];
      }
    }

    if (source === "buy-now") {
      const slug = searchParams.get("slug");
      const quantity = Math.max(1, Number(searchParams.get("quantity") || 1));
      if (!slug || !catalog[slug]) return [];
      return [{ ...catalog[slug], quantity }];
    }

    return [];
  }, [searchParams]);

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = items.length > 0 ? 5 : 0;
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    setPlacingOrder(true);
    setMessage(null);

    setTimeout(() => {
      setPlacingOrder(false);
      setMessage("Order placed successfully (demo flow).");
    }, 900);
  };

  return (
    <div className="bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary-900">Checkout</h1>
        <p className="mt-2 text-gray-600">Complete your order details securely.</p>

        {items.length === 0 ? (
          <div className="mt-8 max-w-xl rounded-2xl border border-primary-200 bg-white p-6 shadow-sm">
            <p className="text-gray-700">No items found for checkout.</p>
            <Link
              href={routes.products}
              className="mt-4 inline-block rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-700"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-5">
            <div className="space-y-6 lg:col-span-3">
              <section className="rounded-2xl border border-primary-200 bg-white p-6 shadow-sm">
                <h2 className="flex items-center gap-2 text-xl font-semibold text-primary-900">
                  <MapPin className="h-5 w-5 text-primary-700" />
                  Shipping Address
                </h2>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input className="rounded-lg border border-primary-200 px-3 py-2 text-sm" placeholder="Full name" />
                  <input className="rounded-lg border border-primary-200 px-3 py-2 text-sm" placeholder="Phone number" />
                  <input className="sm:col-span-2 rounded-lg border border-primary-200 px-3 py-2 text-sm" placeholder="Street address" />
                  <input className="rounded-lg border border-primary-200 px-3 py-2 text-sm" placeholder="City" />
                  <input className="rounded-lg border border-primary-200 px-3 py-2 text-sm" placeholder="Postal code" />
                </div>
              </section>

              <section className="rounded-2xl border border-primary-200 bg-white p-6 shadow-sm">
                <h2 className="flex items-center gap-2 text-xl font-semibold text-primary-900">
                  <CreditCard className="h-5 w-5 text-primary-700" />
                  Payment Method
                </h2>
                <div className="mt-4 space-y-3 text-sm text-gray-700">
                  <label className="flex items-center gap-2 rounded-lg border border-primary-200 p-3">
                    <input type="radio" name="payment" defaultChecked className="accent-primary-600" />
                    Cash on Delivery
                  </label>
                  <label className="flex items-center gap-2 rounded-lg border border-primary-200 p-3">
                    <input type="radio" name="payment" className="accent-primary-600" />
                    Card Payment (Coming Soon)
                  </label>
                </div>
              </section>
            </div>

            <aside className="rounded-2xl border border-primary-200 bg-white p-6 shadow-sm lg:col-span-2">
              <h2 className="text-xl font-semibold text-primary-900">Order Summary</h2>
              <div className="mt-4 space-y-4">
                {items.map((item) => (
                  <div key={item.slug} className="flex items-start justify-between gap-3 border-b border-primary-100 pb-3">
                    <div>
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium text-gray-900">
                      {siteConfig.currency}
                      {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 space-y-2 text-sm">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>{siteConfig.currency}{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span>{siteConfig.currency}{shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-t border-primary-100 pt-2 text-base font-semibold text-primary-900">
                  <span>Total</span>
                  <span>{siteConfig.currency}{total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-5 space-y-2 rounded-xl border border-primary-100 bg-primary-50/40 p-3 text-sm text-gray-700">
                <p className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-primary-700" />
                  Fast and tracked delivery
                </p>
                <p className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary-700" />
                  Secure order processing
                </p>
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={placingOrder}
                className="mt-5 w-full rounded-lg bg-primary-600 px-5 py-3 font-medium text-white hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {placingOrder ? "Placing order..." : "Place Order"}
              </button>

              {message && <p className="mt-3 text-sm text-green-700">{message}</p>}
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="bg-gradient-to-b from-primary-50 to-white">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-primary-900">Checkout</h1>
            <p className="mt-2 text-gray-600">Loading checkout details...</p>
          </div>
        </div>
      }
    >
      <CheckoutPageContent />
    </Suspense>
  );
}
