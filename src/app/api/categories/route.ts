import { NextResponse } from "next/server";
import { getCatalogCategories } from "@/features/catalog/services/catalog.service";

export async function GET() {
  try {
    const categories = await getCatalogCategories();
    return NextResponse.json({ data: categories });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to load categories." }, { status: 500 });
  }
}
