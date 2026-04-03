import "server-only";

import { prisma } from "@/lib/prisma";
import { sampleCategories } from "@/features/catalog/data/sampleCatalog";
import type { CatalogCategory } from "@/features/catalog/types/catalog";

const mapCategory = (category: {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image: string | null;
  isActive: boolean;
  sortOrder: number;
}): CatalogCategory => ({
  id: category.id,
  name: category.name,
  slug: category.slug,
  description: category.description ?? undefined,
  imageSrc: category.image ?? sampleCategories[0]?.imageSrc ?? "",
  isActive: category.isActive,
  sortOrder: category.sortOrder,
});

export async function getAllCategories(): Promise<CatalogCategory[]> {
  if (!process.env.DATABASE_URL) {
    return sampleCategories;
  }

  try {
    const categories = await prisma.category.findMany({
      where: { isActive: true },
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
    });

    if (categories.length === 0) {
      return sampleCategories;
    }

    return categories.map(mapCategory);
  } catch {
    return sampleCategories;
  }
}
