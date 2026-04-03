import { NextResponse } from "next/server";
import { getProductBySlug, getRelatedProducts } from "@/features/catalog/services/catalog.service";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product) {
      return NextResponse.json({ message: "Product not found." }, { status: 404 });
    }

    const related = await getRelatedProducts(slug);

    return NextResponse.json({
      data: {
        product,
        related,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to load product." }, { status: 500 });
  }
}
