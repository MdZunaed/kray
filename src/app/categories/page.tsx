"use client";

import { useState } from 'react';
import ProductCard from '@/components/ui/ProductCard';
import { siteConfig } from '@/config/site';

const categories = [
  { name: 'All', slug: 'all' },
  { name: 'Electronics', slug: 'electronics' },
  { name: 'Clothing', slug: 'clothing' },
  { name: 'Books', slug: 'books' },
  { name: 'Home & Kitchen', slug: 'home-kitchen' },
  { name: 'Sports', slug: 'sports' },
  { name: 'Toys', slug: 'toys' },
];

const allProducts = [
  { id: 1, name: 'Wireless Mouse', category: 'electronics', price: 25.00, imageSrc: siteConfig.placeholderImage, href: '/products/1' },
  { id: 2, name: 'Mechanical Keyboard', category: 'electronics', price: 85.00, imageSrc: siteConfig.placeholderImage, href: '/products/2' },
  { id: 3, name: 'T-Shirt', category: 'clothing', price: 15.00, imageSrc: siteConfig.placeholderImage, href: '/products/3' },
  { id: 4, name: 'Jeans', category: 'clothing', price: 45.00, imageSrc: siteConfig.placeholderImage, href: '/products/4' },
  { id: 5, name: 'Novel', category: 'books', price: 12.00, imageSrc: siteConfig.placeholderImage, href: '/products/5' },
  { id: 6, name: 'Cookbook', category: 'books', price: 22.00, imageSrc: siteConfig.placeholderImage, href: '/products/6' },
];

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = allProducts.filter(product =>
    selectedCategory === 'all' || product.category === selectedCategory
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex">
        <div className="w-1/4 pr-8">
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.slug}>
                <button
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`w-full text-left p-2 rounded-lg ${selectedCategory === category.slug ? 'bg-primary-500 text-white' : 'hover:bg-gray-200'}`}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/4">
          <h1 className="text-3xl font-bold mb-8 text-black">
            {categories.find(c => c.slug === selectedCategory)?.name}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
