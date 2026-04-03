import CategoryPageClient from "@/features/catalog/components/CategoryPageClient";
import { getCatalogCategories, getProductsByCategory } from "@/features/catalog/services/catalog.service";
import { getParamSlug } from '@/lib/routes';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const activeCategorySlug = getParamSlug(slug);
  const [categories, products] = await Promise.all([
    getCatalogCategories(),
    getProductsByCategory(activeCategorySlug),
  ]);

  return <CategoryPageClient categories={categories} products={products} activeCategorySlug={activeCategorySlug} />;
}
