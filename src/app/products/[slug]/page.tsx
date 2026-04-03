"use client";

import { use, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, ShoppingCart, Star, Truck } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import { siteConfig } from '@/config/site';
import { useCart } from '@/features/cart/providers/CartProvider';
import { useToast } from '@/features/notifications/providers/ToastProvider';
import { getParamSlug, routes } from '@/lib/routes';
import QuantityStepper from '@/components/ui/QuantityStepper';

const products = [
    { id: 1, slug: 'wireless-mouse', name: 'Wireless Mouse', category: 'electronics', price: 25.00, imageSrc: siteConfig.placeholderImage, description: 'A comfortable and responsive wireless mouse built for long sessions and smooth tracking.' },
    { id: 2, slug: 'mechanical-keyboard', name: 'Mechanical Keyboard', category: 'electronics', price: 85.00, imageSrc: siteConfig.placeholderImage, description: 'A durable and tactile mechanical keyboard with responsive switches for work and gaming.' },
    { id: 3, slug: 't-shirt', name: 'T-Shirt', category: 'clothing', price: 15.00, imageSrc: siteConfig.placeholderImage, description: 'A soft and breathable cotton t-shirt designed for all-day comfort.' },
];

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const [quantity, setQuantity] = useState(1);
    const { addItem } = useCart();
    const { showToast } = useToast();
    const { slug } = use(params);
    const productSlug = getParamSlug(slug);

    const product = products.find((p) => p.slug === productSlug);
    const relatedProducts = products.filter((p) => p.category === product?.category && p.slug !== product?.slug);

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

    return (
        <div className="bg-gradient-to-b from-primary-50 via-white to-secondary-50/40">
            <div className="container mx-auto px-4 py-8">
                <div className="mb-6 flex items-center gap-2 text-sm text-gray-600">
                    <Link href={routes.home} className="hover:text-primary-700">Home</Link>
                    <span>/</span>
                    <Link href={routes.categories} className="hover:text-primary-700">Categories</Link>
                    <span>/</span>
                    <Link href={routes.category(product.category)} className="capitalize hover:text-primary-700">{product.category}</Link>
                    <span>/</span>
                    <span className="font-medium text-primary-900">{product.name}</span>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
                    <div className="rounded-2xl border border-primary-200 bg-white p-4 shadow-sm lg:col-span-3">
                        <div className="relative overflow-hidden rounded-xl bg-gray-100">
                            <Image src={product.imageSrc} alt={product.name} width={900} height={700} className="h-[360px] w-full object-cover md:h-[480px]" />
                        </div>
                        <div className="mt-4 grid grid-cols-3 gap-3">
                            {[1, 2, 3].map((index) => (
                                <button key={index} type="button" className="overflow-hidden rounded-lg border border-primary-200 bg-gray-100">
                                    <Image src={product.imageSrc} alt={`${product.name} preview ${index}`} width={300} height={220} className="h-24 w-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl border border-primary-200 bg-white p-6 shadow-sm lg:col-span-2">
                        <p className="inline-flex rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary-800">
                            {product.category}
                        </p>
                        <h1 className="mt-3 text-3xl font-bold text-primary-950">{product.name}</h1>
                        <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
                            <div className="flex items-center gap-1 text-secondary-500">
                                <Star className="h-4 w-4 fill-current" />
                                <Star className="h-4 w-4 fill-current" />
                                <Star className="h-4 w-4 fill-current" />
                                <Star className="h-4 w-4 fill-current" />
                                <Star className="h-4 w-4" />
                            </div>
                            <span>4.0 rating</span>
                        </div>
                        <p className="mt-4 text-gray-700">{product.description}</p>

                        <p className="mt-6 text-3xl font-bold text-primary-800">
                            {siteConfig.currency}{product.price.toFixed(2)}
                        </p>

                        <div className="mt-6">
                            <label htmlFor="quantity" className="text-sm font-medium text-gray-700">Quantity</label>
                            <div className="mt-2">
                                <QuantityStepper
                                    value={quantity}
                                    onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
                                    onIncrease={() => setQuantity((q) => q + 1)}
                                />
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <button
                                onClick={() => {
                                    addItem({
                                        id: product.id,
                                        slug: product.slug,
                                        href: routes.product(product.slug),
                                        name: product.name,
                                        price: product.price,
                                        imageSrc: product.imageSrc,
                                    }, quantity);
                                    showToast({
                                        title: `${product.name} added to cart`,
                                        description: quantity > 1 ? `${quantity} items are ready in your cart.` : "You can continue shopping or head to checkout later.",
                                        status: "success",
                                    });
                                }}
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-5 py-3 font-medium text-white hover:bg-primary-700"
                            >
                                <ShoppingCart className="h-4 w-4" />
                                Add to Cart
                            </button>
                            <Link
                                href={`${routes.checkout}?source=buy-now&slug=${product.slug}&quantity=${quantity}`}
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-100 border border-primary-300 px-5 py-3 font-medium text-primary-800 hover:bg-primary-200"
                            >
                                Buy Now
                            </Link>
                        </div>

                        <div className="mt-6 space-y-3 rounded-xl border border-primary-100 bg-primary-50/40 p-4">
                            <p className="flex items-center gap-2 text-sm text-gray-700">
                                <Truck className="h-4 w-4 text-primary-700" />
                                Free delivery over {siteConfig.currency}50
                            </p>
                            <p className="flex items-center gap-2 text-sm text-gray-700">
                                <ShieldCheck className="h-4 w-4 text-primary-700" />
                                7-day return and secure checkout
                            </p>
                        </div>
                    </div>
                </div>

                <section className="mt-10">
                    <h2 className="text-2xl font-bold text-primary-900">Related Products</h2>
                    <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-5 md:gap-6">
                        {relatedProducts.map((related) => (
                            <ProductCard
                                key={related.id}
                                product={{
                                    id: related.id,
                                    name: related.name,
                                    slug: related.slug,
                                    href: routes.product(related.slug),
                                    price: related.price,
                                    imageSrc: related.imageSrc,
                                }}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
