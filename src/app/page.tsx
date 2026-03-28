import AllProducts from "@/components/sections/AllProducts";
import Carousel from "@/components/sections/Carousel";
import Categories from "@/components/sections/Categories";
import CategorizedProducts from "@/components/sections/CategorizedProducts";

export default function Home() {
  return (
    <div>
      <Carousel />
      <Categories />
      <CategorizedProducts categoryName="Featured Products" />
      <CategorizedProducts categoryName="Most Popular" />
      <AllProducts />
    </div>
  );
}


