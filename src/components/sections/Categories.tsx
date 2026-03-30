import { siteConfig } from '@/config/site';
import CategoryCard from '../ui/CategoryCard';
import { routes } from '@/lib/routes';

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
        <h2 className="text-3xl font-bold text-center mb-8 text-black">Shop by Category</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
