import { siteConfig } from "@/config/site";

export default function CouponPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">My Coupons</h1>
            <div className="space-y-4">
                <div className="border p-4 rounded-lg flex justify-between items-center bg-green-100 border-green-200">
                    <div>
                        <h2 className="text-xl font-bold">10% OFF</h2>
                        <p className="text-gray-600">On your next purchase</p>
                    </div>
                    <button className="text-green-500 hover:text-green-700">Apply</button>
                </div>
                <div className="border p-4 rounded-lg flex justify-between items-center bg-yellow-100 border-yellow-200">
                    <div>
                        <h2 className="text-xl font-bold">{siteConfig.currency}5 OFF</h2>
                        <p className="text-gray-600">On orders over {siteConfig.currency}50</p>
                    </div>
                    <button className="text-yellow-500 hover:text-yellow-700">Apply</button>
                </div>
            </div>
        </div>
    );
}
