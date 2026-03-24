import { siteConfig } from '@/config/site';
import ProductCard from '../ui/ProductCard';

const products = [
  {
    id: 1,
    name: 'Wireless Mouse',
    href: '/products/wireless-mouse',
    price: 25.00,
    imageSrc: siteConfig.placeholderImage,
  },
  {
    id: 2,
    name: 'Mechanical Keyboard',
    href: '/products/mechanical-keyboard',
    price: 85.00,
    imageSrc: siteConfig.placeholderImage,
  },
  {
    id: 3,
    name: '4K Monitor',
    href: '/products/4k-monitor',
    price: 350.00,
    imageSrc: siteConfig.placeholderImage,
  },
  {
    id: 4,
    name: 'Webcam',
    href: '/products/webcam',
    price: 55.00,
    imageSrc: siteConfig.placeholderImage,
  },
];

const CategorizedProducts = ({ categoryName }: { categoryName: string }) => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{categoryName}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorizedProducts;
