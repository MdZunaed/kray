import { siteConfig } from '@/config/site';
import ProductCard from '../ui/ProductCard';
import { routes } from '@/lib/routes';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Wireless Mouse',
    href: routes.product('wireless-mouse'),
    price: 25.00,
    imageSrc: siteConfig.placeholderImage,
  },
  {
    id: 2,
    name: 'Mechanical Keyboard',
    href: routes.product('mechanical-keyboard'),
    price: 85.00,
    imageSrc: siteConfig.placeholderImage,
  },
  {
    id: 3,
    name: '4K Monitor',
    href: routes.product('4k-monitor'),
    price: 350.00,
    imageSrc: siteConfig.placeholderImage,
  },
  {
    id: 4,
    name: 'Webcam',
    href: routes.product('webcam'),
    price: 55.00,
    imageSrc: siteConfig.placeholderImage,
  },
];

const CategorizedProducts = ({ categoryName }: { categoryName: string }) => {
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
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorizedProducts;
