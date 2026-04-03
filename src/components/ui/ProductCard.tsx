"use client"
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { useCart } from '@/features/cart/providers/CartProvider';
import { getProductSlugFromHref } from '@/features/catalog/utils/product';
import { useToast } from '@/features/notifications/providers/ToastProvider';
import { useState } from 'react';
import QuantityStepper from './QuantityStepper';

export type Product = {
  id: number;
  name: string;
  href: string;
  slug?: string;
  price: number;
  imageSrc: string;
};

const ProductCard = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { showToast } = useToast();

  const productSlug = product.slug ?? getProductSlugFromHref(product.href);
  return (
    <div key={product.id} className="group relative flex flex-col rounded-xl border border-border bg-surface p-3 shadow-sm">
      <Link href={product.href} className="hover:text-primary-500">
        <div className="aspect-square md:aspect-[4/3] xl:aspect-[5/4] w-full overflow-hidden rounded-lg bg-surface-muted group-hover:opacity-90">
          <Image
            src={product.imageSrc}
            alt={product.name}
            className="w-full h-full object-center object-cover"
            width={300}
            height={300}
          />
        </div>
        <div className="mt-3 min-h-14">
          <h3 className="text-sm font-medium text-heading">
            {product.name}
          </h3>
          <p className="mt-1 text-base font-semibold text-primary-800">{siteConfig.currency}{product.price.toFixed(2)}</p>
        </div>
      </Link>
      <div className="mt-3">
        <div className="mb-2 grid grid-cols-1 gap-2 sm:grid-cols-[auto_1fr] sm:items-center">
          <QuantityStepper
            value={quantity}
            onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
            onIncrease={() => setQuantity((q) => q + 1)}
            className="!hidden w-fit sm:!inline-flex"
          />
          <button
            onClick={() => {
              addItem({
                id: product.id,
                slug: productSlug,
                href: product.href,
                name: product.name,
                price: product.price,
                imageSrc: product.imageSrc,
              }, quantity);
              showToast({
                title: `${product.name} added to cart`,
                description: quantity > 1 ? `${quantity} items are ready in your cart.` : "You can review it anytime from the cart page.",
                status: "success",
              });
            }}
            className="w-full rounded-md bg-primary-500 px-3 py-2 text-xs font-medium text-white hover:bg-primary-600 sm:w-auto"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
