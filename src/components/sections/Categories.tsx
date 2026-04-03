import { siteConfig } from '@/config/site';
import CategoryCard from '../ui/CategoryCard';
import { routes } from '@/lib/routes';
import Link from 'next/link';

const categories = [
  { name: 'Electronics', href: routes.category('electronics'), imageSrc: siteConfig.placeholderImage },
  { name: 'Clothing', href: routes.category('clothing'), imageSrc: siteConfig.placeholderImage },
  { name: 'Books', href: routes.category('books'), imageSrc: siteConfig.placeholderImage },
  { name: 'Home & Kitchen', href: routes.category('home-kitchen'), imageSrc: siteConfig.placeholderImage },
  { name: 'Sports', href: routes.category('sports'), imageSrc: siteConfig.placeholderImage },
  { name: 'Toys', href: routes.category('toys'), imageSrc: siteConfig.placeholderImage },
];

const Categories = () => {
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
            <CategoryCard key={category.name} category={category} />
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
