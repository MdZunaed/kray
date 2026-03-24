import Link from 'next/link';

const categories = [
  { name: 'Electronics', href: '/categories/electronics' },
  { name: 'Clothing', href: '/categories/clothing' },
  { name: 'Books', href: '/categories/books' },
  { name: 'Home & Kitchen', href: '/categories/home-kitchen' },
  { name: 'Sports', href: '/categories/sports' },
  { name: 'Toys', href: '/categories/toys' },
];

const Categories = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((category) => (
            <Link key={category.name} href={category.href} className="text-center p-4 border rounded-lg shadow-md hover:shadow-lg hover:border-primary-500 transition-shadow">
              <span className="text-lg font-semibold text-black">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
