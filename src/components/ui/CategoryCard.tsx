import Image from 'next/image';
import Link from 'next/link';

export type Category = {
  name: string;
  href: string;
  imageSrc: string;
};

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <Link key={category.name} href={category.href} className="group text-center p-4 rounded-lg border border-transparent hover:border-primary-500 transition-shadow">
      <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full overflow-hidden group-hover:opacity-75">
        <Image
          src={category.imageSrc}
          alt={category.name}
          className="w-full h-full object-center object-cover"
          width={80}
          height={80}
        />
      </div>
      <h3 className="mt-2 text-base font-semibold text-black">{category.name}</h3>
    </Link>
  );
};

export default CategoryCard;
