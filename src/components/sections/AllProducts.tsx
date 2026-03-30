"use client";

import { useState, useEffect, useRef } from 'react';
import { siteConfig } from '@/config/site';
import ProductCard from '../ui/ProductCard';
import { routes } from '@/lib/routes';

const allProducts = [
  { id: 1, name: 'Wireless Mouse', category: 'Electronics', price: 25.00, imageSrc: siteConfig.placeholderImage, slug: 'wireless-mouse' },
  { id: 2, name: 'Mechanical Keyboard', category: 'Electronics', price: 85.00, imageSrc: siteConfig.placeholderImage, slug: 'mechanical-keyboard' },
  { id: 3, name: 'T-Shirt', category: 'Clothing', price: 15.00, imageSrc: siteConfig.placeholderImage, slug: 't-shirt' },
  { id: 4, name: 'Jeans', category: 'Clothing', price: 45.00, imageSrc: siteConfig.placeholderImage, slug: 'jeans' },
  { id: 5, name: 'Novel', category: 'Books', price: 12.00, imageSrc: siteConfig.placeholderImage, slug: 'novel' },
  { id: 6, name: 'Cookbook', category: 'Books', price: 22.00, imageSrc: siteConfig.placeholderImage, slug: 'cookbook' },
];

const categories = ['All', 'Electronics', 'Clothing', 'Books'];

const AllProducts = () => {
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('');
  const [showSort, setShowSort] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setShowSort(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filteredProducts = allProducts.filter(product => 
    filter === 'All' || product.category === filter
  ).sort((a, b) => {
    if (sort === 'price-asc') {
      return a.price - b.price;
    } else if (sort === 'price-desc') {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-left">All Products</h2>
            <div className="flex justify-start mt-4">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 mr-2 rounded-lg ${filter === category ? 'bg-primary-500 text-white' : 'bg-gray-200 text-black'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="relative" ref={sortRef}>
            <button
              onClick={() => setShowSort(!showSort)}
              className="px-4 py-2 bg-gray-200 text-black rounded-lg"
            >
              Sort by
            </button>
            {showSort && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                <button
                  onClick={() => { setSort('price-asc'); setShowSort(false); }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200 rounded-t-lg"
                >
                  Price: Low to High
                </button>
                <button
                  onClick={() => { setSort('price-desc'); setShowSort(false); }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200 rounded-b-lg"
                >
                  Price: High to Low
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={{...product, href: routes.product(product.slug)}} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
