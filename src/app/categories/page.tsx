import Link from 'next/link';

const categories = [
  { name: 'Electronics', href: '/categories/electronics' },
  { name: 'Clothing', href: '/categories/clothing' },
  { name: 'Books', href: '/categories/books' },
  { name: 'Home & Kitchen', href: '/categories/home-kitchen' },
  { name: 'Sports', href: '/categories/sports' },
  { name: 'Toys', href: '/categories/toys' },
];

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-black">All Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <Link key={category.name} href={category.href} className="text-center p-8 border rounded-lg shadow-md hover:shadow-lg hover:border-primary-500 transition-shadow">
            <span className="text-xl font-semibold text-black">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
