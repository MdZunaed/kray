"use client";

import { useState, useEffect, useRef } from 'react';
import type { CatalogCategory, CatalogProduct } from '@/features/catalog/types/catalog';
import ProductCard from '../ui/ProductCard';
import Link from 'next/link';
import { routes } from '@/lib/routes';

const AllProducts = ({
  products,
  categories,
  showViewAllButton = true,
  maxProducts = 6,
}: {
  products: CatalogProduct[];
  categories: CatalogCategory[];
  showViewAllButton?: boolean;
  maxProducts?: number | null;
}) => {
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

  const filterOptions = ['All', ...categories.map((category) => category.name)];

  const filteredProducts = products.filter(product =>
    filter === 'All' || product.category === filter
  ).sort((a, b) => {
    if (sort === 'price-asc') {
      return a.price - b.price;
    } else if (sort === 'price-desc') {
      return b.price - a.price;
    }
    return 0;
  });
  const visibleProducts =
    maxProducts === null ? filteredProducts : filteredProducts.slice(0, 10);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-left">All Products</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {filterOptions.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`rounded-lg px-4 py-2 ${filter === category ? 'bg-primary-500 text-white' : 'bg-gray-200 text-black'}`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-4 flex justify-end">
            <div className="relative w-fit" ref={sortRef}>
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
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
          {visibleProducts.map((product, index) => {
            const hideOnMobile = maxProducts !== null && index >= maxProducts;

            return (
              <div key={product.id} className={hideOnMobile ? 'hidden md:block' : ''}>
                <ProductCard
                  product={{
                    id: product.id,
                    name: product.name,
                    slug: product.slug,
                    href: product.href,
                    price: product.price,
                    imageSrc: product.imageSrc,
                  }}
                />
              </div>
            );
          })}
        </div>
        {showViewAllButton && (
          <div className="mt-8 text-center">
            <Link
              href={routes.products}
              className="inline-flex rounded-lg border border-primary-300 px-5 py-2.5 text-sm font-medium text-primary-700 hover:bg-primary-50"
            >
              View All Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
