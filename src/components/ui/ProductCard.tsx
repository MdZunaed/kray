"use client"
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { useState } from 'react';

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
    <div key={product.id} className="group relative p-4 bg-white rounded-lg shadow-md flex flex-col">
      <div className="w-full h-60 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75">
        <Image
          src={product.imageSrc}
          alt={product.name}
          className="w-full h-full object-center object-cover"
          width={300}
          height={300}
        />
      </div>
      <div className="flex-grow mt-4">
        <h3 className="text-sm text-black">
          <Link href={product.href} className="hover:text-primary-500">
            <span className="absolute inset-0" />
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-lg font-medium text-black">{siteConfig.currency}{product.price.toFixed(2)}</p>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between space-x-2 mb-2">
            <div className="flex items-center">
                <button 
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="px-3 py-1 bg-gray-200 text-black rounded-l-md hover:bg-gray-300">-</button>
                <span className="px-4 py-1 bg-gray-100">{quantity}</span>
                <button 
                onClick={() => setQuantity(q => q + 1)}
                className="px-3 py-1 bg-gray-200 text-black rounded-r-md hover:bg-gray-300">+</button>
            </div>
            <button className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 text-sm">Add to Cart</button>
        </div>
        <button className="w-full px-4 py-2 bg-secondary-500 text-white rounded-md hover:bg-secondary-600">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
