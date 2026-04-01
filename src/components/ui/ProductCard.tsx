"use client"
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { useState } from 'react';
import QuantityStepper from './QuantityStepper';

export type Product = {
  id: number;
  name: string;
  href: string;
  price: number;
  imageSrc: string;
};

const ProductCard = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div key={product.id} className="group relative flex flex-col rounded-xl border border-primary-100 bg-white p-3 shadow-sm">
      <Link href={product.href} className="hover:text-primary-500">
        <div className="aspect-square md:aspect-[4/3] xl:aspect-[5/4] w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-90">
          <Image
            src={product.imageSrc}
            alt={product.name}
            className="w-full h-full object-center object-cover"
            width={300}
            height={300}
          />
        </div>
        <div className="mt-3 min-h-14">
          <h3 className="text-sm font-medium text-black">
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
            className="w-fit"
          />
          <button
            onClick={() => {
              console.log('Add to cart');
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
