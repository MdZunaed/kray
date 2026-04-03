import "server-only";

import { prisma } from "@/lib/prisma";
import { sampleProducts } from "@/features/catalog/data/sampleCatalog";
import type { CatalogProduct } from "@/features/catalog/types/catalog";
import { routes } from "@/lib/routes";

const mapProduct = (product: {
  id: string;
  name: string;
  slug: string;
  shortDescription: string | null;
  description: string | null;
  price: { toNumber: () => number };
  status: string;
  isFeatured: boolean;
  stock: number;
  thumbnail: string | null;
  category: { name: string; slug: string };
}): CatalogProduct => ({
  id: product.id,
  name: product.name,
  slug: product.slug,
  category: product.category.name,
  categorySlug: product.category.slug,
  href: routes.product(product.slug),
  price: product.price.toNumber(),
  imageSrc: product.thumbnail ?? sampleProducts[0]?.imageSrc ?? "",
  shortDescription: product.shortDescription ?? undefined,
  description: product.description ?? undefined,
  isFeatured: product.isFeatured,
  stock: product.stock,
});

export async function getAllProducts(): Promise<CatalogProduct[]> {
  if (!process.env.DATABASE_URL) {
    return sampleProducts;
  }

  try {
    const products = await prisma.product.findMany({
      where: { status: "ACTIVE" },
      include: {
        category: {
          select: {
            name: true,
            slug: true,
          },
        },
      },
      orderBy: [{ isFeatured: "desc" }, { createdAt: "desc" }],
    });

    if (products.length === 0) {
      return sampleProducts;
    }

    return products.map(mapProduct);
  } catch {
    return sampleProducts;
  }
}
