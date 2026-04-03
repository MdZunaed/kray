import type { CatalogProduct } from '@/features/catalog/types/catalog';
import ProductCard from '../ui/ProductCard';
import { routes } from '@/lib/routes';
import Link from 'next/link';

const CategorizedProducts = ({
  categoryName,
  products,
}: {
  categoryName: string;
  products: CatalogProduct[];
}) => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">{categoryName}</h2>
          <Link
            href={routes.products}
            className="rounded-lg border border-primary-300 px-4 py-2 text-sm font-medium text-primary-700 hover:bg-primary-50"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
          {products.map((product) => (
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
    </div>
  );
};

export default CategorizedProducts;
