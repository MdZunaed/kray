import AllProducts from '@/components/sections/AllProducts';

export default function ProductsPage() {
  return (
    <div>
      <AllProducts showViewAllButton={false} maxProducts={null} />
    </div>
  );
}
