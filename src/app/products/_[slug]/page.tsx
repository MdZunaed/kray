"use client";

import { useState } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { getParamSlug } from '@/lib/routes';

const products = [
    { id: 1, slug: 'wireless-mouse', name: 'Wireless Mouse', category: 'Electronics', price: 25.00, imageSrc: siteConfig.placeholderImage, description: 'A comfortable and responsive wireless mouse.' },
    { id: 2, slug: 'mechanical-keyboard', name: 'Mechanical Keyboard', category: 'Electronics', price: 85.00, imageSrc: siteConfig.placeholderImage, description: 'A durable and tactile mechanical keyboard.' },
    { id: 3, slug: 't-shirt', name: 'T-Shirt', category: 'Clothing', price: 15.00, imageSrc: siteConfig.placeholderImage, description: 'A soft and comfortable cotton t-shirt.' },
];

export default function ProductPage({ params }: { params: { slug: string } }) {
    const [quantity, setQuantity] = useState(1);
    const productSlug = getParamSlug(params.slug);

    // In a real app, you'd fetch the product by slug
    const product = products.find((p) => p.slug === productSlug);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <Image src={product.imageSrc} alt={product.name} width={500} height={500} className="rounded-lg" />
                </div>
                <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                    <h1 className="text-3xl font-bold text-black">{product.name}</h1>
                    <p className="text-black mt-2">{product.description}</p>
                    <p className="text-2xl font-bold text-primary-500 mt-4">{siteConfig.currency}{product.price.toFixed(2)}</p>
                    <div className="mt-4">
                        <label htmlFor="quantity" className="mr-2 text-black">Quantity:</label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                            className="border p-2 rounded w-20"
                        />
                    </div>
                    <button className="mt-4 bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
