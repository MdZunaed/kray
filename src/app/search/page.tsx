"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import { siteConfig } from "@/config/site";
import { routes } from "@/lib/routes";

const allProducts = [
  { id: 1, name: "Wireless Mouse", category: "electronics", price: 25.0, imageSrc: siteConfig.placeholderImage, slug: "wireless-mouse" },
  { id: 2, name: "Mechanical Keyboard", category: "electronics", price: 85.0, imageSrc: siteConfig.placeholderImage, slug: "mechanical-keyboard" },
  { id: 3, name: "T-Shirt", category: "clothing", price: 15.0, imageSrc: siteConfig.placeholderImage, slug: "t-shirt" },
  { id: 4, name: "Jeans", category: "clothing", price: 45.0, imageSrc: siteConfig.placeholderImage, slug: "jeans" },
  { id: 5, name: "Novel", category: "books", price: 12.0, imageSrc: siteConfig.placeholderImage, slug: "novel" },
  { id: 6, name: "Cookbook", category: "books", price: 22.0, imageSrc: siteConfig.placeholderImage, slug: "cookbook" },
  { id: 7, name: "4K Monitor", category: "electronics", price: 350.0, imageSrc: siteConfig.placeholderImage, slug: "4k-monitor" },
  { id: 8, name: "Webcam", category: "electronics", price: 55.0, imageSrc: siteConfig.placeholderImage, slug: "webcam" },
];

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initialQuery);

  const normalizedQuery = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!normalizedQuery) return allProducts;
    return allProducts.filter((product) =>
      product.name.toLowerCase().includes(normalizedQuery) ||
      product.category.toLowerCase().includes(normalizedQuery)
    );
  }, [normalizedQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const next = query.trim();
    if (!next) {
      router.push(routes.search);
      return;
    }
    router.push(`${routes.search}?q=${encodeURIComponent(next)}`);
  };

  return (
    <div className="bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary-900">Search Products</h1>
        <p className="mt-2 text-gray-600">Find items by name or category.</p>

        <form onSubmit={handleSearch} className="mt-6 flex gap-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for mouse, keyboard, clothing..."
            className="w-full rounded-lg border border-primary-200 px-4 py-2.5 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-primary-700"
          >
            <Search className="h-4 w-4" />
            Search
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600">
          {normalizedQuery ? `Showing ${results.length} result(s) for "${query.trim()}".` : `Showing ${results.length} products.`}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 md:gap-8">
          {results.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                id: product.id,
                name: product.name,
                href: routes.product(product.slug),
                price: product.price,
                imageSrc: product.imageSrc,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
