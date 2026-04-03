import { getCatalogCategories, getFeaturedProducts, getLatestProducts, getCatalogProducts } from "@/features/catalog/services/catalog.service";
import AllProducts from "@/components/sections/AllProducts";
import Carousel from "@/components/sections/Carousel";
import Categories from "@/components/sections/Categories";
import CategorizedProducts from "@/components/sections/CategorizedProducts";

export default async function Home() {
  const [categories, featuredProducts, latestProducts, allProducts] = await Promise.all([
    getCatalogCategories(),
    getFeaturedProducts(4),
    getLatestProducts(4),
    getCatalogProducts(),
  ]);

  return (
    <div>
      <Carousel />
      <Categories categories={categories} />
      <CategorizedProducts categoryName="Featured Products" products={featuredProducts} />
      <CategorizedProducts categoryName="Most Popular" products={latestProducts} />
      <AllProducts products={allProducts} categories={categories} />
    </div>
  );
}


