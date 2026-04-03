export type CatalogCategory = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  imageSrc: string;
  isActive: boolean;
  sortOrder: number;
};

export type CatalogProduct = {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  href: string;
  price: number;
  imageSrc: string;
  description?: string;
  shortDescription?: string;
  isFeatured?: boolean;
  stock?: number;
};
