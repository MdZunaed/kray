import CategoriesPageClient from "@/features/catalog/components/CategoriesPageClient";
import { getCatalogPageData } from "@/features/catalog/services/catalog.service";

export default async function CategoriesPage() {
  const { categories, products } = await getCatalogPageData();
  return <CategoriesPageClient categories={categories} products={products} />;
}
