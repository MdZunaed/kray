"use client";

import { use, useState } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ui/ProductCard';
import { siteConfig } from '@/config/site';
import { getParamSlug, routes } from '@/lib/routes';

const allProducts = [
  { id: 1, name: 'Wireless Mouse', slug: 'wireless-mouse', category: 'electronics', price: 25.00, imageSrc: siteConfig.placeholderImage, href: routes.product('wireless-mouse') },
  { id: 2, name: 'Mechanical Keyboard', slug: 'mechanical-keyboard', category: 'electronics', price: 85.00, imageSrc: siteConfig.placeholderImage, href: routes.product('mechanical-keyboard') },
  { id: 3, name: 'T-Shirt', slug: 't-shirt', category: 'clothing', price: 15.00, imageSrc: siteConfig.placeholderImage, href: routes.product('t-shirt') },
  { id: 4, name: 'Jeans', slug: 'jeans', category: 'clothing', price: 45.00, imageSrc: siteConfig.placeholderImage, href: routes.product('jeans') },
  { id: 5, name: 'Novel', slug: 'novel', category: 'books', price: 12.00, imageSrc: siteConfig.placeholderImage, href: routes.product('novel') },
  { id: 6, name: 'Cookbook', slug: 'cookbook', category: 'books', price: 22.00, imageSrc: siteConfig.placeholderImage, href: routes.product('cookbook') },
];

const categories = [
  { name: 'Electronics', slug: 'electronics' },
  { name: 'Clothing', slug: 'clothing' },
  { name: 'Books', slug: 'books' },
  { name: 'Home & Kitchen', slug: 'home-kitchen' },
  { name: 'Sports', slug: 'sports' },
  { name: 'Toys', slug: 'toys' },
];

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const [sort, setSort] = useState('default');
  const { slug } = use(params);
  const activeCategorySlug = getParamSlug(slug);

  const products = allProducts.filter((p) => p.category === activeCategorySlug);

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === 'price-asc') return a.price - b.price;
    if (sort === 'price-desc') return b.price - a.price;
    return 0;
  });

  return (
    <div className="bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <aside className="hidden lg:col-span-1 lg:block">
            <div className="rounded-2xl border border-primary-200 bg-white p-5 shadow-sm">
              <h2 className="text-2xl font-bold text-primary-900">Categories</h2>
              <p className="mt-1 text-sm text-gray-600">Choose a category to browse.</p>
              <nav className="mt-5 flex flex-col space-y-2">
                <Link
                  href={routes.categories}
                  className="rounded-lg px-3 py-2 text-base text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-700"
                >
                  All
                </Link>
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={routes.category(category.slug)}
                    className={`rounded-lg px-3 py-2 text-base transition-colors ${
                      activeCategorySlug === category.slug
                        ? 'bg-primary-100 font-semibold text-primary-800'
                        : 'text-gray-700 hover:bg-primary-50 hover:text-primary-700'
                    }`}
                  >
                    {category.name}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          <main className="lg:col-span-3">
            <div className="rounded-2xl border border-primary-100 bg-white p-6 shadow-sm md:p-8">
              <div className="mb-5 flex flex-wrap gap-2 lg:hidden">
                <Link
                  href={routes.categories}
                  className="rounded-full border border-primary-200 px-3 py-1.5 text-sm text-primary-800 transition-colors hover:bg-primary-50"
                >
                  All
                </Link>
                {categories.map((category) => (
                  <Link
                    key={`mobile-${category.slug}`}
                    href={routes.category(category.slug)}
                    className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                      activeCategorySlug === category.slug
                        ? 'bg-primary-500 text-white'
                        : 'border border-primary-200 text-primary-800 hover:bg-primary-50'
                    }`}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h1 className="text-3xl font-bold capitalize text-primary-900">{activeCategorySlug.replace('-', ' ')}</h1>
                <div className="flex items-center gap-2">
                  <label htmlFor="sort" className="text-sm font-medium text-gray-700">Sort by:</label>
                  <select
                    id="sort"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="rounded-lg border border-primary-200 px-3 py-2 text-sm text-gray-800 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
                  >
                    <option value="default">Default</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
