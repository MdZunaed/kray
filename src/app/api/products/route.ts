import { NextResponse } from "next/server";
import {
  getCatalogProducts,
  getFeaturedProducts,
  searchCatalogProducts,
} from "@/features/catalog/services/catalog.service";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q")?.trim() ?? "";
    const category = searchParams.get("category")?.trim() ?? "";
    const featured = searchParams.get("featured") === "true";
    const limitParam = searchParams.get("limit");
    const limit = limitParam ? Number(limitParam) : null;

    let products = await getCatalogProducts();

    if (query) {
      products = await searchCatalogProducts(query);
    }

    if (category) {
      products = products.filter((product) => product.categorySlug === category);
    }

    if (featured) {
      products = products.filter((product) => product.isFeatured);
    }

    if (limit !== null && Number.isFinite(limit) && limit > 0) {
      products = products.slice(0, limit);
    }

    if (featured && !query && !category && limit !== null && Number.isFinite(limit) && limit > 0) {
      products = await getFeaturedProducts(limit);
    }

    return NextResponse.json({ data: products });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to load products." }, { status: 500 });
  }
}
