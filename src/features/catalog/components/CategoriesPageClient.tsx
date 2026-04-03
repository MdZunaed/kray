"use client";

import { useState } from "react";
import ProductCard from "@/components/ui/ProductCard";
import type { CatalogCategory, CatalogProduct } from "../types/catalog";

export default function CategoriesPageClient({
  categories,
  products,
}: {
  categories: CatalogCategory[];
  products: CatalogProduct[];
}) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sort, setSort] = useState("default");

  const categoryOptions = [{ name: "All", slug: "all" }, ...categories.map(({ name, slug }) => ({ name, slug }))];

  const filteredProducts = products
    .filter((product) => selectedCategory === "all" || product.categorySlug === selectedCategory)
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      return 0;
    });

  const pageTitle = categoryOptions.find((category) => category.slug === selectedCategory)?.name ?? "All";

  return (
    <div className="bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <aside className="hidden lg:col-span-1 lg:block">
            <div className="rounded-2xl border border-primary-200 bg-white p-5 shadow-sm">
              <h2 className="text-2xl font-bold text-primary-900">Categories</h2>
              <p className="mt-1 text-sm text-gray-600">Filter products by category.</p>
              <nav className="mt-5 flex flex-col space-y-2">
                {categoryOptions.map((category) => (
                  <button
                    key={category.slug}
                    onClick={() => setSelectedCategory(category.slug)}
                    className={`rounded-lg px-3 py-2 text-left text-base transition-colors ${
                      selectedCategory === category.slug
                        ? "bg-primary-100 font-semibold text-primary-800"
                        : "text-gray-700 hover:bg-primary-50 hover:text-primary-700"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          <main className="lg:col-span-3">
            <div className="rounded-2xl border border-primary-100 bg-white p-6 shadow-sm md:p-8">
              <div className="mb-5 flex flex-wrap gap-2 lg:hidden">
                {categoryOptions.map((category) => (
                  <button
                    key={`mobile-${category.slug}`}
                    onClick={() => setSelectedCategory(category.slug)}
                    className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                      selectedCategory === category.slug
                        ? "bg-primary-500 text-white"
                        : "border border-primary-200 text-primary-800 hover:bg-primary-50"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h1 className="text-3xl font-bold text-primary-900">{pageTitle}</h1>
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

              <div className="grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={{
                      id: product.id,
                      name: product.name,
                      slug: product.slug,
                      href: product.href,
                      price: product.price,
                      imageSrc: product.imageSrc,
                    }}
                  />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
