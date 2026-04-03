"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type CartItem = {
  id: number;
  slug: string;
  href: string;
  name: string;
  price: number;
  imageSrc: string;
  quantity: number;
};

type CartProductInput = Omit<CartItem, "quantity">;

type CartContextValue = {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addItem: (item: CartProductInput, quantity?: number) => void;
  updateItemQuantity: (slug: string, quantity: number) => void;
  removeItem: (slug: string) => void;
};

const STORAGE_KEY = "kray-cart";

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    try {
      const savedCart = window.localStorage.getItem(STORAGE_KEY);
      if (!savedCart) return [];

      const parsedCart = JSON.parse(savedCart) as CartItem[];
      if (Array.isArray(parsedCart)) {
        return parsedCart.filter((item) => item.quantity > 0);
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }

    return [];
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const value = useMemo<CartContextValue>(() => {
    const addItem = (item: CartProductInput, quantity = 1) => {
      const nextQuantity = Math.max(1, quantity);

      setItems((currentItems) => {
        const existingItem = currentItems.find((cartItem) => cartItem.slug === item.slug);

        if (existingItem) {
          return currentItems.map((cartItem) =>
            cartItem.slug === item.slug
              ? { ...cartItem, quantity: cartItem.quantity + nextQuantity }
              : cartItem
          );
        }

        return [...currentItems, { ...item, quantity: nextQuantity }];
      });
    };

    const updateItemQuantity = (slug: string, quantity: number) => {
      setItems((currentItems) =>
        currentItems.flatMap((item) => {
          if (item.slug !== slug) return [item];
          if (quantity < 1) return [];
          return [{ ...item, quantity }];
        })
      );
    };

    const removeItem = (slug: string) => {
      setItems((currentItems) => currentItems.filter((item) => item.slug !== slug));
    };

    return {
      items,
      totalItems: items.reduce((total, item) => total + item.quantity, 0),
      totalPrice: items.reduce((total, item) => total + item.price * item.quantity, 0),
      addItem,
      updateItemQuantity,
      removeItem,
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
