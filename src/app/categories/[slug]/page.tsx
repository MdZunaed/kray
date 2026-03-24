"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

const allProducts = [
  { id: 1, name: 'Wireless Mouse', category: 'Electronics', price: 25.00, imageSrc: siteConfig.placeholderImage },
  { id: 2, name: 'Mechanical Keyboard', category: 'Electronics', price: 85.00, imageSrc: siteConfig.placeholderImage },
  { id: 3, name: 'T-Shirt', category: 'Clothing', price: 15.00, imageSrc: siteConfig.placeholderImage },
  { id: 4, name: 'Jeans', category: 'Clothing', price: 45.00, imageSrc: siteConfig.placeholderImage },
  { id: 5, name: 'Novel', category: 'Books', price: 12.00, imageSrc: siteConfig.placeholderImage },
  { id: 6, name: 'Cookbook', category: 'Books', price: 22.00, imageSrc: siteConfig.placeholderImage },
];

const categories = [
  { name: 'Electronics', href: '/categories/electronics' },
  { name: 'Clothing', href: '/categories/clothing' },
  { name: 'Books', href: '/categories/books' },
  { name: 'Home & Kitchen', href: '/categories/home-kitchen' },
  { name: 'Sports', href: '/categories/sports' },
  { name: 'Toys', href: '/categories/toys' },
];

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const [sort, setSort] = useState('default');

  const products = allProducts.filter(p => p.category.toLowerCase() === params.slug.replace('-', ' '));

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === 'price-asc') return a.price - b.price;
    if (sort === 'price-desc') return b.price - a.price;
    return 0;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex">
        <aside className="w-1/4">
          <h2 className="text-2xl font-bold mb-4 text-black">Categories</h2>
          <ul>
            {categories.map(category => (
              <li key={category.name} className="mb-2">
                <Link href={category.href} className={`text-lg hover:text-primary-500 ${params.slug === category.href.split('/').pop() ? 'font-bold text-primary-500' : 'text-black'}`}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <main className="w-3/4 pl-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold capitalize text-black">{params.slug.replace('-', ' ')}</h1>
            <div>
              <label htmlFor="sort" className="mr-2 text-black">Sort by:</label>
              <select id="sort" value={sort} onChange={e => setSort(e.target.value)} className="border p-2 rounded">
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map(product => (
              <div key={product.id} className="group relative">
                <div className="w-full h-80 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75">
                  <Image
                    src={product.imageSrc}
                    alt={product.name}
                    className="w-full h-full object-center object-cover"
                    width={400}
                    height={400}
                  />
                </div>
                <h3 className="mt-4 text-sm text-black">
                  <Link href={`/products/${product.id}`} className="hover:text-primary-500">
                    <span className="absolute inset-0" />
                    {product.name}
                  </Link>
                </h3>
                <p className="mt-1 text-lg font-medium text-black">{siteConfig.currency}{product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
