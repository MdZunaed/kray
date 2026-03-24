"use client";

import { useState } from 'react';
import { siteConfig } from '@/config/site';
import ProductCard from '../ui/ProductCard';

const allProducts = [
  { id: 1, name: 'Wireless Mouse', category: 'Electronics', price: 25.00, imageSrc: siteConfig.placeholderImage },
  { id: 2, name: 'Mechanical Keyboard', category: 'Electronics', price: 85.00, imageSrc: siteConfig.placeholderImage },
  { id: 3, name: 'T-Shirt', category: 'Clothing', price: 15.00, imageSrc: siteConfig.placeholderImage },
  { id: 4, name: 'Jeans', category: 'Clothing', price: 45.00, imageSrc: siteConfig.placeholderImage },
  { id: 5, name: 'Novel', category: 'Books', price: 12.00, imageSrc: siteConfig.placeholderImage },
  { id: 6, name: 'Cookbook', category: 'Books', price: 22.00, imageSrc: siteConfig.placeholderImage },
];

const categories = ['All', 'Electronics', 'Clothing', 'Books'];

const AllProducts = () => {
  const [filter, setFilter] = useState('All');

  const filteredProducts = allProducts.filter(product => 
    filter === 'All' || product.category === filter
  );

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">All Products</h2>
        <div className="flex justify-center mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 mx-2 rounded-lg ${filter === category ? 'bg-primary-500 text-white' : 'bg-gray-200 text-black'}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={{...product, href: `/products/${product.id}`}} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
