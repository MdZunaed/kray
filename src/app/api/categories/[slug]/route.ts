import { NextResponse } from "next/server";
import { getCategoryBySlug, getProductsByCategory } from "@/features/catalog/services/catalog.service";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const [category, products] = await Promise.all([
      getCategoryBySlug(slug),
      getProductsByCategory(slug),
    ]);

    if (!category) {
      return NextResponse.json({ message: "Category not found." }, { status: 404 });
    }

    return NextResponse.json({
      data: {
        category,
        products,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to load category." }, { status: 500 });
  }
}
