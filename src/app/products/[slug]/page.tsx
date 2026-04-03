import Link from 'next/link';
import ProductDetailsClient from '@/features/catalog/components/ProductDetailsClient';
import { getProductBySlug, getRelatedProducts } from '@/features/catalog/services/catalog.service';
import { getParamSlug, routes } from '@/lib/routes';

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const productSlug = getParamSlug(slug);
    const [product, relatedProducts] = await Promise.all([
        getProductBySlug(productSlug),
        getRelatedProducts(productSlug),
    ]);

    if (!product) {
        return (
            <div className="bg-gradient-to-b from-primary-50 to-white">
                <div className="container mx-auto px-4 py-14">
                    <div className="mx-auto max-w-xl rounded-2xl border border-primary-200 bg-white p-8 text-center shadow-sm">
                        <h1 className="text-2xl font-bold text-primary-900">Product not found</h1>
                        <p className="mt-2 text-gray-600">This product may have been moved or removed.</p>
                        <Link href={routes.products} className="mt-6 inline-block rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-700">
                            Back to Products
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return <ProductDetailsClient product={product} relatedProducts={relatedProducts} />;
}
