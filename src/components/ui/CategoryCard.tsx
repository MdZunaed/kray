import Image from 'next/image';
import Link from 'next/link';

export type Category = {
  name: string;
  href: string;
  imageSrc: string;
};

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <Link
      key={category.name}
      href={category.href}
      className="group flex min-h-40 flex-col items-center rounded-2xl border border-border bg-surface px-3 py-4 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-md"
    >
      <div className="h-20 w-20 overflow-hidden rounded-full bg-surface-muted group-hover:opacity-75">
        <Image
          src={category.imageSrc}
          alt={category.name}
          className="w-full h-full object-center object-cover"
          width={80}
          height={80}
        />
      </div>
      <h3 className="mt-3 line-clamp-2 text-sm font-semibold text-heading sm:text-base">{category.name}</h3>
    </Link>
  );
};

export default CategoryCard;
