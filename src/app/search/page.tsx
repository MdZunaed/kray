import { Suspense } from "react";
import SearchPageClient from "@/features/catalog/components/SearchPageClient";
import { getCatalogProducts } from "@/features/catalog/services/catalog.service";

export default async function SearchPage() {
  const products = await getCatalogProducts();

  return (
    <Suspense
      fallback={
        <div className="bg-gradient-to-b from-primary-50 to-white">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-primary-900">Search Products</h1>
            <p className="mt-2 text-gray-600">Loading search...</p>
          </div>
        </div>
      }
    >
      <SearchPageClient products={products} />
    </Suspense>
  );
}
