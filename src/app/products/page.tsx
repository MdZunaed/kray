import AllProducts from '@/components/sections/AllProducts';
import { getCatalogPageData } from '@/features/catalog/services/catalog.service';

export default async function ProductsPage() {
  const { categories, products } = await getCatalogPageData();

  return (
    <div>
      <AllProducts products={products} categories={categories} showViewAllButton={false} maxProducts={null} />
    </div>
  );
}
