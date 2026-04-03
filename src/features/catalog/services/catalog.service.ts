import "server-only";

import type { CatalogCategory, CatalogProduct } from "../types/catalog";
import { getAllCategories } from "@/repositories/category/category.repository";
import { getAllProducts } from "@/repositories/product/product.repository";

export async function getCatalogCategories() {
  return getAllCategories();
}

export async function getCatalogProducts() {
  return getAllProducts();
}

export async function getFeaturedProducts(limit = 4): Promise<CatalogProduct[]> {
  const products = await getAllProducts();
  const featured = products.filter((product) => product.isFeatured);

  return (featured.length > 0 ? featured : products).slice(0, limit);
}

export async function getLatestProducts(limit = 4): Promise<CatalogProduct[]> {
  const products = await getAllProducts();
  return products.slice(0, limit);
}

export async function getProductBySlug(slug: string): Promise<CatalogProduct | null> {
  const products = await getAllProducts();
  return products.find((product) => product.slug === slug) ?? null;
}

export async function getProductsByCategory(slug: string): Promise<CatalogProduct[]> {
  const products = await getAllProducts();
  return products.filter((product) => product.categorySlug === slug);
}

export async function getRelatedProducts(slug: string, limit = 5): Promise<CatalogProduct[]> {
  const products = await getAllProducts();
  const currentProduct = products.find((product) => product.slug === slug);

  if (!currentProduct) {
    return [];
  }

  return products
    .filter((product) => product.categorySlug === currentProduct.categorySlug && product.slug !== slug)
    .slice(0, limit);
}

export async function searchCatalogProducts(query: string): Promise<CatalogProduct[]> {
  const products = await getAllProducts();
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return products;
  }

  return products.filter((product) =>
    product.name.toLowerCase().includes(normalizedQuery) ||
    product.category.toLowerCase().includes(normalizedQuery)
  );
}

export async function getCatalogPageData(): Promise<{
  categories: CatalogCategory[];
  products: CatalogProduct[];
}> {
  const [categories, products] = await Promise.all([
    getAllCategories(),
    getAllProducts(),
  ]);

  return { categories, products };
}
