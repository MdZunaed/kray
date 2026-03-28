import { siteConfig } from '@/config/site';
import CategoryCard from '../ui/CategoryCard';

const categories = [
  { name: 'Electronics', href: '/categories/electronics', imageSrc: siteConfig.placeholderImage },
  { name: 'Clothing', href: '/categories/clothing', imageSrc: siteConfig.placeholderImage },
  { name: 'Books', href: '/categories/books', imageSrc: siteConfig.placeholderImage },
  { name: 'Home & Kitchen', href: '/categories/home-kitchen', imageSrc: siteConfig.placeholderImage },
  { name: 'Sports', href: '/categories/sports', imageSrc: siteConfig.placeholderImage },
  { name: 'Toys', href: '/categories/toys', imageSrc: siteConfig.placeholderImage },
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
