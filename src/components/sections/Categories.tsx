import type { CatalogCategory } from '@/features/catalog/types/catalog';
import CategoryCard from '../ui/CategoryCard';
import { routes } from '@/lib/routes';
import Link from 'next/link';

const Categories = ({ categories }: { categories: CatalogCategory[] }) => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-black">Shop by Category</h2>
          <Link
            href={routes.categories}
            className="hidden rounded-lg border border-primary-300 px-4 py-2 text-sm font-medium text-primary-700 hover:bg-primary-50 sm:inline-flex"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-6 xl:grid-cols-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={{
                name: category.name,
                href: routes.category(category.slug),
                imageSrc: category.imageSrc,
              }}
            />
          ))}
        </div>
        <div className="mt-4 flex justify-center sm:hidden">
          <Link
            href={routes.categories}
            className="inline-flex rounded-lg border border-primary-300 px-3 py-1.5 text-sm font-medium text-primary-700 hover:bg-primary-50"
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
